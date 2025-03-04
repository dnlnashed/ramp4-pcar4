import{cG as p,B as l}from"./main-Czl6u6q4.js";import{G as t}from"./geometryEngineBase-DueYg7ux.js";import{hydratedAdapter as r}from"./hydrated-Diol9hXw.js";function i(n){const e=Array.isArray(n)?n[0].spatialReference:n.spatialReference;return e?p(l,e):l.WGS84}function d(n){return t.extendedSpatialReferenceInfo(n)}function m(n,e){return t.clip(r,i(n),n,e)}function g(n,e){return t.cut(r,i(n),n,e)}function h(n,e){return t.contains(r,i(n),n,e)}function w(n,e){return t.crosses(r,i(n),n,e)}function R(n,e,s){return t.distance(r,i(n),n,e,s)}function x(n,e){return t.equals(r,i(n),n,e)}function S(n,e){return t.intersects(r,i(n),n,e)}function y(n,e){return t.touches(r,i(n),n,e)}function A(n,e){return t.within(r,i(n),n,e)}function D(n,e){return t.disjoint(r,i(n),n,e)}function L(n,e){return t.overlaps(r,i(n),n,e)}function T(n,e,s){return t.relate(r,i(n),n,e,s)}function V(n){return t.isSimple(r,i(n),n)}function v(n){return t.simplify(r,i(n),n)}function z(n,e=!1){return t.convexHull(r,i(n),n,e)}function H(n,e){return t.difference(r,i(n),n,e)}function B(n,e){return t.symmetricDifference(r,i(n),n,e)}function G(n,e){return t.intersect(r,i(n),n,e)}function I(n,e=null){return t.union(r,i(n),n,e)}function J(n,e,s,a,c,u){return t.offset(r,i(n),n,e,s,a,c,u)}function N(n,e,s,a=!1){return t.buffer(r,i(n),n,e,s,a)}function O(n,e,s,a,c,u){return t.geodesicBuffer(r,i(n),n,e,s,a,c,u)}function b(n,e,s=!0){return t.nearestCoordinate(r,i(n),n,e,s)}function j(n,e){return t.nearestVertex(r,i(n),n,e)}function q(n,e,s,a){return t.nearestVertices(r,i(n),n,e,s,a)}function f(n){return"xmin"in n?"center"in n?n.center:null:"x"in n?n:"extent"in n?n.extent?.center??null:null}function C(n,e,s){if(n==null)throw new o;const a=n.spatialReference;if((s=s??f(n))==null)throw new o;const c=n.constructor.fromJSON(t.rotate(n,e,s));return c.spatialReference=a,c}function E(n,e){if(n==null)throw new o;const s=n.spatialReference;if((e=e??f(n))==null)throw new o;const a=n.constructor.fromJSON(t.flipHorizontal(n,e));return a.spatialReference=s,a}function P(n,e){if(n==null)throw new o;const s=n.spatialReference;if((e=e??f(n))==null)throw new o;const a=n.constructor.fromJSON(t.flipVertical(n,e));return a.spatialReference=s,a}function W(n,e,s,a){return t.generalize(r,i(n),n,e,s,a)}function k(n,e,s){return t.densify(r,i(n),n,e,s)}function F(n,e,s,a=0){return t.geodesicDensify(r,i(n),n,e,s,a)}function K(n,e){return t.planarArea(r,i(n),n,e)}function M(n,e){return t.planarLength(r,i(n),n,e)}function Q(n,e,s){return t.geodesicArea(r,i(n),n,e,s)}function U(n,e,s){return t.geodesicLength(r,i(n),n,e,s)}function X(n,e){return t.intersectLinesToPoints(r,i(n),n,e)}function Y(n,e){t.changeDefaultSpatialReferenceTolerance(n,e)}function Z(n){t.clearDefaultSpatialReferenceTolerance(n)}class o extends Error{constructor(){super("Illegal Argument Exception")}}export{N as buffer,Y as changeDefaultSpatialReferenceTolerance,Z as clearDefaultSpatialReferenceTolerance,m as clip,h as contains,z as convexHull,w as crosses,g as cut,k as densify,H as difference,D as disjoint,R as distance,x as equals,d as extendedSpatialReferenceInfo,E as flipHorizontal,P as flipVertical,W as generalize,Q as geodesicArea,O as geodesicBuffer,F as geodesicDensify,U as geodesicLength,G as intersect,X as intersectLinesToPoints,S as intersects,V as isSimple,b as nearestCoordinate,j as nearestVertex,q as nearestVertices,J as offset,L as overlaps,K as planarArea,M as planarLength,T as relate,C as rotate,v as simplify,B as symmetricDifference,y as touches,I as union,A as within};
