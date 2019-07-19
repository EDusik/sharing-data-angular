import { DataService } from './unrelated-components/data.service';
import { ParentEventComponent } from './child-to-parent-event-emitter/parent/parent.component';
import { ChildEventComponent } from './child-to-parent-event-emitter/child/child.component';
import { ChildToParentViewChildComponent } from './child-to-parent-view-child/child-to-parent-view-child.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent-to-child-input/parent/parent.component';
import { ChildComponent } from './parent-to-child-input/child/child.component';
import { ParentToChildInputComponent } from './parent-to-child-input/parent-to-child-input.component';
import { ParentViewChildComponent } from './child-to-parent-view-child/parent/parent.component';
import { ChildViewChildComponent } from './child-to-parent-view-child/child/child.component';
import { ChildToParentEventEmitterComponent } from './child-to-parent-event-emitter/child-to-parent-event-emitter.component';
import { UnrelatedComponentsComponent } from './unrelated-components/unrelated-components.component';
import { SiblingComponent } from './unrelated-components/sibling/sibling.component';
import { ParentSiblingComponent } from './unrelated-components/parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ParentComponent,
    ParentToChildInputComponent,
    ParentViewChildComponent,
    ChildViewChildComponent,
    ChildToParentViewChildComponent,
    ChildToParentEventEmitterComponent,
    ChildEventComponent,
    ParentEventComponent,
    UnrelatedComponentsComponent,
    SiblingComponent,
    ParentSiblingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
