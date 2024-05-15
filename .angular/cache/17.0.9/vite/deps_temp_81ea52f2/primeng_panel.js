import {
  MinusIcon
} from "./chunk-34NF5DDA.js";
import {
  PlusIcon
} from "./chunk-NUXVHFVQ.js";
import {
  Ripple,
  RippleModule
} from "./chunk-FFR5D7NY.js";
import "./chunk-JVOFC3HO.js";
import "./chunk-3SQF7L7O.js";
import {
  Footer,
  PrimeTemplate,
  SharedModule,
  UniqueComponentId
} from "./chunk-BKZZUF5V.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-H47CQ2EN.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-LAQBG73Y.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  Output,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-WTO4EDN6.js";
import "./chunk-W224PUNB.js";
import "./chunk-4WX7ZCK5.js";

// node_modules/primeng/fesm2022/primeng-panel.mjs
function Panel_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵattribute("id", ctx_r3.id + "_header");
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r3.header);
  }
}
function Panel_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Panel_div_1_5_ng_template_0_Template(rf, ctx) {
}
function Panel_div_1_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Panel_div_1_5_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 16);
  }
  if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(5);
    ɵɵclassMap(ctx_r12.expandIcon);
    ɵɵproperty("ngClass", ctx_r12.iconClass);
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_1_MinusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "MinusIcon", 17);
  }
  if (rf & 2) {
    const ctx_r13 = ɵɵnextContext(5);
    ɵɵproperty("styleClass", ctx_r13.iconClass);
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Panel_div_1_button_6_ng_container_1_ng_container_1_span_1_Template, 1, 3, "span", 14)(2, Panel_div_1_button_6_ng_container_1_ng_container_1_MinusIcon_2_Template, 1, 1, "MinusIcon", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r10.expandIcon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r10.expandIcon);
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 16);
  }
  if (rf & 2) {
    const ctx_r14 = ɵɵnextContext(5);
    ɵɵclassMap(ctx_r14.collapseIcon);
    ɵɵproperty("ngClass", ctx_r14.iconClass);
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_2_PlusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "PlusIcon", 17);
  }
  if (rf & 2) {
    const ctx_r15 = ɵɵnextContext(5);
    ɵɵproperty("styleClass", ctx_r15.iconClass);
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Panel_div_1_button_6_ng_container_1_ng_container_2_span_1_Template, 1, 3, "span", 14)(2, Panel_div_1_button_6_ng_container_1_ng_container_2_PlusIcon_2_Template, 1, 1, "PlusIcon", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r11.collapseIcon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r11.collapseIcon);
  }
}
function Panel_div_1_button_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Panel_div_1_button_6_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 12)(2, Panel_div_1_button_6_ng_container_1_ng_container_2_Template, 3, 2, "ng-container", 12);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r8.collapsed);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r8.collapsed);
  }
}
function Panel_div_1_button_6_2_ng_template_0_Template(rf, ctx) {
}
function Panel_div_1_button_6_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Panel_div_1_button_6_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
var _c0 = (a0) => ({
  $implicit: a0
});
function Panel_div_1_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 11);
    ɵɵlistener("click", function Panel_div_1_button_6_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r18);
      const ctx_r17 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r17.onIconClick($event));
    })("keydown", function Panel_div_1_button_6_Template_button_keydown_0_listener($event) {
      ɵɵrestoreView(_r18);
      const ctx_r19 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r19.onKeyDown($event));
    });
    ɵɵtemplate(1, Panel_div_1_button_6_ng_container_1_Template, 3, 2, "ng-container", 12)(2, Panel_div_1_button_6_2_Template, 1, 0, null, 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵattribute("id", ctx_r6.id + "_header")("aria-label", ctx_r6.buttonAriaLabel)("aria-controls", ctx_r6.id + "_content")("aria-expanded", !ctx_r6.collapsed);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r6.headerIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r6.headerIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c0, ctx_r6.collapsed));
  }
}
var _c1 = (a0, a1, a2) => ({
  "p-panel-icons-start": a0,
  "p-panel-icons-end": a1,
  "p-panel-icons-center": a2
});
function Panel_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵlistener("click", function Panel_div_1_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r21);
      const ctx_r20 = ɵɵnextContext();
      return ɵɵresetView(ctx_r20.onHeaderClick($event));
    });
    ɵɵtemplate(1, Panel_div_1_span_1_Template, 2, 2, "span", 7);
    ɵɵprojection(2, 1);
    ɵɵtemplate(3, Panel_div_1_ng_container_3_Template, 1, 0, "ng-container", 4);
    ɵɵelementStart(4, "div", 8);
    ɵɵtemplate(5, Panel_div_1_5_Template, 1, 0, null, 4)(6, Panel_div_1_button_6_Template, 3, 9, "button", 9);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵattribute("id", ctx_r0.id + "-titlebar");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.header);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.headerTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction3(6, _c1, ctx_r0.iconPos === "start", ctx_r0.iconPos === "end", ctx_r0.iconPos === "center"));
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.iconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.toggleable);
  }
}
function Panel_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Panel_div_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Panel_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵprojection(1, 2);
    ɵɵtemplate(2, Panel_div_6_ng_container_2_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.footerTemplate);
  }
}
var _c2 = ["*", [["p-header"]], [["p-footer"]]];
var _c3 = (a1, a2) => ({
  "p-panel p-component": true,
  "p-panel-toggleable": a1,
  "p-panel-expanded": a2
});
var _c4 = (a0) => ({
  transitionParams: a0,
  height: "0",
  opacity: "0"
});
var _c5 = (a1) => ({
  value: "hidden",
  params: a1
});
var _c6 = (a0) => ({
  transitionParams: a0,
  height: "*",
  opacity: "1"
});
var _c7 = (a1) => ({
  value: "visible",
  params: a1
});
var _c8 = ["*", "p-header", "p-footer"];
var Panel = class _Panel {
  el;
  /**
   * Defines if content of panel can be expanded and collapsed.
   * @group Props
   */
  toggleable;
  /**
   * Header text of the panel.
   * @group Props
   */
  header;
  /**
   * Defines the initial state of panel content, supports one or two-way binding as well.
   * @group Props
   */
  collapsed;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Position of the icons.
   * @group Props
   */
  iconPos = "end";
  /**
   * Expand icon of the toggle button.
   * @group Props
   * @deprecated since v15.4.2, use `headericons` template instead.
   */
  expandIcon;
  /**
   * Collapse icon of the toggle button.
   * @group Props
   * @deprecated since v15.4.2, use `headericons` template instead.
   */
  collapseIcon;
  /**
   * Specifies if header of panel cannot be displayed.
   * @group Props
   * @deprecated since v15.4.2, use `headericons` template instead.
   */
  showHeader = true;
  /**
   * Specifies the toggler element to toggle the panel content.
   * @group Props
   */
  toggler = "icon";
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = "400ms cubic-bezier(0.86, 0, 0.07, 1)";
  /**
   * Emitted when the collapsed changes.
   * @param {boolean} value - New Value.
   * @group Emits
   */
  collapsedChange = new EventEmitter();
  /**
   * Callback to invoke before panel toggle.
   * @param {PanelBeforeToggleEvent} event - Custom panel toggle event
   * @group Emits
   */
  onBeforeToggle = new EventEmitter();
  /**
   * Callback to invoke after panel toggle.
   * @param {PanelAfterToggleEvent} event - Custom panel toggle event
   * @group Emits
   */
  onAfterToggle = new EventEmitter();
  footerFacet;
  templates;
  iconTemplate;
  animating;
  headerTemplate;
  contentTemplate;
  footerTemplate;
  headerIconTemplate;
  get id() {
    return UniqueComponentId();
  }
  get buttonAriaLabel() {
    return this.header;
  }
  constructor(el) {
    this.el = el;
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this.headerTemplate = item.template;
          break;
        case "content":
          this.contentTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        case "icons":
          this.iconTemplate = item.template;
          break;
        case "headericons":
          this.headerIconTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  onHeaderClick(event) {
    if (this.toggler === "header") {
      this.toggle(event);
    }
  }
  onIconClick(event) {
    if (this.toggler === "icon") {
      this.toggle(event);
    }
  }
  toggle(event) {
    if (this.animating) {
      return false;
    }
    this.animating = true;
    this.onBeforeToggle.emit({
      originalEvent: event,
      collapsed: this.collapsed
    });
    if (this.toggleable) {
      if (this.collapsed)
        this.expand();
      else
        this.collapse();
    }
    event.preventDefault();
  }
  expand() {
    this.collapsed = false;
    this.collapsedChange.emit(this.collapsed);
  }
  collapse() {
    this.collapsed = true;
    this.collapsedChange.emit(this.collapsed);
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  onKeyDown(event) {
    if (event.code === "Enter" || event.code === "Space") {
      this.toggle(event);
      event.preventDefault();
    }
  }
  onToggleDone(event) {
    this.animating = false;
    this.onAfterToggle.emit({
      originalEvent: event,
      collapsed: this.collapsed
    });
  }
  static ɵfac = function Panel_Factory(t) {
    return new (t || _Panel)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Panel,
    selectors: [["p-panel"]],
    contentQueries: function Panel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, Footer, 5);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerFacet = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      toggleable: "toggleable",
      header: "header",
      collapsed: "collapsed",
      style: "style",
      styleClass: "styleClass",
      iconPos: "iconPos",
      expandIcon: "expandIcon",
      collapseIcon: "collapseIcon",
      showHeader: "showHeader",
      toggler: "toggler",
      transitionOptions: "transitionOptions"
    },
    outputs: {
      collapsedChange: "collapsedChange",
      onBeforeToggle: "onBeforeToggle",
      onAfterToggle: "onAfterToggle"
    },
    ngContentSelectors: _c8,
    decls: 7,
    vars: 25,
    consts: [[3, "ngClass", "ngStyle"], ["class", "p-panel-header", 3, "click", 4, "ngIf"], ["role", "region", 1, "p-toggleable-content", 3, "id"], [1, "p-panel-content"], [4, "ngTemplateOutlet"], ["class", "p-panel-footer", 4, "ngIf"], [1, "p-panel-header", 3, "click"], ["class", "p-panel-title", 4, "ngIf"], [1, "p-panel-icons", 3, "ngClass"], ["pRipple", "", "type", "button", "role", "button", "class", "p-panel-header-icon p-panel-toggler p-link", 3, "click", "keydown", 4, "ngIf"], [1, "p-panel-title"], ["pRipple", "", "type", "button", "role", "button", 1, "p-panel-header-icon", "p-panel-toggler", "p-link", 3, "click", "keydown"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", "ngClass", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "ngClass"], [3, "styleClass"], [1, "p-panel-footer"]],
    template: function Panel_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c2);
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, Panel_div_1_Template, 7, 10, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵlistener("@panelContent.done", function Panel_Template_div_animation_panelContent_done_2_listener($event) {
          return ctx.onToggleDone($event);
        });
        ɵɵelementStart(3, "div", 3);
        ɵɵprojection(4);
        ɵɵtemplate(5, Panel_ng_container_5_Template, 1, 0, "ng-container", 4);
        ɵɵelementEnd();
        ɵɵtemplate(6, Panel_div_6_Template, 3, 1, "div", 5);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", ɵɵpureFunction2(14, _c3, ctx.toggleable, !ctx.collapsed && ctx.toggleable))("ngStyle", ctx.style);
        ɵɵattribute("id", ctx.id)("data-pc-name", "panel");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showHeader);
        ɵɵadvance(1);
        ɵɵproperty("id", ctx.id + "_content")("@panelContent", ctx.collapsed ? ɵɵpureFunction1(19, _c5, ɵɵpureFunction1(17, _c4, ctx.animating ? ctx.transitionOptions : "0ms")) : ɵɵpureFunction1(23, _c7, ɵɵpureFunction1(21, _c6, ctx.animating ? ctx.transitionOptions : "0ms")));
        ɵɵattribute("aria-labelledby", ctx.id + "_header")("aria-hidden", ctx.collapsed)("tabindex", ctx.collapsed ? "-1" : void 0);
        ɵɵadvance(3);
        ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.footerFacet || ctx.footerTemplate);
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, Ripple, PlusIcon, MinusIcon],
    styles: ["@layer primeng{.p-panel-header{display:flex;align-items:center}.p-panel-title{line-height:1;order:1}.p-panel-header-icon{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;text-decoration:none;overflow:hidden;position:relative}.p-panel-toggleable.p-panel-expanded>.p-toggleable-content:not(.ng-animating){overflow:visible}.p-panel-toggleable .p-toggleable-content{overflow:hidden}}\n"],
    encapsulation: 2,
    data: {
      animation: [trigger("panelContent", [state("hidden", style({
        height: "0"
      })), state("void", style({
        height: "{{height}}"
      }), {
        params: {
          height: "0"
        }
      }), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => hidden", animate("{{transitionParams}}")), transition("void => visible", animate("{{transitionParams}}"))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Panel, [{
    type: Component,
    args: [{
      selector: "p-panel",
      template: `
        <div [attr.id]="id" [attr.data-pc-name]="'panel'" [ngClass]="{ 'p-panel p-component': true, 'p-panel-toggleable': toggleable, 'p-panel-expanded': !collapsed && toggleable }" [ngStyle]="style" [class]="styleClass">
            <div class="p-panel-header" *ngIf="showHeader" (click)="onHeaderClick($event)" [attr.id]="id + '-titlebar'">
                <span class="p-panel-title" *ngIf="header" [attr.id]="id + '_header'">{{ header }}</span>
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                <div class="p-panel-icons" [ngClass]="{ 'p-panel-icons-start': iconPos === 'start', 'p-panel-icons-end': iconPos === 'end', 'p-panel-icons-center': iconPos === 'center' }">
                    <ng-template *ngTemplateOutlet="iconTemplate"></ng-template>
                    <button
                        *ngIf="toggleable"
                        [attr.id]="id + '_header'"
                        pRipple
                        type="button"
                        role="button"
                        class="p-panel-header-icon p-panel-toggler p-link"
                        [attr.aria-label]="buttonAriaLabel"
                        [attr.aria-controls]="id + '_content'"
                        [attr.aria-expanded]="!collapsed"
                        (click)="onIconClick($event)"
                        (keydown)="onKeyDown($event)"
                    >
                        <ng-container *ngIf="!headerIconTemplate">
                            <ng-container *ngIf="!collapsed">
                                <span *ngIf="expandIcon" [class]="expandIcon" [ngClass]="iconClass"></span>
                                <MinusIcon *ngIf="!expandIcon" [styleClass]="iconClass" />
                            </ng-container>

                            <ng-container *ngIf="collapsed">
                                <span *ngIf="collapseIcon" [class]="collapseIcon" [ngClass]="iconClass"></span>
                                <PlusIcon *ngIf="!collapseIcon" [styleClass]="iconClass" />
                            </ng-container>
                        </ng-container>

                        <ng-template *ngTemplateOutlet="headerIconTemplate; context: { $implicit: collapsed }"></ng-template>
                    </button>
                </div>
            </div>
            <div
                class="p-toggleable-content"
                [id]="id + '_content'"
                role="region"
                [attr.aria-labelledby]="id + '_header'"
                [attr.aria-hidden]="collapsed"
                [attr.tabindex]="collapsed ? '-1' : undefined"
                [@panelContent]="
                    collapsed
                        ? { value: 'hidden', params: { transitionParams: animating ? transitionOptions : '0ms', height: '0', opacity: '0' } }
                        : { value: 'visible', params: { transitionParams: animating ? transitionOptions : '0ms', height: '*', opacity: '1' } }
                "
                (@panelContent.done)="onToggleDone($event)"
            >
                <div class="p-panel-content">
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                </div>

                <div class="p-panel-footer" *ngIf="footerFacet || footerTemplate">
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                </div>
            </div>
        </div>
    `,
      animations: [trigger("panelContent", [state("hidden", style({
        height: "0"
      })), state("void", style({
        height: "{{height}}"
      }), {
        params: {
          height: "0"
        }
      }), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => hidden", animate("{{transitionParams}}")), transition("void => visible", animate("{{transitionParams}}"))])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-panel-header{display:flex;align-items:center}.p-panel-title{line-height:1;order:1}.p-panel-header-icon{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;text-decoration:none;overflow:hidden;position:relative}.p-panel-toggleable.p-panel-expanded>.p-toggleable-content:not(.ng-animating){overflow:visible}.p-panel-toggleable .p-toggleable-content{overflow:hidden}}\n"]
    }]
  }], () => [{
    type: ElementRef
  }], {
    toggleable: [{
      type: Input
    }],
    header: [{
      type: Input
    }],
    collapsed: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    iconPos: [{
      type: Input
    }],
    expandIcon: [{
      type: Input
    }],
    collapseIcon: [{
      type: Input
    }],
    showHeader: [{
      type: Input
    }],
    toggler: [{
      type: Input
    }],
    transitionOptions: [{
      type: Input
    }],
    collapsedChange: [{
      type: Output
    }],
    onBeforeToggle: [{
      type: Output
    }],
    onAfterToggle: [{
      type: Output
    }],
    footerFacet: [{
      type: ContentChild,
      args: [Footer]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var PanelModule = class _PanelModule {
  static ɵfac = function PanelModule_Factory(t) {
    return new (t || _PanelModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PanelModule,
    declarations: [Panel],
    imports: [CommonModule, SharedModule, RippleModule, PlusIcon, MinusIcon],
    exports: [Panel, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, SharedModule, RippleModule, PlusIcon, MinusIcon, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SharedModule, RippleModule, PlusIcon, MinusIcon],
      exports: [Panel, SharedModule],
      declarations: [Panel]
    }]
  }], null, null);
})();
export {
  Panel,
  PanelModule
};
//# sourceMappingURL=primeng_panel.js.map