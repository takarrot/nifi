/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

var TransformJsonState = function($stateProvider) {

    $stateProvider
        .state('jolttransformjson', {
            url: "/transformjson?id&processorId&revision&clientId&editable",
            templateUrl: "app/transformjson/transformjson.view.html",
            controller: 'TransformJsonController',
            resolve: {
                details: ['ProcessorService','$stateParams',
                    function (ProcessorService,$stateParams) {
                        return ProcessorService.getDetails($stateParams.processorId);
                    }
                ]
            }
        })

};

TransformJsonState.$inject = ['$stateProvider'];

angular.module('standardUI').config(TransformJsonState);