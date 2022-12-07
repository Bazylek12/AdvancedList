import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, Observable, combineLatest, of} from 'rxjs';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeesService } from '../../services/employees.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-sorted-employee-list',
  templateUrl: './sorted-employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortedEmployeeListComponent {
  private _employeeSubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc');
  public order$: Observable<string> = this._employeeSubject.asObservable();
  readonly employees$: Observable<EmployeeModel[]> = combineLatest([
    this._employeesService.getAll(),
    this.order$,
    ]).pipe(map(([employees, order] : [EmployeeModel[], string]) => {
      return employees.sort((a, b): number => {
        if (a.employee_salary > b.employee_salary) {
          return order === 'asc' ? 1 : -1
        }
        if (a.employee_salary < b.employee_salary) {
          return order === 'asc' ? -1 : 1
        }
        return 0;
      })
  }))
  public orders: Observable<string[]> = of(['asc', 'desc'])

  constructor(private _employeesService: EmployeesService) {
  }

  sort(order: string): void {
    this._employeeSubject.next(order);
  }
}
