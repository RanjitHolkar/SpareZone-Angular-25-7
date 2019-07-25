import { Component, OnInit } from '@angular/core';
import { Form,FormBuilder,FormArray,FormControl,FormGroup,Validators} from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public loginForm : FormGroup;
public submit = false;
  constructor(
    private formBuilder:FormBuilder,
    private _authenticationService:AuthenticationService,
    private toastr:ToastrManager,
    private router:Router
    ) { }

  ngOnInit() {
    this.checkLogin();
    this.loginForm = this.formBuilder.group({
      email_id :['',Validators.required],
      password :['',Validators.required]
    })
  }
  // check Login Deatils
  login(){
    this.submit = true;
    if(this.loginForm.valid){
      this._authenticationService.login(this.loginForm.value).subscribe(res=>{
        if(res =='success'){
          this.checkLogin();
        }else{
          this.toastr.warningToastr('Please Active Your Account', 'Alert!');
        }
      },error=>{
        this.toastr.errorToastr('Invalid credentials.', 'Oops!');
        this.loginForm.reset();
      })
      this.submit = false;
    }
  }

  // return controle
  get f(){
    return this.loginForm.controls
  }

  // check Login User Or Not
  checkLogin(){
    if(localStorage.getItem('currentUser')){
      this.router.navigate(['/admin-setting']);
    }else{
      return false;
    }
  }


}
