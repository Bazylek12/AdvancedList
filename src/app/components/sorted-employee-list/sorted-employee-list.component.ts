import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, Observable, combineLatest, of, switchMap} from 'rxjs';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeesService } from '../../services/employees.service';
import {map} from "rxjs/operators";

interface Age {
  min: number,
  max: number,
  text: string
}

@Component({
  selector: 'app-sorted-employee-list',
  templateUrl: './sorted-employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortedEmployeeListComponent {
  private _employeeSubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc');
  private _ageSubject: BehaviorSubject<Age> = new BehaviorSubject<Age>({min: 0, max:100, text: 'All'});

  readonly employees$: Observable<EmployeeModel[]> = combineLatest([
    this._employeeSubject.asObservable(),
    this._ageSubject.asObservable()
  ]).pipe(
    switchMap(([order,age]) => this._employeesService.getAll().pipe(
      map((employee) => {
        return employee.sort((a,b) => {
          if(a.employee_salary > b.employee_salary) return order === 'asc' ? 1 : -1;
          if(a.employee_salary < b.employee_salary) return order === 'asc' ? -1 : 1;
          return 0;
        })
      }),
      map((employees) => {
        return employees.filter((employee) => employee.employee_age >= age.min && employee.employee_age <= age.max)
      })
    ))
  );

  public orders: Observable<string[]> = of(['asc', 'desc'])
  public agesRange: Observable<Age[]> = of([
    { min: 0, max: 100, text: 'All' },
    { min: 0, max: 20, text: '0-20' },
    { min: 21, max: 30, text: '21-30' },
    { min: 31, max: 40, text: '31-40' },
    { min: 41, max: 50, text: '41-50' },
    { min: 51, max: 100, text: '51-100'}
  ]);
  constructor(private _employeesService: EmployeesService) {
  }

  sort(order: string): void {
    this._employeeSubject.next(order);
  }

  filterAge(min: number, max: number, text:string) {
    this._ageSubject.next({ max: max, min: min, text: text });
  }
}
