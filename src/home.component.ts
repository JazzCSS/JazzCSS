import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
selector: 'app-home',
standalone: true,
imports: [CommonModule],
template: `
<p> hello, this is home page </p>
`,
})
export class HomeComponent {}