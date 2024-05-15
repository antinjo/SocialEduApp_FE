import {
  PlusIcon
} from "./chunk-NUXVHFVQ.js";
import {
  Messages,
  MessagesModule
} from "./chunk-3OJGNRRV.js";
import "./chunk-NQUIB3PT.js";
import "./chunk-STKMVT5F.js";
import {
  Button,
  ButtonDirective,
  ButtonModule
} from "./chunk-IBDZZGXJ.js";
import "./chunk-737AHNTR.js";
import {
  Ripple,
  RippleModule
} from "./chunk-FFR5D7NY.js";
import {
  TimesIcon
} from "./chunk-DDI35TOV.js";
import {
  BaseIcon
} from "./chunk-JVOFC3HO.js";
import {
  DomHandler
} from "./chunk-3SQF7L7O.js";
import {
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule,
  TranslationKeys,
  UniqueComponentId
} from "./chunk-BKZZUF5V.js";
import "./chunk-H47CQ2EN.js";
import {
  DomSanitizer
} from "./chunk-7ZNQO7EJ.js";
import {
  HttpClient,
  HttpClientModule,
  HttpEventType
} from "./chunk-VU4624VR.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-LAQBG73Y.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵStandaloneFeature,
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
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-WTO4EDN6.js";
import "./chunk-W224PUNB.js";
import "./chunk-4WX7ZCK5.js";

