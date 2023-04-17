import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
selector: 'app-about',
standalone: true,
imports: [CommonModule],
template: `
<p> hello, this is about us page </p>
`,
})
export class AboutComponent {}