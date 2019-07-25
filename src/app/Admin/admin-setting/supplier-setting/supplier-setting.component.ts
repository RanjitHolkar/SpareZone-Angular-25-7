import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminSettingService } from '../admin-setting.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-supplier-setting',
  templateUrl: './supplier-setting.component.html',
  styleUrls: ['./supplier-setting.component.css']
})
export class SupplierSettingComponent implements OnInit {
  supplierGroups: any;
  supplierGroupForm: FormGroup;
  isGroupSumitted = false;
  constructor(private formBuilder: FormBuilder, private AdminService: AdminSettingService, private toastr: ToastrManager) { }

  ngOnInit() {
    this.getAllGroups();
    this.createSupplierFormGroup();
  }
  /* get list of all groups */
  getAllGroups() {
    this.AdminService.getAllGroups().subscribe((response: any) => {
      console.log(response);
      this.supplierGroups = response.supplierGroups;
    })
  }

  /* Create form group for adding the supplier groups */
  createSupplierFormGroup() {
    this.supplierGroupForm = this.formBuilder.group({
      group_name: ['', Validators.required],
      group_indicator_color: ['', Validators.required]
    })
  }
  get groupF() {
    return this.supplierGroupForm.controls
  }

  /* Save the new group details */
  saveGroup() {
    this.isGroupSumitted = true;
    if (this.supplierGroupForm.valid) {
      this.isGroupSumitted = false;
      this.AdminService.saveSupplierGroup(this.supplierGroupForm.value).subscribe((response: any) => {
        if (!response.status)
          this.toastr.errorToastr(response.message, 'Oops!');
        else if (!!response.status)
          this.toastr.successToastr(response.message, 'Success');
      }, error => {
        console.log(error);
      })
    }
  }
}
