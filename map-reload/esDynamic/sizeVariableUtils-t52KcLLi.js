var n,i;function r(e){return e&&e.declaredClass==="esri.renderers.visualVariables.SizeVariable"}function s(e){return e!=null&&!isNaN(e)&&isFinite(e)}function a(e){return e.valueExpression?n.Expression:e.field&&typeof e.field=="string"?n.Field:n.Unknown}function u(e,l){const t=l||a(e),o=e.valueUnit||"unknown";return t===n.Unknown?i.Constant:e.stops?i.Stops:e.minSize!=null&&e.maxSize!=null&&e.minDataValue!=null&&e.maxDataValue!=null?i.ClampedLinear:o==="unknown"?e.minSize!=null&&e.minDataValue!=null?e.minSize&&e.minDataValue?i.Proportional:i.Additive:i.Identity:i.RealWorldSize}(function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"})(n||(n={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(i||(i={}));export{u as a,r as e,i,s as l,n,a as t};
