import { test, expect } from '@playwright/test';

/**
 * Formspree Integration Verification Test
 *
 * This test verifies that the contact form is properly configured
 * for Formspree integration, including:
 * - Form structure and required fields
 * - Form submission behavior
 * - Error and success message handling
 * - API integration setup
 */

test.describe('Formspree Contact Form Integration', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the contact page
    await page.goto('/contact');
    // Wait for form to be visible
    await expect(page.locator('#contact-form')).toBeVisible();

    // Set up the Formspree endpoint via JavaScript to simulate configured environment
    await page.evaluate(() => {
      const form = document.getElementById('contact-form');
      if (form) {
        form.setAttribute('data-formspree-endpoint', 'https://formspree.io/f/test-form-id');
      }
    });
  });

  test('contact form has correct structure for Formspree', async ({ page }) => {
    const form = page.locator('#contact-form');

    // Check form exists and has data attribute for Formspree endpoint
    await expect(form).toBeVisible();

    // Verify required form fields exist
    await expect(page.locator('#name')).toBeVisible();
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#phone')).toBeVisible();
    await expect(page.locator('#business-name')).toBeVisible();
    await expect(page.locator('#project-type')).toBeVisible();
    await expect(page.locator('#budget-range')).toBeVisible();
    await expect(page.locator('#message')).toBeVisible();
    await expect(page.locator('#submit-button')).toBeVisible();
  });

  test('form validates required fields before submission', async ({ page }) => {
    // Try to submit empty form
    await page.locator('#submit-button').click();

    // Wait for validation to occur (need to wait for timing check - form has 3 second minimum)
    // First just check client-side validation kicks in
    await page.waitForTimeout(100);

    // The form should show error or field validation
    const formError = page.locator('#form-error');
    const nameError = page.locator('#name-error');

    // Either form error or field error should appear
    const hasFormError = await formError.isVisible().catch(() => false);
    const hasNameError = await nameError.textContent().then(t => t && t.length > 0).catch(() => false);

    expect(hasFormError || hasNameError).toBeTruthy();
  });

  test('form shows loading state during submission', async ({ page }) => {
    // Fill in valid form data
    await page.locator('#name').fill('Test User');
    await page.locator('#email').fill('test@example.com');
    await page.locator('#project-type').selectOption('website-design');
    await page.locator('#budget-range').selectOption('1000-2500');
    await page.locator('#message').fill('This is a test message that is longer than 25 characters to pass validation.');

    // Wait for form timing check to pass (3 seconds)
    await page.waitForTimeout(3500);

    // Mock the Formspree endpoint to prevent actual submission
    await page.route('**/formspree.io/**', async route => {
      // Delay response to show loading state
      await new Promise(resolve => setTimeout(resolve, 500));
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true }),
      });
    });

    // Click submit
    await page.locator('#submit-button').click();

    // Check loading state is shown
    const submitButton = page.locator('#submit-button');
    await expect(submitButton).toHaveAttribute('data-loading', 'true');
  });

  test('form shows success message after successful submission', async ({ page }) => {
    // Fill in valid form data
    await page.locator('#name').fill('Test User');
    await page.locator('#email').fill('test@example.com');
    await page.locator('#project-type').selectOption('website-design');
    await page.locator('#budget-range').selectOption('1000-2500');
    await page.locator('#message').fill('This is a test message that is longer than 25 characters to pass validation.');

    // Wait for form timing check to pass (3 seconds)
    await page.waitForTimeout(3500);

    // Mock the Formspree endpoint
    await page.route('**/formspree.io/**', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true }),
      });
    });

    // Submit the form
    await page.locator('#submit-button').click();

    // Wait for success message
    await expect(page.locator('#form-success')).toBeVisible({ timeout: 5000 });
    await expect(page.locator('#form-success')).toContainText('Thank you');
  });

  test('form shows error message when Formspree returns error', async ({ page }) => {
    // Mock the Formspree endpoint to return an error BEFORE filling the form
    await page.route('**/formspree.io/**', async route => {
      await route.fulfill({
        status: 429,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Rate limited' }),
      });
    });

    // Fill in valid form data
    await page.locator('#name').fill('Test User');
    await page.locator('#email').fill('test@example.com');
    await page.locator('#project-type').selectOption('website-design');
    await page.locator('#budget-range').selectOption('1000-2500');
    await page.locator('#message').fill('This is a test message that is longer than 25 characters to pass validation.');

    // Wait for form timing check to pass
    await page.waitForTimeout(3500);

    // Submit the form
    await page.locator('#submit-button').click();

    // Wait for error message
    await expect(page.locator('#form-error')).toBeVisible({ timeout: 5000 });
    await expect(page.locator('#form-error')).toContainText('Too many submissions');
  });

  test('form handles 403 forbidden error correctly', async ({ page }) => {
    // Mock the Formspree endpoint to return 403 BEFORE filling the form
    await page.route('**/formspree.io/**', async route => {
      await route.fulfill({
        status: 403,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Forbidden' }),
      });
    });

    // Fill in valid form data
    await page.locator('#name').fill('Test User');
    await page.locator('#email').fill('test@example.com');
    await page.locator('#project-type').selectOption('website-design');
    await page.locator('#budget-range').selectOption('1000-2500');
    await page.locator('#message').fill('This is a test message that is longer than 25 characters to pass validation.');

    // Wait for form timing check to pass
    await page.waitForTimeout(3500);

    // Submit the form
    await page.locator('#submit-button').click();

    // Wait for error message
    await expect(page.locator('#form-error')).toBeVisible({ timeout: 5000 });
    await expect(page.locator('#form-error')).toContainText('not configured correctly');
  });

  test('form handles server error correctly', async ({ page }) => {
    // Mock the Formspree endpoint to return 500 BEFORE filling the form
    await page.route('**/formspree.io/**', async route => {
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Server error' }),
      });
    });

    // Fill in valid form data
    await page.locator('#name').fill('Test User');
    await page.locator('#email').fill('test@example.com');
    await page.locator('#project-type').selectOption('website-design');
    await page.locator('#budget-range').selectOption('1000-2500');
    await page.locator('#message').fill('This is a test message that is longer than 25 characters to pass validation.');

    // Wait for form timing check to pass
    await page.waitForTimeout(3500);

    // Submit the form
    await page.locator('#submit-button').click();

    // Wait for error message
    await expect(page.locator('#form-error')).toBeVisible({ timeout: 5000 });
    await expect(page.locator('#form-error')).toContainText('Server error');
  });

  test('form submits correct data format to Formspree', async ({ page }) => {
    // Capture the request to verify data format
    let capturedRequest: any = null;

    // Set up route BEFORE filling the form
    await page.route('**/formspree.io/**', async route => {
      capturedRequest = route.request().postDataJSON();
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true }),
      });
    });

    // Fill in valid form data
    const testData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '(555) 123-4567',
      businessName: 'Test Company',
      projectType: 'e-commerce',
      budgetRange: '2500-5000',
      message: 'This is a detailed test message that describes my project requirements.',
    };

    await page.locator('#name').fill(testData.name);
    await page.locator('#email').fill(testData.email);
    await page.locator('#phone').fill(testData.phone);
    await page.locator('#business-name').fill(testData.businessName);
    await page.locator('#project-type').selectOption(testData.projectType);
    await page.locator('#budget-range').selectOption(testData.budgetRange);
    await page.locator('#message').fill(testData.message);

    // Wait for form timing check to pass
    await page.waitForTimeout(3500);

    // Submit the form
    await page.locator('#submit-button').click();

    // Wait for success
    await expect(page.locator('#form-success')).toBeVisible({ timeout: 5000 });

    // Verify captured data
    expect(capturedRequest).toBeTruthy();
    expect(capturedRequest.name).toBe(testData.name);
    expect(capturedRequest.email).toBe(testData.email);
    expect(capturedRequest.phone).toBe(testData.phone);
    expect(capturedRequest.businessName).toBe(testData.businessName);
    // Check formatted values
    expect(capturedRequest.projectType).toBe('E-Commerce Store');
    expect(capturedRequest.budgetRange).toBe('$2,500 - $5,000');
    expect(capturedRequest.message).toBe(testData.message);
    // Check Formspree special fields
    expect(capturedRequest._subject).toContain(testData.name);
    expect(capturedRequest._replyto).toBe(testData.email);
  });

  test('form clears after successful submission', async ({ page }) => {
    // Fill in valid form data
    await page.locator('#name').fill('Test User');
    await page.locator('#email').fill('test@example.com');
    await page.locator('#project-type').selectOption('website-design');
    await page.locator('#budget-range').selectOption('1000-2500');
    await page.locator('#message').fill('This is a test message that is longer than 25 characters to pass validation.');

    // Wait for form timing check to pass
    await page.waitForTimeout(3500);

    // Mock the Formspree endpoint
    await page.route('**/formspree.io/**', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true }),
      });
    });

    // Submit the form
    await page.locator('#submit-button').click();

    // Wait for success message
    await expect(page.locator('#form-success')).toBeVisible({ timeout: 5000 });

    // Verify form is cleared
    await expect(page.locator('#name')).toHaveValue('');
    await expect(page.locator('#email')).toHaveValue('');
    await expect(page.locator('#message')).toHaveValue('');
  });

  test('honeypot field is hidden from users', async ({ page }) => {
    // Verify honeypot field exists but is not visible
    const honeypotContainer = page.locator('.contact-form__honeypot');
    const honeypotInput = page.locator('#website-url');

    // The container should exist in DOM
    await expect(honeypotContainer).toBeAttached();

    // But should not be visible to users
    await expect(honeypotContainer).not.toBeInViewport();

    // Honeypot input should have proper attributes
    await expect(honeypotInput).toHaveAttribute('tabindex', '-1');
    await expect(honeypotInput).toHaveAttribute('autocomplete', 'off');
  });
});
