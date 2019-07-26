import { Component, OnInit } from '@angular/core';
import { SupplierEditService } from './supplier-edit.service';
import { Form,FormBuilder,FormArray,FormControl,FormGroup,Validators} from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-supplier-edit',
  templateUrl: './supplier-edit.component.html',
  styleUrls: ['./supplier-edit.component.css']
})
export class SupplierEditComponent implements OnInit {
public userDetails=[];
public businessType:any;
public editForm:FormGroup;
public submit =false;
public base_url = environment.base_url;
public images:any;
public imagesUrl:any;
  constructor(
    private _supplierEditService:SupplierEditService,
    private _formBuilder:FormBuilder,
    private toastr:ToastrManager) { }

  ngOnInit() {
    this.editForm = this._formBuilder.group({
      business_name:['',Validators.required],
      contact_person:['',Validators.required],
      business_address:['',Validators.required],
      suburbs:['',Validators.required],
      postcode:['',Validators.required],
      state:['',Validators.required],
      business_abn:['',Validators.required],
      personal_contact:['',Validators.required],
      email_id:['',Validators.required],
      business_type:['',Validators.required],
      is_capricon:['',Validators.required],
    })
    this._supplierEditService.getUserDetails().subscribe(res=>{
      this.userDetails.push(res['res']);
      console.log(res);
    })
    this._supplierEditService.getBusinessType().subscribe(res=>{
      this.businessType = res['businessTypeData'];
    }) 
  }
  uploadFiles(event){
    if (event.target.files && event.target.files[0]) {
      this.images = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imagesUrl = reader.result;
      reader.readAsDataURL(this.images);
    }
  }
  get f(){return this.editForm.controls}
  updateDetails(){
    this.submit = true;
    console.log(this.images);
    if(this.editForm.valid){
      let formData = new FormData();
        if(this.images !=undefined){
        formData.append('profile_logo',this.images);
        }
        formData.append('business_name',this.editForm.value.business_name);
        formData.append('contact_person',this.editForm.value.contact_person);
        formData.append('business_address',this.editForm.value.business_address);
        formData.append('business_abn',this.editForm.value.business_abn);
        formData.append('business_type',this.editForm.value.business_type);
        formData.append('suburbs',this.editForm.value.suburbs);
        formData.append('postcode',this.editForm.value.postcode);
        formData.append('state',this.editForm.value.state);
        formData.append('is_capricon',this.editForm.value.is_capricon);
      this._supplierEditService.updateDetails(formData).subscribe(res=>{
        this.toastr.successToastr('Update Details Successfully')
      })
    } 
  }
  numberOnly(event:any){
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}
