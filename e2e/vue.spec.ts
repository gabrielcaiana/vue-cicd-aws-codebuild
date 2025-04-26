import { test, expect } from '@playwright/test';

test('verifica a navegação entre páginas', async ({ page }) => {
  // Inicia na página inicial
  await page.goto('/');
  
  // Clica no link About
  await page.click('text=About');
  
  // Verifica se navegou para a página About
  await expect(page).toHaveURL('/about');
  
  // Clica no link Home
  await page.click('text=Home');
  
  // Verifica se voltou para a página inicial
  await expect(page).toHaveURL('/');
});

test('verifica elementos da página inicial', async ({ page }) => {
  await page.goto('/');
  
  // Verifica o logo
  await expect(page.locator('img.logo')).toBeVisible();
  
  // Verifica links de navegação
  await expect(page.locator('nav')).toContainText('Home');
  await expect(page.locator('nav')).toContainText('About');
  
  // Verifica seções de documentação
  await expect(page.locator('h3:text("Documentation")')).toBeVisible(); // fiz assim pois tem outros elementos h3 com esse texto
  await expect(page.locator('text=Tooling')).toBeVisible();
  await expect(page.locator('text=Ecosystem')).toBeVisible();
  await expect(page.locator('h3:text("Community")')).toBeVisible();
});

test('verifica links externos na página inicial', async ({ page }) => {
  await page.goto('/');
  
  // Verifica links importantes
  await expect(page.getByRole('link', { name: 'Vue 3' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'official documentation' })).toBeVisible();
  await expect(page.locator('a[href="https://vite.dev/"]')).toBeVisible();
  await expect(page.locator('a[href="https://pinia.vuejs.org/"]')).toBeVisible();
  await expect(page.locator('a[href="https://router.vuejs.org/"]')).toBeVisible();
});

test('verifica responsividade do layout', async ({ page }) => {
  await page.goto('/');
  
  // Layout mobile
  await page.setViewportSize({ width: 375, height: 667 });
  await expect(page.locator('#app')).toHaveCSS('grid-template-columns', 'none');
  
  // Layout desktop
  await page.setViewportSize({ width: 1024, height: 768 });
  await expect(page.locator('#app')).toHaveCSS('grid-template-columns', '480px 480px');
});
