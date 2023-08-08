import { Component, OnInit } from "@angular/core";
import { ApiauthService } from "../services/apiauth.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Login } from "../models/login";

@Component ({ templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit{

    public loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    })

    constructor(public apiauthService: ApiauthService, private router: Router, private formBuilder: FormBuilder){
        // if (this.apiauthService.usuarioData) {
        //     this.router.navigate(['/']);
        // }
    }

    ngOnInit() {

    }

    login(){
        this.apiauthService.login(this.loginForm.value as Login).subscribe(response => {
            if (response.exito === 1) {
                this.router.navigate(['/']);
            }
        });
    }
}
