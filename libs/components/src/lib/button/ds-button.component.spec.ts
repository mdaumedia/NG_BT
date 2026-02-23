import { DsButtonComponent } from './ds-button.component';

describe('DsButtonComponent', () => {
  it('should create metadata for figma export', () => {
    const component = new DsButtonComponent();
    expect(component.metadata.figmaExport).toBe(true);
  });
});