// node_modules/primeng/fesm2022/primeng-icons-upload.mjs
var UploadIcon = class _UploadIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + UniqueComponentId() + ")";
  }
  static ɵfac = (() => {
    let ɵUploadIcon_BaseFactory;
    return function UploadIcon_Factory(t) {
      return (ɵUploadIcon_BaseFactory || (ɵUploadIcon_BaseFactory = ɵɵgetInheritedFactory(_UploadIcon)))(t || _UploadIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _UploadIcon,
    selectors: [["UploadIcon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function UploadIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0)(1, "g");
        ɵɵelement(2, "path", 1);
        ɵɵelementEnd();
        ɵɵelementStart(3, "defs")(4, "clipPath", 2);
        ɵɵelement(5, "rect", 3);
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.getClassNames());
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        ɵɵadvance(1);
        ɵɵattribute("clip-path", ctx.pathId);
        ɵɵadvance(3);
        ɵɵproperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadIcon, [{
    type: Component,
    args: [{
      selector: "UploadIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-progressbar.mjs
function ProgressBar_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵstyleProp("display", ctx_r2.value != null && ctx_r2.value !== 0 ? "flex" : "none");
    ɵɵattribute("data-pc-section", "label");
    ɵɵadvance(1);
    ɵɵtextInterpolate2("", ctx_r2.value, "", ctx_r2.unit, "");
  }
}
function ProgressBar_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c0 = (a0) => ({
  $implicit: a0
});
function ProgressBar_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3)(1, "div", 4);
    ɵɵtemplate(2, ProgressBar_div_1_div_2_Template, 2, 5, "div", 5)(3, ProgressBar_div_1_ng_container_3_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("width", ctx_r0.value + "%")("background", ctx_r0.color);
    ɵɵattribute("data-pc-section", "value");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.showValue && !ctx_r0.contentTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.contentTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(8, _c0, ctx_r0.value));
  }
}
function ProgressBar_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵelement(1, "div", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("data-pc-section", "container");
    ɵɵadvance(1);
    ɵɵstyleProp("background", ctx_r1.color);
    ɵɵattribute("data-pc-section", "value");
  }
}
var _c1 = (a1, a2) => ({
  "p-progressbar p-component": true,
  "p-progressbar-determinate": a1,
  "p-progressbar-indeterminate": a2
});
var ProgressBar = class _ProgressBar {
  /**
   * Current value of the progress.
   * @group Props
   */
  value;
  /**
   * Whether to display the progress bar value.
   * @group Props
   */
  showValue = true;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Unit sign appended to the value.
   * @group Props
   */
  unit = "%";
  /**
   * Defines the mode of the progress
   * @group Props
   */
  mode = "determinate";
  /**
   * Color for the background of the progress.
   * @group Props
   */
  color;
  templates;
  contentTemplate;
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this.contentTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
      }
    });
  }
  static ɵfac = function ProgressBar_Factory(t) {
    return new (t || _ProgressBar)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ProgressBar,
    selectors: [["p-progressBar"]],
    contentQueries: function ProgressBar_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      value: "value",
      showValue: "showValue",
      styleClass: "styleClass",
      style: "style",
      unit: "unit",
      mode: "mode",
      color: "color"
    },
    decls: 3,
    vars: 14,
    consts: [["role", "progressbar", 3, "ngStyle", "ngClass"], ["class", "p-progressbar-value p-progressbar-value-animate", "style", "display:flex", 3, "width", "background", 4, "ngIf"], ["class", "p-progressbar-indeterminate-container", 4, "ngIf"], [1, "p-progressbar-value", "p-progressbar-value-animate", 2, "display", "flex"], [1, "p-progressbar-label"], [3, "display", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-progressbar-indeterminate-container"], [1, "p-progressbar-value", "p-progressbar-value-animate"]],
    template: function ProgressBar_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, ProgressBar_div_1_Template, 4, 10, "div", 1)(2, ProgressBar_div_2_Template, 2, 4, "div", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵɵpureFunction2(11, _c1, ctx.mode === "determinate", ctx.mode === "indeterminate"));
        ɵɵattribute("aria-valuemin", 0)("aria-valuenow", ctx.value)("aria-valuemax", 100)("data-pc-name", "progressbar")("data-pc-section", "root");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.mode === "determinate");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.mode === "indeterminate");
      }
    },
    dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle],
    styles: ['@layer primeng{.p-progressbar{position:relative;overflow:hidden}.p-progressbar-determinate .p-progressbar-value{height:100%;width:0%;position:absolute;display:none;border:0 none;display:flex;align-items:center;justify-content:center;overflow:hidden}.p-progressbar-determinate .p-progressbar-label{display:inline-flex}.p-progressbar-determinate .p-progressbar-value-animate{transition:width 1s ease-in-out}.p-progressbar-indeterminate .p-progressbar-value:before{content:"";position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right;animation:p-progressbar-indeterminate-anim 2.1s cubic-bezier(.65,.815,.735,.395) infinite}.p-progressbar-indeterminate .p-progressbar-value:after{content:"";position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right;animation:p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;animation-delay:1.15s}}@keyframes p-progressbar-indeterminate-anim{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@keyframes p-progressbar-indeterminate-anim-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBar, [{
    type: Component,
    args: [{
      selector: "p-progressBar",
      template: `
        <div
            role="progressbar"
            [class]="styleClass"
            [ngStyle]="style"
            [attr.aria-valuemin]="0"
            [attr.aria-valuenow]="value"
            [attr.aria-valuemax]="100"
            [attr.data-pc-name]="'progressbar'"
            [attr.data-pc-section]="'root'"
            [ngClass]="{ 'p-progressbar p-component': true, 'p-progressbar-determinate': mode === 'determinate', 'p-progressbar-indeterminate': mode === 'indeterminate' }"
        >
            <div *ngIf="mode === 'determinate'" class="p-progressbar-value p-progressbar-value-animate" [style.width]="value + '%'" style="display:flex" [style.background]="color" [attr.data-pc-section]="'value'">
                <div class="p-progressbar-label">
                    <div *ngIf="showValue && !contentTemplate" [style.display]="value != null && value !== 0 ? 'flex' : 'none'" [attr.data-pc-section]="'label'">{{ value }}{{ unit }}</div>
                    <ng-container *ngTemplateOutlet="contentTemplate; context: { $implicit: value }"></ng-container>
                </div>
            </div>
            <div *ngIf="mode === 'indeterminate'" class="p-progressbar-indeterminate-container" [attr.data-pc-section]="'container'">
                <div class="p-progressbar-value p-progressbar-value-animate" [style.background]="color" [attr.data-pc-section]="'value'"></div>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ['@layer primeng{.p-progressbar{position:relative;overflow:hidden}.p-progressbar-determinate .p-progressbar-value{height:100%;width:0%;position:absolute;display:none;border:0 none;display:flex;align-items:center;justify-content:center;overflow:hidden}.p-progressbar-determinate .p-progressbar-label{display:inline-flex}.p-progressbar-determinate .p-progressbar-value-animate{transition:width 1s ease-in-out}.p-progressbar-indeterminate .p-progressbar-value:before{content:"";position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right;animation:p-progressbar-indeterminate-anim 2.1s cubic-bezier(.65,.815,.735,.395) infinite}.p-progressbar-indeterminate .p-progressbar-value:after{content:"";position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right;animation:p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;animation-delay:1.15s}}@keyframes p-progressbar-indeterminate-anim{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@keyframes p-progressbar-indeterminate-anim-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}\n']
    }]
  }], null, {
    value: [{
      type: Input
    }],
    showValue: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    unit: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ProgressBarModule = class _ProgressBarModule {
  static ɵfac = function ProgressBarModule_Factory(t) {
    return new (t || _ProgressBarModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ProgressBarModule,
    declarations: [ProgressBar],
    imports: [CommonModule],
    exports: [ProgressBar]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [ProgressBar],
      declarations: [ProgressBar]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-fileupload.mjs
var _c02 = ["advancedfileinput"];
var _c12 = ["basicfileinput"];
var _c2 = ["content"];
function FileUpload_div_0_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 18);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r3.chooseIcon);
    ɵɵproperty("ngClass", "p-button-icon p-button-icon-left");
    ɵɵattribute("aria-label", true)("data-pc-section", "chooseicon");
  }
}
function FileUpload_div_0_ng_container_6_PlusIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "PlusIcon", 21);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-button-icon p-button-icon-left");
    ɵɵattribute("aria-label", true)("data-pc-section", "chooseicon");
  }
}
function FileUpload_div_0_ng_container_6_span_2_1_ng_template_0_Template(rf, ctx) {
}
function FileUpload_div_0_ng_container_6_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FileUpload_div_0_ng_container_6_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_0_ng_container_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 22);
    ɵɵtemplate(1, FileUpload_div_0_ng_container_6_span_2_1_Template, 1, 0, null, 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r13 = ɵɵnextContext(3);
    ɵɵattribute("aria-label", true)("data-pc-section", "chooseicon");
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r13.chooseIconTemplate);
  }
}
function FileUpload_div_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, FileUpload_div_0_ng_container_6_PlusIcon_1_Template, 1, 3, "PlusIcon", 19)(2, FileUpload_div_0_ng_container_6_span_2_Template, 2, 3, "span", 20);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r4.chooseIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.chooseIconTemplate);
  }
}
function FileUpload_div_0_p_button_9_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 25);
  }
  if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ctx_r16.uploadIcon);
    ɵɵattribute("aria-hidden", true);
  }
}
function FileUpload_div_0_p_button_9_ng_container_2_UploadIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "UploadIcon", 21);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-button-icon p-button-icon-left");
  }
}
function FileUpload_div_0_p_button_9_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function FileUpload_div_0_p_button_9_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FileUpload_div_0_p_button_9_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_0_p_button_9_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 22);
    ɵɵtemplate(1, FileUpload_div_0_p_button_9_ng_container_2_span_2_1_Template, 1, 0, null, 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r19 = ɵɵnextContext(4);
    ɵɵattribute("aria-hidden", true);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r19.uploadIconTemplate);
  }
}
function FileUpload_div_0_p_button_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, FileUpload_div_0_p_button_9_ng_container_2_UploadIcon_1_Template, 1, 1, "UploadIcon", 19)(2, FileUpload_div_0_p_button_9_ng_container_2_span_2_Template, 2, 2, "span", 20);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r17 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r17.uploadIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r17.uploadIconTemplate);
  }
}
function FileUpload_div_0_p_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-button", 23);
    ɵɵlistener("onClick", function FileUpload_div_0_p_button_9_Template_p_button_onClick_0_listener() {
      ɵɵrestoreView(_r23);
      const ctx_r22 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r22.upload());
    });
    ɵɵtemplate(1, FileUpload_div_0_p_button_9_span_1_Template, 1, 2, "span", 24)(2, FileUpload_div_0_p_button_9_ng_container_2_Template, 3, 2, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵproperty("label", ctx_r5.uploadButtonLabel)("disabled", !ctx_r5.hasFiles() || ctx_r5.isFileLimitExceeded())("styleClass", ctx_r5.uploadStyleClass);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r5.uploadIcon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r5.uploadIcon);
  }
}
function FileUpload_div_0_p_button_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 25);
  }
  if (rf & 2) {
    const ctx_r24 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ctx_r24.cancelIcon);
  }
}
function FileUpload_div_0_p_button_10_ng_container_2_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "TimesIcon", 21);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-button-icon p-button-icon-left");
    ɵɵattribute("aria-hidden", true);
  }
}
function FileUpload_div_0_p_button_10_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function FileUpload_div_0_p_button_10_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FileUpload_div_0_p_button_10_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_0_p_button_10_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 22);
    ɵɵtemplate(1, FileUpload_div_0_p_button_10_ng_container_2_span_2_1_Template, 1, 0, null, 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r27 = ɵɵnextContext(4);
    ɵɵattribute("aria-hidden", true);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r27.cancelIconTemplate);
  }
}
function FileUpload_div_0_p_button_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, FileUpload_div_0_p_button_10_ng_container_2_TimesIcon_1_Template, 1, 2, "TimesIcon", 19)(2, FileUpload_div_0_p_button_10_ng_container_2_span_2_Template, 2, 2, "span", 20);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r25 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r25.cancelIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r25.cancelIconTemplate);
  }
}
function FileUpload_div_0_p_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-button", 23);
    ɵɵlistener("onClick", function FileUpload_div_0_p_button_10_Template_p_button_onClick_0_listener() {
      ɵɵrestoreView(_r31);
      const ctx_r30 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r30.clear());
    });
    ɵɵtemplate(1, FileUpload_div_0_p_button_10_span_1_Template, 1, 1, "span", 24)(2, FileUpload_div_0_p_button_10_ng_container_2_Template, 3, 2, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵproperty("label", ctx_r6.cancelButtonLabel)("disabled", !ctx_r6.hasFiles() || ctx_r6.uploading)("styleClass", ctx_r6.cancelStyleClass);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r6.cancelIcon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r6.cancelIcon);
  }
}
function FileUpload_div_0_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function FileUpload_div_0_p_progressBar_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "p-progressBar", 26);
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵproperty("value", ctx_r9.progress)("showValue", false);
  }
}
function FileUpload_div_0_div_16_div_1_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "img", 33);
    ɵɵlistener("error", function FileUpload_div_0_div_16_div_1_div_1_img_2_Template_img_error_0_listener($event) {
      ɵɵrestoreView(_r41);
      const ctx_r40 = ɵɵnextContext(5);
      return ɵɵresetView(ctx_r40.imageError($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const file_r35 = ɵɵnextContext().$implicit;
    const ctx_r37 = ɵɵnextContext(4);
    ɵɵproperty("src", file_r35.objectURL, ɵɵsanitizeUrl)("width", ctx_r37.previewWidth);
  }
}
function FileUpload_div_0_div_16_div_1_div_1_TimesIcon_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "TimesIcon");
  }
}
function FileUpload_div_0_div_16_div_1_div_1_10_ng_template_0_Template(rf, ctx) {
}
function FileUpload_div_0_div_16_div_1_div_1_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FileUpload_div_0_div_16_div_1_div_1_10_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_0_div_16_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 29)(1, "div");
    ɵɵtemplate(2, FileUpload_div_0_div_16_div_1_div_1_img_2_Template, 1, 2, "img", 30);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 31);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div");
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementStart(7, "div")(8, "button", 32);
    ɵɵlistener("click", function FileUpload_div_0_div_16_div_1_div_1_Template_button_click_8_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r45);
      const i_r36 = restoredCtx.index;
      const ctx_r44 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r44.remove($event, i_r36));
    });
    ɵɵtemplate(9, FileUpload_div_0_div_16_div_1_div_1_TimesIcon_9_Template, 1, 0, "TimesIcon", 8)(10, FileUpload_div_0_div_16_div_1_div_1_10_Template, 1, 0, null, 11);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const file_r35 = ctx.$implicit;
    const ctx_r34 = ɵɵnextContext(4);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r34.isImage(file_r35));
    ɵɵadvance(2);
    ɵɵtextInterpolate(file_r35.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r34.formatSize(file_r35.size));
    ɵɵadvance(2);
    ɵɵclassMap(ctx_r34.removeStyleClass);
    ɵɵproperty("disabled", ctx_r34.uploading);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r34.cancelIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r34.cancelIconTemplate);
  }
}
function FileUpload_div_0_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, FileUpload_div_0_div_16_div_1_div_1_Template, 11, 8, "div", 28);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r32 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r32.files);
  }
}
function FileUpload_div_0_div_16_div_2_ng_template_1_Template(rf, ctx) {
}
function FileUpload_div_0_div_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, FileUpload_div_0_div_16_div_2_ng_template_1_Template, 0, 0, "ng-template", 34);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r33 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r33.files)("ngForTemplate", ctx_r33.fileTemplate);
  }
}
function FileUpload_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 27);
    ɵɵtemplate(1, FileUpload_div_0_div_16_div_1_Template, 2, 1, "div", 8)(2, FileUpload_div_0_div_16_div_2_Template, 2, 2, "div", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r10.fileTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r10.fileTemplate);
  }
}
function FileUpload_div_0_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c3 = (a0, a1) => ({
  "p-focus": a0,
  "p-disabled": a1
});
var _c4 = (a0) => ({
  $implicit: a0
});
function FileUpload_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "span", 4);
    ɵɵlistener("focus", function FileUpload_div_0_Template_span_focus_2_listener() {
      ɵɵrestoreView(_r48);
      const ctx_r47 = ɵɵnextContext();
      return ɵɵresetView(ctx_r47.onFocus());
    })("blur", function FileUpload_div_0_Template_span_blur_2_listener() {
      ɵɵrestoreView(_r48);
      const ctx_r49 = ɵɵnextContext();
      return ɵɵresetView(ctx_r49.onBlur());
    })("click", function FileUpload_div_0_Template_span_click_2_listener() {
      ɵɵrestoreView(_r48);
      const ctx_r50 = ɵɵnextContext();
      return ɵɵresetView(ctx_r50.choose());
    })("keydown.enter", function FileUpload_div_0_Template_span_keydown_enter_2_listener() {
      ɵɵrestoreView(_r48);
      const ctx_r51 = ɵɵnextContext();
      return ɵɵresetView(ctx_r51.choose());
    });
    ɵɵelementStart(3, "input", 5, 6);
    ɵɵlistener("change", function FileUpload_div_0_Template_input_change_3_listener($event) {
      ɵɵrestoreView(_r48);
      const ctx_r52 = ɵɵnextContext();
      return ɵɵresetView(ctx_r52.onFileSelect($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(5, FileUpload_div_0_span_5_Template, 1, 5, "span", 7)(6, FileUpload_div_0_ng_container_6_Template, 3, 2, "ng-container", 8);
    ɵɵelementStart(7, "span", 9);
    ɵɵtext(8);
    ɵɵelementEnd()();
    ɵɵtemplate(9, FileUpload_div_0_p_button_9_Template, 3, 5, "p-button", 10)(10, FileUpload_div_0_p_button_10_Template, 3, 5, "p-button", 10)(11, FileUpload_div_0_ng_container_11_Template, 1, 0, "ng-container", 11);
    ɵɵelementEnd();
    ɵɵelementStart(12, "div", 12, 13);
    ɵɵlistener("dragenter", function FileUpload_div_0_Template_div_dragenter_12_listener($event) {
      ɵɵrestoreView(_r48);
      const ctx_r53 = ɵɵnextContext();
      return ɵɵresetView(ctx_r53.onDragEnter($event));
    })("dragleave", function FileUpload_div_0_Template_div_dragleave_12_listener($event) {
      ɵɵrestoreView(_r48);
      const ctx_r54 = ɵɵnextContext();
      return ɵɵresetView(ctx_r54.onDragLeave($event));
    })("drop", function FileUpload_div_0_Template_div_drop_12_listener($event) {
      ɵɵrestoreView(_r48);
      const ctx_r55 = ɵɵnextContext();
      return ɵɵresetView(ctx_r55.onDrop($event));
    });
    ɵɵtemplate(14, FileUpload_div_0_p_progressBar_14_Template, 1, 2, "p-progressBar", 14);
    ɵɵelement(15, "p-messages", 15);
    ɵɵtemplate(16, FileUpload_div_0_div_16_Template, 3, 2, "div", 16)(17, FileUpload_div_0_ng_container_17_Template, 1, 0, "ng-container", 17);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.styleClass);
    ɵɵproperty("ngClass", "p-fileupload p-fileupload-advanced p-component")("ngStyle", ctx_r0.style);
    ɵɵattribute("data-pc-name", "fileupload")("data-pc-section", "root");
    ɵɵadvance(1);
    ɵɵattribute("data-pc-section", "buttonbar");
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0.chooseStyleClass);
    ɵɵproperty("ngClass", ɵɵpureFunction2(30, _c3, ctx_r0.focus, ctx_r0.disabled || ctx_r0.isChooseDisabled()));
    ɵɵattribute("data-pc-section", "choosebutton");
    ɵɵadvance(1);
    ɵɵproperty("multiple", ctx_r0.multiple)("accept", ctx_r0.accept)("disabled", ctx_r0.disabled || ctx_r0.isChooseDisabled());
    ɵɵattribute("title", "")("data-pc-section", "input");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.chooseIcon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.chooseIcon);
    ɵɵadvance(1);
    ɵɵattribute("data-pc-section", "choosebuttonlabel");
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r0.chooseButtonLabel);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.auto && ctx_r0.showUploadButton);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.auto && ctx_r0.showCancelButton);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.toolbarTemplate);
    ɵɵadvance(1);
    ɵɵattribute("data-pc-section", "content");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.hasFiles());
    ɵɵadvance(1);
    ɵɵproperty("value", ctx_r0.msgs)("enableService", false);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.hasFiles());
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.contentTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(33, _c4, ctx_r0.files));
  }
}
function FileUpload_div_1_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 25);
  }
  if (rf & 2) {
    const ctx_r61 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ctx_r61.uploadIcon);
  }
}
function FileUpload_div_1_ng_container_3_ng_container_2_UploadIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "UploadIcon", 21);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-button-icon p-button-icon-left");
  }
}
function FileUpload_div_1_ng_container_3_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function FileUpload_div_1_ng_container_3_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FileUpload_div_1_ng_container_3_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_1_ng_container_3_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 22);
    ɵɵtemplate(1, FileUpload_div_1_ng_container_3_ng_container_2_span_2_1_Template, 1, 0, null, 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r64 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r64.uploadIconTemplate);
  }
}
function FileUpload_div_1_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, FileUpload_div_1_ng_container_3_ng_container_2_UploadIcon_1_Template, 1, 1, "UploadIcon", 19)(2, FileUpload_div_1_ng_container_3_ng_container_2_span_2_Template, 2, 1, "span", 20);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r62 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r62.uploadIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r62.uploadIconTemplate);
  }
}
function FileUpload_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, FileUpload_div_1_ng_container_3_span_1_Template, 1, 1, "span", 24)(2, FileUpload_div_1_ng_container_3_ng_container_2_Template, 3, 2, "ng-container", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r56 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r56.uploadIcon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r56.uploadIcon);
  }
}
function FileUpload_div_1_ng_template_4_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 42);
  }
  if (rf & 2) {
    const ctx_r67 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ctx_r67.chooseIcon);
  }
}
function FileUpload_div_1_ng_template_4_ng_container_1_PlusIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "PlusIcon", 21);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-button-icon p-button-icon-left pi");
    ɵɵattribute("aria-hidden", true)("data-pc-section", "uploadicon");
  }
}
function FileUpload_div_1_ng_template_4_ng_container_1_span_2_1_ng_template_0_Template(rf, ctx) {
}
function FileUpload_div_1_ng_template_4_ng_container_1_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FileUpload_div_1_ng_template_4_ng_container_1_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_1_ng_template_4_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 44);
    ɵɵtemplate(1, FileUpload_div_1_ng_template_4_ng_container_1_span_2_1_Template, 1, 0, null, 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r70 = ɵɵnextContext(4);
    ɵɵattribute("aria-hidden", true)("data-pc-section", "uploadicon");
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r70.chooseIconTemplate);
  }
}
function FileUpload_div_1_ng_template_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, FileUpload_div_1_ng_template_4_ng_container_1_PlusIcon_1_Template, 1, 3, "PlusIcon", 19)(2, FileUpload_div_1_ng_template_4_ng_container_1_span_2_Template, 2, 3, "span", 43);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r68 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r68.chooseIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r68.chooseIconTemplate);
  }
}
function FileUpload_div_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FileUpload_div_1_ng_template_4_span_0_Template, 1, 1, "span", 41)(1, FileUpload_div_1_ng_template_4_ng_container_1_Template, 3, 2, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r57 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r57.chooseIcon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r57.chooseIcon);
  }
}
function FileUpload_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r59 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "label");
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r59.basicButtonLabel);
  }
}
function FileUpload_div_1_input_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 45, 46);
    ɵɵlistener("change", function FileUpload_div_1_input_7_Template_input_change_0_listener($event) {
      ɵɵrestoreView(_r75);
      const ctx_r74 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r74.onFileSelect($event));
    })("focus", function FileUpload_div_1_input_7_Template_input_focus_0_listener() {
      ɵɵrestoreView(_r75);
      const ctx_r76 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r76.onFocus());
    })("blur", function FileUpload_div_1_input_7_Template_input_blur_0_listener() {
      ɵɵrestoreView(_r75);
      const ctx_r77 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r77.onBlur());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r60 = ɵɵnextContext(2);
    ɵɵproperty("accept", ctx_r60.accept)("multiple", ctx_r60.multiple)("disabled", ctx_r60.disabled);
    ɵɵattribute("data-pc-section", "input");
  }
}
var _c5 = (a1, a2, a3, a4) => ({
  "p-button p-component p-fileupload-choose": true,
  "p-button-icon-only": a1,
  "p-fileupload-choose-selected": a2,
  "p-focus": a3,
  "p-disabled": a4
});
function FileUpload_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 35);
    ɵɵelement(1, "p-messages", 15);
    ɵɵelementStart(2, "span", 36);
    ɵɵlistener("click", function FileUpload_div_1_Template_span_click_2_listener() {
      ɵɵrestoreView(_r79);
      const ctx_r78 = ɵɵnextContext();
      return ɵɵresetView(ctx_r78.onBasicUploaderClick());
    })("keydown", function FileUpload_div_1_Template_span_keydown_2_listener($event) {
      ɵɵrestoreView(_r79);
      const ctx_r80 = ɵɵnextContext();
      return ɵɵresetView(ctx_r80.onBasicKeydown($event));
    });
    ɵɵtemplate(3, FileUpload_div_1_ng_container_3_Template, 3, 2, "ng-container", 37)(4, FileUpload_div_1_ng_template_4_Template, 2, 2, "ng-template", null, 38, ɵɵtemplateRefExtractor)(6, FileUpload_div_1_span_6_Template, 2, 2, "span", 39)(7, FileUpload_div_1_input_7_Template, 2, 4, "input", 40);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const _r58 = ɵɵreference(5);
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("data-pc-name", "fileupload");
    ɵɵadvance(1);
    ɵɵproperty("value", ctx_r1.msgs)("enableService", false);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r1.styleClass);
    ɵɵproperty("ngClass", ɵɵpureFunction4(12, _c5, !ctx_r1.basicButtonLabel, ctx_r1.hasFiles(), ctx_r1.focus, ctx_r1.disabled))("ngStyle", ctx_r1.style);
    ɵɵattribute("data-pc-section", "choosebutton");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.hasFiles() && !ctx_r1.auto)("ngIfElse", _r58);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r1.basicButtonLabel);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1.hasFiles());
  }
}
var FileUpload = class _FileUpload {
  document;
  platformId;
  renderer;
  el;
  sanitizer;
  zone;
  http;
  cd;
  config;
  /**
   * Name of the request parameter to identify the files at backend.
   * @group Props
   */
  name;
  /**
   * Remote url to upload the files.
   * @group Props
   */
  url;
  /**
   * HTTP method to send the files to the url such as "post" and "put".
   * @group Props
   */
  method = "post";
  /**
   * Used to select multiple files at once from file dialog.
   * @group Props
   */
  multiple;
  /**
   * Comma-separated list of pattern to restrict the allowed file types. Can be any combination of either the MIME types (such as "image/*") or the file extensions (such as ".jpg").
   * @group Props
   */
  accept;
  /**
   * Disables the upload functionality.
   * @group Props
   */
  disabled;
  /**
   * When enabled, upload begins automatically after selection is completed.
   * @group Props
   */
  auto;
  /**
   * Cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates.
   * @group Props
   */
  withCredentials;
  /**
   * Maximum file size allowed in bytes.
   * @group Props
   */
  maxFileSize;
  /**
   * Summary message of the invalid file size.
   * @group Props
   */
  invalidFileSizeMessageSummary = "{0}: Invalid file size, ";
  /**
   * Detail message of the invalid file size.
   * @group Props
   */
  invalidFileSizeMessageDetail = "maximum upload size is {0}.";
  /**
   * Summary message of the invalid file type.
   * @group Props
   */
  invalidFileTypeMessageSummary = "{0}: Invalid file type, ";
  /**
   * Detail message of the invalid file type.
   * @group Props
   */
  invalidFileTypeMessageDetail = "allowed file types: {0}.";
  /**
   * Detail message of the invalid file type.
   * @group Props
   */
  invalidFileLimitMessageDetail = "limit is {0} at most.";
  /**
   * Summary message of the invalid file type.
   * @group Props
   */
  invalidFileLimitMessageSummary = "Maximum number of files exceeded, ";
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Width of the image thumbnail in pixels.
   * @group Props
   */
  previewWidth = 50;
  /**
   * Label of the choose button. Defaults to PrimeNG Locale configuration.
   * @group Props
   */
  chooseLabel;
  /**
   * Label of the upload button. Defaults to PrimeNG Locale configuration.
   * @group Props
   */
  uploadLabel;
  /**
   * Label of the cancel button. Defaults to PrimeNG Locale configuration.
   * @group Props
   */
  cancelLabel;
  /**
   * Icon of the choose button.
   * @group Props
   */
  chooseIcon;
  /**
   * Icon of the upload button.
   * @group Props
   */
  uploadIcon;
  /**
   * Icon of the cancel button.
   * @group Props
   */
  cancelIcon;
  /**
   * Whether to show the upload button.
   * @group Props
   */
  showUploadButton = true;
  /**
   * Whether to show the cancel button.
   * @group Props
   */
  showCancelButton = true;
  /**
   * Defines the UI of the component.
   * @group Props
   */
  mode = "advanced";
  /**
   * HttpHeaders class represents the header configuration options for an HTTP request.
   * @group Props
   */
  headers;
  /**
   * Whether to use the default upload or a manual implementation defined in uploadHandler callback. Defaults to PrimeNG Locale configuration.
   * @group Props
   */
  customUpload;
  /**
   * Maximum number of files that can be uploaded.
   * @group Props
   */
  fileLimit;
  /**
   * Style class of the upload button.
   * @group Props
   */
  uploadStyleClass;
  /**
   * Style class of the cancel button.
   * @group Props
   */
  cancelStyleClass;
  /**
   * Style class of the remove button.
   * @group Props
   */
  removeStyleClass;
  /**
   * Style class of the choose button.
   * @group Props
   */
  chooseStyleClass;
  /**
   * Callback to invoke before file upload is initialized.
   * @param {FileBeforeUploadEvent} event - Custom upload event.
   * @group Emits
   */
  onBeforeUpload = new EventEmitter();
  /**
   * An event indicating that the request was sent to the server. Useful when a request may be retried multiple times, to distinguish between retries on the final event stream.
   * @param {FileSendEvent} event - Custom send event.
   * @group Emits
   */
  onSend = new EventEmitter();
  /**
   * Callback to invoke when file upload is complete.
   * @param {FileUploadEvent} event - Custom upload event.
   * @group Emits
   */
  onUpload = new EventEmitter();
  /**
   * Callback to invoke if file upload fails.
   * @param {FileUploadErrorEvent} event - Custom error event.
   * @group Emits
   */
  onError = new EventEmitter();
  /**
   * Callback to invoke when files in queue are removed without uploading using clear all button.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onClear = new EventEmitter();
  /**
   * Callback to invoke when a file is removed without uploading using clear button of a file.
   * @param {FileRemoveEvent} event - Remove event.
   * @group Emits
   */
  onRemove = new EventEmitter();
  /**
   * Callback to invoke when files are selected.
   * @param {FileSelectEvent} event - Select event.
   * @group Emits
   */
  onSelect = new EventEmitter();
  /**
   * Callback to invoke when files are being uploaded.
   * @param {FileProgressEvent} event - Progress event.
   * @group Emits
   */
  onProgress = new EventEmitter();
  /**
   * Callback to invoke in custom upload mode to upload the files manually.
   * @param {FileUploadHandlerEvent} event - Upload handler event.
   * @group Emits
   */
  uploadHandler = new EventEmitter();
  /**
   * This event is triggered if an error occurs while loading an image file.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onImageError = new EventEmitter();
  templates;
  advancedFileInput;
  basicFileInput;
  content;
  set files(files) {
    this._files = [];
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      if (this.validate(file)) {
        if (this.isImage(file)) {
          file.objectURL = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(files[i]));
        }
        this._files.push(files[i]);
      }
    }
  }
  get files() {
    return this._files;
  }
  get basicButtonLabel() {
    if (this.auto || !this.hasFiles()) {
      return this.chooseLabel;
    }
    return this.uploadLabel ?? this.files[0].name;
  }
  _files = [];
  progress = 0;
  dragHighlight;
  msgs;
  fileTemplate;
  contentTemplate;
  toolbarTemplate;
  chooseIconTemplate;
  uploadIconTemplate;
  cancelIconTemplate;
  uploadedFileCount = 0;
  focus;
  uploading;
  duplicateIEEvent;
  // flag to recognize duplicate onchange event for file input
  translationSubscription;
  dragOverListener;
  constructor(document, platformId, renderer, el, sanitizer, zone, http, cd, config) {
    this.document = document;
    this.platformId = platformId;
    this.renderer = renderer;
    this.el = el;
    this.sanitizer = sanitizer;
    this.zone = zone;
    this.http = http;
    this.cd = cd;
    this.config = config;
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "file":
          this.fileTemplate = item.template;
          break;
        case "content":
          this.contentTemplate = item.template;
          break;
        case "toolbar":
          this.toolbarTemplate = item.template;
          break;
        case "chooseicon":
          this.chooseIconTemplate = item.template;
          break;
        case "uploadicon":
          this.uploadIconTemplate = item.template;
          break;
        case "cancelicon":
          this.cancelIconTemplate = item.template;
          break;
        default:
          this.fileTemplate = item.template;
          break;
      }
    });
  }
  ngOnInit() {
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      this.cd.markForCheck();
    });
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.mode === "advanced") {
        this.zone.runOutsideAngular(() => {
          if (this.content) {
            this.dragOverListener = this.renderer.listen(this.content.nativeElement, "dragover", this.onDragOver.bind(this));
          }
        });
      }
    }
  }
  getTranslation(option) {
    return this.config.getTranslation(option);
  }
  choose() {
    this.advancedFileInput?.nativeElement.click();
  }
  onFileSelect(event) {
    if (event.type !== "drop" && this.isIE11() && this.duplicateIEEvent) {
      this.duplicateIEEvent = false;
      return;
    }
    this.msgs = [];
    if (!this.multiple) {
      this.files = [];
    }
    let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      if (!this.isFileSelected(file)) {
        if (this.validate(file)) {
          if (this.isImage(file)) {
            file.objectURL = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(files[i]));
          }
          this.files.push(files[i]);
        }
      }
    }
    this.onSelect.emit({
      originalEvent: event,
      files,
      currentFiles: this.files
    });
    if (this.fileLimit) {
      this.checkFileLimit();
    }
    if (this.hasFiles() && this.auto && (!(this.mode === "advanced") || !this.isFileLimitExceeded())) {
      this.upload();
    }
    if (event.type !== "drop" && this.isIE11()) {
      this.clearIEInput();
    } else {
      this.clearInputElement();
    }
  }
  isFileSelected(file) {
    for (let sFile of this.files) {
      if (sFile.name + sFile.type + sFile.size === file.name + file.type + file.size) {
        return true;
      }
    }
    return false;
  }
  isIE11() {
    if (isPlatformBrowser(this.platformId)) {
      return !!this.document.defaultView["MSInputMethodContext"] && !!this.document["documentMode"];
    }
  }
  validate(file) {
    this.msgs = this.msgs || [];
    if (this.accept && !this.isFileTypeValid(file)) {
      this.msgs.push({
        severity: "error",
        summary: this.invalidFileTypeMessageSummary.replace("{0}", file.name),
        detail: this.invalidFileTypeMessageDetail.replace("{0}", this.accept)
      });
      return false;
    }
    if (this.maxFileSize && file.size > this.maxFileSize) {
      this.msgs.push({
        severity: "error",
        summary: this.invalidFileSizeMessageSummary.replace("{0}", file.name),
        detail: this.invalidFileSizeMessageDetail.replace("{0}", this.formatSize(this.maxFileSize))
      });
      return false;
    }
    return true;
  }
  isFileTypeValid(file) {
    let acceptableTypes = this.accept?.split(",").map((type) => type.trim());
    for (let type of acceptableTypes) {
      let acceptable = this.isWildcard(type) ? this.getTypeClass(file.type) === this.getTypeClass(type) : file.type == type || this.getFileExtension(file).toLowerCase() === type.toLowerCase();
      if (acceptable) {
        return true;
      }
    }
    return false;
  }
  getTypeClass(fileType) {
    return fileType.substring(0, fileType.indexOf("/"));
  }
  isWildcard(fileType) {
    return fileType.indexOf("*") !== -1;
  }
  getFileExtension(file) {
    return "." + file.name.split(".").pop();
  }
  isImage(file) {
    return /^image\//.test(file.type);
  }
  onImageLoad(img) {
    window.URL.revokeObjectURL(img.src);
  }
  /**
   * Uploads the selected files.
   * @group Method
   */
  upload() {
    if (this.customUpload) {
      if (this.fileLimit) {
        this.uploadedFileCount += this.files.length;
      }
      this.uploadHandler.emit({
        files: this.files
      });
      this.cd.markForCheck();
    } else {
      this.uploading = true;
      this.msgs = [];
      let formData = new FormData();
      this.onBeforeUpload.emit({
        formData
      });
      for (let i = 0; i < this.files.length; i++) {
        formData.append(this.name, this.files[i], this.files[i].name);
      }
      this.http.request(this.method, this.url, {
        body: formData,
        headers: this.headers,
        reportProgress: true,
        observe: "events",
        withCredentials: this.withCredentials
      }).subscribe((event) => {
        switch (event.type) {
          case HttpEventType.Sent:
            this.onSend.emit({
              originalEvent: event,
              formData
            });
            break;
          case HttpEventType.Response:
            this.uploading = false;
            this.progress = 0;
            if (event["status"] >= 200 && event["status"] < 300) {
              if (this.fileLimit) {
                this.uploadedFileCount += this.files.length;
              }
              this.onUpload.emit({
                originalEvent: event,
                files: this.files
              });
            } else {
              this.onError.emit({
                files: this.files
              });
            }
            this.clear();
            break;
          case HttpEventType.UploadProgress: {
            if (event["loaded"]) {
              this.progress = Math.round(event["loaded"] * 100 / event["total"]);
            }
            this.onProgress.emit({
              originalEvent: event,
              progress: this.progress
            });
            break;
          }
        }
        this.cd.markForCheck();
      }, (error) => {
        this.uploading = false;
        this.onError.emit({
          files: this.files,
          error
        });
      });
    }
  }
  /**
   * Clears the files list.
   * @group Method
   */
  clear() {
    this.files = [];
    this.uploadedFileCount = 0;
    this.onClear.emit();
    this.clearInputElement();
    this.cd.markForCheck();
  }
  remove(event, index) {
    this.clearInputElement();
    this.onRemove.emit({
      originalEvent: event,
      file: this.files[index]
    });
    this.files.splice(index, 1);
    this.checkFileLimit();
  }
  isFileLimitExceeded() {
    const isAutoMode = this.auto;
    const totalFileCount = isAutoMode ? this.files.length : this.files.length + this.uploadedFileCount;
    if (this.fileLimit && this.fileLimit <= totalFileCount && this.focus) {
      this.focus = false;
    }
    return this.fileLimit && this.fileLimit < totalFileCount;
  }
  isChooseDisabled() {
    if (this.auto) {
      return this.fileLimit && this.fileLimit <= this.files.length;
    } else {
      return this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount;
    }
  }
  checkFileLimit() {
    this.msgs ??= [];
    if (this.isFileLimitExceeded()) {
      this.msgs.push({
        severity: "error",
        summary: this.invalidFileLimitMessageSummary.replace("{0}", this.fileLimit.toString()),
        detail: this.invalidFileLimitMessageDetail.replace("{0}", this.fileLimit.toString())
      });
    }
  }
  clearInputElement() {
    if (this.advancedFileInput && this.advancedFileInput.nativeElement) {
      this.advancedFileInput.nativeElement.value = "";
    }
    if (this.basicFileInput && this.basicFileInput.nativeElement) {
      this.basicFileInput.nativeElement.value = "";
    }
  }
  clearIEInput() {
    if (this.advancedFileInput && this.advancedFileInput.nativeElement) {
      this.duplicateIEEvent = true;
      this.advancedFileInput.nativeElement.value = "";
    }
  }
  hasFiles() {
    return this.files && this.files.length > 0;
  }
  onDragEnter(e) {
    if (!this.disabled) {
      e.stopPropagation();
      e.preventDefault();
    }
  }
  onDragOver(e) {
    if (!this.disabled) {
      DomHandler.addClass(this.content?.nativeElement, "p-fileupload-highlight");
      this.dragHighlight = true;
      e.stopPropagation();
      e.preventDefault();
    }
  }
  onDragLeave(event) {
    if (!this.disabled) {
      DomHandler.removeClass(this.content?.nativeElement, "p-fileupload-highlight");
    }
  }
  onDrop(event) {
    if (!this.disabled) {
      DomHandler.removeClass(this.content?.nativeElement, "p-fileupload-highlight");
      event.stopPropagation();
      event.preventDefault();
      let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
      let allowDrop = this.multiple || files && files.length === 1;
      if (allowDrop) {
        this.onFileSelect(event);
      }
    }
  }
  onFocus() {
    this.focus = true;
  }
  onBlur() {
    this.focus = false;
  }
  formatSize(bytes) {
    const k = 1024;
    const dm = 3;
    const sizes = this.getTranslation(TranslationKeys.FILE_SIZE_TYPES);
    if (bytes === 0) {
      return `0 ${sizes[0]}`;
    }
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const formattedSize = (bytes / Math.pow(k, i)).toFixed(dm);
    return `${formattedSize} ${sizes[i]}`;
  }
  onBasicUploaderClick() {
    if (this.hasFiles())
      this.upload();
    else
      this.basicFileInput?.nativeElement.click();
  }
  onBasicKeydown(event) {
    switch (event.code) {
      case "Space":
      case "Enter":
        this.onBasicUploaderClick();
        event.preventDefault();
        break;
    }
  }
  imageError(event) {
    this.onImageError.emit(event);
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  get chooseButtonLabel() {
    return this.chooseLabel || this.config.getTranslation(TranslationKeys.CHOOSE);
  }
  get uploadButtonLabel() {
    return this.uploadLabel || this.config.getTranslation(TranslationKeys.UPLOAD);
  }
  get cancelButtonLabel() {
    return this.cancelLabel || this.config.getTranslation(TranslationKeys.CANCEL);
  }
  ngOnDestroy() {
    if (this.content && this.content.nativeElement) {
      if (this.dragOverListener) {
        this.dragOverListener();
        this.dragOverListener = null;
      }
    }
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
  }
  static ɵfac = function FileUpload_Factory(t) {
    return new (t || _FileUpload)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(HttpClient), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PrimeNGConfig));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _FileUpload,
    selectors: [["p-fileUpload"]],
    contentQueries: function FileUpload_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function FileUpload_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c02, 5);
        ɵɵviewQuery(_c12, 5);
        ɵɵviewQuery(_c2, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.advancedFileInput = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.basicFileInput = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      name: "name",
      url: "url",
      method: "method",
      multiple: "multiple",
      accept: "accept",
      disabled: "disabled",
      auto: "auto",
      withCredentials: "withCredentials",
      maxFileSize: "maxFileSize",
      invalidFileSizeMessageSummary: "invalidFileSizeMessageSummary",
      invalidFileSizeMessageDetail: "invalidFileSizeMessageDetail",
      invalidFileTypeMessageSummary: "invalidFileTypeMessageSummary",
      invalidFileTypeMessageDetail: "invalidFileTypeMessageDetail",
      invalidFileLimitMessageDetail: "invalidFileLimitMessageDetail",
      invalidFileLimitMessageSummary: "invalidFileLimitMessageSummary",
      style: "style",
      styleClass: "styleClass",
      previewWidth: "previewWidth",
      chooseLabel: "chooseLabel",
      uploadLabel: "uploadLabel",
      cancelLabel: "cancelLabel",
      chooseIcon: "chooseIcon",
      uploadIcon: "uploadIcon",
      cancelIcon: "cancelIcon",
      showUploadButton: "showUploadButton",
      showCancelButton: "showCancelButton",
      mode: "mode",
      headers: "headers",
      customUpload: "customUpload",
      fileLimit: "fileLimit",
      uploadStyleClass: "uploadStyleClass",
      cancelStyleClass: "cancelStyleClass",
      removeStyleClass: "removeStyleClass",
      chooseStyleClass: "chooseStyleClass",
      files: "files"
    },
    outputs: {
      onBeforeUpload: "onBeforeUpload",
      onSend: "onSend",
      onUpload: "onUpload",
      onError: "onError",
      onClear: "onClear",
      onRemove: "onRemove",
      onSelect: "onSelect",
      onProgress: "onProgress",
      uploadHandler: "uploadHandler",
      onImageError: "onImageError"
    },
    decls: 2,
    vars: 2,
    consts: [[3, "ngClass", "ngStyle", "class", 4, "ngIf"], ["class", "p-fileupload p-fileupload-basic p-component", 4, "ngIf"], [3, "ngClass", "ngStyle"], [1, "p-fileupload-buttonbar"], ["pRipple", "", "tabindex", "0", 1, "p-button", "p-component", "p-fileupload-choose", 3, "ngClass", "focus", "blur", "click", "keydown.enter"], ["type", "file", 3, "multiple", "accept", "disabled", "change"], ["advancedfileinput", ""], [3, "ngClass", "class", 4, "ngIf"], [4, "ngIf"], [1, "p-button-label"], ["type", "button", 3, "label", "disabled", "styleClass", "onClick", 4, "ngIf"], [4, "ngTemplateOutlet"], [1, "p-fileupload-content", 3, "dragenter", "dragleave", "drop"], ["content", ""], [3, "value", "showValue", 4, "ngIf"], [3, "value", "enableService"], ["class", "p-fileupload-files", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], [3, "styleClass", 4, "ngIf"], ["class", "p-button-icon p-button-icon-left", 4, "ngIf"], [3, "styleClass"], [1, "p-button-icon", "p-button-icon-left"], ["type", "button", 3, "label", "disabled", "styleClass", "onClick"], ["class", "p-button-icon p-button-icon-left", 3, "ngClass", 4, "ngIf"], [1, "p-button-icon", "p-button-icon-left", 3, "ngClass"], [3, "value", "showValue"], [1, "p-fileupload-files"], ["class", "p-fileupload-row", 4, "ngFor", "ngForOf"], [1, "p-fileupload-row"], [3, "src", "width", "error", 4, "ngIf"], [1, "p-fileupload-filename"], ["type", "button", "pButton", "", 1, "p-button-icon-only", 3, "disabled", "click"], [3, "src", "width", "error"], ["ngFor", "", 3, "ngForOf", "ngForTemplate"], [1, "p-fileupload", "p-fileupload-basic", "p-component"], ["tabindex", "0", "pRipple", "", 3, "ngClass", "ngStyle", "click", "keydown"], [4, "ngIf", "ngIfElse"], ["chooseSection", ""], ["class", "p-button-label", 4, "ngIf"], ["type", "file", 3, "accept", "multiple", "disabled", "change", "focus", "blur", 4, "ngIf"], ["class", "p-button-icon p-button-icon-left pi", 3, "ngClass", 4, "ngIf"], [1, "p-button-icon", "p-button-icon-left", "pi", 3, "ngClass"], ["class", "p-button-icon p-button-icon-left pi", 4, "ngIf"], [1, "p-button-icon", "p-button-icon-left", "pi"], ["type", "file", 3, "accept", "multiple", "disabled", "change", "focus", "blur"], ["basicfileinput", ""]],
    template: function FileUpload_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, FileUpload_div_0_Template, 18, 35, "div", 0)(1, FileUpload_div_1_Template, 8, 17, "div", 1);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.mode === "advanced");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.mode === "basic");
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, ButtonDirective, Button, ProgressBar, Messages, Ripple, PlusIcon, UploadIcon, TimesIcon],
    styles: ["@layer primeng{.p-fileupload-content{position:relative}.p-fileupload-row{display:flex;align-items:center}.p-fileupload-row>div{flex:1 1 auto;width:25%}.p-fileupload-row>div:last-child{text-align:right}.p-fileupload-content .p-progressbar{width:100%;position:absolute;top:0;left:0}.p-button.p-fileupload-choose{position:relative;overflow:hidden}.p-button.p-fileupload-choose input[type=file],.p-fileupload-choose.p-fileupload-choose-selected input[type=file]{display:none}.p-fluid .p-fileupload .p-button{width:auto}.p-fileupload-filename{word-break:break-all}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUpload, [{
    type: Component,
    args: [{
      selector: "p-fileUpload",
      template: `
        <div [ngClass]="'p-fileupload p-fileupload-advanced p-component'" [ngStyle]="style" [class]="styleClass" *ngIf="mode === 'advanced'" [attr.data-pc-name]="'fileupload'" [attr.data-pc-section]="'root'">
            <div class="p-fileupload-buttonbar" [attr.data-pc-section]="'buttonbar'">
                <span
                    class="p-button p-component p-fileupload-choose"
                    [ngClass]="{ 'p-focus': focus, 'p-disabled': disabled || isChooseDisabled() }"
                    (focus)="onFocus()"
                    (blur)="onBlur()"
                    pRipple
                    (click)="choose()"
                    (keydown.enter)="choose()"
                    tabindex="0"
                    [class]="chooseStyleClass"
                    [attr.data-pc-section]="'choosebutton'"
                >
                    <input #advancedfileinput type="file" (change)="onFileSelect($event)" [multiple]="multiple" [accept]="accept" [disabled]="disabled || isChooseDisabled()" [attr.title]="''" [attr.data-pc-section]="'input'" />
                    <span *ngIf="chooseIcon" [ngClass]="'p-button-icon p-button-icon-left'" [class]="chooseIcon" [attr.aria-label]="true" [attr.data-pc-section]="'chooseicon'"></span>
                    <ng-container *ngIf="!chooseIcon">
                        <PlusIcon *ngIf="!chooseIconTemplate" [styleClass]="'p-button-icon p-button-icon-left'" [attr.aria-label]="true" [attr.data-pc-section]="'chooseicon'" />
                        <span *ngIf="chooseIconTemplate" class="p-button-icon p-button-icon-left" [attr.aria-label]="true" [attr.data-pc-section]="'chooseicon'">
                            <ng-template *ngTemplateOutlet="chooseIconTemplate"></ng-template>
                        </span>
                    </ng-container>
                    <span class="p-button-label" [attr.data-pc-section]="'choosebuttonlabel'">{{ chooseButtonLabel }}</span>
                </span>

                <p-button *ngIf="!auto && showUploadButton" type="button" [label]="uploadButtonLabel" (onClick)="upload()" [disabled]="!hasFiles() || isFileLimitExceeded()" [styleClass]="uploadStyleClass">
                    <span *ngIf="uploadIcon" [ngClass]="uploadIcon" [attr.aria-hidden]="true" class="p-button-icon p-button-icon-left"></span>
                    <ng-container *ngIf="!uploadIcon">
                        <UploadIcon *ngIf="!uploadIconTemplate" [styleClass]="'p-button-icon p-button-icon-left'" />
                        <span *ngIf="uploadIconTemplate" class="p-button-icon p-button-icon-left" [attr.aria-hidden]="true">
                            <ng-template *ngTemplateOutlet="uploadIconTemplate"></ng-template>
                        </span>
                    </ng-container>
                </p-button>
                <p-button *ngIf="!auto && showCancelButton" type="button" [label]="cancelButtonLabel" (onClick)="clear()" [disabled]="!hasFiles() || uploading" [styleClass]="cancelStyleClass">
                    <span *ngIf="cancelIcon" [ngClass]="cancelIcon" class="p-button-icon p-button-icon-left"></span>
                    <ng-container *ngIf="!cancelIcon">
                        <TimesIcon *ngIf="!cancelIconTemplate" [styleClass]="'p-button-icon p-button-icon-left'" [attr.aria-hidden]="true" />
                        <span *ngIf="cancelIconTemplate" class="p-button-icon p-button-icon-left" [attr.aria-hidden]="true">
                            <ng-template *ngTemplateOutlet="cancelIconTemplate"></ng-template>
                        </span>
                    </ng-container>
                </p-button>

                <ng-container *ngTemplateOutlet="toolbarTemplate"></ng-container>
            </div>
            <div #content class="p-fileupload-content" (dragenter)="onDragEnter($event)" (dragleave)="onDragLeave($event)" (drop)="onDrop($event)" [attr.data-pc-section]="'content'">
                <p-progressBar [value]="progress" [showValue]="false" *ngIf="hasFiles()"></p-progressBar>

                <p-messages [value]="msgs" [enableService]="false"></p-messages>

                <div class="p-fileupload-files" *ngIf="hasFiles()">
                    <div *ngIf="!fileTemplate">
                        <div class="p-fileupload-row" *ngFor="let file of files; let i = index">
                            <div><img [src]="file.objectURL" *ngIf="isImage(file)" [width]="previewWidth" (error)="imageError($event)" /></div>
                            <div class="p-fileupload-filename">{{ file.name }}</div>
                            <div>{{ formatSize(file.size) }}</div>
                            <div>
                                <button type="button" pButton (click)="remove($event, i)" [disabled]="uploading" class="p-button-icon-only" [class]="removeStyleClass">
                                    <TimesIcon *ngIf="!cancelIconTemplate" />
                                    <ng-template *ngTemplateOutlet="cancelIconTemplate"></ng-template>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div *ngIf="fileTemplate">
                        <ng-template ngFor [ngForOf]="files" [ngForTemplate]="fileTemplate"></ng-template>
                    </div>
                </div>
                <ng-container *ngTemplateOutlet="contentTemplate; context: { $implicit: files }"></ng-container>
            </div>
        </div>
        <div class="p-fileupload p-fileupload-basic p-component" *ngIf="mode === 'basic'" [attr.data-pc-name]="'fileupload'">
            <p-messages [value]="msgs" [enableService]="false"></p-messages>
            <span
                [ngClass]="{ 'p-button p-component p-fileupload-choose': true, 'p-button-icon-only': !basicButtonLabel, 'p-fileupload-choose-selected': hasFiles(), 'p-focus': focus, 'p-disabled': disabled }"
                [ngStyle]="style"
                [class]="styleClass"
                (click)="onBasicUploaderClick()"
                (keydown)="onBasicKeydown($event)"
                tabindex="0"
                pRipple
                [attr.data-pc-section]="'choosebutton'"
            >
                <ng-container *ngIf="hasFiles() && !auto; else chooseSection">
                    <span *ngIf="uploadIcon" class="p-button-icon p-button-icon-left" [ngClass]="uploadIcon"></span>
                    <ng-container *ngIf="!uploadIcon">
                        <UploadIcon *ngIf="!uploadIconTemplate" [styleClass]="'p-button-icon p-button-icon-left'" />
                        <span *ngIf="uploadIconTemplate" class="p-button-icon p-button-icon-left">
                            <ng-template *ngTemplateOutlet="uploadIconTemplate"></ng-template>
                        </span>
                    </ng-container>
                </ng-container>
                <ng-template #chooseSection>
                    <span *ngIf="chooseIcon" class="p-button-icon p-button-icon-left pi" [ngClass]="chooseIcon"></span>
                    <ng-container *ngIf="!chooseIcon">
                        <PlusIcon [styleClass]="'p-button-icon p-button-icon-left pi'" *ngIf="!chooseIconTemplate" [attr.aria-hidden]="true" [attr.data-pc-section]="'uploadicon'" />
                        <span *ngIf="chooseIconTemplate" class="p-button-icon p-button-icon-left pi" [attr.aria-hidden]="true" [attr.data-pc-section]="'uploadicon'">
                            <ng-template *ngTemplateOutlet="chooseIconTemplate"></ng-template>
                        </span>
                    </ng-container>
                </ng-template>
                <span *ngIf="basicButtonLabel" class="p-button-label" [attr.data-pc-section]="'label'">{{ basicButtonLabel }}</span>
                <input #basicfileinput type="file" [accept]="accept" [multiple]="multiple" [disabled]="disabled" (change)="onFileSelect($event)" *ngIf="!hasFiles()" (focus)="onFocus()" (blur)="onBlur()" [attr.data-pc-section]="'input'" />
            </span>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-fileupload-content{position:relative}.p-fileupload-row{display:flex;align-items:center}.p-fileupload-row>div{flex:1 1 auto;width:25%}.p-fileupload-row>div:last-child{text-align:right}.p-fileupload-content .p-progressbar{width:100%;position:absolute;top:0;left:0}.p-button.p-fileupload-choose{position:relative;overflow:hidden}.p-button.p-fileupload-choose input[type=file],.p-fileupload-choose.p-fileupload-choose-selected input[type=file]{display:none}.p-fluid .p-fileupload .p-button{width:auto}.p-fileupload-filename{word-break:break-all}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: DomSanitizer
  }, {
    type: NgZone
  }, {
    type: HttpClient
  }, {
    type: ChangeDetectorRef
  }, {
    type: PrimeNGConfig
  }], {
    name: [{
      type: Input
    }],
    url: [{
      type: Input
    }],
    method: [{
      type: Input
    }],
    multiple: [{
      type: Input
    }],
    accept: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    auto: [{
      type: Input
    }],
    withCredentials: [{
      type: Input
    }],
    maxFileSize: [{
      type: Input
    }],
    invalidFileSizeMessageSummary: [{
      type: Input
    }],
    invalidFileSizeMessageDetail: [{
      type: Input
    }],
    invalidFileTypeMessageSummary: [{
      type: Input
    }],
    invalidFileTypeMessageDetail: [{
      type: Input
    }],
    invalidFileLimitMessageDetail: [{
      type: Input
    }],
    invalidFileLimitMessageSummary: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    previewWidth: [{
      type: Input
    }],
    chooseLabel: [{
      type: Input
    }],
    uploadLabel: [{
      type: Input
    }],
    cancelLabel: [{
      type: Input
    }],
    chooseIcon: [{
      type: Input
    }],
    uploadIcon: [{
      type: Input
    }],
    cancelIcon: [{
      type: Input
    }],
    showUploadButton: [{
      type: Input
    }],
    showCancelButton: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    headers: [{
      type: Input
    }],
    customUpload: [{
      type: Input
    }],
    fileLimit: [{
      type: Input
    }],
    uploadStyleClass: [{
      type: Input
    }],
    cancelStyleClass: [{
      type: Input
    }],
    removeStyleClass: [{
      type: Input
    }],
    chooseStyleClass: [{
      type: Input
    }],
    onBeforeUpload: [{
      type: Output
    }],
    onSend: [{
      type: Output
    }],
    onUpload: [{
      type: Output
    }],
    onError: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    onRemove: [{
      type: Output
    }],
    onSelect: [{
      type: Output
    }],
    onProgress: [{
      type: Output
    }],
    uploadHandler: [{
      type: Output
    }],
    onImageError: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    advancedFileInput: [{
      type: ViewChild,
      args: ["advancedfileinput"]
    }],
    basicFileInput: [{
      type: ViewChild,
      args: ["basicfileinput"]
    }],
    content: [{
      type: ViewChild,
      args: ["content"]
    }],
    files: [{
      type: Input
    }]
  });
})();
var FileUploadModule = class _FileUploadModule {
  static ɵfac = function FileUploadModule_Factory(t) {
    return new (t || _FileUploadModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _FileUploadModule,
    declarations: [FileUpload],
    imports: [CommonModule, HttpClientModule, SharedModule, ButtonModule, ProgressBarModule, MessagesModule, RippleModule, PlusIcon, UploadIcon, TimesIcon],
    exports: [FileUpload, SharedModule, ButtonModule, ProgressBarModule, MessagesModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, HttpClientModule, SharedModule, ButtonModule, ProgressBarModule, MessagesModule, RippleModule, PlusIcon, UploadIcon, TimesIcon, SharedModule, ButtonModule, ProgressBarModule, MessagesModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUploadModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, HttpClientModule, SharedModule, ButtonModule, ProgressBarModule, MessagesModule, RippleModule, PlusIcon, UploadIcon, TimesIcon],
      exports: [FileUpload, SharedModule, ButtonModule, ProgressBarModule, MessagesModule],
      declarations: [FileUpload]
    }]
  }], null, null);
})();
export {
  FileUpload,
  FileUploadModule
};
//# sourceMappingURL=primeng_fileupload.js.map
