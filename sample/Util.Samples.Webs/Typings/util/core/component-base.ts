﻿//============== 组件基类=========================
//Copyright 2018 何镇汐
//Licensed under the MIT license
//================================================
import { Injector } from '@angular/core';
import { IocHelper as ioc } from '../angular/ioc-helper';

/**
 * 组件
 */
export class ComponentBase {
    /**
     * 初始化组件
     * @param injector 注入器
     */
    constructor( injector: Injector ) {
        ioc.componentInjector = injector;
    }
}