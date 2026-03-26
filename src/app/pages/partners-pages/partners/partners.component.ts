import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent {
}
