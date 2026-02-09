import { Component } from '@angular/core';

@Component({
  selector: 'app-shell',
  standalone: true,
  template: `
    <div class="app-shell">
      <header class="app-shell__topbar">
        <span class="app-shell__label">Top status bar</span>
        <ng-content select="[top-status]"></ng-content>
      </header>
      <div class="app-shell__body">
        <aside class="app-shell__nav">
          <span class="app-shell__label">Left navigation</span>
          <ng-content select="[left-nav]"></ng-content>
        </aside>
        <main class="app-shell__content">
          <section class="app-shell__pane app-shell__pane--primary">
            <ng-content select="[primary-pane]"></ng-content>
          </section>
          <section class="app-shell__pane app-shell__pane--secondary">
            <ng-content select="[secondary-pane]"></ng-content>
          </section>
          <section class="app-shell__pane app-shell__pane--tertiary">
            <ng-content select="[tertiary-pane]"></ng-content>
          </section>
        </main>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
      }

      .app-shell {
        display: flex;
        flex-direction: column;
        height: 100%;
        background: #0b0d12;
        color: #f4f6fb;
        border: 1px solid #202737;
        font-family: 'Inter', 'Segoe UI', sans-serif;
      }

      .app-shell__topbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.75rem 1.5rem;
        background: #141826;
        border-bottom: 1px solid #2a3247;
        gap: 1rem;
      }

      .app-shell__body {
        display: flex;
        flex: 1;
        min-height: 0;
      }

      .app-shell__nav {
        width: 240px;
        padding: 1rem;
        background: #121621;
        border-right: 1px solid #2a3247;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .app-shell__content {
        flex: 1;
        display: grid;
        grid-template-columns: 2fr 1.2fr 0.8fr;
        gap: 1rem;
        padding: 1rem;
        background: #0f131d;
      }

      .app-shell__pane {
        background: #1b2233;
        border: 1px solid #2a3247;
        border-radius: 12px;
        padding: 1rem;
        overflow: auto;
      }

      .app-shell__label {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: #8d95a7;
      }

      .app-shell__pane--secondary {
        background: #171e2d;
      }

      .app-shell__pane--tertiary {
        background: #141a27;
      }
    `,
  ],
})
export class AppShellComponent {}
