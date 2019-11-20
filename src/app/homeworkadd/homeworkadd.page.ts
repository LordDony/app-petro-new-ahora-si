import { Component, OnInit } from '@angular/core';
import { HomeworkService } from '../services/homework.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homeworkadd',
  templateUrl: './homeworkadd.page.html',
  styleUrls: ['./homeworkadd.page.scss'],
})




export class HomeworkaddPage implements OnInit {
  private subject_id;
  public homeworkForm: FormGroup;

  

  error_messages = {
    'title': [
        { type: 'required', message: 'Titulo es requerido' },
    ],
    'description': [
        { type: 'required', message: 'Descripción es requerida' },
    ]
}

  constructor(private httpClient: HttpClient,private formBuilder: FormBuilder,private homeworkservice: HomeworkService, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.subject_id = this.route.snapshot.paramMap.get('subject_id');
    
    this.homeworkForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      files: [''],
      });
  }

  onCreate(){

    const formData = new FormData();
    var blob = new Blob([this.homeworkForm.get('files').value]);
    formData.append('files', blob);
    formData.append('title', this.homeworkForm.get('title').value);
    formData.append('description', this.homeworkForm.get('description').value);
    formData.append('subject_id', this.subject_id);
    if (this.homeworkForm.invalid) return;
    let data = JSON.parse(JSON.stringify(this.homeworkForm.value));
    console.log(data);
    console.log(this.subject_id);
    this.homeworkservice.store(formData).subscribe((res) => {
        console.log(res);
    }, ((error) => {
        console.log(error.message);
    }));
  }

}
