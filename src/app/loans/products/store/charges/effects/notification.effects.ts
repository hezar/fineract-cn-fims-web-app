/**
 * Copyright 2017 The Mifos Initiative.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {NotificationService, NotificationType} from '../../../../../services/notification/notification.service';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import * as chargeActions from '../charge.actions';

@Injectable()
export class ProductChargesNotificationEffects {

  constructor(private actions$: Actions, private notificationService: NotificationService) {}

  @Effect({dispatch: false})
  createUpdateCustomerChargeSuccess$: Observable<Action> = this.actions$
    .ofType(chargeActions.CREATE_SUCCESS, chargeActions.UPDATE)
    .do(() => this.notificationService.send({
      type: NotificationType.MESSAGE,
      message: 'Charge is going to be saved'
    }));

  @Effect({dispatch: false})
  deleteCustomerChargeSuccess$: Observable<Action> = this.actions$
    .ofType(chargeActions.DELETE_SUCCESS)
    .do(() => this.notificationService.send({
      type: NotificationType.MESSAGE,
      message: 'Charge is going to be deleted'
    }));
}

