var ti = Object.defineProperty;
var ri = (e, t, r) => t in e ? ti(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var gr = (e, t, r) => (ri(e, typeof t != "symbol" ? t + "" : t, r), r);
import { createRenderEffect as H, sharedConfig as de, untrack as Mn, getOwner as ka, createEffect as oe, runWithOwner as ni, createMemo as G, createSignal as T, createRoot as ai, onCleanup as pt, createContext as Dr, useContext as On, mergeProps as R, $DEVCOMP as oi, $PROXY as st, $TRACK as xa, getListener as sn, batch as Kt, createUniqueId as si, splitProps as Lt, createComputed as ii, createComponent as f, Show as z, on as li, For as bt, onMount as Er } from "solid-js";
import { Menu as uo, MenuItem as co, ListItemText as Da, Button as di, CircularProgress as ui, Chip as ci, FormControlLabel as fi, Checkbox as hi, FormControl as mi, Box as gi, InputLabel as yi, OutlinedInput as pi, InputAdornment as bi } from "@suid/material";
const vi = [
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "disabled",
  "formnovalidate",
  "hidden",
  "indeterminate",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "seamless",
  "selected"
], wi = /* @__PURE__ */ new Set([
  "className",
  "value",
  "readOnly",
  "formNoValidate",
  "isMap",
  "noModule",
  "playsInline",
  ...vi
]), Si = /* @__PURE__ */ new Set([
  "innerHTML",
  "textContent",
  "innerText",
  "children"
]), ki = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  className: "class",
  htmlFor: "for"
}), xi = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  class: "className",
  formnovalidate: {
    $: "formNoValidate",
    BUTTON: 1,
    INPUT: 1
  },
  ismap: {
    $: "isMap",
    IMG: 1
  },
  nomodule: {
    $: "noModule",
    SCRIPT: 1
  },
  playsinline: {
    $: "playsInline",
    VIDEO: 1
  },
  readonly: {
    $: "readOnly",
    INPUT: 1,
    TEXTAREA: 1
  }
});
function Di(e, t) {
  const r = xi[e];
  return typeof r == "object" ? r[t] ? r.$ : void 0 : r;
}
const _i = /* @__PURE__ */ new Set([
  "beforeinput",
  "click",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
]), Ci = /* @__PURE__ */ new Set([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animate",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "circle",
  "clipPath",
  "color-profile",
  "cursor",
  "defs",
  "desc",
  "ellipse",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "filter",
  "font",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignObject",
  "g",
  "glyph",
  "glyphRef",
  "hkern",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "metadata",
  "missing-glyph",
  "mpath",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "set",
  "stop",
  "svg",
  "switch",
  "symbol",
  "text",
  "textPath",
  "tref",
  "tspan",
  "use",
  "view",
  "vkern"
]), Mi = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function Oi(e, t, r) {
  let n = r.length, a = t.length, o = n, s = 0, i = 0, l = t[a - 1].nextSibling, d = null;
  for (; s < a || i < o; ) {
    if (t[s] === r[i]) {
      s++, i++;
      continue;
    }
    for (; t[a - 1] === r[o - 1]; )
      a--, o--;
    if (a === s) {
      const u = o < n ? i ? r[i - 1].nextSibling : r[o - i] : l;
      for (; i < o; )
        e.insertBefore(r[i++], u);
    } else if (o === i)
      for (; s < a; )
        (!d || !d.has(t[s])) && t[s].remove(), s++;
    else if (t[s] === r[o - 1] && r[i] === t[a - 1]) {
      const u = t[--a].nextSibling;
      e.insertBefore(r[i++], t[s++].nextSibling), e.insertBefore(r[--o], u), t[a] = r[o];
    } else {
      if (!d) {
        d = /* @__PURE__ */ new Map();
        let c = i;
        for (; c < o; )
          d.set(r[c], c++);
      }
      const u = d.get(t[s]);
      if (u != null)
        if (i < u && u < o) {
          let c = s, h = 1, b;
          for (; ++c < a && c < o && !((b = d.get(t[c])) == null || b !== u + h); )
            h++;
          if (h > u - i) {
            const p = t[s];
            for (; i < u; )
              e.insertBefore(r[i++], p);
          } else
            e.replaceChild(r[i++], t[s++]);
        } else
          s++;
      else
        t[s++].remove();
    }
  }
}
const _a = "_$DX_DELEGATE";
function $(e, t, r) {
  let n;
  const a = () => {
    const s = document.createElement("template");
    return s.innerHTML = e, r ? s.content.firstChild.firstChild : s.content.firstChild;
  }, o = t ? () => Mn(() => document.importNode(n || (n = a()), !0)) : () => (n || (n = a())).cloneNode(!0);
  return o.cloneNode = o, o;
}
function Wr(e, t = window.document) {
  const r = t[_a] || (t[_a] = /* @__PURE__ */ new Set());
  for (let n = 0, a = e.length; n < a; n++) {
    const o = e[n];
    r.has(o) || (r.add(o), t.addEventListener(o, Ii));
  }
}
function fe(e, t, r) {
  de.context && e.isConnected || (r == null ? e.removeAttribute(t) : e.setAttribute(t, r));
}
function Ti(e, t, r, n) {
  de.context && e.isConnected || (n == null ? e.removeAttributeNS(t, r) : e.setAttributeNS(t, r, n));
}
function X(e, t) {
  de.context && e.isConnected || (t == null ? e.removeAttribute("class") : e.className = t);
}
function fo(e, t, r, n) {
  if (n)
    Array.isArray(r) ? (e[`$$${t}`] = r[0], e[`$$${t}Data`] = r[1]) : e[`$$${t}`] = r;
  else if (Array.isArray(r)) {
    const a = r[0];
    e.addEventListener(t, r[0] = (o) => a.call(e, r[1], o));
  } else
    e.addEventListener(t, r);
}
function Yi(e, t, r = {}) {
  const n = Object.keys(t || {}), a = Object.keys(r);
  let o, s;
  for (o = 0, s = a.length; o < s; o++) {
    const i = a[o];
    !i || i === "undefined" || t[i] || (Ca(e, i, !1), delete r[i]);
  }
  for (o = 0, s = n.length; o < s; o++) {
    const i = n[o], l = !!t[i];
    !i || i === "undefined" || r[i] === l || !l || (Ca(e, i, !0), r[i] = l);
  }
  return r;
}
function vt(e, t, r) {
  if (!t)
    return r ? fe(e, "style") : t;
  const n = e.style;
  if (typeof t == "string")
    return n.cssText = t;
  typeof r == "string" && (n.cssText = r = void 0), r || (r = {}), t || (t = {});
  let a, o;
  for (o in r)
    t[o] == null && n.removeProperty(o), delete r[o];
  for (o in t)
    a = t[o], a !== r[o] && (n.setProperty(o, a), r[o] = a);
  return r;
}
function Fr(e, t = {}, r, n) {
  const a = {};
  return n || H(
    () => a.children = Wt(e, t.children, a.children)
  ), H(() => t.ref && t.ref(e)), H(() => Ai(e, t, r, !0, a, !0)), a;
}
function lt(e, t, r) {
  return Mn(() => e(t, r));
}
function O(e, t, r, n) {
  if (r !== void 0 && !n && (n = []), typeof t != "function")
    return Wt(e, t, n, r);
  H((a) => Wt(e, t(), a, r), n);
}
function Ai(e, t, r, n, a = {}, o = !1) {
  t || (t = {});
  for (const s in a)
    if (!(s in t)) {
      if (s === "children")
        continue;
      a[s] = Ma(e, s, null, a[s], r, o);
    }
  for (const s in t) {
    if (s === "children") {
      n || Wt(e, t.children);
      continue;
    }
    const i = t[s];
    a[s] = Ma(e, s, i, a[s], r, o);
  }
}
function Ni(e) {
  let t, r;
  return !de.context || !(t = de.registry.get(r = Pi())) ? e() : (de.completed && de.completed.add(t), de.registry.delete(r), t);
}
function Ri(e) {
  return e.toLowerCase().replace(/-([a-z])/g, (t, r) => r.toUpperCase());
}
function Ca(e, t, r) {
  const n = t.trim().split(/\s+/);
  for (let a = 0, o = n.length; a < o; a++)
    e.classList.toggle(n[a], r);
}
function Ma(e, t, r, n, a, o) {
  let s, i, l, d, u;
  if (t === "style")
    return vt(e, r, n);
  if (t === "classList")
    return Yi(e, r, n);
  if (r === n)
    return n;
  if (t === "ref")
    o || r(e);
  else if (t.slice(0, 3) === "on:") {
    const c = t.slice(3);
    n && e.removeEventListener(c, n), r && e.addEventListener(c, r);
  } else if (t.slice(0, 10) === "oncapture:") {
    const c = t.slice(10);
    n && e.removeEventListener(c, n, !0), r && e.addEventListener(c, r, !0);
  } else if (t.slice(0, 2) === "on") {
    const c = t.slice(2).toLowerCase(), h = _i.has(c);
    if (!h && n) {
      const b = Array.isArray(n) ? n[0] : n;
      e.removeEventListener(c, b);
    }
    (h || r) && (fo(e, c, r, h), h && Wr([c]));
  } else if (t.slice(0, 5) === "attr:")
    fe(e, t.slice(5), r);
  else if ((u = t.slice(0, 5) === "prop:") || (l = Si.has(t)) || !a && ((d = Di(t, e.tagName)) || (i = wi.has(t))) || (s = e.nodeName.includes("-"))) {
    if (u)
      t = t.slice(5), i = !0;
    else if (de.context && e.isConnected)
      return r;
    t === "class" || t === "className" ? X(e, r) : s && !i && !l ? e[Ri(t)] = r : e[d || t] = r;
  } else {
    const c = a && t.indexOf(":") > -1 && Mi[t.split(":")[0]];
    c ? Ti(e, c, t, r) : fe(e, ki[t] || t, r);
  }
  return r;
}
function Ii(e) {
  const t = `$$${e.type}`;
  let r = e.composedPath && e.composedPath()[0] || e.target;
  for (e.target !== r && Object.defineProperty(e, "target", {
    configurable: !0,
    value: r
  }), Object.defineProperty(e, "currentTarget", {
    configurable: !0,
    get() {
      return r || document;
    }
  }), de.registry && !de.done && (de.done = _$HY.done = !0); r; ) {
    const n = r[t];
    if (n && !r.disabled) {
      const a = r[`${t}Data`];
      if (a !== void 0 ? n.call(r, a, e) : n.call(r, e), e.cancelBubble)
        return;
    }
    r = r._$host || r.parentNode || r.host;
  }
}
function Wt(e, t, r, n, a) {
  const o = !!de.context && e.isConnected;
  if (o) {
    !r && (r = [...e.childNodes]);
    let l = [];
    for (let d = 0; d < r.length; d++) {
      const u = r[d];
      u.nodeType === 8 && u.data.slice(0, 2) === "!$" ? u.remove() : l.push(u);
    }
    r = l;
  }
  for (; typeof r == "function"; )
    r = r();
  if (t === r)
    return r;
  const s = typeof t, i = n !== void 0;
  if (e = i && r[0] && r[0].parentNode || e, s === "string" || s === "number") {
    if (o)
      return r;
    if (s === "number" && (t = t.toString()), i) {
      let l = r[0];
      l && l.nodeType === 3 ? l.data !== t && (l.data = t) : l = document.createTextNode(t), r = Dt(e, r, n, l);
    } else
      r !== "" && typeof r == "string" ? r = e.firstChild.data = t : r = e.textContent = t;
  } else if (t == null || s === "boolean") {
    if (o)
      return r;
    r = Dt(e, r, n);
  } else {
    if (s === "function")
      return H(() => {
        let l = t();
        for (; typeof l == "function"; )
          l = l();
        r = Wt(e, l, r, n);
      }), () => r;
    if (Array.isArray(t)) {
      const l = [], d = r && Array.isArray(r);
      if (ln(l, t, r, a))
        return H(() => r = Wt(e, l, r, n, !0)), () => r;
      if (o) {
        if (!l.length)
          return r;
        if (n === void 0)
          return [...e.childNodes];
        let u = l[0], c = [u];
        for (; (u = u.nextSibling) !== n; )
          c.push(u);
        return r = c;
      }
      if (l.length === 0) {
        if (r = Dt(e, r, n), i)
          return r;
      } else
        d ? r.length === 0 ? Oa(e, l, n) : Oi(e, r, l) : (r && Dt(e), Oa(e, l));
      r = l;
    } else if (t.nodeType) {
      if (o && t.parentNode)
        return r = i ? [t] : t;
      if (Array.isArray(r)) {
        if (i)
          return r = Dt(e, r, n, t);
        Dt(e, r, null, t);
      } else
        r == null || r === "" || !e.firstChild ? e.appendChild(t) : e.replaceChild(t, e.firstChild);
      r = t;
    }
  }
  return r;
}
function ln(e, t, r, n) {
  let a = !1;
  for (let o = 0, s = t.length; o < s; o++) {
    let i = t[o], l = r && r[e.length], d;
    if (!(i == null || i === !0 || i === !1))
      if ((d = typeof i) == "object" && i.nodeType)
        e.push(i);
      else if (Array.isArray(i))
        a = ln(e, i, l) || a;
      else if (d === "function")
        if (n) {
          for (; typeof i == "function"; )
            i = i();
          a = ln(
            e,
            Array.isArray(i) ? i : [i],
            Array.isArray(l) ? l : [l]
          ) || a;
        } else
          e.push(i), a = !0;
      else {
        const u = String(i);
        l && l.nodeType === 3 && l.data === u ? e.push(l) : e.push(document.createTextNode(u));
      }
  }
  return a;
}
function Oa(e, t, r = null) {
  for (let n = 0, a = t.length; n < a; n++)
    e.insertBefore(t[n], r);
}
function Dt(e, t, r, n) {
  if (r === void 0)
    return e.textContent = "";
  const a = n || document.createTextNode("");
  if (t.length) {
    let o = !1;
    for (let s = t.length - 1; s >= 0; s--) {
      const i = t[s];
      if (a !== i) {
        const l = i.parentNode === e;
        !o && !s ? l ? e.replaceChild(a, i) : e.insertBefore(a, r) : l && i.remove();
      } else
        o = !0;
    }
  } else
    e.insertBefore(a, r);
  return [a];
}
function Pi() {
  const e = de.context;
  return `${e.id}${e.count++}`;
}
const $i = "http://www.w3.org/2000/svg";
function Ei(e, t = !1) {
  return t ? document.createElementNS($i, e) : document.createElement(e);
}
function Wi(e) {
  const { useShadow: t } = e, r = document.createTextNode(""), n = () => e.mount || document.body, a = ka();
  let o, s = !!de.context;
  return oe(
    () => {
      s && (ka().user = s = !1), o || (o = ni(a, () => G(() => e.children)));
      const i = n();
      if (i instanceof HTMLHeadElement) {
        const [l, d] = T(!1), u = () => d(!0);
        ai((c) => O(i, () => l() ? c() : o(), null)), pt(u);
      } else {
        const l = Ei(e.isSVG ? "g" : "div", e.isSVG), d = t && l.attachShadow ? l.attachShadow({
          mode: "open"
        }) : l;
        Object.defineProperty(l, "_$host", {
          get() {
            return r.parentNode;
          },
          configurable: !0
        }), O(d, o), i.appendChild(l), e.ref && e.ref(l), pt(() => i.removeChild(l));
      }
    },
    void 0,
    {
      render: !s
    }
  ), r;
}
function ho(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Math.min(Math.max(t, e), r);
}
function Fi(e) {
  e = e.substr(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, a) => a < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Ft(e) {
  if (typeof e != "string")
    return e;
  if (e.charAt(0) === "#")
    return Ft(Fi(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error("MUI: Unsupported `%s` color.\nThe following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color(). " + e);
  const n = e.substring(t + 1, e.length - 1);
  let a, o;
  if (r === "color") {
    if (a = n.split(" "), o = a.shift(), a.length === 4 && a[3].charAt(0) === "/" && (a[3] = a[3].substr(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      o
    ) === -1)
      throw new Error("MUI: unsupported `%s` color space.\nThe following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020. " + o);
  } else
    a = n.split(",");
  return { type: r, values: a.map((s) => parseFloat(s)), colorSpace: o };
}
function Tn(e) {
  const { type: t, colorSpace: r } = e, { values: n } = e;
  let a;
  return t.indexOf("rgb") !== -1 ? a = n.map((o, s) => s < 3 ? parseInt(o.toString(), 10) : o).join(",") : t.indexOf("hsl") !== -1 && (a = n.map((o, s) => s === 1 || s === 2 ? `${o}%` : o).join(",")), t.indexOf("color") !== -1 ? a = `${r} ${n.join(" ")}` : a = `${n.join(", ")}`, `${t}(${a})`;
}
function Li(e) {
  const t = Ft(e), { values: r } = t, n = r[0], a = r[1] / 100, o = r[2] / 100, s = a * Math.min(o, 1 - o), i = (u, c = (u + n / 30) % 12) => o - s * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let l = "rgb";
  const d = [
    Math.round(i(0) * 255),
    Math.round(i(8) * 255),
    Math.round(i(4) * 255)
  ];
  return t.type === "hsla" && (l += "a", d.push(r[3])), Tn({ type: l, values: d });
}
function Ta(e) {
  const { type: t, values: r } = Ft(e);
  let n = t === "hsl" ? Ft(Li(e)).values : r;
  return n = n.map((a) => (t !== "color" && (a /= 255), a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4)), Number((0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2]).toFixed(3));
}
function ji(e, t) {
  const r = Ta(e), n = Ta(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function zi(e, t) {
  const r = Ft(e);
  if (t = ho(t), r.type.indexOf("hsl") !== -1)
    r.values[2] *= 1 - t;
  else if (r.type.indexOf("rgb") !== -1 || r.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      r.values[n] *= 1 - t;
  return Tn(r);
}
function Hi(e, t) {
  const r = Ft(e);
  if (t = ho(t), r.type.indexOf("hsl") !== -1)
    r.values[2] += (100 - r.values[2]) * t;
  else if (r.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      r.values[n] += (255 - r.values[n]) * t;
  else if (r.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      r.values[n] += (1 - r.values[n]) * t;
  return Tn(r);
}
const Vi = {
  xs: 0,
  // phone
  sm: 600,
  // tablets
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screens
};
function Ui(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const o = n.breakpoints;
    return t.reduce((s, i, l) => (s = {
      ...s,
      ...o.up(o.keys[l], r(t[l]))
    }, s), {});
  }
  if (typeof t == "object") {
    const o = n.breakpoints;
    return Object.keys(t).reduce((i, l) => {
      if (Object.keys(o.values || Vi).indexOf(l) !== -1)
        i = {
          ...i,
          ...o.up(l, r(t[l], l))
        };
      else {
        const d = l;
        i[d] = t[d];
      }
      return i;
    }, {});
  }
  return r(t);
}
const Bi = {
  cleanupStyles: !0
}, Gi = Dr(Bi), wt = {
  black: "#000",
  white: "#fff"
}, Tt = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Yt = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, At = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, Nt = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, Rt = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, Qt = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, Xi = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
function Zt(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function Ji(e, t) {
  for (const r of t) {
    const n = e[r];
    delete e[r], e[r] = n;
  }
}
function Yn(e, t, r = { clone: !0 }) {
  const n = r.clone ? { ...e } : e, a = r.sortKeys ? [] : void 0;
  return Zt(e) && Zt(t) && (Object.keys(t).forEach((o) => {
    if (o === "__proto__")
      return;
    a && a.push(o);
    let s, i;
    Zt(s = t[o]) && o in e && Zt(i = e[o]) ? n[o] = Yn(i, s, r) : s !== void 0 && (n[o] = s);
  }), a && Ji(n, a)), n;
}
function dn(e) {
  if (Array.isArray(e)) {
    const t = [];
    for (const r of e)
      t.push(dn(r));
    return t;
  } else if (Zt(e)) {
    const t = {};
    for (const r in e)
      r !== "__proto__" && (t[r] = dn(e[r]));
    return t;
  } else
    return e;
}
function ir(e, ...t) {
  for (const r of t)
    Yn(e, dn(r), {
      clone: !1
    });
  return e;
}
const Zi = () => ({
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    paper: wt.white,
    default: wt.white
  },
  action: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}), qi = {
  primary: {
    main: At[700],
    light: At[400],
    dark: At[800]
  },
  secondary: {
    main: Yt[500],
    light: Yt[300],
    dark: Yt[700]
  },
  error: {
    main: Tt[700],
    light: Tt[400],
    dark: Tt[800]
  },
  info: {
    main: Nt[700],
    light: Nt[800],
    dark: Nt[900]
  },
  success: {
    main: Rt[800],
    light: Rt[500],
    dark: Rt[900]
  },
  warning: {
    main: "#ED6C02",
    light: Qt[500],
    dark: Qt[900]
  }
}, Ki = () => ({
  text: {
    primary: wt.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: wt.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
}), Qi = {
  primary: {
    main: At[200],
    light: At[50],
    dark: At[400]
  },
  secondary: {
    main: Yt[200],
    light: Yt[50],
    dark: Yt[400]
  },
  error: {
    main: Tt[500],
    light: Tt[300],
    dark: Tt[700]
  },
  info: {
    main: Nt[400],
    light: Nt[300],
    dark: Nt[700]
  },
  success: {
    main: Rt[400],
    light: Rt[300],
    dark: Rt[700]
  },
  warning: {
    main: Qt[400],
    light: Qt[300],
    dark: Qt[700]
  }
}, el = {
  light: Zi,
  dark: Ki
};
function mo(e, t) {
  return ji(e, wt.white) >= t ? wt.white : "rgba(0, 0, 0, 0.87)";
}
function Ya(e, t, r, n) {
  const a = typeof n == "number" ? n : n.light, o = typeof n == "number" ? n * 1.5 : n.dark;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Hi(e.main, a) : t === "dark" && (e.dark = zi(e.main, o)));
}
function tl(e) {
  const t = {
    ...e.color
  }, r = e.mainShade ?? 500;
  return !e.color.main && e.color[r] && (t.main = e.color[r]), Ya(t, "light", e.lightShade ?? 300, e.tonalOffset), Ya(t, "dark", e.darkShade ?? 700, e.tonalOffset), t.contrastText || (t.contrastText = mo(t.main, e.contrastThreshold)), t;
}
const rl = () => ({
  mode: "light",
  tonalOffset: 0.2,
  contrastThreshold: 3,
  grey: Xi,
  common: wt
});
function nl(e) {
  const t = ["error", "info", "primary", "secondary", "success", "warning"], r = rl(), n = {
    ...ir({}, r, el[(e == null ? void 0 : e.mode) ?? r.mode](), e),
    isColorName(o) {
      return t.includes(o);
    },
    getColorObject(o) {
      return n[o];
    },
    getColor(o) {
      return n.mode === "light" ? n[o].light : n[o].dark;
    },
    augmentColor(o) {
      return tl({
        ...o,
        tonalOffset: n.tonalOffset,
        contrastThreshold: n.contrastThreshold
      });
    },
    getContrastText(o) {
      return mo(o, n.contrastThreshold);
    }
  }, a = (o) => n.mode === "light" ? qi[o] : Qi[o];
  return n.primary = n.augmentColor({
    color: n.primary || a("primary")
  }), n.secondary = n.augmentColor({
    color: n.secondary || a("secondary"),
    mainShade: "A400",
    lightShade: "A200",
    darkShade: "A700"
  }), n.error = n.augmentColor({
    color: n.error || a("error")
  }), n.warning = n.augmentColor({
    color: n.warning || a("warning")
  }), n.info = n.augmentColor({
    color: n.info || a("info")
  }), n.success = n.augmentColor({
    color: n.success || a("success")
  }), n;
}
const al = {};
function ol(e) {
  return {
    ...ir({}, al, e ?? {})
  };
}
function sl(e, t = void 0, r = {}) {
  return {
    toolbar: {
      minHeight: 56,
      [`${e.up("xs")} and (orientation: landscape)`]: {
        minHeight: 48
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...r
  };
}
const Kr = {}, il = 0.2, ll = 0.14, dl = 0.12;
function K(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${il})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${ll})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${dl})`].join(",");
}
const ul = [() => "none", () => K(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), () => K(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), () => K(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), () => K(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), () => K(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), () => K(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), () => K(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), () => K(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), () => K(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), () => K(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), () => K(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), () => K(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), () => K(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), () => K(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), () => K(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), () => K(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), () => K(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), () => K(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), () => K(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), () => K(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), () => K(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), () => K(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), () => K(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), () => K(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
function cl() {
  return new Proxy([], {
    get: (e, t) => typeof t != "string" || isNaN(Number(t)) ? e[t] : t in Kr ? Kr[t] : Kr[t] = ul[t]()
  });
}
const fl = {
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, hl = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195
};
function Aa(e) {
  return `${Math.round(e)}ms`;
}
function ml(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function gl(e) {
  const t = {
    ...fl,
    ...e.easing
  }, r = {
    ...hl,
    ...e.duration
  };
  return {
    getAutoHeightDuration: ml,
    create: (a = ["all"], o = {}) => {
      const {
        duration: s = r.standard,
        easing: i = t.easeInOut,
        delay: l = 0,
        ...d
      } = o;
      if (process.env.NODE_ENV !== "production") {
        const u = (h) => typeof h == "string", c = (h) => !isNaN(parseFloat(h));
        !u(a) && !Array.isArray(a) && console.error('MUI: Argument "props" must be a string or Array.'), !c(s) && !u(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), u(i) || console.error('MUI: Argument "easing" must be a string.'), !c(l) && !u(l) && console.error('MUI: Argument "delay" must be a number or a string.'), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(a) ? a : [a]).map((u) => `${u} ${typeof s == "string" ? s : Aa(s)} ${i} ${typeof l == "string" ? l : Aa(l)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const we = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700
}, yr = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontSize: 14,
  htmlFontSize: 16,
  h1: {},
  h2: {},
  h3: {},
  h4: {},
  h5: {},
  h6: {},
  subtitle1: {},
  subtitle2: {},
  body1: {},
  body2: {},
  button: {},
  caption: {},
  overline: {},
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700
};
function yl(e) {
  return Math.round(e * 1e5) / 1e5;
}
function Se(e, t, r, n, a, o) {
  return {
    fontFamily: e.fontFamily,
    fontWeight: t,
    fontSize: e.pxToRem(r),
    lineHeight: `${n}`,
    letterSpacing: `${yl(a / r)}em`,
    ...o ? {
      textTransform: "uppercase"
    } : {}
  };
}
function pl(e = {}) {
  const t = {
    fontFamily: e.fontFamily ?? yr.fontFamily,
    fontSize: e.fontSize ?? yr.fontSize,
    htmlFontSize: (e == null ? void 0 : e.htmlFontSize) ?? yr.htmlFontSize,
    pxToRem: (r) => {
      const n = t.fontSize / 14;
      return `${r / t.htmlFontSize * n}rem`;
    }
  };
  return ir(t, {
    h1: Se(t, we.light, 96, 1.167, -1.5),
    h2: Se(t, we.light, 60, 1.2, -0.5),
    h3: Se(t, we.regular, 48, 1.167, 0),
    h4: Se(t, we.regular, 34, 1.235, 0.25),
    h5: Se(t, we.regular, 24, 1.334, 0),
    h6: Se(t, we.medium, 20, 1.6, 0.15),
    subtitle1: Se(t, we.regular, 16, 1.75, 0.15),
    subtitle2: Se(t, we.medium, 14, 1.57, 0.1),
    body1: Se(t, we.regular, 16, 1.5, 0.15),
    body2: Se(t, we.regular, 14, 1.43, 0.15),
    button: Se(t, we.medium, 14, 1.75, 0.4, !0),
    caption: Se(t, we.regular, 12, 1.66, 0.4),
    overline: Se(t, we.regular, 12, 2.66, 1, !0)
  }, yr, e);
}
const bl = {
  mobileStepper: 1e3,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function vl(e) {
  return {
    ...ir({}, bl, e)
  };
}
function Qr(e, t, r = "px") {
  let n;
  if (e === "up")
    n = `(min-width:${t}${r})`;
  else if (e === "down")
    n = `(max-width:${t}${r})`;
  else if (e === "between") {
    const [a, o] = t;
    n = `(max-width:${a}${r}) and (min-width:${o}${r})`;
  } else
    throw new Error(`Invalid comparator: ${e}`);
  return `@media ${n}`;
}
const wl = {
  columns: 12,
  keys: ["xs", "sm", "md", "lg", "xl"],
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
  },
  unit: "px"
};
function go(e) {
  const t = {
    ...wl,
    ...e ?? {},
    up: (r, n) => {
      const a = Qr("up", t.resolve(r));
      return n ? { [a]: n } : a;
    },
    down: (r, n) => {
      const a = Qr("down", t.resolve(r));
      return n ? { [a]: n } : a;
    },
    between: (r, n) => {
      const a = Qr("between", [
        t.resolve(r[0]),
        t.resolve(r[1])
      ]);
      return n ? { [a]: n } : a;
    },
    resolve: (r) => typeof r == "number" ? r : t.values[r]
  };
  return t;
}
function yo(e) {
  return typeof e == "function" ? e : (...r) => r.map((n) => typeof n == "number" ? `${n * (e ?? 8)}px` : n).join(" ");
}
const Sl = {
  borderRadius: 4
};
function po(e) {
  return {
    ...ir({}, Sl, e)
  };
}
function kl(e = {}) {
  const t = {
    direction: "ltr",
    ...e
  };
  function r(n, a) {
    const o = e[n];
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !0,
      ...typeof o == "function" ? {
        get: o
      } : {
        value: a({
          [n]: o
        })
      }
    });
  }
  return r("breakpoints", (n) => go(n.breakpoints)), r("components", (n) => ol(n.components)), r("palette", (n) => nl(n.palette)), r("shape", (n) => po(n.shape)), r("spacing", (n) => yo(n.spacing)), r("typography", (n) => pl(n.typography)), r("shadows", () => cl()), r("transitions", () => gl({})), r("zIndex", (n) => vl(n.zIndex)), r("mixins", () => sl(t.breakpoints)), t;
}
function bo(e) {
  let t;
  return function() {
    return t || (t = e()), t;
  };
}
const xl = bo(kl);
let un;
if (process.env.NODE_ENV !== "production") {
  const e = globalThis, t = e.__suid || (e.__suid = {});
  un = t.systemThemeContext || (t.systemThemeContext = Dr({}));
} else
  un = Dr({});
const An = un;
function Dl(e) {
  return {
    direction: "ltr",
    shadows: void 0,
    transitions: void 0,
    components: void 0,
    palette: void 0,
    typography: void 0,
    zIndex: void 0,
    mixins: void 0,
    ...e,
    breakpoints: go(e == null ? void 0 : e.breakpoints),
    shape: po(e == null ? void 0 : e.shape),
    spacing: yo(e == null ? void 0 : e.spacing)
  };
}
const _l = bo(Dl);
function Cl(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Nn(e = _l, t = An) {
  const r = On(t);
  if (Cl(r) && e)
    return typeof e == "function" ? e() : e;
  if (!r)
    throw new Error("Theme is not defined");
  return r;
}
function Ml(e = xl) {
  return Nn(e, An);
}
function Ol(e) {
  return Nn(e, An);
}
function Tl(e) {
  var o, s;
  const t = [], r = typeof e.propDefaults == "function" ? e.propDefaults({
    set: (i) => i,
    inProps: e.props
  }) : e.propDefaults, a = (s = (o = Ol().components) == null ? void 0 : o[e.name]) == null ? void 0 : s.defaultProps;
  return r && t.push(r), a && t.push(a), t.length ? R(...t, e.props) : e.props;
}
function Yl(e, t = !1) {
  return t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);
}
function Al(e, t) {
  switch (typeof e) {
    case "function":
      return Object.assign(e, {
        [oi]: !0
      }), Mn(() => e(t));
    case "string":
      const r = Ci.has(e), n = de.context ? Ni() : Yl(e, r);
      return Fr(n, t, r), n;
  }
}
function Nl(e, t) {
  const r = G(e);
  return G(() => Al(r(), t));
}
function Rl(e) {
  const t = e.reduce((r, n) => ("name" in n && (r[`--${n.name}`] = "0"), Yn(r, n, {
    clone: !1,
    sortKeys: !0
  }), r), {});
  return delete t.name, t;
}
function vo(e) {
  return e.startsWith("--");
}
function Il(e) {
  return e.startsWith("__");
}
function wo(e) {
  return /[^a-z-]/i.test(e) && !vo(e);
}
function So(e) {
  return e.startsWith("@global");
}
function cn(e) {
  return e.startsWith("@media");
}
function ko(e) {
  return e.startsWith("@keyframes");
}
function Na(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
function Ra(e, t, r = [], n = {}) {
  const a = e.split(",").map((o) => (o = o.trim(), o.includes("&") ? o : `& ${o}`));
  return _r(t, (r.length ? r : [""]).flatMap((o) => a.map((s) => s.replace(/&/g, o).trim())), {
    ...n
  });
}
function Ia(e, t) {
  if (!t)
    return Na(e);
  let r = t.get(e);
  return r || (t.set(e, r = Na(e)), r);
}
function _r(e, t = [], r = {}) {
  const n = [], a = [];
  for (let s in e) {
    const i = e[s];
    if (!Il(s))
      if (So(s))
        for (const l in i)
          a.push(...Ra(l, i[l], [], r));
      else if (cn(s))
        a.push(..._r(i, t, {
          ...r,
          sublevel: !0
        }).map((l) => `${s} {
${l}
}`));
      else if (vo(s))
        i != null && n.push(`${s}: ${i};`);
      else if (ko(s)) {
        const l = [];
        for (const d in i)
          l.push(..._r(i[d], [/^\d+$/.test(d) ? `${d}%` : d], {
            ...r,
            sublevel: !0
          }));
        a.push(`${s} {
${l.join(`
`)}
}`);
      } else if (wo(s))
        a.push(...Ra(s, i, t, r));
      else if (r.extraProperties && s in r.extraProperties) {
        const l = r.extraProperties[s](i);
        for (const d in l) {
          const u = l[d], c = r.onPropertyValue ? r.onPropertyValue(d, u) : u;
          c != null && n.push(`${Ia(d, r.propertyNameCache)}: ${c};`);
        }
      } else {
        s = Ia(s, r.propertyNameCache);
        const l = r.onPropertyValue ? r.onPropertyValue(s, i) : i;
        l != null && n.push(`${s}: ${l};`);
      }
  }
  const o = (s) => {
    const i = "	".repeat(s);
    return `${i}${n.join(`
${i}`)}`;
  };
  if (t.length) {
    const s = r.sublevel ? "	" : "", i = s + t.join(`,
${s}`);
    return [
      ...n.length ? [
        `${i} {
${o(r.sublevel ? 2 : 1)}
${s}}`
      ] : [],
      ...a
    ];
  } else
    return [...n.length ? [o(0)] : [], ...a];
}
function Pl(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function $l(e) {
  return typeof e == "function" && (e = e()), e;
}
class El {
  constructor() {
    gr(this, "ids", /* @__PURE__ */ new Map());
    gr(this, "rules", /* @__PURE__ */ new Map());
    gr(this, "propertyNames", /* @__PURE__ */ new Map());
  }
  create(t, r, n) {
    let a = this.rules.get(r);
    if (a)
      return a;
    let o = this.ids.get(n);
    return typeof o == "number" && (this.ids.set(n, ++o), n += `_${o}`), a = xo(t, r, n), this.save(a, r), a;
  }
  save(t, r) {
    this.ids.set(t.id, 0), this.rules.set(r, t);
  }
  delete(t) {
    this.ids.delete(t.id), this.rules.delete(t.rules);
  }
}
function xo(e, t, r) {
  return {
    id: r,
    name: e,
    className: `${e}-${r}`,
    rules: t.replaceAll("$id", `${r}`)
  };
}
function Wl(e) {
  var o, s;
  const t = `${e.name}-$id`, r = Pl($l(e.props)), n = (o = e.cache) == null ? void 0 : o.propertyNames, a = r.map((i) => typeof i == "string" ? `.${t} {
${i}
}` : _r(i, [`.${t}`], {
    extraProperties: e.extraProperties,
    propertyNameCache: n
  }).join(`
`)).join(`
`);
  return ((s = e.cache) == null ? void 0 : s.create(e.name, a, e.componentId)) || xo(e.name, a, e.componentId);
}
function Do(e, t) {
  "styleSheet" in e ? e.styleSheet.cssText = t : (e.innerText = "", e.appendChild(document.createTextNode(t)));
}
function Fl(e, t) {
  for (const r in t) {
    const n = t[r];
    n !== void 0 && (n === null ? e.removeAttribute(r) : e.setAttribute(r, n));
  }
}
function Ll(e, t) {
  const r = document.createElement("style");
  return r.type = "text/css", t && Fl(r, t), Do(r, e), r;
}
function fn(e) {
  let t = Number(e.getAttribute("data-uses"));
  t++, e.setAttribute("data-uses", t.toString());
}
const Pa = "suid-injectFirst";
function jl(e, t, r) {
  Array.isArray(e) && (e = e.join(`
`));
  const n = t == null ? void 0 : t.id, a = document.head || document.getElementsByTagName("head")[0], o = n && document.getElementById(n);
  if (o && o instanceof HTMLStyleElement)
    return Do(o, e), fn(o), o;
  {
    o && o.remove();
    const s = Ll(e, t);
    if (fn(s), r) {
      let i = a.querySelector(`#${Pa}`);
      i || (i = document.createElement("style"), i.setAttribute("id", Pa), a.prepend(i)), a.insertBefore(s, i);
    } else
      a.appendChild(s);
    return s;
  }
}
function zl(e, t = "css-") {
  if (typeof e == "string")
    return document.getElementById(e);
  const r = [...e.classList].find((n) => n.startsWith(t));
  if (r)
    return document.getElementById(r.slice(t.length));
}
function $a(e, t = !0) {
  let r = Number(e.getAttribute("data-uses"));
  r--, r <= 0 ? t ? e.remove() : e.setAttribute("data-uses", "0") : e.setAttribute("data-uses", r.toString());
}
function Cr(e) {
  if (typeof e != "string")
    throw new Error("MUI: `capitalize(string)` expects a string argument.");
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function _o() {
  return Math.random().toString(36).substring(2, 15).slice(0, 8);
}
const hn = Symbol("store-raw"), It = Symbol("store-node"), Ve = Symbol("store-has"), Co = Symbol("store-self");
function Mo(e) {
  let t;
  return e != null && typeof e == "object" && (e[st] || !(t = Object.getPrototypeOf(e)) || t === Object.prototype || Array.isArray(e));
}
function Mr(e, t = /* @__PURE__ */ new Set()) {
  let r, n, a, o;
  if (r = e != null && e[hn])
    return r;
  if (!Mo(e) || t.has(e))
    return e;
  if (Array.isArray(e)) {
    Object.isFrozen(e) ? e = e.slice(0) : t.add(e);
    for (let s = 0, i = e.length; s < i; s++)
      a = e[s], (n = Mr(a, t)) !== a && (e[s] = n);
  } else {
    Object.isFrozen(e) ? e = Object.assign({}, e) : t.add(e);
    const s = Object.keys(e), i = Object.getOwnPropertyDescriptors(e);
    for (let l = 0, d = s.length; l < d; l++)
      o = s[l], !i[o].get && (a = e[o], (n = Mr(a, t)) !== a && (e[o] = n));
  }
  return e;
}
function Or(e, t) {
  let r = e[t];
  return r || Object.defineProperty(e, t, {
    value: r = /* @__PURE__ */ Object.create(null)
  }), r;
}
function tr(e, t, r) {
  if (e[t])
    return e[t];
  const [n, a] = T(r, {
    equals: !1,
    internal: !0
  });
  return n.$ = a, e[t] = n;
}
function Oo(e) {
  sn() && tr(Or(e, It), Co)();
}
function Hl(e) {
  return Oo(e), Reflect.ownKeys(e);
}
function Ea(e, t, r, n = !1) {
  if (!n && e[t] === r)
    return;
  const a = e[t], o = e.length;
  r === void 0 ? (delete e[t], e[Ve] && e[Ve][t] && a !== void 0 && e[Ve][t].$()) : (e[t] = r, e[Ve] && e[Ve][t] && a === void 0 && e[Ve][t].$());
  let s = Or(e, It), i;
  if ((i = tr(s, t, a)) && i.$(() => r), Array.isArray(e) && e.length !== o) {
    for (let l = e.length; l < o; l++)
      (i = s[l]) && i.$();
    (i = tr(s, "length", o)) && i.$(e.length);
  }
  (i = s[Co]) && i.$();
}
function Vl(e, t) {
  const r = Reflect.getOwnPropertyDescriptor(e, t);
  return !r || r.get || r.set || !r.configurable || t === st || t === It || (delete r.value, delete r.writable, r.get = () => e[st][t], r.set = (n) => e[st][t] = n), r;
}
const Ul = {
  get(e, t, r) {
    if (t === hn)
      return e;
    if (t === st)
      return r;
    if (t === xa)
      return Oo(e), r;
    const n = Or(e, It), a = n[t];
    let o = a ? a() : e[t];
    if (t === It || t === Ve || t === "__proto__")
      return o;
    if (!a) {
      const s = Object.getOwnPropertyDescriptor(e, t), i = typeof o == "function";
      if (sn() && (!i || e.hasOwnProperty(t)) && !(s && s.get))
        o = tr(n, t, o)();
      else if (o != null && i && o === Array.prototype[t])
        return (...l) => Kt(() => Array.prototype[t].apply(r, l));
    }
    return Mo(o) ? To(o) : o;
  },
  has(e, t) {
    return t === hn || t === st || t === xa || t === It || t === Ve || t === "__proto__" ? !0 : (sn() && tr(Or(e, Ve), t)(), t in e);
  },
  set(e, t, r) {
    return Kt(() => Ea(e, t, Mr(r))), !0;
  },
  deleteProperty(e, t) {
    return Kt(() => Ea(e, t, void 0, !0)), !0;
  },
  ownKeys: Hl,
  getOwnPropertyDescriptor: Vl
};
function To(e) {
  let t = e[st];
  if (!t) {
    Object.defineProperty(e, st, {
      value: t = new Proxy(e, Ul)
    });
    const r = Object.keys(e), n = Object.getOwnPropertyDescriptors(e), a = Object.getPrototypeOf(e), o = e !== null && typeof e == "object" && !Array.isArray(e) && a !== Object.prototype;
    if (o) {
      const s = Object.getOwnPropertyDescriptors(a);
      r.push(...Object.keys(s)), Object.assign(n, s);
    }
    for (let s = 0, i = r.length; s < i; s++) {
      const l = r[s];
      if (!(o && l === "constructor")) {
        if (n[l].get) {
          const d = n[l].get.bind(t);
          Object.defineProperty(e, l, {
            get: d,
            configurable: !0
          });
        }
        if (n[l].set) {
          const d = n[l].set;
          Object.defineProperty(e, l, {
            set: (c) => Kt(() => d.call(t, c)),
            configurable: !0
          });
        }
      }
    }
  }
  return t;
}
function Bl(e, t) {
  const r = Mr(e || {});
  return To(r);
}
const Gl = new El();
function Xl(e) {
  return e ? Array.isArray(e) ? e.flat(1 / 0).filter((t) => !!t) : [e] : [];
}
function Jl() {
  if (!de.context)
    return _o();
  const e = si().replaceAll("-", ""), t = 9, r = Math.ceil(e.length / t), n = [];
  for (let a = 1; a <= r; ++a) {
    const o = (a - 1) * t, s = Number(e.slice(o, o + t));
    n.push(s.toString(32));
  }
  return n.join("-");
}
function Zl(e) {
  const t = On(Gi), [r, n] = T(""), a = Jl();
  let o, s = !1;
  return H((i) => {
    var u;
    const l = e();
    let d;
    if (l) {
      const c = Rl(Xl(l));
      s = "@global" in c, d = Wl({
        name: "css",
        props: c,
        cache: Gl,
        componentId: a
      }), o = zl(d.id), o ? fn(o) : o = jl(d.rules, {
        id: d.id,
        nonce: (u = t.cache) == null ? void 0 : u.nonce
      }, t.injectFirst), i != null && i.styleElement && $a(i.styleElement);
    }
    return typeof (d == null ? void 0 : d.className) == "string" ? n(d.className) : n(""), {
      className: d == null ? void 0 : d.className,
      styleElement: o
    };
  }, void 0), pt(() => {
    o && $a(o, t.cleanupStyles ?? s);
  }), r;
}
function Mt(e, t, r = {}) {
  for (const n in e) {
    const a = e[n];
    if (So(n))
      r[n] = Mt(a, t);
    else if (cn(n))
      r[n] = Mt(a, t);
    else if (ko(n)) {
      r[n] = {};
      for (const o in a)
        r[n][o] = Mt(a[o], t);
    } else if (wo(n))
      r[n] = Mt(a, t);
    else {
      const o = t(n, a);
      if (o)
        for (const s in o)
          r[s] = cn(s) ? { ...r[s], ...o[s] } : o[s];
      else
        r[n] = a;
    }
  }
  return r;
}
const ql = /* @__PURE__ */ new Set([
  "animationIterationCount",
  "borderImageOutset",
  "borderImageSlice",
  "borderImageWidth",
  "boxFlex",
  "boxFlexGroup",
  "boxOrdinalGroup",
  "columnCount",
  "columns",
  "flex",
  "flexGrow",
  "flexPositive",
  "flexShrink",
  "flexNegative",
  "flexOrder",
  "gridRow",
  "gridRowEnd",
  "gridRowSpan",
  "gridRowStart",
  "gridColumn",
  "gridColumnEnd",
  "gridColumnSpan",
  "gridColumnStart",
  "msGridRow",
  "msGridRowSpan",
  "msGridColumn",
  "msGridColumnSpan",
  "fontWeight",
  "lineHeight",
  "opacity",
  "order",
  "orphans",
  "tabSize",
  "widows",
  "zIndex",
  "zoom",
  "WebkitLineClamp",
  "fillOpacity",
  "floodOpacity",
  "stopOpacity",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth"
]);
function Yo(e, t) {
  if (typeof t == "number")
    return { [e]: ql.has(e) ? t.toString() : `${t}px` };
}
function Kl(e, t = {}) {
  return Mt(e, Yo, t);
}
function Tr(e, t, r) {
  if (typeof r != "string")
    return r;
  const n = r.split(".");
  let a = e[t];
  for (let o = 0; o < n.length && (a = a == null ? void 0 : a[n[o]], !!a); o++)
    ;
  return a ?? r;
}
function Ql(e, t) {
  return !t || typeof t != "string" ? null : t.split(".").reduce((r, n) => r && r[n] ? r[n] : null, e);
}
function ed(e, t, r, n) {
  const a = Ql(e, t) || r;
  return typeof a == "number" ? (o) => typeof o == "string" ? o : (process.env.NODE_ENV !== "production" && typeof o != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${o}.`), a * o) : Array.isArray(a) ? (o) => typeof o == "string" ? o : (process.env.NODE_ENV !== "production" && (Number.isInteger(o) ? o > a.length - 1 && console.error([
    `MUI: The value provided (${o}) overflows.`,
    `The supported values are: ${JSON.stringify(a)}.`,
    `${o} > ${a.length - 1}, you need to add the missing values.`
  ].join(`
`)) : console.error([
    `MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`
  ].join(`
`))), a[o]) : typeof a == "function" ? a : (process.env.NODE_ENV !== "production" && console.error([
    `MUI: The \`theme.${t}\` value (${a}) is invalid.`,
    "It should be a number, an array or a function."
  ].join(`
`)), () => {
  });
}
const Qe = {
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
};
function Ao(e) {
  return typeof e == "number" ? `${e}px` : e;
}
function No(e, t) {
  return (r, n) => t(e, r, n);
}
function g(e, t) {
  return t ? (r, n) => ({
    [e]: t(e, r, n)
  }) : (r) => ({ [e]: r });
}
function qt(e) {
  return g(e, (t, r) => Ao(r));
}
function xe(e, t, r) {
  const n = t.map((a) => `${e}${a}`);
  return r ? (a, o) => n.reduce((s, i) => (s[i] = r(i, a, o), s), {}) : (a) => n.reduce((o, s) => (o[s] = a, o), {});
}
function td() {
  return {
    ...rd(),
    ...nd(),
    ...ad(),
    ...od(),
    ...sd(),
    ...id(),
    ...ld(),
    ...ud(),
    ...dd()
  };
}
function rd() {
  return {
    displayPrint: No("displayPrint", (e, t) => ({
      "@media print": {
        display: t
      }
    })),
    displayRaw: g("display"),
    overflow: g("overflow"),
    textOverflow: g("textOverflow"),
    visibility: g("visibility"),
    whiteSpace: g("whiteSpace")
  };
}
function nd() {
  return {
    flexBasis: g("flexBasis"),
    flexDirection: g("flexDirection"),
    flexWrap: g("flexWrap"),
    justifyContent: g("justifyContent"),
    alignItems: g("alignItems"),
    alignContent: g("alignContent"),
    order: g("order"),
    flex: g("flex"),
    flexGrow: g("flexGrow"),
    flexShrink: g("flexShrink"),
    alignSelf: g("alignSelf"),
    justifyItems: g("justifyItems"),
    justifySelf: g("justifySelf")
  };
}
function ad() {
  const e = (t, r, n) => ed(n, "spacing", 8, t)(r);
  return {
    gap: g("gap", e),
    columnGap: g("columnGap", e),
    rowGap: g("rowGap", e),
    gridColumn: g("gridColumn"),
    gridRow: g("gridRow"),
    gridAutoFlow: g("gridAutoFlow"),
    gridAutoColumns: g("gridAutoColumns"),
    gridAutoRows: g("gridAutoRows"),
    gridTemplateColumns: g("gridTemplateColumns"),
    gridTemplateRows: g("gridTemplateRows"),
    gridTemplateAreas: g("gridTemplateAreas"),
    gridArea: g("gridArea")
  };
}
function od() {
  return {
    position: g("position"),
    zIndex: g("zIndex", (e, t, r) => {
      var n;
      return ((n = r.zIndex) == null ? void 0 : n[e]) ?? t;
    }),
    top: qt("top"),
    right: qt("right"),
    bottom: qt("bottom"),
    left: qt("left")
  };
}
function sd() {
  const e = (t, r, n) => Tr(n, "palette", r);
  return {
    color: g("color", e),
    bgcolor: g("backgroundColor", e),
    backgroundColor: g("backgroundColor", e)
  };
}
function id() {
  const e = (t, r, n) => (t === "maxWidth" && (r = n.breakpoints.values[t] ?? r), typeof r == "number" && (r = r > 0 && r <= 1 ? `${r * 100}%` : `${r}px`), r);
  return {
    width: g("width", e),
    maxWidth: g("maxWidth", e),
    minWidth: g("minWidth", e),
    height: g("height", e),
    maxHeight: g("maxHeight", e),
    minHeight: g("minHeight", e),
    boxSizing: g("boxSizing", e)
  };
}
function ld() {
  const e = (r, n) => typeof n == "number" ? `${n}px solid` : n, t = (r, n, a) => Tr(a, "palette", n);
  return {
    border: g("border", e),
    borderTop: g("borderTop", e),
    borderRight: g("borderRight", e),
    borderBottom: g("borderBottom", e),
    borderLeft: g("borderLeft", e),
    borderColor: g("borderColor", t),
    borderTopColor: g("borderTopColor", t),
    borderRightColor: g("borderRightColor", t),
    borderBottomColor: g("borderBottomColor", t),
    borderLeftColor: g("borderLeftColor", t),
    borderRadius: g("borderRadius", (r, n, a) => typeof n == "number" ? `${a.shape.borderRadius * n}px` : n)
  };
}
function dd() {
  const e = (t, r, n) => Tr(n, "typography", r);
  return {
    typography: No("typography", (t, r, n) => Tr(n, "typography", r)),
    fontFamily: g("fontFamily", e),
    fontSize: g("fontSize", (t, r, n) => Ao(e(t, r, n))),
    fontStyle: g("fontStyle", e),
    fontWeight: g("fontWeight", e),
    letterSpacing: qt("letterSpacing"),
    lineHeight: g("lineHeight"),
    textAlign: g("textAlign"),
    textTransform: g("textTransform")
  };
}
function ud() {
  const e = (n, a, o) => o.spacing(a), t = "margin", r = "padding";
  return {
    m: g(t, e),
    mt: g("marginTop", e),
    mr: g("marginRight", e),
    mb: g("marginBottom", e),
    ml: g("marginLeft", e),
    mx: xe(t, Qe.x, e),
    my: xe(t, Qe.y, e),
    margin: g(t, e),
    marginTop: g("marginTop", e),
    marginRight: g("marginRight", e),
    marginBottom: g("marginBottom", e),
    marginLeft: g("marginLeft", e),
    marginX: xe(t, Qe.x, e),
    marginY: xe(t, Qe.y, e),
    marginInline: xe(t, ["Inline", "InlineStart"], e),
    marginInlineStart: g("marginInlineStart", e),
    marginInlineEnd: g("marginInlineEnd", e),
    marginBlock: xe(t, ["BlockStart", "BlockEnd"], e),
    marginBlockStart: g("marginBlockStart", e),
    marginBlockEnd: g("marginBlockEnd", e),
    p: g(r, e),
    pt: g("paddingTop", e),
    pr: g("paddingRight", e),
    pb: g("paddingBottom", e),
    pl: g("paddingLeft", e),
    px: xe(r, Qe.x, e),
    py: xe(r, Qe.y, e),
    padding: g(r, e),
    paddingTop: g("paddingTop", e),
    paddingRight: g("paddingRight", e),
    paddingBottom: g("paddingBottom", e),
    paddingLeft: g("paddingLeft", e),
    paddingX: xe(r, Qe.x, e),
    paddingY: xe(r, Qe.y, e),
    paddingInline: xe(r, ["Inline", "InlineStart"], e),
    paddingInlineStart: g("paddingInlineStart", e),
    paddingInlineEnd: g("paddingInlineEnd", e),
    paddingBlock: xe(r, ["BlockStart", "BlockEnd"], e),
    paddingBlockStart: g("paddingBlockStart", e),
    paddingBlockEnd: g("paddingBlockEnd", e)
  };
}
const Ro = td();
function cd(e, t, r) {
  return Ro[e](t, r);
}
function Wa(e, t, r) {
  return e in Ro ? cd(e, t, r) : Yo(e, t);
}
function fd(e, t) {
  return Mt(e, (r, n) => {
    if (typeof n == "function" && (n = n(t)), n == null)
      return n;
    if (typeof n == "object") {
      const a = {};
      for (const o of t.breakpoints.keys)
        a[t.breakpoints.up(o)] = {};
      return Object.assign(a, Ui({ theme: t }, n, (o) => Wa(r, o, t) ?? { [r]: o }));
    } else
      return Wa(r, n, t);
  });
}
function Io(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var a = e.length;
      for (t = 0; t < a; t++)
        e[t] && (r = Io(e[t])) && (n && (n += " "), n += r);
    } else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function Rn() {
  for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++)
    (e = arguments[r]) && (t = Io(e)) && (n && (n += " "), n += t);
  return n;
}
const Po = ["ownerState", "theme", "sx", "as"];
function hd(e, t, r, n) {
  return G(() => {
    const a = e(), o = n.ownerState;
    return r.reduce((s, i) => {
      let l;
      return typeof i == "function" ? l = i({
        ownerState: o,
        theme: a,
        get sx() {
          return n.sx;
        },
        get as() {
          return n.as;
        },
        props: n
      }) : i && (l = i), l && s.push(Kl(l, {
        name: t,
        __resolved: !0
      })), s;
    }, []);
  });
}
function $o(e, t) {
  e.__suid = t;
}
function Fa(e) {
  if (typeof e == "function")
    return e.__suid;
}
function md(e) {
  return function(r, n = {}) {
    let a, o;
    if (n.name) {
      const i = n.slot || "Root";
      o = a = `${n.name}-${i.slice(0, 1).toLowerCase() + i.slice(1)}`;
    } else
      o = `styled-${_o()}`, a = "css";
    const s = Fa(r);
    return function(...i) {
      function l(d) {
        let u;
        const c = () => {
          const S = d.theme;
          return S || u || (u = e && e.onUseTheme ? e.onUseTheme() : Nn());
        }, [, h] = Lt(d, n.skipProps || Po), b = hd(c, a, i, d), p = () => {
          const S = d.sx;
          return S ? Array.isArray(S) ? S : [S] : [];
        }, y = () => {
          if (s)
            return r;
          const S = d.as;
          return S || r;
        }, w = s ? () => s : G(() => Fa(y())), x = n.skipSx ? () => b() : () => {
          const S = c();
          return [...b(), ...p().map((_) => _.__resolved ? _ : fd(_, S))];
        }, M = Zl(() => w() ? void 0 : x());
        return Nl(y, R(h, {
          get children() {
            return d.children;
          },
          // [review] This property must be omitted on each component individually.
          get component() {
            return w() ? d.component : null;
          },
          get as() {
            return s ? d.as : void 0;
          },
          get sx() {
            return w() ? x() : void 0;
          },
          get ownerState() {
            return w() === "system" ? d.ownerState : void 0;
          },
          get class() {
            return Rn([.../* @__PURE__ */ new Set([d.class, o, M()])]);
          }
        }));
      }
      return $o(l, "system"), o && (l.toString = () => `.${o}`), l;
    };
  };
}
[...Po];
const Lr = md({
  onUseTheme: () => Ml()
}), gd = Dr(), La = (e) => e, yd = () => {
  let e = La;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = La;
    }
  };
}, pd = yd(), bd = {
  active: "Mui-active",
  checked: "Mui-checked",
  completed: "Mui-completed",
  disabled: "Mui-disabled",
  error: "Mui-error",
  expanded: "Mui-expanded",
  focused: "Mui-focused",
  focusVisible: "Mui-focusVisible",
  required: "Mui-required",
  selected: "Mui-selected"
};
function In(e, t) {
  return bd[t] || `${pd.generate(e)}-${t}`;
}
function Eo(e, t) {
  const r = {};
  return t.forEach((n) => {
    r[n] = In(e, n);
  }), r;
}
function vd(e, t, r) {
  const n = {};
  return Object.keys(e).forEach(
    // `Objet.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (a) => {
      n[a] = e[a].reduce((o, s) => (s && (r && r[s] && o.push(r[s]), o.push(t(s))), o), []).join(" ");
    }
  ), n;
}
function wd(e) {
  return In("MuiSvgIcon", e);
}
Eo("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge"
]);
function Sd(e) {
  function t(r) {
    return e(r);
  }
  return Object.defineProperty(t, "name", {
    value: e.name
  }), t.toString = e.toString, t;
}
function Wo() {
  return function(e) {
    function t(i) {
      const l = !!e.slotClasses, d = () => {
        if (!e.slotClasses)
          throw new Error("'slotClasses' option is not defined");
        if (!e.utilityClass)
          throw new Error("'utilityClass' option is not defined");
        return vd(e.slotClasses(i), e.utilityClass, i.classes ?? "");
      }, u = Bl({});
      return l && ii(() => {
        const c = d();
        Kt(() => {
          for (const h in c)
            u[h] = c[h];
        });
      }), u;
    }
    function r(i) {
      const [l, d] = Lt(i, e.selfPropNames);
      return { allProps: i, props: l, otherProps: d };
    }
    function n(i) {
      return Tl({
        propDefaults: i.propDefaults || e.propDefaults,
        props: i.props,
        name: e.name
      });
    }
    function a(i) {
      const l = n({ props: i });
      return r(l);
    }
    function o(i, l = !0) {
      return i = Sd(i), i.toString = () => `.${e.name}-root`, l && $o(i, "base"), i;
    }
    function s(i) {
      const l = o(function(u) {
        const { allProps: c, otherProps: h, props: b } = a(u), p = e.autoCallUseClasses ?? !0 ? t(c) : {};
        return i({
          allProps: c,
          otherProps: h,
          props: b,
          classes: p
        });
      });
      return Object.defineProperty(l, "name", { value: i.name }), l;
    }
    return {
      name: e.name,
      selfPropNames: e.selfPropNames,
      component: s,
      defineComponent: o,
      useClasses: t,
      useThemeProps: n,
      useProps: a,
      splitInProps: r
    };
  };
}
var kd = /* @__PURE__ */ $("<title>");
const xd = Wo()({
  name: "MuiSvgIcon",
  selfPropNames: ["children", "classes", "color", "fontSize", "htmlColor", "inheritViewBox", "shapeRendering", "titleAccess", "viewBox"],
  propDefaults: ({
    set: e
  }) => {
    const t = On(gd);
    return e({
      component: "svg",
      color: "inherit",
      get fontSize() {
        return (t == null ? void 0 : t.fontSize) ?? "medium";
      },
      inheritViewBox: !1,
      viewBox: "0 0 24 24"
    });
  },
  utilityClass: wd,
  slotClasses: (e) => ({
    root: ["root", e.color !== "inherit" && `color${Cr(e.color)}`, `fontSize${Cr(e.fontSize)}`]
  })
}), Dd = Lr("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${Cr(r.color)}`], t[`fontSize${Cr(r.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n, a, o, s, i, l, d, u, c, h, b, p, y, w, x;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    fill: "currentColor",
    flexShrink: 0,
    transition: (o = (r = e.transitions) == null ? void 0 : r.create) == null ? void 0 : o.call(r, "fill", {
      duration: (a = (n = e.transitions) == null ? void 0 : n.duration) == null ? void 0 : a.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((i = (s = e.typography) == null ? void 0 : s.pxToRem) == null ? void 0 : i.call(s, 20)) || "1.25rem",
      medium: ((d = (l = e.typography) == null ? void 0 : l.pxToRem) == null ? void 0 : d.call(l, 24)) || "1.5rem",
      large: ((c = (u = e.typography) == null ? void 0 : u.pxToRem) == null ? void 0 : c.call(u, 35)) || "2.1875"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: ((b = (h = e.palette) == null ? void 0 : h[t.color]) == null ? void 0 : b.main) ?? {
      action: (y = (p = e.palette) == null ? void 0 : p.action) == null ? void 0 : y.active,
      disabled: (x = (w = e.palette) == null ? void 0 : w.action) == null ? void 0 : x.disabled,
      inherit: void 0
    }[t.color]
  };
}), _d = xd.component(function({
  allProps: t,
  props: r,
  otherProps: n,
  classes: a
}) {
  return f(Dd, R({
    get "aria-hidden"() {
      return r.titleAccess ? void 0 : !0;
    },
    get role() {
      return r.titleAccess ? "img" : void 0;
    },
    get viewBox() {
      return r.inheritViewBox ? void 0 : r.viewBox;
    }
  }, {
    focusable: "false"
  }, {
    get color() {
      return r.htmlColor;
    }
  }, n, {
    get class() {
      return Rn(a.root, n.class);
    },
    ownerState: t,
    get children() {
      return [G(() => r.children), f(z, {
        get when() {
          return r.titleAccess;
        },
        children: (o) => (() => {
          var s = kd();
          return O(s, o), s;
        })()
      })];
    }
  }));
});
function lr(e, t) {
  return (n) => f(_d, R({
    "data-testid": `${t}Icon`
  }, n, {
    get children() {
      return e();
    }
  }));
}
var Cd = /* @__PURE__ */ $('<svg><path d="M0 0h24v24H0z"fill=none></svg>', !1, !0), Md = /* @__PURE__ */ $('<svg><path d="M7 10l5 5 5-5z"></svg>', !1, !0);
const Fo = lr(() => [Cd(), Md()], "ArrowDropDown");
var Od = /* @__PURE__ */ $('<svg><path d="M0 0h24v24H0z"fill=none></svg>', !1, !0), Td = /* @__PURE__ */ $('<svg><path d="M7 14l5-5 5 5z"></svg>', !1, !0);
const Yd = lr(() => [Od(), Td()], "ArrowDropUp");
var Ad = /* @__PURE__ */ $('<svg><g><path d="M19,4h-1V2h-2v2H8V2H6v2H5C3.89,4,3.01,4.9,3.01,6L3,20c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.1,4,19,4z M19,20 H5V10h14V20z M9,14H7v-2h2V14z M13,14h-2v-2h2V14z M17,14h-2v-2h2V14z M9,18H7v-2h2V18z M13,18h-2v-2h2V18z M17,18h-2v-2h2V18z"></svg>', !1, !0);
const Nd = lr(() => Ad(), "CalendarMonth");
var Rd = /* @__PURE__ */ $('<svg><path d="M13.89 8.7L12 10.59 10.11 8.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 8.7 13.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l1.89 1.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l1.89-1.89c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.38-1.41 0zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></svg>', !1, !0);
const Id = lr(() => Rd(), "HighlightOffRounded"), ja = {
  listItemtext: "whitespace-normal"
};
var Pd = /* @__PURE__ */ $('<div><span aria-haspopup=true class="flex items-center cursor-pointer">');
const wg = (e) => {
  e = R({
    classes: "",
    downArrowShowHide: !0
  }, e);
  const [t, r] = T(null), [n, a] = T(0), o = () => !!t(), s = () => {
    r(null);
  };
  let i;
  function l() {
    return i !== void 0 ? a(e.width ?? i.clientWidth) : 0;
  }
  const d = (u) => {
    typeof u == "string" ? e.onMenuItemClick && e.onMenuItemClick(u) : e.onMenuItemClick && e.onMenuItemClick(u.value), s();
  };
  return (() => {
    var u = Pd(), c = u.firstChild;
    c.$$click = (b) => {
      r(b.currentTarget), l();
    };
    var h = i;
    return typeof h == "function" ? lt(h, c) : i = c, O(c, () => e.menuButtonLabel, null), O(c, (() => {
      var b = G(() => !!e.downArrowShowHide);
      return () => b() && (o() ? f(Yd, {}) : f(Fo, {}));
    })(), null), O(u, f(uo, {
      id: "basic-menu",
      get anchorEl() {
        return t();
      },
      get open() {
        return o();
      },
      onClose: s,
      PaperProps: {
        style: {
          width: "fit-content"
        }
      },
      MenuListProps: {
        "aria-labelledby": "basic-button"
      },
      get children() {
        return e.menuItems.map((b) => f(co, {
          onClick: () => d(b),
          get children() {
            return typeof b == "string" ? f(Da, {
              get class() {
                return ja.listItemtext;
              },
              children: b
            }) : f(Da, {
              get class() {
                return ja.listItemtext;
              },
              get children() {
                return b.label;
              }
            });
          }
        }));
      }
    }), null), H((b) => {
      var p = `${e.classes} inline-flex`, y = o() ? "basic-menu" : void 0, w = o() ? "true" : void 0;
      return p !== b.e && X(u, b.e = p), y !== b.t && fe(c, "aria-controls", b.t = y), w !== b.a && fe(c, "aria-expanded", b.a = w), b;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    }), u;
  })();
};
Wr(["click"]);
function Sg(e) {
  e = R({
    sx: {
      borderRadius: "4px"
    }
  }, e);
  const [t, r] = Lt(e, ["variant", "size", "sx", "label", "startIcon", "endIcon", "onClick", "disabled", "href", "dropdownItems", "onDropdownItemClick", "type", "isLoading", "class", "title", "disableRipple", "disableElevation"]), [n, a] = T(null), [o, s] = T(!1), i = (d) => {
    const u = d.currentTarget;
    a(u), s(!o()), t.onClick && typeof t.onClick == "function" && t.onClick();
  }, l = (d) => {
    s(!1), t.onDropdownItemClick && typeof t.onDropdownItemClick == "function" && t.onDropdownItemClick(d);
  };
  return [f(di, R({
    component: "button",
    get disableRipple() {
      return t.disableRipple ?? !1;
    },
    get disableElevation() {
      return t.disableElevation ?? !1;
    }
  }, r, {
    ref(d) {
      var u = n();
      typeof u == "function" && u(d);
    },
    variant: "contained",
    get class() {
      return t.class;
    },
    get type() {
      return t.type;
    },
    get title() {
      return t.title;
    },
    onClick: i,
    get disabled() {
      return t.disabled;
    },
    get href() {
      return t.href;
    },
    get startIcon() {
      return t.startIcon;
    },
    get endIcon() {
      return t.endIcon ?? (t.dropdownItems ? f(Fo, {}) : null);
    },
    get size() {
      return t.size;
    },
    get sx() {
      return t.sx;
    },
    get children() {
      return [G(() => G(() => !!e.isLoading)() && f(ui, {
        color: "inherit",
        size: 20
      })), G(() => t.label)];
    }
  })), G(() => G(() => !!t.dropdownItems)() && f(uo, {
    get anchorEl() {
      return n();
    },
    get open() {
      return o();
    },
    onClose: () => s(!1),
    get children() {
      return t.dropdownItems.map((d) => f(co, {
        value: d,
        onClick: () => l(d),
        children: d
      }));
    }
  }))];
}
var $d = /* @__PURE__ */ $('<svg><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></svg>', !1, !0);
const Ed = lr(() => $d(), "Person");
function Wd(e) {
  return In("MuiAvatar", e);
}
Eo("MuiAvatar", [
  "root",
  "colorDefault",
  "circular",
  "rounded",
  "square",
  "img",
  "fallback"
]);
const en = Wo()({
  name: "MuiAvatar",
  selfPropNames: ["alt", "children", "classes", "imgProps", "sizes", "src", "srcSet", "variant"],
  utilityClass: Wd,
  slotClasses: (e) => ({
    root: ["root", e.variant, e.colorDefault && "colorDefault"],
    img: ["img"],
    fallback: ["fallback"]
  })
}), Fd = Lr("div", {
  name: "MuiAvatar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], r.colorDefault && t.colorDefault];
  }
})(({
  theme: e,
  ownerState: t
}) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: 40,
  height: 40,
  fontFamily: e.typography.fontFamily,
  fontSize: e.typography.pxToRem(20),
  lineHeight: 1,
  borderRadius: "50%",
  overflow: "hidden",
  userSelect: "none",
  ...t.variant === "rounded" && {
    borderRadius: e.shape.borderRadius
  },
  ...t.variant === "square" && {
    borderRadius: 0
  },
  ...t.colorDefault && {
    color: e.palette.background.default,
    backgroundColor: e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[600]
  }
})), Ld = Lr("img", {
  name: "MuiAvatar",
  slot: "Img",
  overridesResolver: (e, t) => t.img
})({
  width: "100%",
  height: "100%",
  textAlign: "center",
  // Handle non-square image. The property isn't supported by IE11.
  objectFit: "cover",
  // Hide alt text.
  color: "transparent",
  // Hide the image broken icon, only works on Chrome.
  textIndent: "10000"
}), jd = Lr(Ed, {
  name: "MuiAvatar",
  slot: "Fallback",
  overridesResolver: (e, t) => t.fallback
})({
  width: "75%",
  height: "75%"
});
function zd(e) {
  let t = !0;
  const [r, n] = T(!1);
  return pt(() => {
    t = !1;
  }), oe(li(() => [e.crossOrigin, e.referrerPolicy, e.src, e.srcSet], () => {
    if (!e.src && !e.srcSet)
      return;
    n(!1);
    const a = new Image();
    a.onload = () => {
      t && n("loaded");
    }, a.onerror = () => {
      t && n("error");
    }, a.crossOrigin = e.crossOrigin, a.referrerPolicy = e.referrerPolicy, a.src = e.src, e.srcSet && (a.srcset = e.srcSet);
  })), r;
}
const Hd = en.defineComponent(function(t) {
  const r = en.useThemeProps({
    props: t
  }), [, n] = Lt(r, ["alt", "children", "class", "component", "imgProps", "sizes", "src", "srcSet", "variant"]), a = R({
    component: "div",
    variant: "circular"
  }, r), o = zd(R(() => r.imgProps || {}, {
    get src() {
      return r.src;
    },
    get srcSet() {
      return r.srcSet;
    }
  })), s = () => r.src || r.srcSet, i = () => s() && o() !== "error", l = R(r, {
    get colorDefault() {
      return !i();
    },
    get component() {
      return a.component;
    },
    get variant() {
      return a.variant;
    }
  }), d = en.useClasses(l), u = () => {
    if (i())
      return f(Ld, R({
        get alt() {
          return r.alt;
        },
        get src() {
          return r.src;
        },
        get srcSet() {
          return r.srcSet;
        },
        get sizes() {
          return r.sizes;
        },
        ownerState: l,
        get class() {
          return d.img;
        }
      }, () => r.imgProps || {}));
    const c = r.children;
    return c ?? (s() && r.alt ? r.alt[0] : f(jd, {
      get class() {
        return d.fallback;
      }
    }));
  };
  return f(Fd, R({
    get as() {
      return a.component;
    },
    ownerState: l,
    get class() {
      return Rn(d.root, r.class);
    }
  }, n, {
    get children() {
      return u();
    }
  }));
});
function kg({
  id: e,
  text: t,
  onClick: r,
  onDelete: n,
  variant: a,
  isDeleteIcon: o = !1,
  deleteIconColor: s,
  color: i,
  imgPath: l
}) {
  return f(ci, {
    id: e,
    label: t,
    variant: a,
    onClick: () => r && r(),
    onDelete: () => n && n(),
    color: i,
    get avatar() {
      return (l ?? "") && f(Hd, {
        src: l
      });
    },
    get deleteIcon() {
      return o && f(Id, {
        style: {
          color: s
        }
      });
    }
  });
}
function xg(e) {
  const [t, r] = Lt(e, ["sxProps", "color", "onChange", "value", "checked", "disabled", "id", "label", "sxProps", "labelPlacement", "name"]);
  return f(fi, {
    get label() {
      return t.label;
    },
    get labelPlacement() {
      return t.labelPlacement ?? "end";
    },
    get sx() {
      return {
        whiteSpace: "nowrap",
        ...t.sxProps
      };
    },
    get control() {
      return f(hi, R({
        get name() {
          return t.name;
        },
        get id() {
          return t.id;
        },
        get disabled() {
          return t.disabled;
        },
        get checked() {
          return t.checked;
        },
        get value() {
          return t.value;
        },
        onChange: (n, a) => t.onChange && t.onChange(!!a),
        get color() {
          return t.color;
        }
      }, r));
    }
  });
}
function Lo(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = Lo(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function Vd() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = Lo(e)) && (n && (n += " "), n += t);
  return n;
}
const Pn = "-";
function Ud(e) {
  const t = function(a) {
    const { theme: o, prefix: s } = a, i = { nextPart: /* @__PURE__ */ new Map(), validators: [] };
    return function(l, d) {
      return d ? l.map(([u, c]) => [u, c.map((h) => typeof h == "string" ? d + h : typeof h == "object" ? Object.fromEntries(Object.entries(h).map(([b, p]) => [d + b, p])) : h)]) : l;
    }(Object.entries(a.classGroups), s).forEach(([l, d]) => {
      mn(d, i, l, o);
    }), i;
  }(e), { conflictingClassGroups: r, conflictingClassGroupModifiers: n } = e;
  return { getClassGroupId: function(a) {
    const o = a.split(Pn);
    return o[0] === "" && o.length !== 1 && o.shift(), jo(o, t) || function(s) {
      if (za.test(s)) {
        const i = za.exec(s)[1], l = i == null ? void 0 : i.substring(0, i.indexOf(":"));
        if (l)
          return "arbitrary.." + l;
      }
    }(a);
  }, getConflictingClassGroupIds: function(a, o) {
    const s = r[a] || [];
    return o && n[a] ? [...s, ...n[a]] : s;
  } };
}
function jo(e, t) {
  var r;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], a = t.nextPart.get(n), o = a ? jo(e.slice(1), a) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(Pn);
  return (r = t.validators.find(({ validator: i }) => i(s))) == null ? void 0 : r.classGroupId;
}
const za = /^\[(.+)\]$/;
function mn(e, t, r, n) {
  e.forEach((a) => {
    if (typeof a != "string") {
      if (typeof a == "function")
        return a.isThemeGetter ? void mn(a(n), t, r, n) : void t.validators.push({ validator: a, classGroupId: r });
      Object.entries(a).forEach(([o, s]) => {
        mn(s, Ha(t, o), r, n);
      });
    } else
      (a === "" ? t : Ha(t, a)).classGroupId = r;
  });
}
function Ha(e, t) {
  let r = e;
  return t.split(Pn).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), r = r.nextPart.get(n);
  }), r;
}
function Bd(e) {
  if (e < 1)
    return { get: () => {
    }, set: () => {
    } };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function a(o, s) {
    r.set(o, s), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  }
  return { get(o) {
    let s = r.get(o);
    return s !== void 0 ? s : (s = n.get(o)) !== void 0 ? (a(o, s), s) : void 0;
  }, set(o, s) {
    r.has(o) ? r.set(o, s) : a(o, s);
  } };
}
const zo = "!";
function Gd(e) {
  const t = e.separator, r = t.length === 1, n = t[0], a = t.length;
  return function(o) {
    const s = [];
    let i, l = 0, d = 0;
    for (let h = 0; h < o.length; h++) {
      let b = o[h];
      if (l === 0) {
        if (b === n && (r || o.slice(h, h + a) === t)) {
          s.push(o.slice(d, h)), d = h + a;
          continue;
        }
        if (b === "/") {
          i = h;
          continue;
        }
      }
      b === "[" ? l++ : b === "]" && l--;
    }
    const u = s.length === 0 ? o : o.substring(d), c = u.startsWith(zo);
    return { modifiers: s, hasImportantModifier: c, baseClassName: c ? u.substring(1) : u, maybePostfixModifierPosition: i && i > d ? i - d : void 0 };
  };
}
const Xd = /\s+/;
function Jd() {
  let e, t, r = 0, n = "";
  for (; r < arguments.length; )
    (e = arguments[r++]) && (t = Ho(e)) && (n && (n += " "), n += t);
  return n;
}
function Ho(e) {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Ho(e[n])) && (r && (r += " "), r += t);
  return r;
}
function Zd(e, ...t) {
  let r, n, a, o = function(i) {
    const l = t.reduce((d, u) => u(d), e());
    return r = function(d) {
      return { cache: Bd(d.cacheSize), splitModifiers: Gd(d), ...Ud(d) };
    }(l), n = r.cache.get, a = r.cache.set, o = s, s(i);
  };
  function s(i) {
    const l = n(i);
    if (l)
      return l;
    const d = function(u, c) {
      const { splitModifiers: h, getClassGroupId: b, getConflictingClassGroupIds: p } = c, y = /* @__PURE__ */ new Set();
      return u.trim().split(Xd).map((w) => {
        const { modifiers: x, hasImportantModifier: M, baseClassName: S, maybePostfixModifierPosition: _ } = h(w);
        let Y = b(_ ? S.substring(0, _) : S), ee = !!_;
        if (!Y) {
          if (!_)
            return { isTailwindClass: !1, originalClassName: w };
          if (Y = b(S), !Y)
            return { isTailwindClass: !1, originalClassName: w };
          ee = !1;
        }
        const le = function(Re) {
          if (Re.length <= 1)
            return Re;
          const te = [];
          let j = [];
          return Re.forEach((Ke) => {
            Ke[0] === "[" ? (te.push(...j.sort(), Ke), j = []) : j.push(Ke);
          }), te.push(...j.sort()), te;
        }(x).join(":");
        return { isTailwindClass: !0, modifierId: M ? le + zo : le, classGroupId: Y, originalClassName: w, hasPostfixModifier: ee };
      }).reverse().filter((w) => {
        if (!w.isTailwindClass)
          return !0;
        const { modifierId: x, classGroupId: M, hasPostfixModifier: S } = w, _ = x + M;
        return !y.has(_) && (y.add(_), p(M, S).forEach((Y) => y.add(x + Y)), !0);
      }).reverse().map((w) => w.originalClassName).join(" ");
    }(i, r);
    return a(i, d), d;
  }
  return function() {
    return o(Jd.apply(null, arguments));
  };
}
function B(e) {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}
const Vo = /^\[(?:([a-z-]+):)?(.+)\]$/i, qd = /^\d+\/\d+$/, Kd = /* @__PURE__ */ new Set(["px", "full", "screen"]), Qd = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, eu = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, tu = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, ru = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, nu = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function je(e) {
  return mt(e) || Kd.has(e) || qd.test(e);
}
function et(e) {
  return jt(e, "length", cu);
}
function mt(e) {
  return !!e && !Number.isNaN(Number(e));
}
function pr(e) {
  return jt(e, "number", mt);
}
function Bt(e) {
  return !!e && Number.isInteger(Number(e));
}
function au(e) {
  return e.endsWith("%") && mt(e.slice(0, -1));
}
function A(e) {
  return Vo.test(e);
}
function tt(e) {
  return Qd.test(e);
}
const ou = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function su(e) {
  return jt(e, ou, Uo);
}
function iu(e) {
  return jt(e, "position", Uo);
}
const lu = /* @__PURE__ */ new Set(["image", "url"]);
function du(e) {
  return jt(e, lu, hu);
}
function uu(e) {
  return jt(e, "", fu);
}
function Gt() {
  return !0;
}
function jt(e, t, r) {
  const n = Vo.exec(e);
  return !!n && (n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]));
}
function cu(e) {
  return eu.test(e) && !tu.test(e);
}
function Uo() {
  return !1;
}
function fu(e) {
  return ru.test(e);
}
function hu(e) {
  return nu.test(e);
}
function mu() {
  const e = B("colors"), t = B("spacing"), r = B("blur"), n = B("brightness"), a = B("borderColor"), o = B("borderRadius"), s = B("borderSpacing"), i = B("borderWidth"), l = B("contrast"), d = B("grayscale"), u = B("hueRotate"), c = B("invert"), h = B("gap"), b = B("gradientColorStops"), p = B("gradientColorStopPositions"), y = B("inset"), w = B("margin"), x = B("opacity"), M = B("padding"), S = B("saturate"), _ = B("scale"), Y = B("sepia"), ee = B("skew"), le = B("space"), Re = B("translate"), te = () => ["auto", A, t], j = () => [A, t], Ke = () => ["", je, et], xt = () => ["auto", mt, A], Fe = () => ["", "0", A], Le = () => [mt, pr], dt = () => [mt, A];
  return { cacheSize: 500, separator: ":", theme: { colors: [Gt], spacing: [je, et], blur: ["none", "", tt, A], brightness: Le(), borderColor: [e], borderRadius: ["none", "", "full", tt, A], borderSpacing: j(), borderWidth: Ke(), contrast: Le(), grayscale: Fe(), hueRotate: dt(), invert: Fe(), gap: j(), gradientColorStops: [e], gradientColorStopPositions: [au, et], inset: te(), margin: te(), opacity: Le(), padding: j(), saturate: Le(), scale: Le(), sepia: Fe(), skew: dt(), space: j(), translate: j() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", A] }], container: ["container"], columns: [{ columns: [tt] }], "break-after": [{ "break-after": ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"] }], "break-before": [{ "break-before": ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"] }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none", "start", "end"] }], clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top", A] }], overflow: [{ overflow: ["auto", "hidden", "clip", "visible", "scroll"] }], "overflow-x": [{ "overflow-x": ["auto", "hidden", "clip", "visible", "scroll"] }], "overflow-y": [{ "overflow-y": ["auto", "hidden", "clip", "visible", "scroll"] }], overscroll: [{ overscroll: ["auto", "contain", "none"] }], "overscroll-x": [{ "overscroll-x": ["auto", "contain", "none"] }], "overscroll-y": [{ "overscroll-y": ["auto", "contain", "none"] }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [y] }], "inset-x": [{ "inset-x": [y] }], "inset-y": [{ "inset-y": [y] }], start: [{ start: [y] }], end: [{ end: [y] }], top: [{ top: [y] }], right: [{ right: [y] }], bottom: [{ bottom: [y] }], left: [{ left: [y] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", Bt, A] }], basis: [{ basis: te() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", A] }], grow: [{ grow: Fe() }], shrink: [{ shrink: Fe() }], order: [{ order: ["first", "last", "none", Bt, A] }], "grid-cols": [{ "grid-cols": [Gt] }], "col-start-end": [{ col: ["auto", { span: ["full", Bt, A] }, A] }], "col-start": [{ "col-start": xt() }], "col-end": [{ "col-end": xt() }], "grid-rows": [{ "grid-rows": [Gt] }], "row-start-end": [{ row: ["auto", { span: [Bt, A] }, A] }], "row-start": [{ "row-start": xt() }], "row-end": [{ "row-end": xt() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", A] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", A] }], gap: [{ gap: [h] }], "gap-x": [{ "gap-x": [h] }], "gap-y": [{ "gap-y": [h] }], "justify-content": [{ justify: ["normal", "start", "end", "center", "between", "around", "evenly", "stretch"] }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal", "start", "end", "center", "between", "around", "evenly", "stretch", "baseline"] }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"] }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [M] }], px: [{ px: [M] }], py: [{ py: [M] }], ps: [{ ps: [M] }], pe: [{ pe: [M] }], pt: [{ pt: [M] }], pr: [{ pr: [M] }], pb: [{ pb: [M] }], pl: [{ pl: [M] }], m: [{ m: [w] }], mx: [{ mx: [w] }], my: [{ my: [w] }], ms: [{ ms: [w] }], me: [{ me: [w] }], mt: [{ mt: [w] }], mr: [{ mr: [w] }], mb: [{ mb: [w] }], ml: [{ ml: [w] }], "space-x": [{ "space-x": [le] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [le] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", A, t] }], "min-w": [{ "min-w": [A, t, "min", "max", "fit"] }], "max-w": [{ "max-w": [A, t, "none", "full", "min", "max", "fit", "prose", { screen: [tt] }, tt] }], h: [{ h: [A, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }], "min-h": [{ "min-h": [A, t, "min", "max", "fit", "svh", "lvh", "dvh"] }], "max-h": [{ "max-h": [A, t, "min", "max", "fit", "svh", "lvh", "dvh"] }], size: [{ size: [A, t, "auto", "min", "max", "fit"] }], "font-size": [{ text: ["base", tt, et] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", pr] }], "font-family": [{ font: [Gt] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractons"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", A] }], "line-clamp": [{ "line-clamp": ["none", mt, pr] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", je, A] }], "list-image": [{ "list-image": ["none", A] }], "list-style-type": [{ list: ["none", "disc", "decimal", A] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [e] }], "placeholder-opacity": [{ "placeholder-opacity": [x] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [e] }], "text-opacity": [{ "text-opacity": [x] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: ["solid", "dashed", "dotted", "double", "none", "wavy"] }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", je, et] }], "underline-offset": [{ "underline-offset": ["auto", je, A] }], "text-decoration-color": [{ decoration: [e] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }], indent: [{ indent: j() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", A] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", A] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [x] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top", iu] }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", su] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, du] }], "bg-color": [{ bg: [e] }], "gradient-from-pos": [{ from: [p] }], "gradient-via-pos": [{ via: [p] }], "gradient-to-pos": [{ to: [p] }], "gradient-from": [{ from: [b] }], "gradient-via": [{ via: [b] }], "gradient-to": [{ to: [b] }], rounded: [{ rounded: [o] }], "rounded-s": [{ "rounded-s": [o] }], "rounded-e": [{ "rounded-e": [o] }], "rounded-t": [{ "rounded-t": [o] }], "rounded-r": [{ "rounded-r": [o] }], "rounded-b": [{ "rounded-b": [o] }], "rounded-l": [{ "rounded-l": [o] }], "rounded-ss": [{ "rounded-ss": [o] }], "rounded-se": [{ "rounded-se": [o] }], "rounded-ee": [{ "rounded-ee": [o] }], "rounded-es": [{ "rounded-es": [o] }], "rounded-tl": [{ "rounded-tl": [o] }], "rounded-tr": [{ "rounded-tr": [o] }], "rounded-br": [{ "rounded-br": [o] }], "rounded-bl": [{ "rounded-bl": [o] }], "border-w": [{ border: [i] }], "border-w-x": [{ "border-x": [i] }], "border-w-y": [{ "border-y": [i] }], "border-w-s": [{ "border-s": [i] }], "border-w-e": [{ "border-e": [i] }], "border-w-t": [{ "border-t": [i] }], "border-w-r": [{ "border-r": [i] }], "border-w-b": [{ "border-b": [i] }], "border-w-l": [{ "border-l": [i] }], "border-opacity": [{ "border-opacity": [x] }], "border-style": [{ border: ["solid", "dashed", "dotted", "double", "none", "hidden"] }], "divide-x": [{ "divide-x": [i] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [i] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [x] }], "divide-style": [{ divide: ["solid", "dashed", "dotted", "double", "none"] }], "border-color": [{ border: [a] }], "border-color-x": [{ "border-x": [a] }], "border-color-y": [{ "border-y": [a] }], "border-color-t": [{ "border-t": [a] }], "border-color-r": [{ "border-r": [a] }], "border-color-b": [{ "border-b": [a] }], "border-color-l": [{ "border-l": [a] }], "divide-color": [{ divide: [a] }], "outline-style": [{ outline: ["", "solid", "dashed", "dotted", "double", "none"] }], "outline-offset": [{ "outline-offset": [je, A] }], "outline-w": [{ outline: [je, et] }], "outline-color": [{ outline: [e] }], "ring-w": [{ ring: Ke() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [e] }], "ring-opacity": [{ "ring-opacity": [x] }], "ring-offset-w": [{ "ring-offset": [je, et] }], "ring-offset-color": [{ "ring-offset": [e] }], shadow: [{ shadow: ["", "inner", "none", tt, uu] }], "shadow-color": [{ shadow: [Gt] }], opacity: [{ opacity: [x] }], "mix-blend": [{ "mix-blend": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"] }], "bg-blend": [{ "bg-blend": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"] }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [r] }], brightness: [{ brightness: [n] }], contrast: [{ contrast: [l] }], "drop-shadow": [{ "drop-shadow": ["", "none", tt, A] }], grayscale: [{ grayscale: [d] }], "hue-rotate": [{ "hue-rotate": [u] }], invert: [{ invert: [c] }], saturate: [{ saturate: [S] }], sepia: [{ sepia: [Y] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [r] }], "backdrop-brightness": [{ "backdrop-brightness": [n] }], "backdrop-contrast": [{ "backdrop-contrast": [l] }], "backdrop-grayscale": [{ "backdrop-grayscale": [d] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }], "backdrop-invert": [{ "backdrop-invert": [c] }], "backdrop-opacity": [{ "backdrop-opacity": [x] }], "backdrop-saturate": [{ "backdrop-saturate": [S] }], "backdrop-sepia": [{ "backdrop-sepia": [Y] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [s] }], "border-spacing-x": [{ "border-spacing-x": [s] }], "border-spacing-y": [{ "border-spacing-y": [s] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", A] }], duration: [{ duration: dt() }], ease: [{ ease: ["linear", "in", "out", "in-out", A] }], delay: [{ delay: dt() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", A] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [_] }], "scale-x": [{ "scale-x": [_] }], "scale-y": [{ "scale-y": [_] }], rotate: [{ rotate: [Bt, A] }], "translate-x": [{ "translate-x": [Re] }], "translate-y": [{ "translate-y": [Re] }], "skew-x": [{ "skew-x": [ee] }], "skew-y": [{ "skew-y": [ee] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", A] }], accent: [{ accent: ["auto", e] }], appearance: [{ appearance: ["none", "auto"] }], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", A] }], "caret-color": [{ caret: [e] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": j() }], "scroll-mx": [{ "scroll-mx": j() }], "scroll-my": [{ "scroll-my": j() }], "scroll-ms": [{ "scroll-ms": j() }], "scroll-me": [{ "scroll-me": j() }], "scroll-mt": [{ "scroll-mt": j() }], "scroll-mr": [{ "scroll-mr": j() }], "scroll-mb": [{ "scroll-mb": j() }], "scroll-ml": [{ "scroll-ml": j() }], "scroll-p": [{ "scroll-p": j() }], "scroll-px": [{ "scroll-px": j() }], "scroll-py": [{ "scroll-py": j() }], "scroll-ps": [{ "scroll-ps": j() }], "scroll-pe": [{ "scroll-pe": j() }], "scroll-pt": [{ "scroll-pt": j() }], "scroll-pr": [{ "scroll-pr": j() }], "scroll-pb": [{ "scroll-pb": j() }], "scroll-pl": [{ "scroll-pl": j() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "manipulation"] }], "touch-x": [{ "touch-pan": ["x", "left", "right"] }], "touch-y": [{ "touch-pan": ["y", "up", "down"] }], "touch-pz": ["touch-pinch-zoom"], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", A] }], fill: [{ fill: [e, "none"] }], "stroke-w": [{ stroke: [je, et, pr] }], stroke: [{ stroke: [e, "none"] }], sr: ["sr-only", "not-sr-only"], "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], size: ["w", "h"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], "line-clamp": ["display", "overflow"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"], touch: ["touch-x", "touch-y", "touch-pz"], "touch-x": ["touch"], "touch-y": ["touch"], "touch-pz": ["touch"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } };
}
const gu = Zd(mu);
function I(...e) {
  return gu(Vd(e));
}
var yu = $("<button>");
const [gn, Va] = T(!0), St = (e) => {
  return t = yu(), Fr(t, R(() => ({ ...e, class: void 0 }), { get class() {
    return I(`
        rn-btn 
        rn-btn-ghost 
        ${e.setHeight ? "" : "rn-h-full"} 
        ${e.selected ? "" : "dark:hover:rn-bg-black-tie"}
        rn-p-0 
        rn-min-h-0 
        date-picker-main-btn
        motion-reduce:rn-transition-none
       
        `, { "rn-no-animation": !gn() }, e.class);
  }, "data-type": "date-picker-main-btn", type: "button" }), !1, !0), O(t, () => e.children), t;
  var t;
};
var pu = $('<div class="rn-absolute rn-left-0 rn-top-0 rn-h-full rn-w-full rn-rounded-full">'), bu = $("<div>");
const Bo = (e) => {
  const [t, r] = T(), [n, a] = T(!1), [o, s] = T(!0);
  return oe(() => {
    e.dayRangeStart || e.dayRangeEnd || e.isMultipleSelected ? a(!0) : a(!1), e.dayRangeStart || e.dayRangeEnd || e.isMultipleSelected ? s(!1) : s(!0);
  }), oe(() => {
    t() && (e.secondaryColor && document.documentElement.style.setProperty("--date-picker-before-bg", e.secondaryColor), e.secondaryTextColor && document.documentElement.style.setProperty("--date-picker-before-color", e.secondaryTextColor));
  }), i = bu(), lt(r, i), Fr(i, R({ get class() {
    return I(`
        ${e.header ? `
            date-picker-weekday-name
            rn-block
            rn-text-[0.75rem]` : `
              date-picker-day-number-area
              rn-flex
              rn-items-center
              rn-justify-center
              rn-text-[0.9375rem]
            `}
        rn-relative
        
        rn-text-center
        rn-font-bold
        rn-uppercase
        rn-tracking-[0.02em]
        rn-text-[#909090]
        dark:rn-text-white
        ${e.hidden && "day-number-area-outside-days rn-pointer-events-none"}
        ${e.dayRangeBetween && !e.hidden ? "dark:rn-bg-black-tie rn-bg-primary-focus rn-bg-opacity-50" : ""}
        before:rn-absolute
        before:rn-top-0
        before:rn-h-full
        before:rn-bg-opacity-50
        
        before:rn-content-[""] 
        ${e.dayRangeStart && e.dayRangeStartEnd && !e.hidden || e.dayRangeEnd && e.dayRangeStartEnd && !e.hidden ? "" : "before:rn-hidden"}
        ${e.dayRangeStart && e.dayRangeStartEnd && "before:rn-left-[15%] before:rn-block before:rn-w-[86%] before:rn-rounded-l-full"}
        ${e.dayRangeEnd && e.dayRangeStartEnd && "before:rn-right-[15%] before:rn-block before:rn-w-[85%] before:rn-rounded-r-full"}
        ${n() && "date-picker-day-number-area-selected"}
        `, e.weekNamesClass, e.daysWrapperClass, { [e.daysActiveRangeStartWrapperClass || ""]: e.dayRangeStart, [e.daysActiveRangeEndWrapperClass || ""]: e.dayRangeEnd, [e.daysActivePrimaryWrapperClass || ""]: n(), [e.daysActiveRangeBetweenWrapperClass || ""]: e.dayRangeBetween });
  }, get "aria-selected"() {
    return n();
  }, get "data-value"() {
    return e.header ? e.headerValue : e.dateValue;
  }, get "data-day-number-area"() {
    return !e.header;
  }, get "data-day-number-area-range-start-or-end"() {
    return e.dayRangeStart || e.dayRangeEnd;
  }, get "data-day-number-area-range-between"() {
    return e.dayRangeBetween;
  }, get "data-day-number-area-range-start"() {
    return e.dayRangeStart;
  }, get "data-day-number-area-range-end"() {
    return e.dayRangeEnd;
  }, get "data-day-number-area-current-day"() {
    return e.daysCurrent;
  }, get "data-day-number-area-not-current-month"() {
    return e.daysNotCurrentMonth;
  }, get "data-day-number-area-range-tip"() {
    return e.dayRangeStart && e.dayRangeStartEnd || e.dayRangeEnd && e.dayRangeStartEnd;
  }, get "data-day-number-area-range-tip-start"() {
    return e.dayRangeStart && e.dayRangeStartEnd;
  }, get "data-day-number-area-range-tip-end"() {
    return e.dayRangeEnd && e.dayRangeStartEnd;
  }, get "data-day-name"() {
    return e.header;
  }, get style() {
    return { ...e.dayRangeBetween ? { "background-color": e.secondaryColor } : {}, ...e.weekDaysNameColor && e.header ? { color: e.weekDaysNameColor } : {} };
  }, get onMouseEnter() {
    return e.onHover;
  }, get onMouseLeave() {
    return e.onHoverEnd;
  } }, () => e.wrapperProps), !1, !0), O(i, f(z, { get when() {
    return e.header && !e.hidden;
  }, keyed: !0, get children() {
    return e.children;
  } }), null), O(i, f(z, { get when() {
    return !e.header && !e.hidden;
  }, keyed: !0, get children() {
    return [f(St, { setHeight: !0, get tabindex() {
      return n() ? 0 : -1;
    }, get class() {
      return I(`
          date-picker-day-number
          rn-relative          
          rn-z-10
          rn-h-8
          
          rn-w-8
          rn-p-0
          rn-text-center
          rn-text-[0.9375rem]
          rn-transition-none
          
          ${e.daysNotCurrentMonth ? e.dayRangeStart || e.dayRangeEnd ? "rn-opacity-95" : "day-number-not-current-month rn-opacity-50 dark:rn-text-white" : "day-number-current-month rn-opacity-100"}

          ${e.dayRangeBetween && "dark:hover:rn-bg-black-tie hover:rn-bg-transparent"}
          ${e.shouldHighlightWeekends && e.isWeekend && o() ? "rn-text-red-500 dark:rn-text-red-500" : ""}
        ${n() ? "rn-bg-primary hover:rn-bg-primary dark:rn-bg-white dark:rn-text-black dark:hover:rn-bg-white" : e.daysCurrent ? "day-number-current-day rn-border rn-border-dashed rn-border-black hover:rn-border hover:rn-border-dashed hover:rn-border-black dark:rn-border-white" : ""}
        ${e.dayRangeStart || e.dayRangeEnd ? "day-number-range-start-or-end rn-text-white dark:rn-text-black" : e.isMultipleSelected ? "day-number-multiple-select rn-text-white dark:rn-text-black" : e.dayRangeBetween ? "day-range-between rn-text-black" : "rn-text-black"}
          rn-cursor-pointer
          rn-rounded-full
          disabled:rn-text-black
          disabled:rn-opacity-30
          `, { "dark:rn-text-white": o() }, e.daysBtnClass, e.customDayClass, { [e.daysActivePrimaryBtnClass || ""]: n(), [e.daysActiveRangeBetweenBtnClass || ""]: e.dayRangeBetween, [e.currentDayBtnClass || ""]: e.daysCurrent, [e.weekEndDaysBtnClass || ""]: e.isWeekend, [e.sundaysBtnClass || ""]: e.isSunday, [e.saturdaysBtnClass || ""]: e.isSaturday, [e.daysNotInCurrentMonthBtnClass || ""]: e.daysNotCurrentMonth, [e.daysActiveRangeStartBtnClass || ""]: e.dayRangeStart, [e.daysActiveRangeEndBtnClass || ""]: e.dayRangeEnd });
    }, "data-day-number": !0, get "data-day-number-selected"() {
      return n();
    }, get "data-day-number-range-end-hover"() {
      return e.dayRangeEndHover;
    }, get "data-day-number-range-end-selected"() {
      return G(() => !e.dayRangeEndHover)() && n();
    }, get "data-day-number-range-start-or-end"() {
      return e.dayRangeStart || e.dayRangeEnd;
    }, get "data-day-number-range-between"() {
      return e.dayRangeBetween;
    }, get "data-day-number-range-start"() {
      return e.dayRangeStart;
    }, get "data-day-number-range-end"() {
      return e.dayRangeEnd;
    }, get "data-day-number-current-day"() {
      return e.daysCurrent;
    }, get "data-day-number-not-current-month"() {
      return e.daysNotCurrentMonth;
    }, get "data-day-number-is-weekend"() {
      return e.isWeekend;
    }, get "data-day-number-is-sunday"() {
      return e.isSunday;
    }, get "data-day-number-is-saturday"() {
      return e.isSaturday;
    }, get "data-day-number-is-multiple-selected"() {
      return e.isMultipleSelected;
    }, "data-scope": "date-picker", get "data-highlight-weekend"() {
      return e.shouldHighlightWeekends;
    }, "data-part": "cell-trigger", role: "button", get "aria-label"() {
      return "Choose " + e.date;
    }, get "data-value"() {
      return e.dateValue;
    }, "data-type": "day", get onClick() {
      return e.onClick;
    }, get disabled() {
      return e.disabled;
    }, get selected() {
      return n();
    }, get style() {
      return { ...n() && (e.primaryColor || e.primaryTextColor) ? { "background-color": e.primaryColor, color: e.primaryTextColor } : {}, ...e.dayRangeBetween ? { color: e.secondaryTextColor } : {}, ...(e.weekEndDayTextColor || e.weekEndDayBgColor) && o() && e.isWeekend ? { color: e.weekEndDayTextColor, "background-color": e.weekEndDayBgColor } : {}, ...e.textColor && o() ? e.shouldHighlightWeekends && e.isWeekend ? {} : { color: e.textColor } : {} };
    }, get children() {
      return e.children;
    } }), f(z, { keyed: !0, get when() {
      return e.disabled;
    }, get children() {
      var l = pu();
      return fo(l, "click", e.onDisabledDayError, !0), l;
    } })];
  } }), null), i;
  var i;
};
Wr(["click"]);
var vu = $("<div data-type=date-picker-calendar-row data-scope=date-picker role=row>");
const Go = (e) => {
  return t = vu(), O(t, () => e.children), H((r) => {
    var n = I(`
          rn-grid
          rn-grid-cols-7
          rn-text-sm
        `, { "date-picker-week-names-row rn-my-2": e.header, "date-picker-days-row rn-mb-[0.13rem]": !e.header }, e.weekNamesRowClass, e.daysRowClass), a = e.header ? "header" : "row";
    return n !== r.e && X(t, r.e = n), a !== r.t && fe(t, "data-part", r.t = a), r;
  }, { e: void 0, t: void 0 }), t;
  var t;
}, wu = (e, t, r) => {
  const n = new Date(t, e, 1 - ((r == null ? void 0 : r.weekStartDay) || 0)).getDay(), a = new Date(t, e + 1, 0).getDate(), o = [], s = e === 0 ? 11 : e - 1, i = new Date(s === 11 ? t - 1 : t, s + 1, 0).getDate();
  let l = i - n + 1;
  l === i + 1 && (l = 1);
  for (let u = 0; u < n; u++)
    o.push({ value: l + u, month: "prev" });
  for (let u = 1; u <= a; u++)
    o.push({ value: u, month: "current" });
  const d = 35 - o.length >= 0 ? 35 - o.length : 42 - o.length;
  for (let u = 1; u <= d; u++) {
    const c = u;
    o.push({ value: c, month: "next" });
  }
  return o;
}, $n = () => {
  const e = /* @__PURE__ */ new Date();
  return { day: e.getDate(), month: e.getMonth(), year: e.getFullYear() };
};
function Su(e, t) {
  const r = [];
  for (let n = t; n >= e; n--)
    r.push(n);
  return r;
}
const Yr = (/* @__PURE__ */ new Date()).getFullYear(), ie = (e, t) => t === "prev" ? e === 0 ? 11 : e - 1 : t === "next" ? e === 11 ? 0 : e + 1 : e, me = (e, t, r) => r === "prev" ? t === 0 ? e - 1 : e : r === "next" && t === 11 ? e + 1 : e, ku = (e, t) => ({ year: t === 0 ? e - 1 : e, month: t === 0 ? 11 : t - 1 }), xu = (e, t) => ({ year: t === 11 ? e + 1 : e, month: t === 11 ? 0 : t + 1 }), Xo = (e, t = "long", r) => new Date(2e3, e, 1).toLocaleString(r ?? "en", { month: t });
function Jo(e, t) {
  const r = [];
  for (let n = 0; n < e.length; n += t)
    r.push(e.slice(n, n + t));
  return r;
}
const yn = ({ startDay: e, month: t, year: r, type: n, setStartDay: a }) => {
  if (n === "single") {
    const o = { ...e || $n(), ...t !== void 0 && { month: t }, ...r !== void 0 && { year: r } };
    return a == null || a(o), { selectedDate: o, type: n };
  }
  return null;
}, Du = (e, t) => {
  const r = (n) => {
    e && !e.contains(n.target) && t(n);
  };
  document.addEventListener("click", r), pt(() => {
    document.removeEventListener("click", r);
  });
}, [Zo, _u] = T([]), Cu = (e) => (oe(() => {
  const t = wu(e.month(), e.year(), { weekStartDay: e.weekStartDay });
  _u(Jo(t, 7));
}), Zo);
function Mu({ startYear: e, endYear: t, count: r, year: n, yearRange: a }) {
  const o = n || (/* @__PURE__ */ new Date()).getFullYear();
  if (!e) {
    const d = Math.floor(o / r) * r;
    e = d === o ? o - r + 1 : d + 1;
  }
  t || (t = e + r - 1);
  const s = [];
  let i = e, l = t;
  for (let d = e; d <= t; d++)
    a != null && a.start && d < (a == null ? void 0 : a.start) ? (s.push(""), i = a == null ? void 0 : a.start) : a != null && a.end && d > (a == null ? void 0 : a.end) ? (s.push(""), l = a == null ? void 0 : a.end) : s.push(d + "");
  return { array: s, range: `${i} - ${l}`, startYear: e, endYear: t };
}
const Ou = (e, t, r = "en-US") => {
  const n = qo(e);
  return t = t.replace(new RegExp("(?<!~)(?<!y)yyyy(?!y)", "g"), n.toLocaleString(r, { year: "numeric" })).replace(new RegExp("(?<!~)(?<!y)yy(?!y)", "g"), n.toLocaleString(r, { year: "2-digit" })).replace(new RegExp("(?<!~)(?<!m)m(?!m)", "g"), n.toLocaleString(r, { month: "numeric" })).replace(new RegExp("(?<!~)(?<!m)mm(?!m)", "g"), n.toLocaleString(r, { month: "2-digit" })).replace(new RegExp("(?<!~)(?<!d)dd(?!d)", "g"), n.toLocaleString(r, { day: "2-digit" })).replace(new RegExp("(?<!~)(?<!d)d(?!d)", "g"), n.toLocaleString(r, { day: "numeric" })).replace(new RegExp("(?<!~)(?<!D)DDD(?!D)", "g"), tn(n.toLocaleString(r, { weekday: "long" }))).replace(new RegExp("(?<!~)(?<!D)DD(?!D)", "g"), tn(n.toLocaleString(r, { weekday: "short" }))).replace(new RegExp("(?<!~)(?<!D)D(?!D)", "g"), tn(n.toLocaleString(r, { weekday: "narrow" }))).replace(new RegExp("(?<!~)(?<!M)MMM(?!M)", "g"), n.toLocaleString(r, { month: "long" })).replace(new RegExp("(?<!~)(?<!M)MM(?!M)", "g"), n.toLocaleString(r, { month: "short" })).replace(new RegExp("(?<!~)(?<!M)M(?!M)", "g"), n.toLocaleString(r, { month: "narrow" })).replace(/~y/g, "y").replace(/~m/g, "m").replace(/~M/g, "M").replace(/~d/g, "d").replace(/~D/g, "D");
}, qo = (e) => {
  let t;
  return t = typeof e == "string" || typeof e == "number" ? new Date(e) : e instanceof Date ? e : new Date(e.year || 2023, e.month || e.month === 0 ? e.month : 1, e.day), t;
}, nt = (e) => ({ year: e.getFullYear(), month: e.getMonth(), day: e.getDate() }), ce = (e) => {
  const t = /* @__PURE__ */ new Date(), r = (e == null ? void 0 : e.year) ?? t.getFullYear(), n = (e == null ? void 0 : e.month) === 0 ? 0 : (e == null ? void 0 : e.month) ?? t.getMonth(), a = (e == null ? void 0 : e.day) ?? t.getDate();
  return new Date(r, n, a);
}, Tu = (e, t) => {
  const { localeOptions: r, locale: n, format: a } = t || {}, o = qo(e);
  return ht({ date: o, option: r || { month: "short", day: "numeric", year: "numeric" }, locale: n, format: a });
}, ht = ({ format: e, option: t, date: r, locale: n }) => e ? Ou(r, e, n) : r.toLocaleDateString(n ?? "en-US", t), tn = (e) => e.startsWith("M") ? "~" + e : e, Yu = ({ day: e, endDate: t, startDate: r, year: n, month: a, monthStatus: o }) => {
  if (!r || !t)
    return !1;
  const s = new Date(me(n, a, o), ie(a, o), e), i = new Date(r.year, r.month, r.day), l = new Date(t.year, t.month, t.day);
  return s > i && s < l;
}, br = ({ dateRange: e, day: t, year: r, month: n, monthStatus: a }) => {
  if (!e)
    return !1;
  const o = new Date(me(r, n, a), ie(n, a), t), s = new Date(e.year, e.month, e.day);
  return o.getTime() === s.getTime();
}, Ko = (e) => {
  const t = $n();
  return e instanceof Date ? e.getDate() === t.day && e.getMonth() === t.month && e.getFullYear() === t.year : e.day === t.day && e.month === t.month && e.year === t.year;
}, Au = ({ maxDate: e, minDate: t, day: r, year: n, month: a }) => {
  if (!t && !e)
    return !1;
  const o = new Date(me(n(), a(), r.month), ie(a(), r.month), r.value);
  if (t && e) {
    const s = new Date(t.year, t.month, t.day), i = new Date(e.year, e.month, e.day);
    return o < s || o > i;
  }
  return t ? o < new Date(t.year, t.month, t.day) : e ? o > new Date(e.year, e.month, e.day) : !1;
}, Qo = ({ disabledDays: e, month: t, day: r, year: n }) => e ? !!e.find((a) => {
  if ("start" in a && "end" in a) {
    const o = ce(a.start), s = ce(a.end), i = ce({ day: r.value, month: ie(t, r.month), year: me(n, t, r.month) });
    return i >= o && i <= s;
  }
  return a.day === r.value && a.month === ie(t, r.month) && a.year === me(n, t, r.month);
}) : !1, rr = ({ enabledDays: e, day: t, year: r, month: n, next: a, prev: o }) => !!e && e.every((s) => {
  const i = t ? { day: t.value, month: ie(n, t.month), year: me(r, n, t.month) } : { year: r, month: n };
  if ("start" in s && "end" in s) {
    if (function(u, c, h, b) {
      if (b != null && b.next)
        return c.year === void 0 || u.year === void 0 || c.year > u.year || u.year === c.year && (u.month === void 0 || c.month === void 0 || c.month >= u.month);
      if (b != null && b.prev)
        return h.year === void 0 || u.year === void 0 || h.year < u.year || u.year === h.year && (u.month === void 0 || h.month === void 0 || h.month <= u.month);
      const p = c.year === void 0 || u.year === void 0 || u.year > c.year || u.year === c.year && (u.month === void 0 || c.month === void 0 || u.month > c.month || u.month === c.month && (!u.day || c.day === void 0 || u.day >= c.day)), y = h.year === void 0 || u.year === void 0 || u.year < h.year || u.year === h.year && (u.month === void 0 || h.month === void 0 || u.month < h.month || u.month === h.month && (!u.day || h.day === void 0 || u.day <= h.day));
      return p && y;
    }(i, s.start, s.end, { next: a, prev: o }))
      return !1;
  } else if (d = s, (l = i).day ? l.year === d.year && l.month === d.month && l.day === d.day : l.year === d.year && l.month === d.month)
    return !1;
  var l, d;
  return !0;
}), Ua = (e, t, r) => {
  for (let n = new Date(e); n <= t; n.setDate(n.getDate() + 1))
    if (Qo({ day: { month: "current", value: n.getDate() }, month: n.getMonth(), year: n.getFullYear(), disabledDays: r }))
      return !0;
  return !1;
}, Ba = (e, t, r) => {
  for (let n = new Date(e); n <= t; n.setDate(n.getDate() + 1))
    if (rr({ day: { month: "current", value: n.getDate() }, month: n.getMonth(), year: n.getFullYear(), enabledDays: r }))
      return !0;
}, Nu = ({ year: e, month: t, day: r }) => {
  const n = ie(t, r.month), a = me(e, t, r.month), o = new Date(a, n, r.value).getDay();
  return { isWeekend: o === 0 || o === 6, isSaturday: o === 6, isSunday: o === 0 };
}, Ar = (e, t) => e.day === t.day && e.month === t.month && e.year === t.year, pn = (e, t) => {
  const r = e instanceof Date ? e : ce(e), n = t instanceof Date ? t : ce(t);
  return r.getTime() < n.getTime();
}, Ru = ({ year: e, month: t, endDay: r, day: n, startDay: a, customDaysClassName: o, multipleObject: s, hideOutSideDays: i, hoverRangeValue: l, minDate: d, maxDate: u, disabledDays: c, enabledDays: h }) => {
  var b;
  const p = `${e()}-${ie(t(), n.month)}-${n.value}`;
  return { dayRangeEndHover: Iu(l, a, n, e, t), dayRangeStartEnd: (l().start || a) && (l().end || r) && (br({ year: e(), month: t(), day: n.value, dateRange: l().start || a, monthStatus: n.month }) || br({ year: e(), month: t(), day: n.value, dateRange: l().end || r, monthStatus: n.month })), dayRangeBetween: Yu({ year: e(), month: t(), day: n.value, startDate: l().start || a, endDate: l().end || r, monthStatus: n.month }), dayRangeStart: br({ year: e(), month: t(), day: n.value, dateRange: l().start || a, monthStatus: n.month }), dayRangeEnd: br({ year: e(), month: t(), day: n.value, dateRange: l().end || r, monthStatus: n.month }), daysCurrent: Ko(new Date(me(e(), t(), n.month), ie(t(), n.month), n.value)) && n.month === "current", daysNotCurrentMonth: n.month !== "current", ...Nu({ year: e(), month: t(), day: n }), customDayClass: (b = o == null ? void 0 : o.find((y) => y.year === me(e(), t(), n.month) && y.month === ie(t(), n.month) && y.day === n.value)) == null ? void 0 : b.className, isMultipleSelected: !!(s != null && s.find((y) => y.year === me(e(), t(), n.month) && y.month === ie(t(), n.month) && y.day === n.value)), hidden: !!i && n.month !== "current", disabled: Qo({ disabledDays: c, day: n, month: t(), year: e() }) || Au({ day: n, month: t, year: e, minDate: d, maxDate: u }) || rr({ enabledDays: h, day: n, month: t(), year: e() }), date: p, dateValue: p };
}, Iu = (e, t, r, n, a) => {
  var o, s;
  return !!((o = e().end) != null && o.day) && !!((s = e().start) != null && s.day) && !!(t != null && t.day) && (pn(e().start, t) ? Ar(e().start, { year: me(n(), a(), r.month), month: ie(a(), r.month), day: r.value }) : !!pn(t, e().end) && Ar(e().end, { year: me(n(), a(), r.month), month: ie(a(), r.month), day: r.value }));
};
var Pu = $("<div data-type=calendar-days-area data-scope=date-picker>");
const Ga = (e) => {
  return Cu({ month: e.month, year: e.year, weekStartDay: e.weekStartDay }), t = Pu(), O(t, f(bt, { get each() {
    return Zo();
  }, children: (r, n) => f(Go, { get daysRowClass() {
    var a;
    return I({ "rn-hidden": ((a = e.showSelectorTwo) == null ? void 0 : a.call(e)) && n() > 0 }, e.daysRowClass);
  }, get children() {
    return f(bt, { each: r, children: (a) => f(Bo, R(() => ({ ...e, calendarWeekDaysNameClass: void 0 }), () => Ru({ year: e.year, day: a, month: e.month, startDay: e.startDay(), endDay: e.endDay(), customDaysClassName: e.customDaysClassName, multipleObject: e.multipleObject(), hideOutSideDays: e.hideOutSideDays, hoverRangeValue: e.hoverRangeValue, enabledDays: e.enabledDays, minDate: e.minDate, maxDate: e.maxDate, disabledDays: e.disabledDays }), { onClick: () => e.handleDayClick(a, e.month, e.year, e.nextMonth || !1), onHover: () => e.onHoverDay(a, e.month, e.year, e.nextMonth || !1), onHoverEnd: () => e.onHoverDayEnd(a, e.month, e.year, e.nextMonth || !1), get primaryColor() {
      return e.primaryColor;
    }, get primaryTextColor() {
      return e.primaryTextColor;
    }, get secondaryColor() {
      return e.secondaryColor;
    }, get secondaryTextColor() {
      return e.secondaryTextColor;
    }, get disabledDays() {
      return e.disabledDays;
    }, get shouldHighlightWeekends() {
      return e.shouldHighlightWeekends;
    }, get onDisabledDayError() {
      return e.onDisabledDayError;
    }, get hoverRangeValue() {
      return e.hoverRangeValue;
    }, get children() {
      return a.value;
    } })) });
  } }) })), H(() => X(t, I("date-picker-calendar-days-area", e.datePickerCalendarDaysArea))), t;
  var t;
}, Xa = (e) => {
  const [t, r] = T([]), [n, a] = T([]);
  return Er(() => {
    const o = Array.from({ length: 7 }, (i, l) => {
      const d = new Date(0, 0, l - (1 - (e.weekStartDay || 0)) + 1).toLocaleDateString(e.locale || "en", { weekday: e.weekDaysType === "single" ? "narrow" : "short" });
      return e.weekDaysType === "double" ? d.slice(0, 2) : d;
    }), s = Array.from({ length: 7 }, (i, l) => new Date(0, 0, l - (1 - (e.weekStartDay || 0)) + 1).toLocaleDateString(e.locale || "en", { weekday: "long" }));
    a(s), r(o);
  }), f(Go, { get weekNamesRowClass() {
    return e.weekNamesRowClass;
  }, get children() {
    return f(bt, { get each() {
      return t();
    }, children: (o, s) => f(Bo, { get weekDaysNameColor() {
      return e.weekDaysNameColor;
    }, get weekNamesClass() {
      return e.weekNamesClass;
    }, get wrapperProps() {
      return { "data-scope": "date-picker", "data-type": "column-header", "aria-label": n()[s()], role: "columnheader" };
    }, header: !0, get headerValue() {
      return n()[s()];
    }, children: o }) });
  } });
};
var Ja = $("<div>"), $u = $('<div><div data-scope=date-picker data-part=grid role=grid data-columns=7 aria-roledescription="calendar month"tabindex=-1>');
const Eu = (e) => {
  const [t, r] = T(0), [n, a] = T(0);
  return oe(() => {
    e.month() === 0 || (e.month() === 11 ? (r(e.year() + 1), a(0)) : (r(e.year()), a(e.month() + 1)));
  }), o = $u(), s = o.firstChild, O(s, () => e.weekDaysJSX || f(Xa, R(e, { get weekDaysNameColor() {
    return e.weekDaysNameColor;
  }, get weekDaysType() {
    return e.weekDaysType;
  }, get locale() {
    return e.locale;
  }, get weekStartDay() {
    return e.weekStartDay;
  } })), null), O(s, f(Ga, e), null), O(o, f(z, { get when() {
    return e.twoMonthsDisplay;
  }, keyed: !0, get children() {
    return [(l = Ja(), H(() => X(l, I("date-picker-calendar-area-divider rn-divider aboveBreakTwoCalendar:rn-divider-horizontal aboveBreakTwoCalendar:rn-mx-2 aboveBreakTwoCalendar:rn-w-fit ", e.calendarDividerClass))), l), (i = Ja(), O(i, () => e.weekDaysJSX || f(Xa, R(e, { get weekDaysNameColor() {
      return e.weekDaysNameColor;
    }, get weekDaysType() {
      return e.weekDaysType;
    }, get locale() {
      return e.locale;
    }, get weekStartDay() {
      return e.weekStartDay;
    } })), null), O(i, f(Ga, R(e, { month: n, year: t, nextMonth: !0 })), null), H(() => X(i, I("date-picker-calendar-area-two", { "breakTwoCalendar:rn-px-4 aboveBreakTwoCalendar:rn-pr-4": e.twoMonthsDisplay }, e.calendarTwoAreaClass))), i)];
    var i, l;
  } }), null), H((i) => {
    var l = I("date-picker-calendar-wrapper rn-flex rn-min-w-max breakTwoCalendar:rn-flex-col", e.calendarWrapperClass), d = I("date-picker-calendar-area-one", { "rn-px-4": !e.twoMonthsDisplay, "breakTwoCalendar:rn-px-4 aboveBreakTwoCalendar:rn-pl-4": e.twoMonthsDisplay }, e.calendarOneAreaClass);
    return l !== i.e && X(o, i.e = l), d !== i.t && X(s, i.t = d), i;
  }, { e: void 0, t: void 0 }), o;
  var o, s;
}, bn = () => ({ getToday: $n, convertDateObjectToDate: ce, convertDateToDateObject: nt, checkIfItsTodayDate: Ko, isBeforeDate: pn, getMonthName: Xo, formatDate: Tu, clickOutside: Du });
function Wu(e, t) {
  const r = (n) => {
    var a;
    return !e.contains(n.target) && ((a = t(n)) == null ? void 0 : a(n));
  };
  document.body.addEventListener("click", r), pt(() => document.body.removeEventListener("click", r));
}
const Fu = ({ inputRef: e, dropDownRef: t, positionX: r, positionY: n }) => {
  var a, o, s;
  const i = (a = e()) == null ? void 0 : a.getBoundingClientRect(), l = (o = t()) == null ? void 0 : o.offsetHeight, d = (s = t()) == null ? void 0 : s.offsetWidth, u = window.innerHeight - (i == null ? void 0 : i.bottom), c = i == null ? void 0 : i.top, h = i == null ? void 0 : i.left, b = window.innerWidth - (i == null ? void 0 : i.right), p = window.innerWidth;
  let y, w;
  const x = n === "top" || n === "bottom", M = (i == null ? void 0 : i.top) - l - 10 + "px", S = `${i == null ? void 0 : i.bottom}px`;
  n === "top" && (y = M), n === "bottom" && (y = S), u > l && !x ? y = S : (c > l && !x || u < l && n === "bottom" && c > l) && (y = M), (u > l || c > l || x) && (n !== "top" || c > l) && (n !== "bottom" || u > l || c > l) || (y = "0px");
  let _ = 0;
  if (r === "left")
    _ = h >= d ? h - d : 0;
  else if (r === "right")
    _ = b >= d ? i == null ? void 0 : i.right : p - d;
  else {
    const Y = (i == null ? void 0 : i.left) + (i == null ? void 0 : i.width) / 2, ee = d / 2;
    _ = Y - ee >= 0 && Y + ee <= p ? Y - ee : Y - ee < 0 ? 0 : p - d;
  }
  return w = `${_}px`, { top: y, left: w };
};
var Lu = $("<div><div>");
function ju(e, t) {
  Wu(e, t);
}
const zu = (e) => (oe(() => {
  var t, r;
  (t = e.clickOutsideRef) != null && t.call(e) && bn().clickOutside((r = e.clickOutsideRef) == null ? void 0 : r.call(e), (n) => {
    e.isShown && (e.ignoreClickOutside || (e.onClickOutsideRef ? e.onClickOutsideRef(n) : e.setIsShown(!1)));
  });
}), f(z, { get when() {
  return e.isShown;
}, keyed: !0, get children() {
  return f(Wi, { get mount() {
    var t;
    return G(() => !!(e != null && e.referenceId))() ? document.getElementById(e.referenceId) : ((t = e == null ? void 0 : e.reference) == null ? void 0 : t.call(e)) || document.getElementById("modal");
  }, get children() {
    var t = Lu(), r = t.firstChild;
    return lt(ju, t, () => (n) => {
      e.ignoreClickOutside || (e.onClickOutside ? e.onClickOutside(n) : (e.setIsShown(!1), e.onClose && e.onClose()));
    }), O(r, () => e.children), H((n) => {
      var a, o, s, i, l, d, u, c = e.class, h = { ...e.useRefWidth && (((a = e.reference) == null ? void 0 : a.call(e)) || e.referenceId && document.getElementById(e.referenceId)) && { width: (o = e.reference) != null && o.call(e) ? ((i = (s = e.reference) == null ? void 0 : s.call(e)) == null ? void 0 : i.clientWidth) + "px" : document.getElementById(e.referenceId || "") ? ((l = document.getElementById(e.referenceId || "")) == null ? void 0 : l.clientWidth) + "px" : "" }, ...e.style }, b = I({ "\n                    rn-absolute\n                    rn-z-10\n                    rn-flex\n                    rn-w-full\n                    rn-flex-col\n                    rn-bg-transparent\n                ": !e.hideDefaultStyle }, e.innerWrapperClass), p = { ...e.useRefWidth && { width: ((u = (d = e.reference) == null ? void 0 : d.call(e)) == null ? void 0 : u.clientWidth) + "px" } };
      return c !== n.e && X(t, n.e = c), n.t = vt(t, h, n.t), b !== n.a && X(r, n.a = b), n.o = vt(r, p, n.o), n;
    }, { e: void 0, t: void 0, a: void 0, o: void 0 }), t;
  } });
} }));
var Za = $("<div data-type=dropdown>"), qa = $("<div><div>");
const es = (e) => {
  const [t, r] = T(), [n, a] = T(), [o, s] = T(), [i, l] = T(), [d, u] = T(!1), [c, h] = T(!1), b = (S) => {
    S || (S = { x: e.positionX || "center", y: e.positionY || "auto" });
    const { left: _, top: Y } = Fu({ inputRef: i, dropDownRef: o, positionX: S.x, positionY: S.y });
    a(_), r(Y);
  };
  oe(() => {
    const S = () => {
      (e.isShown || d()) && b({ y: e.positionY || "auto", x: e.positionX || "center" });
    };
    document.addEventListener("scroll", S), window.addEventListener("resize", S), pt(() => {
      document.removeEventListener("scroll", S), window.removeEventListener("resize", S);
    });
  }), oe(() => {
    e.isShown || d() ? setTimeout(() => {
      h(!0);
    }, 100) : h(!1);
  }), oe(() => {
    var S, _;
    e.isShown || d() ? ((S = e.onOpen) == null || S.call(e), b()) : (_ = e.onClose) == null || _.call(e);
  }), oe(() => {
    c() && b({ y: e.positionY || "auto", x: e.positionX || "center" });
  }), Er(() => {
    if (document.getElementById("portal-island"))
      return;
    const S = document.createElement("div");
    S.id = "portal-island", document.body.appendChild(S);
  });
  const p = () => {
    e.handleChildrenClick ? e.handleChildrenClick(e.setIsShown || u) : e.setIsShown ? e.setIsShown(!e.isShown) : u(!d());
  }, y = () => {
    e.setIsShown ? e.setIsShown(!1) : u(!1);
  }, w = () => {
    if (typeof e.content == "function") {
      const Y = e.content({ close: y });
      return S = Za(), O(S, Y), S;
    }
    var S, _;
    return _ = Za(), O(_, () => e.content), _;
  };
  return x = qa(), M = x.firstChild, x.$$keyup = (S) => {
    S.key === "Escape" && (e.isShown || d()) && y();
  }, M.$$click = p, lt(l, M), O(M, () => e.children), O(x, f(zu, { get setIsShown() {
    return e.setIsShown || u;
  }, get isShown() {
    return e.isShown || d();
  }, referenceId: "portal-island", hideDefaultStyle: !0, get onClickOutside() {
    return e.onClickOutside ? (S) => {
      var _;
      return (_ = e.onClickOutside) == null ? void 0 : _.call(e, S, e.setIsShown || u);
    } : void 0;
  }, reference: i, get useRefWidth() {
    return e.useRefWidth;
  }, get style() {
    return { "z-index": e.zIndex || 1e3, position: "fixed", ...t() && { top: t() }, ...n() && { left: n() } };
  }, get children() {
    var S = qa(), _ = S.firstChild;
    return lt(s, S), O(_, w), H((Y) => {
      var ee = `
              ${c() ? "rn-translate-y-[0rem] rn-opacity-100" : "-rn-translate-y-[1rem] rn-opacity-0"}
              rn-duration-350 
              rn-delay-50
              rn-transition-transform
              rn-ease-in-out
              motion-reduce:rn-transition-none
          `, le = I(`
                ${c() ? "scale-100 rn-opacity-100" : "scale-90 rn-opacity-0"}
                rn-duration-350 
                rn-transition-opacity
                rn-ease-in-out
                motion-reduce:rn-transition-none
            `, e.contentClassName);
      return ee !== Y.e && X(S, Y.e = ee), le !== Y.t && X(_, Y.t = le), Y;
    }, { e: void 0, t: void 0 }), S;
  } }), null), H((S) => {
    var _ = { ...e.width && { width: e.width || "100%" } }, Y = I(e.className);
    return S.e = vt(M, _, S.e), Y !== S.t && X(M, S.t = Y), S;
  }, { e: void 0, t: void 0 }), x;
  var x, M;
};
Wr(["keyup", "click"]);
const rt = (e, t, r) => {
  var n, a;
  return r.useValueAsName ? ((n = r.option) == null ? void 0 : n.call(r)) === Number(e) : ((a = r.option) == null ? void 0 : a.call(r)) === t();
}, Ka = (e, t, r) => {
  var n, a, o, s, i, l, d, u, c, h;
  if (r.useValueAsName) {
    if (r.minDate || r.maxDate)
      return !!((n = r.minDate) != null && n.year) && Number(e) < ((a = r.minDate) == null ? void 0 : a.year) || !!((o = r.maxDate) != null && o.year) && Number(e) > ((s = r.maxDate) == null ? void 0 : s.year);
    if (r.enabledDays)
      return r.enabledDays.every((b) => "start" in b && "end" in b ? b.start.year !== Number(e) || b.end.year !== Number(e) : b.year !== Number(e));
  } else {
    if (r.minDate || r.maxDate)
      return !!r.minDate && (r.minDate.year === ((i = r.year) == null ? void 0 : i.call(r)) && t() < r.minDate.month || ((l = r.minDate) == null ? void 0 : l.year) > (((d = r.year) == null ? void 0 : d.call(r)) || 0)) || !!r.maxDate && r.maxDate.year === ((u = r.year) == null ? void 0 : u.call(r)) && t() > r.maxDate.month;
    if (r.enabledDays && (c = r.year) != null && c.call(r))
      return rr({ year: (h = r.year) == null ? void 0 : h.call(r), month: t(), enabledDays: r.enabledDays });
  }
  return !1;
}, ts = (e, t, r, n) => {
  var a, o, s, i, l, d;
  if (r.useValueAsName) {
    const u = Number(t);
    (a = r.setOption) == null || a.call(r, u), (o = r.onYearChange) == null || o.call(r, u);
    const c = yn({ startDay: r.startDay, year: u, type: r.type || "single" });
    c && ((s = r.onChange) == null || s.call(r, c));
  } else {
    (i = r.setOption) == null || i.call(r, e), (l = r.onMonthChange) == null || l.call(r, e);
    const u = yn({ startDay: r.startDay, month: e, type: r.type || "single" });
    u && ((d = r.onChange) == null || d.call(r, u));
  }
  n == null || n();
}, En = (e) => f(St, R({ get class() {
  return I(`
        date-selector-option
        rn-text-black
        disabled:rn-opacity-40
        `, { "rn-selector-option-selected rn-bg-primary rn-text-white hover:rn-bg-primary hover:rn-text-white dark:rn-bg-white dark:rn-text-black dark:hover:rn-bg-white dark:hover:rn-text-black": rt(e.value, e.index, e), "dark:rn-text-white": !rt(e.value, e.index, e), [e.monthYearOptionBtnActiveClass || ""]: rt(e.value, e.index, e) }, e.className, e.monthYearOptionBtnClass);
}, onClick: () => e.handleOptionClick(e.index(), e.value, e.callback), get disabled() {
  return e.disabled || Ka(e.value, e.index, e);
}, "aria-controls": "selector", get "aria-disabled"() {
  return Ka(e.value, e.index, e);
}, get "aria-selected"() {
  return rt(e.value, e.index, e);
}, get "data-type"() {
  return e.useValueAsName ? "year" : "month";
}, "aria-readonly": !1, "data-scope": "date-picker", "data-part": "cell-trigger", "data-selector-option": !0, get "date-selector-option-selected"() {
  return rt(e.value, e.index, e);
}, get selected() {
  return rt(e.value, e.index, e);
}, get "aria-label"() {
  var t;
  return G(() => !!e.useValueAsName)() ? e.value : Xo(e.index()) + " " + ((t = e.year) == null ? void 0 : t.call(e));
}, get "data-value"() {
  return G(() => !!e.useValueAsName)() ? e.value : e.index() + 1;
}, get style() {
  return { ...rt(e.value, e.index, e) ? { "background-color": e.primaryColor, color: e.primaryTextColor } : {}, ...e.textColor && !rt(e.value, e.index, e) && { color: e.textColor } };
}, get "aria-owns"() {
  return e.value;
} }, () => e.attributes || {}, { get children() {
  return e.value;
} })), Wn = (e) => f(St, R(e, { get class() {
  return I(`
        date-selector-trigger
        rn-animate-none
        rn-p-[5px]
        rn-text-[15px]
        rn-font-bold
        
        rn-text-black
        dark:rn-text-white
        
        breakTwoCalendar:rn-text-sm`, e.monthYearTriggerBtnClass);
}, get "aria-haspopup"() {
  return e.type === "compact-dropdown";
}, get "aria-label"() {
  return e.useValueAsName ? "Select a year" : "Select a month";
}, "data-scope": "button", "data-part": "root", get "aria-expanded"() {
  return e.isOpen;
}, "data-type": "date-selector-trigger", get style() {
  return { ...e.textColor && { color: e.textColor } };
}, get children() {
  var t, r, n, a;
  return e.children || (e.useValueAsName ? e.option() : e.twoMonthsDisplay ? `${(t = e.optionsArray) == null ? void 0 : t[e.option()]} - ${e.option() === 11 ? (r = e.optionsArray) == null ? void 0 : r[0] : (n = e.optionsArray) == null ? void 0 : n[e.option() + 1]}` : (a = e.optionsArray) == null ? void 0 : a[e.option()]);
} }));
var Hu = $("<div data-part=grid data-scope=date-picker role=grid data-type=date-selector-wrapper>");
const rs = (e) => {
  const [t, r] = T(!1), n = (a, o, s) => {
    ts(a, o, e, s);
  };
  return f(es, { get zIndex() {
    return e.zIndex;
  }, get className() {
    return I("date-selector-trigger-wrapper rn-w-fit", e.monthYearTriggerBtnWrapperClass);
  }, onOpen: () => {
    r(!0);
    const a = document.querySelector("[date-selector-option-selected=true]");
    a == null || a.scrollIntoView({ block: "center", inline: "center" });
  }, onClose: () => r(!1), content: ({ close: a }) => {
    return o = Hu(), typeof (s = e.ref) == "function" ? lt(s, o) : e.ref = o, fe(o, "aria-multiselectable", !1), fe(o, "aria-readonly", !1), fe(o, "aria-disabled", !1), O(o, f(bt, { get each() {
      return e.optionsArray;
    }, children: (i, l) => f(En, R(e, { handleOptionClick: n, value: i, index: l, callback: a, get className() {
      return I(`
                  date-selector-option
                  rn-px-[5px] 
                  rn-text-sm 
                  rn-text-black
                  disabled:rn-opacity-40
                  smallMobile:rn-text-[12px]
                `, e.className);
    } })) })), H((i) => {
      var l = I(`
            date-selector-wrapper
            rn-grid
            rn-max-h-[10.625rem]
            rn-max-w-[25rem]
            rn-gap-2
            rn-overflow-y-auto
            rn-rounded-lg
            rn-bg-white
            rn-p-2
            rn-drop-shadow-lg
            dark:rn-bg-eerie-black
          `, { "rn-grid-cols-3": e.gridTemplateColumnsNo === "3" && e.gridTemplateColumnsNo, "rn-grid-cols-4": !e.gridTemplateColumnsNo || e.gridTemplateColumnsNo && e.gridTemplateColumnsNo !== "3" }, e.monthYearSelectorWrapperClass), d = e.useValueAsName ? "calendar year" : "calendar month", u = { ...e.backgroundColor && { "background-color": e.backgroundColor } };
      return l !== i.e && X(o, i.e = l), d !== i.t && fe(o, "aria-roledescription", i.t = d), i.a = vt(o, u, i.a), i;
    }, { e: void 0, t: void 0, a: void 0 }), o;
    var o, s;
  }, get children() {
    return f(Wn, { get option() {
      return e.option;
    }, get optionsArray() {
      return e.optionsArray;
    }, get useValueAsName() {
      return e.useValueAsName;
    }, type: "compact-dropdown", get isOpen() {
      return t();
    }, get twoMonthsDisplay() {
      return e.twoMonthsDisplay;
    } });
  } });
}, Vu = (e) => {
  const [t, r] = T([]);
  Er(() => {
    const o = Array.from({ length: 12 }, (s, i) => new Date(0, i + 1, 0).toLocaleDateString(e.locale || "en", { month: e != null && e.monthSelectorFormat ? e.monthSelectorFormat : e.monthSelectorType === "compact-dropdown" ? "short" : "long" }));
    r(o);
  });
  const n = () => {
    var o, s;
    (o = e.setSelectorTwoProps) == null || o.call(e, { ...e, optionsArray: t(), option: e.month, setOption: e.setMonth, ref: e.ref, attributes: { "data-month": "true" }, className: "month-selector-option", zIndex: e.zIndex, primaryTextColor: e.primaryTextColor, primaryColor: e.primaryColor, twoMonthsDisplay: e.twoMonthsDisplay }), (s = e.setShowSelectorTwo) == null || s.call(e, !0);
  };
  return G((a = G(() => e.monthSelectorType === "compact-dropdown"), () => a() ? f(rs, R(e, { get optionsArray() {
    return t();
  }, get option() {
    return e.month;
  }, get setOption() {
    return e.setMonth;
  }, ref(o) {
    var s = e.ref;
    typeof s == "function" ? s(o) : e.ref = o;
  }, get gridTemplateColumnsNo() {
    return e.monthSelectorFormat === "long" ? "3" : "6";
  }, attributes: { "data-month": "true" }, className: "month-selector-option", get zIndex() {
    return e.zIndex;
  }, get primaryColor() {
    return e.primaryColor;
  }, get primaryTextColor() {
    return e.primaryTextColor;
  }, get twoMonthsDisplay() {
    return e.twoMonthsDisplay;
  } })) : f(Wn, { get option() {
    return e.month;
  }, get optionsArray() {
    return t();
  }, type: "full-size", get isOpen() {
    var o;
    return ((o = e.showSelectorTwo) == null ? void 0 : o.call(e)) || !1;
  }, get twoMonthsDisplay() {
    return e.twoMonthsDisplay;
  }, onClick: n })));
  var a;
}, Uu = (e) => {
  const [t, r] = T(""), [n, a] = T([]), [o, s] = T(), [i, l] = T(), [d, u] = T(20);
  oe(() => {
    if (e.yearSelectorType === "compact-dropdown")
      return;
    const { range: y, array: w, endYear: x, startYear: M } = Mu({ startYear: o(), endYear: i(), count: d(), year: e.year(), yearRange: e.yearRange });
    r(y), a(Jo(w, 4)), s(M), l(x);
  }), oe(() => {
    e.yearSelectorType !== "compact-dropdown" && e.showSelectorTwo && (e.showSelectorTwo() || (s(), l()));
  });
  const c = () => {
    if (!o() || !i())
      return;
    const y = i();
    s(y + 1), l(y + d());
  }, h = () => {
    if (!o() || !i())
      return;
    const y = o();
    l(y - 1), s(y - d());
  }, b = () => {
    var y, w;
    (y = e.setSelectorTwoProps) == null || y.call(e, { ...e, optionsArray: [], yearArray: n, option: e.year, setOption: e.setYear, ref: e.ref, attributes: { "data-year": "true" }, handleNext: c, handlePrev: h, range: t, className: "year-selector-option", zIndex: e.zIndex, primaryTextColor: e.primaryTextColor, primaryColor: e.primaryColor, useValueAsName: !0, startYear: o, endYear: i, count: d }), (w = e.setShowSelectorTwo) == null || w.call(e, !0);
  };
  return G((p = G(() => e.yearSelectorType === "compact-dropdown"), () => p() ? f(rs, R(e, { get optionsArray() {
    var y, w;
    return Su(((y = e.yearRange) == null ? void 0 : y.start) || Yr - 51, ((w = e.yearRange) == null ? void 0 : w.end) || Yr + 20).map((x) => x.toString());
  }, get option() {
    return e.year;
  }, get setOption() {
    return e.setYear;
  }, ref(y) {
    var w = e.ref;
    typeof w == "function" ? w(y) : e.ref = y;
  }, attributes: { "data-year": "true" }, useValueAsName: !0, className: "year-selector-option", get zIndex() {
    return e.zIndex;
  }, get primaryColor() {
    return e.primaryColor;
  }, get primaryTextColor() {
    return e.primaryTextColor;
  } })) : f(Wn, { get option() {
    return e.year;
  }, optionsArray: [], type: "full-size", get isOpen() {
    var y;
    return ((y = e.showSelectorTwo) == null ? void 0 : y.call(e)) || !1;
  }, onClick: b, get children() {
    return e.year();
  } })));
  var p;
};
var Bu = $("<div data-type=date-month-year-selector-area>");
const Gu = (e) => {
  const [t, r] = T(), [n, a] = T();
  return oe(() => {
    var s;
    t() && ((s = e.setAllowedComponents) == null || s.call(e, (i) => [...i, t()]));
  }), oe(() => {
    var s;
    n() && ((s = e.setAllowedComponents) == null || s.call(e, (i) => [...i, n()]));
  }), o = Bu(), O(o, f(z, { get when() {
    return e.render();
  }, keyed: !0, get children() {
    return [f(z, { get when() {
      return e.monthSelectorJSX;
    }, keyed: !0, get children() {
      return e.monthSelectorJSX;
    } }), f(z, { get when() {
      return !e.monthSelectorJSX;
    }, keyed: !0, get children() {
      return f(Vu, R(e, { ref: r, get month() {
        return e.month;
      }, get setMonth() {
        return e.setMonth;
      }, get monthSelectorFormat() {
        return e.monthSelectorFormat;
      }, get zIndex() {
        return e.zIndex;
      }, get locale() {
        return e.locale;
      }, get primaryColor() {
        return e.primaryColor;
      }, get primaryTextColor() {
        return e.primaryTextColor;
      }, get minDate() {
        return e.minDate;
      }, get maxDate() {
        return e.maxDate;
      }, get twoMonthsDisplay() {
        return e.twoMonthsDisplay;
      } }));
    } }), f(z, { get when() {
      return e.yearSelectorJSX;
    }, keyed: !0, get children() {
      return e.yearSelectorJSX;
    } }), f(z, { get when() {
      return !e.yearSelectorJSX;
    }, keyed: !0, get children() {
      return f(Uu, R(e, { ref: a, get year() {
        return e.year;
      }, get setYear() {
        return e.setYear;
      }, get zIndex() {
        return e.zIndex;
      }, get yearRange() {
        return e.yearRange;
      }, get primaryColor() {
        return e.primaryColor;
      }, get primaryTextColor() {
        return e.primaryTextColor;
      }, get minDate() {
        return e.minDate;
      }, get maxDate() {
        return e.maxDate;
      } }));
    } })];
  } })), H(() => X(o, I("date-month-year-selector-area rn-flex rn-items-center rn-justify-center " + (e.monthYearSelectorFlexDirection === "column" ? "rn-flex-col" : ""), e.datePickerTopMonthYearAreaClass))), o;
  var o;
};
var Xu = $('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 256 256"data-scope=button data-part=icon><path d=M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z>');
const ns = (e) => {
  return t = Xu(), H((r) => {
    var n = e.color || "currentColor", a = e.class;
    return n !== r.e && fe(t, "fill", r.e = n), a !== r.t && fe(t, "class", r.t = a), r;
  }, { e: void 0, t: void 0 }), t;
  var t;
};
var Ju = $('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 256 256"data-scope=button data-part=icon><path d=M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z>');
const as = (e) => {
  return t = Ju(), H((r) => {
    var n = e.color || "currentColor", a = e.class;
    return n !== r.e && fe(t, "fill", r.e = n), a !== r.t && fe(t, "class", r.t = a), r;
  }, { e: void 0, t: void 0 }), t;
  var t;
};
var Zu = $("<div data-type=date-picker-top>");
const qu = (e) => {
  return t = Zu(), O(t, f(z, { get when() {
    return e.prevButtonAreaJSX;
  }, keyed: !0, get children() {
    return e.prevButtonAreaJSX;
  } }), null), O(t, f(z, { get when() {
    return !e.removeNavButtons;
  }, keyed: !0, get children() {
    return f(St, { get class() {
      return I("date-prev-next-btn date-prev-btn rn-text-black disabled:rn-opacity-10 dark:rn-text-white", e.prevMonthBtnClass, e.prevNextMonthBtnClass);
    }, "data-prev": !0, "data-type": "date-prev-next-btn", "aria-label": "Move backward to switch to the previous month", "data-scope": "button", "data-part": "root", get disabled() {
      return (() => {
        if (!e.minDate && !e.enabledDays)
          return !1;
        if (e.minDate && (e.year() < e.minDate.year || e.year() === e.minDate.year && e.month() - 1 < e.minDate.month))
          return !0;
        const { month: r, year: n } = ku(e.year(), e.month());
        return rr({ enabledDays: e.enabledDays, year: n, month: r, prev: !0 });
      })();
    }, get onClick() {
      return e.handlePrevMonth;
    }, get style() {
      return { ...e.arrowsColor && { color: e.arrowsColor } };
    }, get children() {
      return e.prevIcon || f(ns, { get color() {
        return e.arrowsColor;
      } });
    } });
  } }), null), O(t, f(z, { get when() {
    return e.monthYearSelectorJSX;
  }, keyed: !0, get children() {
    return e.monthYearSelectorJSX;
  } }), null), O(t, f(z, { get when() {
    return !e.monthYearSelectorJSX;
  }, keyed: !0, get children() {
    return f(Gu, e);
  } }), null), O(t, f(z, { get when() {
    return !e.removeNavButtons;
  }, keyed: !0, get children() {
    return f(St, { get class() {
      return I("date-prev-next-btn date-next-btn rn-text-black disabled:rn-opacity-10 dark:rn-text-white", e.nextMonthBtnClass, e.prevNextMonthBtnClass);
    }, "data-next": !0, "aria-label": "Move forward to switch to the next month.", "data-scope": "button", "data-part": "root", "data-type": "date-prev-next-btn", get onClick() {
      return e.handleNextMonth;
    }, get disabled() {
      return (() => {
        if (!e.maxDate && !e.enabledDays)
          return !1;
        if (e.maxDate && (e.year() > e.maxDate.year || e.year() === e.maxDate.year && e.month() + 1 > e.maxDate.month))
          return !0;
        const { year: r, month: n } = xu(e.year(), e.month());
        return rr({ enabledDays: e.enabledDays, year: r, month: n, next: !0 });
      })();
    }, get style() {
      return { ...e.arrowsColor && { color: e.arrowsColor } };
    }, get children() {
      return e.nextIcon || f(as, { get color() {
        return e.arrowsColor;
      } });
    } });
  } }), null), O(t, f(z, { get when() {
    return e.nextButtonAreaJSX;
  }, keyed: !0, get children() {
    return e.nextButtonAreaJSX;
  } }), null), H(() => X(t, I(`
        date-picker-top 
        rn-mb-[0.3125rem] 
        rn-flex 
        rn-items-center 
        rn-justify-between 
        rn-px-2
      `, e.datePickerTopAreaClass))), t;
  var t;
};
var Ku = $("<div data-type=selector-picker-top>"), Qu = $("<div data-type=date-selector-trigger>"), ec = $("<div data-type=date-selector-trigger>Select A Month");
function tc(e) {
  const [t, r] = T(!1), [n, a] = T(!1);
  return oe(() => {
    var i, l, d, u, c, h, b, p, y, w, x;
    r(!!((i = e.yearRange) != null && i.start) && !!((l = e.startYear) != null && l.call(e)) && !!((d = e.count) != null && d.call(e)) && ((u = e.startYear) == null ? void 0 : u.call(e)) - 1 < ((c = e.yearRange) == null ? void 0 : c.start) || (((h = e.startYear) == null ? void 0 : h.call(e)) || 0) - 20 <= 0), a(!!((b = e.yearRange) != null && b.end) && !!((p = e.endYear) != null && p.call(e)) && !!((y = e.count) != null && y.call(e)) && ((w = e.endYear) == null ? void 0 : w.call(e)) + 1 > ((x = e.yearRange) == null ? void 0 : x.end));
  }), s = Ku(), O(s, f(z, { get when() {
    return e.isYear;
  }, get children() {
    return f(St, { get class() {
      return I(`
            selector-prev-next-btn 
            selector-prev-btn 
            rn-text-black 
            disabled:rn-opacity-10 
            dark:rn-text-white
          `);
    }, "data-prev": !0, "data-type": "selector-prev-next-btn", "aria-label": "Show previous 20 years.", "data-scope": "button", "data-part": "root", get disabled() {
      return t();
    }, get onClick() {
      return e.handlePrev;
    }, get style() {
      return { ...e.arrowsColor && { color: e.arrowsColor } };
    }, get children() {
      return f(ns, {});
    } });
  } }), null), O(s, (o = G(() => !!e.isYear), () => {
    return o() ? (l = Qu(), O(l, () => {
      var d;
      return (d = e.range) == null ? void 0 : d.call(e);
    }), H(() => X(l, I(`
            date-selector-trigger 
            rn-text-center 
            rn-text-[0.9375rem] 
            rn-font-medium
            dark:rn-text-white
          `))), l) : (i = ec(), H(() => X(i, I(`
            date-selector-trigger 
            rn-w-full 
            rn-pt-[0.125rem] 
            rn-text-center 
            rn-text-[0.9375rem] 
            rn-font-medium
            dark:rn-text-white
          `))), i);
    var i, l;
  }), null), O(s, f(z, { get when() {
    return e.isYear;
  }, get children() {
    return f(St, { get class() {
      return I(`
            selector-prev-next-btn 
            selector-next-btn 
            rn-text-black 
            disabled:rn-opacity-10 
            dark:rn-text-white
           `);
    }, "data-next": !0, "aria-label": "Show next 20 years.", "data-scope": "button", "data-part": "root", "data-type": "selector-prev-next-btn", get onClick() {
      return e.handleNext;
    }, get disabled() {
      return n();
    }, get style() {
      return { ...e.arrowsColor && { color: e.arrowsColor } };
    }, get children() {
      return f(as, {});
    } });
  } }), null), H(() => X(s, I(`
          selector-picker-top 
          rn-mb-[0.3125rem] 
          rn-flex 
          rn-items-center 
          rn-justify-between 
          rn-px-2
        `))), s;
  var o, s;
}
var rc = $("<div>");
function nc(e) {
  return t = rc(), O(t, f(bt, { get each() {
    return e.array;
  }, children: (r, n) => f(En, R(e, { value: r, index: n, get className() {
    return I(`
              rn-p-2 
              rn-text-[0.9375rem]
            `, { "disabled:rn-bg-transparent": !r }, e.className);
  }, disabled: !r, get attributes() {
    return { ...r ? {} : { "data-selector-type": "selector-option-out-of-range" } };
  } })) })), H(() => X(t, I(`
        date-year-full-size-selector-options 
        rn-grid 
        rn-grid-cols-4
        rn-gap-x-1
      `))), t;
  var t;
}
var Qa = $("<div>");
function ac(e) {
  const t = (n, a) => {
    ts(n, a, e, () => {
      var o, s, i;
      (o = e.setSelectorTwoProps) == null || o.call(e, vn), (s = e.setShowSelectorTwo) == null || s.call(e, !1), (i = e.close) == null || i.call(e);
    });
  };
  return r = Qa(), O(r, f(z, { get when() {
    return !e.useValueAsName;
  }, get children() {
    var n = Qa();
    return O(n, f(bt, { get each() {
      return e.optionsArray;
    }, children: (a, o) => f(En, R(e, { value: a, index: o, get className() {
      return I(`
                  rn-p-2 
                  rn-text-sm
                `, e.className);
    }, handleOptionClick: t })) })), H(() => X(n, I(`
            date-month-full-size-selector-options-wrapper 
            rn-grid 
            rn-grid-cols-3 
            rn-gap-x-1 
            rn-gap-y-4
          `))), n;
  } }), null), O(r, f(z, { get when() {
    return e.useValueAsName;
  }, get children() {
    return f(bt, { get each() {
      var n;
      return (n = e.yearArray) == null ? void 0 : n.call(e);
    }, children: (n) => f(nc, R(e, { array: n, handleOptionClick: t })) });
  } }), null), H(() => X(r, I(`
        date-full-size-selector-area
        rn-z-50
        rn-flex
        rn-flex-col
        rn-justify-between
       
        rn-gap-y-4 
        rn-p-2
      `))), r;
  var r;
}
var oc = $("<div data-scope=date-picker data-type=date-selector-wrapper data-part=grid>");
const vn = { option: () => 0, setOption: () => {
}, optionsArray: [] }, sc = (e) => {
  return t = oc(), typeof (r = e.ref) == "function" ? lt(r, t) : e.ref = t, O(t, f(tc, R(e, { get isYear() {
    return e.useValueAsName;
  } })), null), O(t, f(ac, R(e, { get yearArray() {
    return e.yearArray;
  } })), null), H((n) => {
    var a = I(`
        date-selector-wrapper
        rn-absolute
        rn-left-0
        rn-top-0
        rn-z-50
       
        rn-max-h-fit
        rn-w-full
        rn-rounded-md 
        rn-bg-white 
        rn-pb-[0.5rem]
        rn-pt-[0.625rem] 
        rn-shadow-lg
        dark:rn-bg-dreamless-sleep 
      `, e.monthYearSelectorWrapperClass), o = { ...e.backgroundColor && { "background-color": e.backgroundColor } }, s = e.useValueAsName ? "select year" : "select month";
    return a !== n.e && X(t, n.e = a), n.t = vt(t, o, n.t), s !== n.a && fe(t, "aria-roledescription", n.a = s), n;
  }, { e: void 0, t: void 0, a: void 0 }), t;
  var t, r;
}, eo = ({ year: e, day: t, startDay: r, endDay: n, disabledDays: a, month: o, hover: s, hoverEndDay: i, enabledDays: l }) => {
  if ((r && n || !r && !n) && !s && !i)
    return { start: { year: me(e(), o(), t.month), month: ie(o(), t.month), day: t.value }, end: void 0, initial: !0 };
  if (r && !n) {
    const d = new Date(r == null ? void 0 : r.year, r == null ? void 0 : r.month, r == null ? void 0 : r.day), u = new Date(me(e(), o(), t.month), ie(o(), t.month), t.value);
    if (d.getTime() === u.getTime())
      return { start: r };
    if (d.getTime() < u.getTime() && (a && Ua(d, u, a) || l && Ba(d, u, l)))
      return s ? { start: r } : { start: nt(u), initial: !0 };
    if (d.getTime() > u.getTime() && (a && Ua(d, u, a) || l && Ba(u, d, l)))
      return s ? { start: r } : { start: nt(u), initial: !0 };
    if (d.getTime() < u.getTime())
      return { end: nt(u), start: r };
    if (d.getTime() > u.getTime())
      return { start: nt(u), end: nt(d) };
  }
  return { start: r, end: n };
};
var to = $("<div data-type=custom-jsx>"), ic = $("<div data-type=date-picker-wrapper data-scope=date-picker data-part=content role=application aria-label=calendar aria-roledescription=date-picker><div>");
const lc = (e) => {
  const [t, r] = T((/* @__PURE__ */ new Date()).getMonth()), [n, a] = T(Yr), [o, s] = T(), [i, l] = T(void 0), [d, u] = T([]), [c, h] = T(!0), [b, p] = T(!1), [y, w] = T({});
  Er(() => {
    var D, W, q, ae, ue, ye, pe, be, Ut, ct, Me, ve, Oe, hr, la, da, ua, ca, fa, ha, ma, ga, ya, pa, ba, va, wa;
    if (!((D = e.value) != null && D.selected || (W = e.value) != null && W.start || (q = e.value) != null && q.end || (ae = e.value) != null && ae.selectedDateObject || (ue = e.value) != null && ue.startDateObject || (ye = e.value) != null && ye.endDateObject || (pe = e.value) != null && pe.multiple || (Ut = (be = e.value) == null ? void 0 : be.multipleDateObject) != null && Ut.length))
      return (ct = e.month) != null && ct.call(e) || (Me = e.setMonth) == null || Me.call(e, (/* @__PURE__ */ new Date()).getMonth()), (ve = e.year) != null && ve.call(e) || (Oe = e.setYear) == null || Oe.call(e, Yr), void M();
    if (M(), p(!0), e.value.selected || e.value.selectedDateObject) {
      const re = e.value.selected ? new Date(e.value.selected) : ce(e.value.selectedDateObject);
      r(re.getMonth()), (hr = e.setMonth) == null || hr.call(e, re.getMonth()), a(re.getFullYear()), (la = e.setYear) == null || la.call(e, re.getFullYear()), s({ year: re.getFullYear(), month: re.getMonth(), day: re.getDate() });
    }
    if (e.value.start || e.value.end || e.value.startDateObject || e.value.endDateObject) {
      const re = e.value.start ? new Date(e.value.start) : (da = e.value.startDateObject) != null && da.day ? ce(e.value.startDateObject) : void 0, U = e.value.end ? new Date(e.value.end) : (ua = e.value.endDateObject) != null && ua.day ? ce(e.value.endDateObject) : void 0;
      if (!re && !U)
        return;
      if (!re && U) {
        r(U.getMonth()), (ca = e.setMonth) == null || ca.call(e, U.getMonth()), a(U.getFullYear()), (fa = e.setYear) == null || fa.call(e, U.getFullYear());
        const Sa = { year: U.getFullYear(), month: U.getMonth(), day: U.getDate() };
        return s(Sa), void w({ start: Sa });
      }
      r(re.getMonth()), (ha = e.setMonth) == null || ha.call(e, re.getMonth()), a(re.getFullYear()), (ma = e.setYear) == null || ma.call(e, re.getFullYear());
      const mr = { year: re.getFullYear(), month: re.getMonth(), day: re.getDate() };
      if (s(mr), w({ start: mr }), !U)
        return;
      l({ year: U.getFullYear(), month: U.getMonth(), day: U.getDate() }), w({ start: void 0 }), e.showEndOfRange && (r(U.getMonth()), (ga = e.setMonth) == null || ga.call(e, U.getMonth()), a(U.getFullYear()), (ya = e.setYear) == null || ya.call(e, U.getFullYear()));
    }
    if ((pa = e.value.multipleDateObject) != null && pa.length || e.value.multiple) {
      const re = (ba = e.value.multipleDateObject) != null && ba.length ? e.value.multipleDateObject : e.value.multiple ? e.value.multiple.map((mr) => nt(new Date(mr))) : void 0;
      if (!re)
        return;
      u(re);
      const U = re.at(-1);
      U != null && U.month && (r(U.month), (va = e.setMonth) == null || va.call(e, U.month)), U != null && U.year && (a(U.year), (wa = e.setYear) == null || wa.call(e, U.year));
    }
  });
  const x = (D) => {
    var W, q;
    e.handleOnChange(D), (W = e == null ? void 0 : e.onChange) == null || W.call(e, D), (q = e.onValueChange) == null || q.call(e, D);
  }, M = () => {
    var D, W;
    e.startingMonth && r(e.startingMonth), e.startingMonth && ((D = e.setMonth) == null || D.call(e, e.startingMonth)), e.startingYear && a(e.startingYear), e.startingYear && ((W = e.setYear) == null || W.call(e, e.startingYear));
  };
  oe(() => {
    c() || h(!0);
  });
  const S = (D, W, q, ae = !1) => {
    var ue, ye, pe;
    b() || p(!0);
    const be = Number(W()), Ut = ie(be, D.month), ct = me(q(), W(), D.month);
    if (e.type === "range") {
      const { end: Me, start: ve, initial: Oe } = eo({ day: D, month: W, year: q, endDay: i(), startDay: o(), disabledDays: e.disabledDays, enabledDays: e.enabledDays });
      s(ve), l(Me), Oe && !e.disableRangeHoverEffect && w({ start: ve, end: void 0 }), Me && ve && w({}), x({ startDate: ve, endDate: Me, type: "range" });
    }
    if (e.type === "single") {
      const Me = new Date(ct, ie(be, D.month), D.value), ve = nt(Me);
      s(ve), x({ selectedDate: ve, type: "single" });
    }
    if (e.type === "multiple") {
      const Me = { year: ct, month: ie(be, D.month), day: D.value }, ve = d().find((Oe) => Ar(Oe, Me));
      if (ve) {
        const Oe = d().filter((hr) => !Ar(hr, ve));
        return u(Oe), void x({ multipleDates: Oe, type: "multiple" });
      }
      u((Oe) => [...Oe, Me]), x({ multipleDates: d(), type: "multiple" });
    }
    ae || (r(Ut), (ue = e.setMonth) == null || ue.call(e, Ut), a(ct), (ye = e.setYear) == null || ye.call(e, ct)), h(!1), e.shouldCloseOnSelect && ((pe = e.close) == null || pe.call(e));
  }, _ = (D, W) => {
    var q, ae, ue, ye, pe;
    r(D), (q = e.setMonth) == null || q.call(e, D), (ae = e.onMonthChange) == null || ae.call(e, D), W && (a(W), (ue = e.setYear) == null || ue.call(e, W), (ye = e.onYearChange) == null || ye.call(e, W));
    const be = yn({ startDay: o(), month: D, year: W, type: e.type });
    be && ((pe = e.onValueChange) == null || pe.call(e, be));
  }, Y = () => {
    var D, W;
    if ((((D = e.month) == null ? void 0 : D.call(e)) || t()) === 11) {
      const ae = n() + 1;
      return void _(0, ae);
    }
    const q = (((W = e.month) == null ? void 0 : W.call(e)) || t()) + 1;
    _(q), h(!1);
  }, ee = () => {
    var D, W;
    if ((((D = e.month) == null ? void 0 : D.call(e)) || t()) === 0) {
      const ae = n() - 1;
      return void _(11, ae);
    }
    const q = (((W = e.month) == null ? void 0 : W.call(e)) || t()) - 1;
    _(q), h(!1);
  }, le = (D, W, q) => {
    var ae, ue, ye;
    if (e.disableRangeHoverEffect || e.type !== "range" || !((ae = y()) != null && ae.start))
      return;
    const { end: pe, start: be } = eo({ day: D, month: W, year: q, endDay: (ue = y()) == null ? void 0 : ue.end, startDay: (ye = y()) == null ? void 0 : ye.start, disabledDays: e.disabledDays, hover: !0, enabledDays: e.enabledDays });
    w({ start: be, end: pe });
  }, Re = () => {
    var D;
    e.disableRangeHoverEffect || e.type === "range" && (D = y()) != null && D.start && (o() && i() || w({ start: o(), end: void 0 }));
  }, te = (D) => {
    if (D) {
      if (typeof D == "function") {
        const [ae, ue] = T();
        oe(() => {
          var pe;
          ae() && ((pe = e.setAllowedComponents) == null || pe.call(e, (be) => [...be, ae()]));
        });
        const ye = D({ month: t, setMonth: r, handleNextMonth: Y, handlePrevMonth: ee, year: n, setYear: a, setRefToAllowOutsideClick: ue, handleDayClick: S, multipleDates: d, endDate: i, selectedDate: o });
        return W = to(), O(W, ye), W;
      }
      var W, q;
      return q = to(), O(q, D), q;
    }
  }, j = te(e.monthSelectorJSX), Ke = te(e.yearSelectorJSX), xt = te(e.calendarTopAreaJSX), Fe = te(e.calendarLeftAreaJSX), Le = te(e.calendarRightAreaJSX), dt = te(e.calendarBottomAreaJSX), Zs = te(e.calendarJSX), qs = te(e.afterNextButtonAreaJSX), Ks = te(e.beforePrevButtonAreaJSX), Qs = te(e.weekDaysJSX), ei = te(e.calendarAboveTopAreaJSX);
  return Ie = ic(), ut = Ie.firstChild, typeof (ia = e.ref) == "function" ? lt(ia, Ie) : e.ref = Ie, O(Ie, f(z, { get when() {
    var D;
    return (D = e.showSelectorTwo) == null ? void 0 : D.call(e);
  }, get children() {
    return f(sc, R(() => {
      var D;
      return (D = e.selectorTwoProps) == null ? void 0 : D.call(e);
    }, { get setShowSelectorTwo() {
      return e.setShowSelectorTwo;
    }, get setSelectorTwoProps() {
      return e.setSelectorTwoProps;
    } }));
  } }), ut), O(Ie, f(z, { get when() {
    return !e.hideTopArea;
  }, keyed: !0, get children() {
    return [ei, G(() => xt || f(qu, R(() => ({ ...e, onChange: void 0 }), { get setYear() {
      return e.setYear || a;
    }, get setMonth() {
      return e.setMonth || r;
    }, get month() {
      return e.month || t;
    }, get year() {
      return e.year || n;
    }, render: c, handleNextMonth: Y, handlePrevMonth: ee, monthSelectorJSX: j, yearSelectorJSX: Ke, get zIndex() {
      return e.zIndex;
    }, get setAllowedComponents() {
      return e.setAllowedComponents;
    }, get monthSelectorFormat() {
      return e.monthSelectorFormat;
    }, get monthYearSelectorFlexDirection() {
      return e.monthYearSelectorFlexDirection;
    }, get onChange() {
      return e.onValueChange;
    }, get startDay() {
      return o();
    }, setStartDay: s, get yearRange() {
      return e.yearRange;
    }, get locale() {
      return e.locale;
    }, get nextIcon() {
      return e.nextIcon;
    }, get prevIcon() {
      return e.prevIcon;
    }, get removeNavButtons() {
      return e.removeNavButtons;
    }, nextButtonAreaJSX: qs, prevButtonAreaJSX: Ks, get primaryColor() {
      return e.primaryColor;
    }, get primaryTextColor() {
      return e.primaryTextColor;
    }, get secondaryColor() {
      return e.secondaryColor;
    }, get secondaryTextColor() {
      return e.secondaryTextColor;
    }, get setShowSelectorTwo() {
      return e.setShowSelectorTwo;
    }, get setSelectorTwoProps() {
      return e.setSelectorTwoProps;
    }, get showSelectorTwo() {
      return e.showSelectorTwo;
    } })))];
  } }), ut), O(ut, f(z, { get when() {
    var D;
    return Fe && !((D = e.showSelectorTwo) != null && D.call(e));
  }, keyed: !0, children: Fe }), null), O(ut, f(z, { get when() {
    return !e.hideCalendar;
  }, keyed: !0, get children() {
    return Zs || f(Eu, R(e, { get year() {
      return e.year || n;
    }, get month() {
      return e.month || t;
    }, endDay: i, startDay: o, handleDayClick: S, multipleObject: d, weekDaysJSX: Qs, onHoverDay: le, hoverRangeValue: y, onHoverDayEnd: Re, get showSelectorTwo() {
      return e.showSelectorTwo;
    } }));
  } }), null), O(ut, f(z, { get when() {
    var D;
    return Le && !((D = e.showSelectorTwo) != null && D.call(e));
  }, keyed: !0, children: Le }), null), O(Ie, f(z, { get when() {
    var D;
    return dt && !((D = e.showSelectorTwo) != null && D.call(e));
  }, keyed: !0, children: dt }), null), H((D) => {
    var W, q = I(`date-picker-wrapper 
          rn-relative 
          rn-rounded-md 
          rn-border-t 
          rn-border-solid
          rn-border-gray-300
          rn-bg-white
          rn-pb-[0.5rem] 
          rn-pt-[0.625rem] 
          dark:rn-border-gray-700
          dark:rn-bg-dreamless-sleep
          `, { "rn-w-max": !Fe && !Le, "rn-shadow-lg": !((W = e.showSelectorTwo) != null && W.call(e)) }, e.datePickerWrapperClass), ae = { ...e.backgroundColor && { "background-color": e.backgroundColor } }, ue = I("date-picker-body rn-flex rn-justify-center", e.datePickerBodyAreaClass);
    return q !== D.e && X(Ie, D.e = q), D.t = vt(Ie, ae, D.t), ue !== D.a && X(ut, D.a = ue), D;
  }, { e: void 0, t: void 0, a: void 0 }), Ie;
  var Ie, ut, ia;
}, dc = (e) => {
  oe(() => {
    e && gn() && Va(!1), e || gn() || Va(!0);
  });
};
var uc = $('<input readonly type=text data-scope=date-picker data-part=input aria-label="date picker input"data-type=date-picker-input>'), cc = $("<div class=date-picker-input-area data-scope=date-picker data-part=control>");
const fc = (e) => {
  const [t, r] = T({ label: "", value: {} }), [n, a] = T(!1), [o, s] = T([]), [i, l] = T(!1), [d, u] = T(vn);
  dc(e.noButtonAnimation);
  const c = (p) => {
    const y = e.value || t, w = e.setValue || r;
    if (p.type === "single") {
      const x = ce((p == null ? void 0 : p.selectedDate) || {}), M = ht({ date: x, option: (e == null ? void 0 : e.localeOptions) || { month: "short", day: "numeric", year: "numeric" }, format: e.formatInputLabel, locale: e.locale });
      w({ value: { selected: (x == null ? void 0 : x.toISOString()) || "", selectedDateObject: (p == null ? void 0 : p.selectedDate) || {} }, label: M });
    }
    if (p.type === "range") {
      const x = p.startDate ? ce(p.startDate) : void 0, M = p.endDate ? ce(p.endDate) : void 0;
      let S = "";
      const _ = { month: "short", day: "numeric", year: "numeric", ...(e == null ? void 0 : e.localeOptions) || {}, ...e != null && e.alwaysShowRangeStartYear ? {} : { year: void 0 } }, Y = (e == null ? void 0 : e.localeOptions) || { month: "short", day: "numeric", year: "numeric" };
      let ee = "", le = "";
      if (x && M) {
        if (x.getFullYear() === M.getFullYear()) {
          if (e.alwaysShowRangeStartYear)
            return;
          _.year = void 0;
        } else
          _.year = "numeric";
        ee = ht({ date: x, option: _, format: e.formatInputLabelRangeStart, locale: e.locale }), le = ht({ date: M, option: Y, format: e.formatInputLabelRangeEnd, locale: e.locale });
      }
      x && !M && (ee = ht({ date: x, option: _, format: e.formatInputLabelRangeStart, locale: e.locale })), !x && M && (le = ht({ date: M, option: Y, format: e.formatInputLabelRangeEnd, locale: e.locale })), S = `${ee} ${e.rangeDatesSeparator || "-"} ${le}`, w({ value: { start: (x == null ? void 0 : x.toISOString()) || "", startDateObject: (p == null ? void 0 : p.startDate) || {}, end: (M == null ? void 0 : M.toISOString()) || "", endDateObject: (p == null ? void 0 : p.endDate) || {} }, label: S });
    }
    if (p.type === "multiple") {
      const x = y().value.multipleDateObject || [], M = p.multipleDates || [];
      if (!y().label && M.length === 0 || x.toString() === M.toString() && y().label)
        return;
      const S = M.map((_) => {
        const Y = ce(_);
        return ht({ date: Y, option: (e == null ? void 0 : e.localeOptions) || { month: "short", day: "numeric", year: "numeric" }, format: e.formatInputLabel, locale: e.locale });
      });
      w({ value: { multiple: M.map((_) => {
        var Y;
        return ((Y = ce(_)) == null ? void 0 : Y.toISOString()) || "";
      }).sort((_, Y) => _.localeCompare(Y)), multipleDateObject: M.sort((_, Y) => {
        var ee, le;
        const Re = ((ee = ce(_)) == null ? void 0 : ee.toISOString()) || "", te = ((le = ce(Y)) == null ? void 0 : le.toISOString()) || "";
        return Re.localeCompare(te);
      }) }, label: S.join(e.multipleDatesSeparator || ", ") });
    }
  }, h = () => {
    a(!0);
  }, b = ((p) => {
    if (p)
      return typeof p == "function" ? p({ value: e.value || t, showDate: h }) : p;
  })(e.renderInput);
  return f(es, { get isShown() {
    return n();
  }, setIsShown: a, onClose: () => {
    var p;
    s([]), l(!1), u(vn), (p = e.onClose) == null || p.call(e);
  }, onOpen: () => {
    var p;
    (p = e.onOpen) == null || p.call(e);
  }, content: ({ close: p }) => f(lc, R(e, { get type() {
    return e.type || "single";
  }, get value() {
    var y, w;
    return ((w = (y = e.value) == null ? void 0 : y.call(e)) == null ? void 0 : w.value) || t().value;
  }, handleOnChange: c, get onChange() {
    return e.onChange;
  }, get maxDate() {
    return e.maxDate;
  }, get minDate() {
    return e.minDate;
  }, setAllowedComponents: s, close: p, setShowSelectorTwo: l, showSelectorTwo: i, setSelectorTwoProps: u, selectorTwoProps: d })), onClickOutside: (p, y) => {
    var w;
    (w = o().concat(e.componentsToAllowOutsideClick || [])) != null && w.some((x) => {
      var M;
      return (M = x == null ? void 0 : x.contains) == null ? void 0 : M.call(x, p == null ? void 0 : p.target);
    }) || y == null || y(!1);
  }, get positionX() {
    return e.pickerPositionX;
  }, get positionY() {
    return e.pickerPositionY;
  }, get zIndex() {
    return e.zIndex;
  }, handleChildrenClick: b ? () => {
  } : void 0, get width() {
    return e.inputWrapperWidth;
  }, get className() {
    return I(e.inputWrapperClass, "date-picker-input-wrapper");
  }, get children() {
    var p = cc();
    return fe(p, "data-date-picker-input-area", !0), O(p, f(z, { when: b, keyed: !0, children: b }), null), O(p, f(z, { when: !b, keyed: !0, get children() {
      var y = uc();
      return Fr(y, R({ get placeholder() {
        return e.placeholder;
      }, get value() {
        var w, x, M;
        return ((w = e.inputLabel) == null ? void 0 : w.call(e)) || ((M = (x = e.value) == null ? void 0 : x.call(e)) == null ? void 0 : M.label) || t().label;
      } }, () => ({ ...e.inputProps, class: void 0 }), { get class() {
        var w;
        return I("date-picker-input rn-w-full rn-px-1", (w = e.inputProps) == null ? void 0 : w.class, e.inputClass);
      } }), !1, !1), y;
    } }), null), p;
  } });
};
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var os;
function v() {
  return os.apply(null, arguments);
}
function hc(e) {
  os = e;
}
function Ye(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function yt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function F(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Fn(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (F(e, t))
      return !1;
  return !0;
}
function ge(e) {
  return e === void 0;
}
function Je(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function dr(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function ss(e, t) {
  var r = [], n, a = e.length;
  for (n = 0; n < a; ++n)
    r.push(t(e[n], n));
  return r;
}
function at(e, t) {
  for (var r in t)
    F(t, r) && (e[r] = t[r]);
  return F(t, "toString") && (e.toString = t.toString), F(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function Ee(e, t, r, n) {
  return Ts(e, t, r, n, !0).utc();
}
function mc() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function N(e) {
  return e._pf == null && (e._pf = mc()), e._pf;
}
var wn;
Array.prototype.some ? wn = Array.prototype.some : wn = function(e) {
  var t = Object(this), r = t.length >>> 0, n;
  for (n = 0; n < r; n++)
    if (n in t && e.call(this, t[n], n, t))
      return !0;
  return !1;
};
function Ln(e) {
  var t = null, r = !1, n = e._d && !isNaN(e._d.getTime());
  if (n && (t = N(e), r = wn.call(t.parsedDateParts, function(a) {
    return a != null;
  }), n = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r), e._strict && (n = n && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = n;
  else
    return n;
  return e._isValid;
}
function jr(e) {
  var t = Ee(NaN);
  return e != null ? at(N(t), e) : N(t).userInvalidated = !0, t;
}
var ro = v.momentProperties = [], rn = !1;
function jn(e, t) {
  var r, n, a, o = ro.length;
  if (ge(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), ge(t._i) || (e._i = t._i), ge(t._f) || (e._f = t._f), ge(t._l) || (e._l = t._l), ge(t._strict) || (e._strict = t._strict), ge(t._tzm) || (e._tzm = t._tzm), ge(t._isUTC) || (e._isUTC = t._isUTC), ge(t._offset) || (e._offset = t._offset), ge(t._pf) || (e._pf = N(t)), ge(t._locale) || (e._locale = t._locale), o > 0)
    for (r = 0; r < o; r++)
      n = ro[r], a = t[n], ge(a) || (e[n] = a);
  return e;
}
function ur(e) {
  jn(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), rn === !1 && (rn = !0, v.updateOffset(this), rn = !1);
}
function Ae(e) {
  return e instanceof ur || e != null && e._isAMomentObject != null;
}
function is(e) {
  v.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function _e(e, t) {
  var r = !0;
  return at(function() {
    if (v.deprecationHandler != null && v.deprecationHandler(null, e), r) {
      var n = [], a, o, s, i = arguments.length;
      for (o = 0; o < i; o++) {
        if (a = "", typeof arguments[o] == "object") {
          a += `
[` + o + "] ";
          for (s in arguments[0])
            F(arguments[0], s) && (a += s + ": " + arguments[0][s] + ", ");
          a = a.slice(0, -2);
        } else
          a = arguments[o];
        n.push(a);
      }
      is(
        e + `
Arguments: ` + Array.prototype.slice.call(n).join("") + `
` + new Error().stack
      ), r = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var no = {};
function ls(e, t) {
  v.deprecationHandler != null && v.deprecationHandler(e, t), no[e] || (is(t), no[e] = !0);
}
v.suppressDeprecationWarnings = !1;
v.deprecationHandler = null;
function We(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function gc(e) {
  var t, r;
  for (r in e)
    F(e, r) && (t = e[r], We(t) ? this[r] = t : this["_" + r] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Sn(e, t) {
  var r = at({}, e), n;
  for (n in t)
    F(t, n) && (yt(e[n]) && yt(t[n]) ? (r[n] = {}, at(r[n], e[n]), at(r[n], t[n])) : t[n] != null ? r[n] = t[n] : delete r[n]);
  for (n in e)
    F(e, n) && !F(t, n) && yt(e[n]) && (r[n] = at({}, r[n]));
  return r;
}
function zn(e) {
  e != null && this.set(e);
}
var kn;
Object.keys ? kn = Object.keys : kn = function(e) {
  var t, r = [];
  for (t in e)
    F(e, t) && r.push(t);
  return r;
};
var yc = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function pc(e, t, r) {
  var n = this._calendar[e] || this._calendar.sameElse;
  return We(n) ? n.call(t, r) : n;
}
function $e(e, t, r) {
  var n = "" + Math.abs(e), a = t - n.length, o = e >= 0;
  return (o ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + n;
}
var Hn = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, vr = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, nn = {}, Pt = {};
function C(e, t, r, n) {
  var a = n;
  typeof n == "string" && (a = function() {
    return this[n]();
  }), e && (Pt[e] = a), t && (Pt[t[0]] = function() {
    return $e(a.apply(this, arguments), t[1], t[2]);
  }), r && (Pt[r] = function() {
    return this.localeData().ordinal(
      a.apply(this, arguments),
      e
    );
  });
}
function bc(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function vc(e) {
  var t = e.match(Hn), r, n;
  for (r = 0, n = t.length; r < n; r++)
    Pt[t[r]] ? t[r] = Pt[t[r]] : t[r] = bc(t[r]);
  return function(a) {
    var o = "", s;
    for (s = 0; s < n; s++)
      o += We(t[s]) ? t[s].call(a, e) : t[s];
    return o;
  };
}
function Sr(e, t) {
  return e.isValid() ? (t = ds(t, e.localeData()), nn[t] = nn[t] || vc(t), nn[t](e)) : e.localeData().invalidDate();
}
function ds(e, t) {
  var r = 5;
  function n(a) {
    return t.longDateFormat(a) || a;
  }
  for (vr.lastIndex = 0; r >= 0 && vr.test(e); )
    e = e.replace(
      vr,
      n
    ), vr.lastIndex = 0, r -= 1;
  return e;
}
var wc = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Sc(e) {
  var t = this._longDateFormat[e], r = this._longDateFormat[e.toUpperCase()];
  return t || !r ? t : (this._longDateFormat[e] = r.match(Hn).map(function(n) {
    return n === "MMMM" || n === "MM" || n === "DD" || n === "dddd" ? n.slice(1) : n;
  }).join(""), this._longDateFormat[e]);
}
var kc = "Invalid date";
function xc() {
  return this._invalidDate;
}
var Dc = "%d", _c = /\d{1,2}/;
function Cc(e) {
  return this._ordinal.replace("%d", e);
}
var Mc = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function Oc(e, t, r, n) {
  var a = this._relativeTime[r];
  return We(a) ? a(e, t, r, n) : a.replace(/%d/i, e);
}
function Tc(e, t) {
  var r = this._relativeTime[e > 0 ? "future" : "past"];
  return We(r) ? r(t) : r.replace(/%s/i, t);
}
var ao = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year"
};
function Ce(e) {
  return typeof e == "string" ? ao[e] || ao[e.toLowerCase()] : void 0;
}
function Vn(e) {
  var t = {}, r, n;
  for (n in e)
    F(e, n) && (r = Ce(n), r && (t[r] = e[n]));
  return t;
}
var Yc = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1
};
function Ac(e) {
  var t = [], r;
  for (r in e)
    F(e, r) && t.push({ unit: r, priority: Yc[r] });
  return t.sort(function(n, a) {
    return n.priority - a.priority;
  }), t;
}
var us = /\d/, ke = /\d\d/, cs = /\d{3}/, Un = /\d{4}/, zr = /[+-]?\d{6}/, Z = /\d\d?/, fs = /\d\d\d\d?/, hs = /\d\d\d\d\d\d?/, Hr = /\d{1,3}/, Bn = /\d{1,4}/, Vr = /[+-]?\d{1,6}/, zt = /\d+/, Ur = /[+-]?\d+/, Nc = /Z|[+-]\d\d:?\d\d/gi, Br = /Z|[+-]\d\d(?::?\d\d)?/gi, Rc = /[+-]?\d+(\.\d{1,3})?/, cr = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Ht = /^[1-9]\d?/, Gn = /^([1-9]\d|\d)/, Nr;
Nr = {};
function k(e, t, r) {
  Nr[e] = We(t) ? t : function(n, a) {
    return n && r ? r : t;
  };
}
function Ic(e, t) {
  return F(Nr, e) ? Nr[e](t._strict, t._locale) : new RegExp(Pc(e));
}
function Pc(e) {
  return Ge(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, r, n, a, o) {
        return r || n || a || o;
      }
    )
  );
}
function Ge(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function De(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function P(e) {
  var t = +e, r = 0;
  return t !== 0 && isFinite(t) && (r = De(t)), r;
}
var xn = {};
function V(e, t) {
  var r, n = t, a;
  for (typeof e == "string" && (e = [e]), Je(t) && (n = function(o, s) {
    s[t] = P(o);
  }), a = e.length, r = 0; r < a; r++)
    xn[e[r]] = n;
}
function fr(e, t) {
  V(e, function(r, n, a, o) {
    a._w = a._w || {}, t(r, a._w, a, o);
  });
}
function $c(e, t, r) {
  t != null && F(xn, e) && xn[e](t, r._a, r, e);
}
function Gr(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var he = 0, Ue = 1, Pe = 2, se = 3, Te = 4, Be = 5, gt = 6, Ec = 7, Wc = 8;
C("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? $e(e, 4) : "+" + e;
});
C(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
C(0, ["YYYY", 4], 0, "year");
C(0, ["YYYYY", 5], 0, "year");
C(0, ["YYYYYY", 6, !0], 0, "year");
k("Y", Ur);
k("YY", Z, ke);
k("YYYY", Bn, Un);
k("YYYYY", Vr, zr);
k("YYYYYY", Vr, zr);
V(["YYYYY", "YYYYYY"], he);
V("YYYY", function(e, t) {
  t[he] = e.length === 2 ? v.parseTwoDigitYear(e) : P(e);
});
V("YY", function(e, t) {
  t[he] = v.parseTwoDigitYear(e);
});
V("Y", function(e, t) {
  t[he] = parseInt(e, 10);
});
function er(e) {
  return Gr(e) ? 366 : 365;
}
v.parseTwoDigitYear = function(e) {
  return P(e) + (P(e) > 68 ? 1900 : 2e3);
};
var ms = Vt("FullYear", !0);
function Fc() {
  return Gr(this.year());
}
function Vt(e, t) {
  return function(r) {
    return r != null ? (gs(this, e, r), v.updateOffset(this, t), this) : nr(this, e);
  };
}
function nr(e, t) {
  if (!e.isValid())
    return NaN;
  var r = e._d, n = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return n ? r.getUTCMilliseconds() : r.getMilliseconds();
    case "Seconds":
      return n ? r.getUTCSeconds() : r.getSeconds();
    case "Minutes":
      return n ? r.getUTCMinutes() : r.getMinutes();
    case "Hours":
      return n ? r.getUTCHours() : r.getHours();
    case "Date":
      return n ? r.getUTCDate() : r.getDate();
    case "Day":
      return n ? r.getUTCDay() : r.getDay();
    case "Month":
      return n ? r.getUTCMonth() : r.getMonth();
    case "FullYear":
      return n ? r.getUTCFullYear() : r.getFullYear();
    default:
      return NaN;
  }
}
function gs(e, t, r) {
  var n, a, o, s, i;
  if (!(!e.isValid() || isNaN(r))) {
    switch (n = e._d, a = e._isUTC, t) {
      case "Milliseconds":
        return void (a ? n.setUTCMilliseconds(r) : n.setMilliseconds(r));
      case "Seconds":
        return void (a ? n.setUTCSeconds(r) : n.setSeconds(r));
      case "Minutes":
        return void (a ? n.setUTCMinutes(r) : n.setMinutes(r));
      case "Hours":
        return void (a ? n.setUTCHours(r) : n.setHours(r));
      case "Date":
        return void (a ? n.setUTCDate(r) : n.setDate(r));
      case "FullYear":
        break;
      default:
        return;
    }
    o = r, s = e.month(), i = e.date(), i = i === 29 && s === 1 && !Gr(o) ? 28 : i, a ? n.setUTCFullYear(o, s, i) : n.setFullYear(o, s, i);
  }
}
function Lc(e) {
  return e = Ce(e), We(this[e]) ? this[e]() : this;
}
function jc(e, t) {
  if (typeof e == "object") {
    e = Vn(e);
    var r = Ac(e), n, a = r.length;
    for (n = 0; n < a; n++)
      this[r[n].unit](e[r[n].unit]);
  } else if (e = Ce(e), We(this[e]))
    return this[e](t);
  return this;
}
function zc(e, t) {
  return (e % t + t) % t;
}
var ne;
Array.prototype.indexOf ? ne = Array.prototype.indexOf : ne = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Xn(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var r = zc(t, 12);
  return e += (t - r) / 12, r === 1 ? Gr(e) ? 29 : 28 : 31 - r % 7 % 2;
}
C("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
C("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
C("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
k("M", Z, Ht);
k("MM", Z, ke);
k("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
k("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
V(["M", "MM"], function(e, t) {
  t[Ue] = P(e) - 1;
});
V(["MMM", "MMMM"], function(e, t, r, n) {
  var a = r._locale.monthsParse(e, n, r._strict);
  a != null ? t[Ue] = a : N(r).invalidMonth = e;
});
var Hc = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), ys = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), ps = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Vc = cr, Uc = cr;
function Bc(e, t) {
  return e ? Ye(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || ps).test(t) ? "format" : "standalone"][e.month()] : Ye(this._months) ? this._months : this._months.standalone;
}
function Gc(e, t) {
  return e ? Ye(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[ps.test(t) ? "format" : "standalone"][e.month()] : Ye(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function Xc(e, t, r) {
  var n, a, o, s = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n)
      o = Ee([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(
        o,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[n] = this.months(o, "").toLocaleLowerCase();
  return r ? t === "MMM" ? (a = ne.call(this._shortMonthsParse, s), a !== -1 ? a : null) : (a = ne.call(this._longMonthsParse, s), a !== -1 ? a : null) : t === "MMM" ? (a = ne.call(this._shortMonthsParse, s), a !== -1 ? a : (a = ne.call(this._longMonthsParse, s), a !== -1 ? a : null)) : (a = ne.call(this._longMonthsParse, s), a !== -1 ? a : (a = ne.call(this._shortMonthsParse, s), a !== -1 ? a : null));
}
function Jc(e, t, r) {
  var n, a, o;
  if (this._monthsParseExact)
    return Xc.call(this, e, t, r);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
    if (a = Ee([2e3, n]), r && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp(
      "^" + this.months(a, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[n] = new RegExp(
      "^" + this.monthsShort(a, "").replace(".", "") + "$",
      "i"
    )), !r && !this._monthsParse[n] && (o = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[n] = new RegExp(o.replace(".", ""), "i")), r && t === "MMMM" && this._longMonthsParse[n].test(e))
      return n;
    if (r && t === "MMM" && this._shortMonthsParse[n].test(e))
      return n;
    if (!r && this._monthsParse[n].test(e))
      return n;
  }
}
function bs(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = P(t);
    else if (t = e.localeData().monthsParse(t), !Je(t))
      return e;
  }
  var r = t, n = e.date();
  return n = n < 29 ? n : Math.min(n, Xn(e.year(), r)), e._isUTC ? e._d.setUTCMonth(r, n) : e._d.setMonth(r, n), e;
}
function vs(e) {
  return e != null ? (bs(this, e), v.updateOffset(this, !0), this) : nr(this, "Month");
}
function Zc() {
  return Xn(this.year(), this.month());
}
function qc(e) {
  return this._monthsParseExact ? (F(this, "_monthsRegex") || ws.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (F(this, "_monthsShortRegex") || (this._monthsShortRegex = Vc), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Kc(e) {
  return this._monthsParseExact ? (F(this, "_monthsRegex") || ws.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (F(this, "_monthsRegex") || (this._monthsRegex = Uc), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function ws() {
  function e(l, d) {
    return d.length - l.length;
  }
  var t = [], r = [], n = [], a, o, s, i;
  for (a = 0; a < 12; a++)
    o = Ee([2e3, a]), s = Ge(this.monthsShort(o, "")), i = Ge(this.months(o, "")), t.push(s), r.push(i), n.push(i), n.push(s);
  t.sort(e), r.sort(e), n.sort(e), this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function Qc(e, t, r, n, a, o, s) {
  var i;
  return e < 100 && e >= 0 ? (i = new Date(e + 400, t, r, n, a, o, s), isFinite(i.getFullYear()) && i.setFullYear(e)) : i = new Date(e, t, r, n, a, o, s), i;
}
function ar(e) {
  var t, r;
  return e < 100 && e >= 0 ? (r = Array.prototype.slice.call(arguments), r[0] = e + 400, t = new Date(Date.UTC.apply(null, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Rr(e, t, r) {
  var n = 7 + t - r, a = (7 + ar(e, 0, n).getUTCDay() - t) % 7;
  return -a + n - 1;
}
function Ss(e, t, r, n, a) {
  var o = (7 + r - n) % 7, s = Rr(e, n, a), i = 1 + 7 * (t - 1) + o + s, l, d;
  return i <= 0 ? (l = e - 1, d = er(l) + i) : i > er(e) ? (l = e + 1, d = i - er(e)) : (l = e, d = i), {
    year: l,
    dayOfYear: d
  };
}
function or(e, t, r) {
  var n = Rr(e.year(), t, r), a = Math.floor((e.dayOfYear() - n - 1) / 7) + 1, o, s;
  return a < 1 ? (s = e.year() - 1, o = a + Xe(s, t, r)) : a > Xe(e.year(), t, r) ? (o = a - Xe(e.year(), t, r), s = e.year() + 1) : (s = e.year(), o = a), {
    week: o,
    year: s
  };
}
function Xe(e, t, r) {
  var n = Rr(e, t, r), a = Rr(e + 1, t, r);
  return (er(e) - n + a) / 7;
}
C("w", ["ww", 2], "wo", "week");
C("W", ["WW", 2], "Wo", "isoWeek");
k("w", Z, Ht);
k("ww", Z, ke);
k("W", Z, Ht);
k("WW", Z, ke);
fr(
  ["w", "ww", "W", "WW"],
  function(e, t, r, n) {
    t[n.substr(0, 1)] = P(e);
  }
);
function ef(e) {
  return or(e, this._week.dow, this._week.doy).week;
}
var tf = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function rf() {
  return this._week.dow;
}
function nf() {
  return this._week.doy;
}
function af(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function of(e) {
  var t = or(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
C("d", 0, "do", "day");
C("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
C("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
C("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
C("e", 0, 0, "weekday");
C("E", 0, 0, "isoWeekday");
k("d", Z);
k("e", Z);
k("E", Z);
k("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
k("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
k("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
fr(["dd", "ddd", "dddd"], function(e, t, r, n) {
  var a = r._locale.weekdaysParse(e, n, r._strict);
  a != null ? t.d = a : N(r).invalidWeekday = e;
});
fr(["d", "e", "E"], function(e, t, r, n) {
  t[n] = P(e);
});
function sf(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function lf(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Jn(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var df = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), ks = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), uf = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), cf = cr, ff = cr, hf = cr;
function mf(e, t) {
  var r = Ye(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Jn(r, this._week.dow) : e ? r[e.day()] : r;
}
function gf(e) {
  return e === !0 ? Jn(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function yf(e) {
  return e === !0 ? Jn(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function pf(e, t, r) {
  var n, a, o, s = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n)
      o = Ee([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(
        o,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(
        o,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(o, "").toLocaleLowerCase();
  return r ? t === "dddd" ? (a = ne.call(this._weekdaysParse, s), a !== -1 ? a : null) : t === "ddd" ? (a = ne.call(this._shortWeekdaysParse, s), a !== -1 ? a : null) : (a = ne.call(this._minWeekdaysParse, s), a !== -1 ? a : null) : t === "dddd" ? (a = ne.call(this._weekdaysParse, s), a !== -1 || (a = ne.call(this._shortWeekdaysParse, s), a !== -1) ? a : (a = ne.call(this._minWeekdaysParse, s), a !== -1 ? a : null)) : t === "ddd" ? (a = ne.call(this._shortWeekdaysParse, s), a !== -1 || (a = ne.call(this._weekdaysParse, s), a !== -1) ? a : (a = ne.call(this._minWeekdaysParse, s), a !== -1 ? a : null)) : (a = ne.call(this._minWeekdaysParse, s), a !== -1 || (a = ne.call(this._weekdaysParse, s), a !== -1) ? a : (a = ne.call(this._shortWeekdaysParse, s), a !== -1 ? a : null));
}
function bf(e, t, r) {
  var n, a, o;
  if (this._weekdaysParseExact)
    return pf.call(this, e, t, r);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
    if (a = Ee([2e3, 1]).day(n), r && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp(
      "^" + this.weekdays(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[n] || (o = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[n] = new RegExp(o.replace(".", ""), "i")), r && t === "dddd" && this._fullWeekdaysParse[n].test(e))
      return n;
    if (r && t === "ddd" && this._shortWeekdaysParse[n].test(e))
      return n;
    if (r && t === "dd" && this._minWeekdaysParse[n].test(e))
      return n;
    if (!r && this._weekdaysParse[n].test(e))
      return n;
  }
}
function vf(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = nr(this, "Day");
  return e != null ? (e = sf(e, this.localeData()), this.add(e - t, "d")) : t;
}
function wf(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Sf(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = lf(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function kf(e) {
  return this._weekdaysParseExact ? (F(this, "_weekdaysRegex") || Zn.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (F(this, "_weekdaysRegex") || (this._weekdaysRegex = cf), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function xf(e) {
  return this._weekdaysParseExact ? (F(this, "_weekdaysRegex") || Zn.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (F(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ff), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Df(e) {
  return this._weekdaysParseExact ? (F(this, "_weekdaysRegex") || Zn.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (F(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = hf), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Zn() {
  function e(u, c) {
    return c.length - u.length;
  }
  var t = [], r = [], n = [], a = [], o, s, i, l, d;
  for (o = 0; o < 7; o++)
    s = Ee([2e3, 1]).day(o), i = Ge(this.weekdaysMin(s, "")), l = Ge(this.weekdaysShort(s, "")), d = Ge(this.weekdays(s, "")), t.push(i), r.push(l), n.push(d), a.push(i), a.push(l), a.push(d);
  t.sort(e), r.sort(e), n.sort(e), a.sort(e), this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function qn() {
  return this.hours() % 12 || 12;
}
function _f() {
  return this.hours() || 24;
}
C("H", ["HH", 2], 0, "hour");
C("h", ["hh", 2], 0, qn);
C("k", ["kk", 2], 0, _f);
C("hmm", 0, 0, function() {
  return "" + qn.apply(this) + $e(this.minutes(), 2);
});
C("hmmss", 0, 0, function() {
  return "" + qn.apply(this) + $e(this.minutes(), 2) + $e(this.seconds(), 2);
});
C("Hmm", 0, 0, function() {
  return "" + this.hours() + $e(this.minutes(), 2);
});
C("Hmmss", 0, 0, function() {
  return "" + this.hours() + $e(this.minutes(), 2) + $e(this.seconds(), 2);
});
function xs(e, t) {
  C(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
xs("a", !0);
xs("A", !1);
function Ds(e, t) {
  return t._meridiemParse;
}
k("a", Ds);
k("A", Ds);
k("H", Z, Gn);
k("h", Z, Ht);
k("k", Z, Ht);
k("HH", Z, ke);
k("hh", Z, ke);
k("kk", Z, ke);
k("hmm", fs);
k("hmmss", hs);
k("Hmm", fs);
k("Hmmss", hs);
V(["H", "HH"], se);
V(["k", "kk"], function(e, t, r) {
  var n = P(e);
  t[se] = n === 24 ? 0 : n;
});
V(["a", "A"], function(e, t, r) {
  r._isPm = r._locale.isPM(e), r._meridiem = e;
});
V(["h", "hh"], function(e, t, r) {
  t[se] = P(e), N(r).bigHour = !0;
});
V("hmm", function(e, t, r) {
  var n = e.length - 2;
  t[se] = P(e.substr(0, n)), t[Te] = P(e.substr(n)), N(r).bigHour = !0;
});
V("hmmss", function(e, t, r) {
  var n = e.length - 4, a = e.length - 2;
  t[se] = P(e.substr(0, n)), t[Te] = P(e.substr(n, 2)), t[Be] = P(e.substr(a)), N(r).bigHour = !0;
});
V("Hmm", function(e, t, r) {
  var n = e.length - 2;
  t[se] = P(e.substr(0, n)), t[Te] = P(e.substr(n));
});
V("Hmmss", function(e, t, r) {
  var n = e.length - 4, a = e.length - 2;
  t[se] = P(e.substr(0, n)), t[Te] = P(e.substr(n, 2)), t[Be] = P(e.substr(a));
});
function Cf(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Mf = /[ap]\.?m?\.?/i, Of = Vt("Hours", !0);
function Tf(e, t, r) {
  return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM";
}
var _s = {
  calendar: yc,
  longDateFormat: wc,
  invalidDate: kc,
  ordinal: Dc,
  dayOfMonthOrdinalParse: _c,
  relativeTime: Mc,
  months: Hc,
  monthsShort: ys,
  week: tf,
  weekdays: df,
  weekdaysMin: uf,
  weekdaysShort: ks,
  meridiemParse: Mf
}, Q = {}, Xt = {}, sr;
function Yf(e, t) {
  var r, n = Math.min(e.length, t.length);
  for (r = 0; r < n; r += 1)
    if (e[r] !== t[r])
      return r;
  return n;
}
function oo(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Af(e) {
  for (var t = 0, r, n, a, o; t < e.length; ) {
    for (o = oo(e[t]).split("-"), r = o.length, n = oo(e[t + 1]), n = n ? n.split("-") : null; r > 0; ) {
      if (a = Xr(o.slice(0, r).join("-")), a)
        return a;
      if (n && n.length >= r && Yf(o, n) >= r - 1)
        break;
      r--;
    }
    t++;
  }
  return sr;
}
function Nf(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function Xr(e) {
  var t = null, r;
  if (Q[e] === void 0 && typeof module < "u" && module && module.exports && Nf(e))
    try {
      t = sr._abbr, r = require, r("./locale/" + e), it(t);
    } catch {
      Q[e] = null;
    }
  return Q[e];
}
function it(e, t) {
  var r;
  return e && (ge(t) ? r = Ze(e) : r = Kn(e, t), r ? sr = r : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), sr._abbr;
}
function Kn(e, t) {
  if (t !== null) {
    var r, n = _s;
    if (t.abbr = e, Q[e] != null)
      ls(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), n = Q[e]._config;
    else if (t.parentLocale != null)
      if (Q[t.parentLocale] != null)
        n = Q[t.parentLocale]._config;
      else if (r = Xr(t.parentLocale), r != null)
        n = r._config;
      else
        return Xt[t.parentLocale] || (Xt[t.parentLocale] = []), Xt[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return Q[e] = new zn(Sn(n, t)), Xt[e] && Xt[e].forEach(function(a) {
      Kn(a.name, a.config);
    }), it(e), Q[e];
  } else
    return delete Q[e], null;
}
function Rf(e, t) {
  if (t != null) {
    var r, n, a = _s;
    Q[e] != null && Q[e].parentLocale != null ? Q[e].set(Sn(Q[e]._config, t)) : (n = Xr(e), n != null && (a = n._config), t = Sn(a, t), n == null && (t.abbr = e), r = new zn(t), r.parentLocale = Q[e], Q[e] = r), it(e);
  } else
    Q[e] != null && (Q[e].parentLocale != null ? (Q[e] = Q[e].parentLocale, e === it() && it(e)) : Q[e] != null && delete Q[e]);
  return Q[e];
}
function Ze(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return sr;
  if (!Ye(e)) {
    if (t = Xr(e), t)
      return t;
    e = [e];
  }
  return Af(e);
}
function If() {
  return kn(Q);
}
function Qn(e) {
  var t, r = e._a;
  return r && N(e).overflow === -2 && (t = r[Ue] < 0 || r[Ue] > 11 ? Ue : r[Pe] < 1 || r[Pe] > Xn(r[he], r[Ue]) ? Pe : r[se] < 0 || r[se] > 24 || r[se] === 24 && (r[Te] !== 0 || r[Be] !== 0 || r[gt] !== 0) ? se : r[Te] < 0 || r[Te] > 59 ? Te : r[Be] < 0 || r[Be] > 59 ? Be : r[gt] < 0 || r[gt] > 999 ? gt : -1, N(e)._overflowDayOfYear && (t < he || t > Pe) && (t = Pe), N(e)._overflowWeeks && t === -1 && (t = Ec), N(e)._overflowWeekday && t === -1 && (t = Wc), N(e).overflow = t), e;
}
var Pf = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, $f = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ef = /Z|[+-]\d\d(?::?\d\d)?/, wr = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], an = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], Wf = /^\/?Date\((-?\d+)/i, Ff = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Lf = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function Cs(e) {
  var t, r, n = e._i, a = Pf.exec(n) || $f.exec(n), o, s, i, l, d = wr.length, u = an.length;
  if (a) {
    for (N(e).iso = !0, t = 0, r = d; t < r; t++)
      if (wr[t][1].exec(a[1])) {
        s = wr[t][0], o = wr[t][2] !== !1;
        break;
      }
    if (s == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, r = u; t < r; t++)
        if (an[t][1].exec(a[3])) {
          i = (a[2] || " ") + an[t][0];
          break;
        }
      if (i == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!o && i != null) {
      e._isValid = !1;
      return;
    }
    if (a[4])
      if (Ef.exec(a[4]))
        l = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = s + (i || "") + (l || ""), ta(e);
  } else
    e._isValid = !1;
}
function jf(e, t, r, n, a, o) {
  var s = [
    zf(e),
    ys.indexOf(t),
    parseInt(r, 10),
    parseInt(n, 10),
    parseInt(a, 10)
  ];
  return o && s.push(parseInt(o, 10)), s;
}
function zf(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Hf(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Vf(e, t, r) {
  if (e) {
    var n = ks.indexOf(e), a = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (n !== a)
      return N(r).weekdayMismatch = !0, r._isValid = !1, !1;
  }
  return !0;
}
function Uf(e, t, r) {
  if (e)
    return Lf[e];
  if (t)
    return 0;
  var n = parseInt(r, 10), a = n % 100, o = (n - a) / 100;
  return o * 60 + a;
}
function Ms(e) {
  var t = Ff.exec(Hf(e._i)), r;
  if (t) {
    if (r = jf(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !Vf(t[1], r, e))
      return;
    e._a = r, e._tzm = Uf(t[8], t[9], t[10]), e._d = ar.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), N(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Bf(e) {
  var t = Wf.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (Cs(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Ms(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : v.createFromInputFallback(e);
}
v.createFromInputFallback = _e(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Ct(e, t, r) {
  return e ?? t ?? r;
}
function Gf(e) {
  var t = new Date(v.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function ea(e) {
  var t, r, n = [], a, o, s;
  if (!e._d) {
    for (a = Gf(e), e._w && e._a[Pe] == null && e._a[Ue] == null && Xf(e), e._dayOfYear != null && (s = Ct(e._a[he], a[he]), (e._dayOfYear > er(s) || e._dayOfYear === 0) && (N(e)._overflowDayOfYear = !0), r = ar(s, 0, e._dayOfYear), e._a[Ue] = r.getUTCMonth(), e._a[Pe] = r.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = n[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = n[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[se] === 24 && e._a[Te] === 0 && e._a[Be] === 0 && e._a[gt] === 0 && (e._nextDay = !0, e._a[se] = 0), e._d = (e._useUTC ? ar : Qc).apply(
      null,
      n
    ), o = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[se] = 24), e._w && typeof e._w.d < "u" && e._w.d !== o && (N(e).weekdayMismatch = !0);
  }
}
function Xf(e) {
  var t, r, n, a, o, s, i, l, d;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (o = 1, s = 4, r = Ct(
    t.GG,
    e._a[he],
    or(J(), 1, 4).year
  ), n = Ct(t.W, 1), a = Ct(t.E, 1), (a < 1 || a > 7) && (l = !0)) : (o = e._locale._week.dow, s = e._locale._week.doy, d = or(J(), o, s), r = Ct(t.gg, e._a[he], d.year), n = Ct(t.w, d.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (l = !0)) : t.e != null ? (a = t.e + o, (t.e < 0 || t.e > 6) && (l = !0)) : a = o), n < 1 || n > Xe(r, o, s) ? N(e)._overflowWeeks = !0 : l != null ? N(e)._overflowWeekday = !0 : (i = Ss(r, n, a, o, s), e._a[he] = i.year, e._dayOfYear = i.dayOfYear);
}
v.ISO_8601 = function() {
};
v.RFC_2822 = function() {
};
function ta(e) {
  if (e._f === v.ISO_8601) {
    Cs(e);
    return;
  }
  if (e._f === v.RFC_2822) {
    Ms(e);
    return;
  }
  e._a = [], N(e).empty = !0;
  var t = "" + e._i, r, n, a, o, s, i = t.length, l = 0, d, u;
  for (a = ds(e._f, e._locale).match(Hn) || [], u = a.length, r = 0; r < u; r++)
    o = a[r], n = (t.match(Ic(o, e)) || [])[0], n && (s = t.substr(0, t.indexOf(n)), s.length > 0 && N(e).unusedInput.push(s), t = t.slice(
      t.indexOf(n) + n.length
    ), l += n.length), Pt[o] ? (n ? N(e).empty = !1 : N(e).unusedTokens.push(o), $c(o, n, e)) : e._strict && !n && N(e).unusedTokens.push(o);
  N(e).charsLeftOver = i - l, t.length > 0 && N(e).unusedInput.push(t), e._a[se] <= 12 && N(e).bigHour === !0 && e._a[se] > 0 && (N(e).bigHour = void 0), N(e).parsedDateParts = e._a.slice(0), N(e).meridiem = e._meridiem, e._a[se] = Jf(
    e._locale,
    e._a[se],
    e._meridiem
  ), d = N(e).era, d !== null && (e._a[he] = e._locale.erasConvertYear(d, e._a[he])), ea(e), Qn(e);
}
function Jf(e, t, r) {
  var n;
  return r == null ? t : e.meridiemHour != null ? e.meridiemHour(t, r) : (e.isPM != null && (n = e.isPM(r), n && t < 12 && (t += 12), !n && t === 12 && (t = 0)), t);
}
function Zf(e) {
  var t, r, n, a, o, s, i = !1, l = e._f.length;
  if (l === 0) {
    N(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (a = 0; a < l; a++)
    o = 0, s = !1, t = jn({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], ta(t), Ln(t) && (s = !0), o += N(t).charsLeftOver, o += N(t).unusedTokens.length * 10, N(t).score = o, i ? o < n && (n = o, r = t) : (n == null || o < n || s) && (n = o, r = t, s && (i = !0));
  at(e, r || t);
}
function qf(e) {
  if (!e._d) {
    var t = Vn(e._i), r = t.day === void 0 ? t.date : t.day;
    e._a = ss(
      [t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond],
      function(n) {
        return n && parseInt(n, 10);
      }
    ), ea(e);
  }
}
function Kf(e) {
  var t = new ur(Qn(Os(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function Os(e) {
  var t = e._i, r = e._f;
  return e._locale = e._locale || Ze(e._l), t === null || r === void 0 && t === "" ? jr({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), Ae(t) ? new ur(Qn(t)) : (dr(t) ? e._d = t : Ye(r) ? Zf(e) : r ? ta(e) : Qf(e), Ln(e) || (e._d = null), e));
}
function Qf(e) {
  var t = e._i;
  ge(t) ? e._d = new Date(v.now()) : dr(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Bf(e) : Ye(t) ? (e._a = ss(t.slice(0), function(r) {
    return parseInt(r, 10);
  }), ea(e)) : yt(t) ? qf(e) : Je(t) ? e._d = new Date(t) : v.createFromInputFallback(e);
}
function Ts(e, t, r, n, a) {
  var o = {};
  return (t === !0 || t === !1) && (n = t, t = void 0), (r === !0 || r === !1) && (n = r, r = void 0), (yt(e) && Fn(e) || Ye(e) && e.length === 0) && (e = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = a, o._l = r, o._i = e, o._f = t, o._strict = n, Kf(o);
}
function J(e, t, r, n) {
  return Ts(e, t, r, n, !1);
}
var eh = _e(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = J.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : jr();
  }
), th = _e(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = J.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : jr();
  }
);
function Ys(e, t) {
  var r, n;
  if (t.length === 1 && Ye(t[0]) && (t = t[0]), !t.length)
    return J();
  for (r = t[0], n = 1; n < t.length; ++n)
    (!t[n].isValid() || t[n][e](r)) && (r = t[n]);
  return r;
}
function rh() {
  var e = [].slice.call(arguments, 0);
  return Ys("isBefore", e);
}
function nh() {
  var e = [].slice.call(arguments, 0);
  return Ys("isAfter", e);
}
var ah = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Jt = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function oh(e) {
  var t, r = !1, n, a = Jt.length;
  for (t in e)
    if (F(e, t) && !(ne.call(Jt, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (n = 0; n < a; ++n)
    if (e[Jt[n]]) {
      if (r)
        return !1;
      parseFloat(e[Jt[n]]) !== P(e[Jt[n]]) && (r = !0);
    }
  return !0;
}
function sh() {
  return this._isValid;
}
function ih() {
  return Ne(NaN);
}
function Jr(e) {
  var t = Vn(e), r = t.year || 0, n = t.quarter || 0, a = t.month || 0, o = t.week || t.isoWeek || 0, s = t.day || 0, i = t.hour || 0, l = t.minute || 0, d = t.second || 0, u = t.millisecond || 0;
  this._isValid = oh(t), this._milliseconds = +u + d * 1e3 + // 1000
  l * 6e4 + // 1000 * 60
  i * 1e3 * 60 * 60, this._days = +s + o * 7, this._months = +a + n * 3 + r * 12, this._data = {}, this._locale = Ze(), this._bubble();
}
function kr(e) {
  return e instanceof Jr;
}
function Dn(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function lh(e, t, r) {
  var n = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), o = 0, s;
  for (s = 0; s < n; s++)
    (r && e[s] !== t[s] || !r && P(e[s]) !== P(t[s])) && o++;
  return o + a;
}
function As(e, t) {
  C(e, 0, 0, function() {
    var r = this.utcOffset(), n = "+";
    return r < 0 && (r = -r, n = "-"), n + $e(~~(r / 60), 2) + t + $e(~~r % 60, 2);
  });
}
As("Z", ":");
As("ZZ", "");
k("Z", Br);
k("ZZ", Br);
V(["Z", "ZZ"], function(e, t, r) {
  r._useUTC = !0, r._tzm = ra(Br, e);
});
var dh = /([\+\-]|\d\d)/gi;
function ra(e, t) {
  var r = (t || "").match(e), n, a, o;
  return r === null ? null : (n = r[r.length - 1] || [], a = (n + "").match(dh) || ["-", 0, 0], o = +(a[1] * 60) + P(a[2]), o === 0 ? 0 : a[0] === "+" ? o : -o);
}
function na(e, t) {
  var r, n;
  return t._isUTC ? (r = t.clone(), n = (Ae(e) || dr(e) ? e.valueOf() : J(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + n), v.updateOffset(r, !1), r) : J(e).local();
}
function _n(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
v.updateOffset = function() {
};
function uh(e, t, r) {
  var n = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = ra(Br, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !r && (e = e * 60);
    return !this._isUTC && t && (a = _n(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), n !== e && (!t || this._changeInProgress ? Is(
      this,
      Ne(e - n, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, v.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? n : _n(this);
}
function ch(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function fh(e) {
  return this.utcOffset(0, e);
}
function hh(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(_n(this), "m")), this;
}
function mh() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = ra(Nc, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function gh(e) {
  return this.isValid() ? (e = e ? J(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function yh() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function ph() {
  if (!ge(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return jn(e, this), e = Os(e), e._a ? (t = e._isUTC ? Ee(e._a) : J(e._a), this._isDSTShifted = this.isValid() && lh(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function bh() {
  return this.isValid() ? !this._isUTC : !1;
}
function vh() {
  return this.isValid() ? this._isUTC : !1;
}
function Ns() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var wh = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Sh = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function Ne(e, t) {
  var r = e, n = null, a, o, s;
  return kr(e) ? r = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : Je(e) || !isNaN(+e) ? (r = {}, t ? r[t] = +e : r.milliseconds = +e) : (n = wh.exec(e)) ? (a = n[1] === "-" ? -1 : 1, r = {
    y: 0,
    d: P(n[Pe]) * a,
    h: P(n[se]) * a,
    m: P(n[Te]) * a,
    s: P(n[Be]) * a,
    ms: P(Dn(n[gt] * 1e3)) * a
    // the millisecond decimal point is included in the match
  }) : (n = Sh.exec(e)) ? (a = n[1] === "-" ? -1 : 1, r = {
    y: ft(n[2], a),
    M: ft(n[3], a),
    w: ft(n[4], a),
    d: ft(n[5], a),
    h: ft(n[6], a),
    m: ft(n[7], a),
    s: ft(n[8], a)
  }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (s = kh(
    J(r.from),
    J(r.to)
  ), r = {}, r.ms = s.milliseconds, r.M = s.months), o = new Jr(r), kr(e) && F(e, "_locale") && (o._locale = e._locale), kr(e) && F(e, "_isValid") && (o._isValid = e._isValid), o;
}
Ne.fn = Jr.prototype;
Ne.invalid = ih;
function ft(e, t) {
  var r = e && parseFloat(e.replace(",", "."));
  return (isNaN(r) ? 0 : r) * t;
}
function so(e, t) {
  var r = {};
  return r.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(r.months, "M").isAfter(t) && --r.months, r.milliseconds = +t - +e.clone().add(r.months, "M"), r;
}
function kh(e, t) {
  var r;
  return e.isValid() && t.isValid() ? (t = na(t, e), e.isBefore(t) ? r = so(e, t) : (r = so(t, e), r.milliseconds = -r.milliseconds, r.months = -r.months), r) : { milliseconds: 0, months: 0 };
}
function Rs(e, t) {
  return function(r, n) {
    var a, o;
    return n !== null && !isNaN(+n) && (ls(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), o = r, r = n, n = o), a = Ne(r, n), Is(this, a, e), this;
  };
}
function Is(e, t, r, n) {
  var a = t._milliseconds, o = Dn(t._days), s = Dn(t._months);
  e.isValid() && (n = n ?? !0, s && bs(e, nr(e, "Month") + s * r), o && gs(e, "Date", nr(e, "Date") + o * r), a && e._d.setTime(e._d.valueOf() + a * r), n && v.updateOffset(e, o || s));
}
var xh = Rs(1, "add"), Dh = Rs(-1, "subtract");
function Ps(e) {
  return typeof e == "string" || e instanceof String;
}
function _h(e) {
  return Ae(e) || dr(e) || Ps(e) || Je(e) || Mh(e) || Ch(e) || e === null || e === void 0;
}
function Ch(e) {
  var t = yt(e) && !Fn(e), r = !1, n = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], a, o, s = n.length;
  for (a = 0; a < s; a += 1)
    o = n[a], r = r || F(e, o);
  return t && r;
}
function Mh(e) {
  var t = Ye(e), r = !1;
  return t && (r = e.filter(function(n) {
    return !Je(n) && Ps(e);
  }).length === 0), t && r;
}
function Oh(e) {
  var t = yt(e) && !Fn(e), r = !1, n = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], a, o;
  for (a = 0; a < n.length; a += 1)
    o = n[a], r = r || F(e, o);
  return t && r;
}
function Th(e, t) {
  var r = e.diff(t, "days", !0);
  return r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse";
}
function Yh(e, t) {
  arguments.length === 1 && (arguments[0] ? _h(arguments[0]) ? (e = arguments[0], t = void 0) : Oh(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var r = e || J(), n = na(r, this).startOf("day"), a = v.calendarFormat(this, n) || "sameElse", o = t && (We(t[a]) ? t[a].call(this, r) : t[a]);
  return this.format(
    o || this.localeData().calendar(a, this, J(r))
  );
}
function Ah() {
  return new ur(this);
}
function Nh(e, t) {
  var r = Ae(e) ? e : J(e);
  return this.isValid() && r.isValid() ? (t = Ce(t) || "millisecond", t === "millisecond" ? this.valueOf() > r.valueOf() : r.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function Rh(e, t) {
  var r = Ae(e) ? e : J(e);
  return this.isValid() && r.isValid() ? (t = Ce(t) || "millisecond", t === "millisecond" ? this.valueOf() < r.valueOf() : this.clone().endOf(t).valueOf() < r.valueOf()) : !1;
}
function Ih(e, t, r, n) {
  var a = Ae(e) ? e : J(e), o = Ae(t) ? t : J(t);
  return this.isValid() && a.isValid() && o.isValid() ? (n = n || "()", (n[0] === "(" ? this.isAfter(a, r) : !this.isBefore(a, r)) && (n[1] === ")" ? this.isBefore(o, r) : !this.isAfter(o, r))) : !1;
}
function Ph(e, t) {
  var r = Ae(e) ? e : J(e), n;
  return this.isValid() && r.isValid() ? (t = Ce(t) || "millisecond", t === "millisecond" ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) : !1;
}
function $h(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Eh(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Wh(e, t, r) {
  var n, a, o;
  if (!this.isValid())
    return NaN;
  if (n = na(e, this), !n.isValid())
    return NaN;
  switch (a = (n.utcOffset() - this.utcOffset()) * 6e4, t = Ce(t), t) {
    case "year":
      o = xr(this, n) / 12;
      break;
    case "month":
      o = xr(this, n);
      break;
    case "quarter":
      o = xr(this, n) / 3;
      break;
    case "second":
      o = (this - n) / 1e3;
      break;
    case "minute":
      o = (this - n) / 6e4;
      break;
    case "hour":
      o = (this - n) / 36e5;
      break;
    case "day":
      o = (this - n - a) / 864e5;
      break;
    case "week":
      o = (this - n - a) / 6048e5;
      break;
    default:
      o = this - n;
  }
  return r ? o : De(o);
}
function xr(e, t) {
  if (e.date() < t.date())
    return -xr(t, e);
  var r = (t.year() - e.year()) * 12 + (t.month() - e.month()), n = e.clone().add(r, "months"), a, o;
  return t - n < 0 ? (a = e.clone().add(r - 1, "months"), o = (t - n) / (n - a)) : (a = e.clone().add(r + 1, "months"), o = (t - n) / (a - n)), -(r + o) || 0;
}
v.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
v.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function Fh() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Lh(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, r = t ? this.clone().utc() : this;
  return r.year() < 0 || r.year() > 9999 ? Sr(
    r,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : We(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Sr(r, "Z")) : Sr(
    r,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function jh() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", r, n, a, o;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), r = "[" + e + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", o = t + '[")]', this.format(r + n + a + o);
}
function zh(e) {
  e || (e = this.isUtc() ? v.defaultFormatUtc : v.defaultFormat);
  var t = Sr(this, e);
  return this.localeData().postformat(t);
}
function Hh(e, t) {
  return this.isValid() && (Ae(e) && e.isValid() || J(e).isValid()) ? Ne({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Vh(e) {
  return this.from(J(), e);
}
function Uh(e, t) {
  return this.isValid() && (Ae(e) && e.isValid() || J(e).isValid()) ? Ne({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Bh(e) {
  return this.to(J(), e);
}
function $s(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = Ze(e), t != null && (this._locale = t), this);
}
var Es = _e(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Ws() {
  return this._locale;
}
var Ir = 1e3, $t = 60 * Ir, Pr = 60 * $t, Fs = (365 * 400 + 97) * 24 * Pr;
function Et(e, t) {
  return (e % t + t) % t;
}
function Ls(e, t, r) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, r) - Fs : new Date(e, t, r).valueOf();
}
function js(e, t, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - Fs : Date.UTC(e, t, r);
}
function Gh(e) {
  var t, r;
  if (e = Ce(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? js : Ls, e) {
    case "year":
      t = r(this.year(), 0, 1);
      break;
    case "quarter":
      t = r(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = r(this.year(), this.month(), 1);
      break;
    case "week":
      t = r(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = r(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= Et(
        t + (this._isUTC ? 0 : this.utcOffset() * $t),
        Pr
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= Et(t, $t);
      break;
    case "second":
      t = this._d.valueOf(), t -= Et(t, Ir);
      break;
  }
  return this._d.setTime(t), v.updateOffset(this, !0), this;
}
function Xh(e) {
  var t, r;
  if (e = Ce(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? js : Ls, e) {
    case "year":
      t = r(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = r(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = r(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = r(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = r(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += Pr - Et(
        t + (this._isUTC ? 0 : this.utcOffset() * $t),
        Pr
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += $t - Et(t, $t) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Ir - Et(t, Ir) - 1;
      break;
  }
  return this._d.setTime(t), v.updateOffset(this, !0), this;
}
function Jh() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Zh() {
  return Math.floor(this.valueOf() / 1e3);
}
function qh() {
  return new Date(this.valueOf());
}
function Kh() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function Qh() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function em() {
  return this.isValid() ? this.toISOString() : null;
}
function tm() {
  return Ln(this);
}
function rm() {
  return at({}, N(this));
}
function nm() {
  return N(this).overflow;
}
function am() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
C("N", 0, 0, "eraAbbr");
C("NN", 0, 0, "eraAbbr");
C("NNN", 0, 0, "eraAbbr");
C("NNNN", 0, 0, "eraName");
C("NNNNN", 0, 0, "eraNarrow");
C("y", ["y", 1], "yo", "eraYear");
C("y", ["yy", 2], 0, "eraYear");
C("y", ["yyy", 3], 0, "eraYear");
C("y", ["yyyy", 4], 0, "eraYear");
k("N", aa);
k("NN", aa);
k("NNN", aa);
k("NNNN", gm);
k("NNNNN", ym);
V(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, r, n) {
    var a = r._locale.erasParse(e, n, r._strict);
    a ? N(r).era = a : N(r).invalidEra = e;
  }
);
k("y", zt);
k("yy", zt);
k("yyy", zt);
k("yyyy", zt);
k("yo", pm);
V(["y", "yy", "yyy", "yyyy"], he);
V(["yo"], function(e, t, r, n) {
  var a;
  r._locale._eraYearOrdinalRegex && (a = e.match(r._locale._eraYearOrdinalRegex)), r._locale.eraYearOrdinalParse ? t[he] = r._locale.eraYearOrdinalParse(e, a) : t[he] = parseInt(e, 10);
});
function om(e, t) {
  var r, n, a, o = this._eras || Ze("en")._eras;
  for (r = 0, n = o.length; r < n; ++r) {
    switch (typeof o[r].since) {
      case "string":
        a = v(o[r].since).startOf("day"), o[r].since = a.valueOf();
        break;
    }
    switch (typeof o[r].until) {
      case "undefined":
        o[r].until = 1 / 0;
        break;
      case "string":
        a = v(o[r].until).startOf("day").valueOf(), o[r].until = a.valueOf();
        break;
    }
  }
  return o;
}
function sm(e, t, r) {
  var n, a, o = this.eras(), s, i, l;
  for (e = e.toUpperCase(), n = 0, a = o.length; n < a; ++n)
    if (s = o[n].name.toUpperCase(), i = o[n].abbr.toUpperCase(), l = o[n].narrow.toUpperCase(), r)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (i === e)
            return o[n];
          break;
        case "NNNN":
          if (s === e)
            return o[n];
          break;
        case "NNNNN":
          if (l === e)
            return o[n];
          break;
      }
    else if ([s, i, l].indexOf(e) >= 0)
      return o[n];
}
function im(e, t) {
  var r = e.since <= e.until ? 1 : -1;
  return t === void 0 ? v(e.since).year() : v(e.since).year() + (t - e.offset) * r;
}
function lm() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].name;
  return "";
}
function dm() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].narrow;
  return "";
}
function um() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].abbr;
  return "";
}
function cm() {
  var e, t, r, n, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (r = a[e].since <= a[e].until ? 1 : -1, n = this.clone().startOf("day").valueOf(), a[e].since <= n && n <= a[e].until || a[e].until <= n && n <= a[e].since)
      return (this.year() - v(a[e].since).year()) * r + a[e].offset;
  return this.year();
}
function fm(e) {
  return F(this, "_erasNameRegex") || oa.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function hm(e) {
  return F(this, "_erasAbbrRegex") || oa.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function mm(e) {
  return F(this, "_erasNarrowRegex") || oa.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function aa(e, t) {
  return t.erasAbbrRegex(e);
}
function gm(e, t) {
  return t.erasNameRegex(e);
}
function ym(e, t) {
  return t.erasNarrowRegex(e);
}
function pm(e, t) {
  return t._eraYearOrdinalRegex || zt;
}
function oa() {
  var e = [], t = [], r = [], n = [], a, o, s, i, l, d = this.eras();
  for (a = 0, o = d.length; a < o; ++a)
    s = Ge(d[a].name), i = Ge(d[a].abbr), l = Ge(d[a].narrow), t.push(s), e.push(i), r.push(l), n.push(s), n.push(i), n.push(l);
  this._erasRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  );
}
C(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
C(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Zr(e, t) {
  C(0, [e, e.length], 0, t);
}
Zr("gggg", "weekYear");
Zr("ggggg", "weekYear");
Zr("GGGG", "isoWeekYear");
Zr("GGGGG", "isoWeekYear");
k("G", Ur);
k("g", Ur);
k("GG", Z, ke);
k("gg", Z, ke);
k("GGGG", Bn, Un);
k("gggg", Bn, Un);
k("GGGGG", Vr, zr);
k("ggggg", Vr, zr);
fr(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, r, n) {
    t[n.substr(0, 2)] = P(e);
  }
);
fr(["gg", "GG"], function(e, t, r, n) {
  t[n] = v.parseTwoDigitYear(e);
});
function bm(e) {
  return zs.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function vm(e) {
  return zs.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function wm() {
  return Xe(this.year(), 1, 4);
}
function Sm() {
  return Xe(this.isoWeekYear(), 1, 4);
}
function km() {
  var e = this.localeData()._week;
  return Xe(this.year(), e.dow, e.doy);
}
function xm() {
  var e = this.localeData()._week;
  return Xe(this.weekYear(), e.dow, e.doy);
}
function zs(e, t, r, n, a) {
  var o;
  return e == null ? or(this, n, a).year : (o = Xe(e, n, a), t > o && (t = o), Dm.call(this, e, t, r, n, a));
}
function Dm(e, t, r, n, a) {
  var o = Ss(e, t, r, n, a), s = ar(o.year, 0, o.dayOfYear);
  return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this;
}
C("Q", 0, "Qo", "quarter");
k("Q", us);
V("Q", function(e, t) {
  t[Ue] = (P(e) - 1) * 3;
});
function _m(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
C("D", ["DD", 2], "Do", "date");
k("D", Z, Ht);
k("DD", Z, ke);
k("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
V(["D", "DD"], Pe);
V("Do", function(e, t) {
  t[Pe] = P(e.match(Z)[0]);
});
var Hs = Vt("Date", !0);
C("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
k("DDD", Hr);
k("DDDD", cs);
V(["DDD", "DDDD"], function(e, t, r) {
  r._dayOfYear = P(e);
});
function Cm(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
C("m", ["mm", 2], 0, "minute");
k("m", Z, Gn);
k("mm", Z, ke);
V(["m", "mm"], Te);
var Mm = Vt("Minutes", !1);
C("s", ["ss", 2], 0, "second");
k("s", Z, Gn);
k("ss", Z, ke);
V(["s", "ss"], Be);
var Om = Vt("Seconds", !1);
C("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
C(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
C(0, ["SSS", 3], 0, "millisecond");
C(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
C(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
C(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
C(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
C(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
C(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
k("S", Hr, us);
k("SS", Hr, ke);
k("SSS", Hr, cs);
var ot, Vs;
for (ot = "SSSS"; ot.length <= 9; ot += "S")
  k(ot, zt);
function Tm(e, t) {
  t[gt] = P(("0." + e) * 1e3);
}
for (ot = "S"; ot.length <= 9; ot += "S")
  V(ot, Tm);
Vs = Vt("Milliseconds", !1);
C("z", 0, 0, "zoneAbbr");
C("zz", 0, 0, "zoneName");
function Ym() {
  return this._isUTC ? "UTC" : "";
}
function Am() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var m = ur.prototype;
m.add = xh;
m.calendar = Yh;
m.clone = Ah;
m.diff = Wh;
m.endOf = Xh;
m.format = zh;
m.from = Hh;
m.fromNow = Vh;
m.to = Uh;
m.toNow = Bh;
m.get = Lc;
m.invalidAt = nm;
m.isAfter = Nh;
m.isBefore = Rh;
m.isBetween = Ih;
m.isSame = Ph;
m.isSameOrAfter = $h;
m.isSameOrBefore = Eh;
m.isValid = tm;
m.lang = Es;
m.locale = $s;
m.localeData = Ws;
m.max = th;
m.min = eh;
m.parsingFlags = rm;
m.set = jc;
m.startOf = Gh;
m.subtract = Dh;
m.toArray = Kh;
m.toObject = Qh;
m.toDate = qh;
m.toISOString = Lh;
m.inspect = jh;
typeof Symbol < "u" && Symbol.for != null && (m[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
m.toJSON = em;
m.toString = Fh;
m.unix = Zh;
m.valueOf = Jh;
m.creationData = am;
m.eraName = lm;
m.eraNarrow = dm;
m.eraAbbr = um;
m.eraYear = cm;
m.year = ms;
m.isLeapYear = Fc;
m.weekYear = bm;
m.isoWeekYear = vm;
m.quarter = m.quarters = _m;
m.month = vs;
m.daysInMonth = Zc;
m.week = m.weeks = af;
m.isoWeek = m.isoWeeks = of;
m.weeksInYear = km;
m.weeksInWeekYear = xm;
m.isoWeeksInYear = wm;
m.isoWeeksInISOWeekYear = Sm;
m.date = Hs;
m.day = m.days = vf;
m.weekday = wf;
m.isoWeekday = Sf;
m.dayOfYear = Cm;
m.hour = m.hours = Of;
m.minute = m.minutes = Mm;
m.second = m.seconds = Om;
m.millisecond = m.milliseconds = Vs;
m.utcOffset = uh;
m.utc = fh;
m.local = hh;
m.parseZone = mh;
m.hasAlignedHourOffset = gh;
m.isDST = yh;
m.isLocal = bh;
m.isUtcOffset = vh;
m.isUtc = Ns;
m.isUTC = Ns;
m.zoneAbbr = Ym;
m.zoneName = Am;
m.dates = _e(
  "dates accessor is deprecated. Use date instead.",
  Hs
);
m.months = _e(
  "months accessor is deprecated. Use month instead",
  vs
);
m.years = _e(
  "years accessor is deprecated. Use year instead",
  ms
);
m.zone = _e(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  ch
);
m.isDSTShifted = _e(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  ph
);
function Nm(e) {
  return J(e * 1e3);
}
function Rm() {
  return J.apply(null, arguments).parseZone();
}
function Us(e) {
  return e;
}
var L = zn.prototype;
L.calendar = pc;
L.longDateFormat = Sc;
L.invalidDate = xc;
L.ordinal = Cc;
L.preparse = Us;
L.postformat = Us;
L.relativeTime = Oc;
L.pastFuture = Tc;
L.set = gc;
L.eras = om;
L.erasParse = sm;
L.erasConvertYear = im;
L.erasAbbrRegex = hm;
L.erasNameRegex = fm;
L.erasNarrowRegex = mm;
L.months = Bc;
L.monthsShort = Gc;
L.monthsParse = Jc;
L.monthsRegex = Kc;
L.monthsShortRegex = qc;
L.week = ef;
L.firstDayOfYear = nf;
L.firstDayOfWeek = rf;
L.weekdays = mf;
L.weekdaysMin = yf;
L.weekdaysShort = gf;
L.weekdaysParse = bf;
L.weekdaysRegex = kf;
L.weekdaysShortRegex = xf;
L.weekdaysMinRegex = Df;
L.isPM = Cf;
L.meridiem = Tf;
function $r(e, t, r, n) {
  var a = Ze(), o = Ee().set(n, t);
  return a[r](o, e);
}
function Bs(e, t, r) {
  if (Je(e) && (t = e, e = void 0), e = e || "", t != null)
    return $r(e, t, r, "month");
  var n, a = [];
  for (n = 0; n < 12; n++)
    a[n] = $r(e, n, r, "month");
  return a;
}
function sa(e, t, r, n) {
  typeof e == "boolean" ? (Je(t) && (r = t, t = void 0), t = t || "") : (t = e, r = t, e = !1, Je(t) && (r = t, t = void 0), t = t || "");
  var a = Ze(), o = e ? a._week.dow : 0, s, i = [];
  if (r != null)
    return $r(t, (r + o) % 7, n, "day");
  for (s = 0; s < 7; s++)
    i[s] = $r(t, (s + o) % 7, n, "day");
  return i;
}
function Im(e, t) {
  return Bs(e, t, "months");
}
function Pm(e, t) {
  return Bs(e, t, "monthsShort");
}
function $m(e, t, r) {
  return sa(e, t, r, "weekdays");
}
function Em(e, t, r) {
  return sa(e, t, r, "weekdaysShort");
}
function Wm(e, t, r) {
  return sa(e, t, r, "weekdaysMin");
}
it("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, r = P(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + r;
  }
});
v.lang = _e(
  "moment.lang is deprecated. Use moment.locale instead.",
  it
);
v.langData = _e(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Ze
);
var ze = Math.abs;
function Fm() {
  var e = this._data;
  return this._milliseconds = ze(this._milliseconds), this._days = ze(this._days), this._months = ze(this._months), e.milliseconds = ze(e.milliseconds), e.seconds = ze(e.seconds), e.minutes = ze(e.minutes), e.hours = ze(e.hours), e.months = ze(e.months), e.years = ze(e.years), this;
}
function Gs(e, t, r, n) {
  var a = Ne(t, r);
  return e._milliseconds += n * a._milliseconds, e._days += n * a._days, e._months += n * a._months, e._bubble();
}
function Lm(e, t) {
  return Gs(this, e, t, 1);
}
function jm(e, t) {
  return Gs(this, e, t, -1);
}
function io(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function zm() {
  var e = this._milliseconds, t = this._days, r = this._months, n = this._data, a, o, s, i, l;
  return e >= 0 && t >= 0 && r >= 0 || e <= 0 && t <= 0 && r <= 0 || (e += io(Cn(r) + t) * 864e5, t = 0, r = 0), n.milliseconds = e % 1e3, a = De(e / 1e3), n.seconds = a % 60, o = De(a / 60), n.minutes = o % 60, s = De(o / 60), n.hours = s % 24, t += De(s / 24), l = De(Xs(t)), r += l, t -= io(Cn(l)), i = De(r / 12), r %= 12, n.days = t, n.months = r, n.years = i, this;
}
function Xs(e) {
  return e * 4800 / 146097;
}
function Cn(e) {
  return e * 146097 / 4800;
}
function Hm(e) {
  if (!this.isValid())
    return NaN;
  var t, r, n = this._milliseconds;
  if (e = Ce(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + n / 864e5, r = this._months + Xs(t), e) {
      case "month":
        return r;
      case "quarter":
        return r / 3;
      case "year":
        return r / 12;
    }
  else
    switch (t = this._days + Math.round(Cn(this._months)), e) {
      case "week":
        return t / 7 + n / 6048e5;
      case "day":
        return t + n / 864e5;
      case "hour":
        return t * 24 + n / 36e5;
      case "minute":
        return t * 1440 + n / 6e4;
      case "second":
        return t * 86400 + n / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + n;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function qe(e) {
  return function() {
    return this.as(e);
  };
}
var Js = qe("ms"), Vm = qe("s"), Um = qe("m"), Bm = qe("h"), Gm = qe("d"), Xm = qe("w"), Jm = qe("M"), Zm = qe("Q"), qm = qe("y"), Km = Js;
function Qm() {
  return Ne(this);
}
function eg(e) {
  return e = Ce(e), this.isValid() ? this[e + "s"]() : NaN;
}
function kt(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var tg = kt("milliseconds"), rg = kt("seconds"), ng = kt("minutes"), ag = kt("hours"), og = kt("days"), sg = kt("months"), ig = kt("years");
function lg() {
  return De(this.days() / 7);
}
var He = Math.round, Ot = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function dg(e, t, r, n, a) {
  return a.relativeTime(t || 1, !!r, e, n);
}
function ug(e, t, r, n) {
  var a = Ne(e).abs(), o = He(a.as("s")), s = He(a.as("m")), i = He(a.as("h")), l = He(a.as("d")), d = He(a.as("M")), u = He(a.as("w")), c = He(a.as("y")), h = o <= r.ss && ["s", o] || o < r.s && ["ss", o] || s <= 1 && ["m"] || s < r.m && ["mm", s] || i <= 1 && ["h"] || i < r.h && ["hh", i] || l <= 1 && ["d"] || l < r.d && ["dd", l];
  return r.w != null && (h = h || u <= 1 && ["w"] || u < r.w && ["ww", u]), h = h || d <= 1 && ["M"] || d < r.M && ["MM", d] || c <= 1 && ["y"] || ["yy", c], h[2] = t, h[3] = +e > 0, h[4] = n, dg.apply(null, h);
}
function cg(e) {
  return e === void 0 ? He : typeof e == "function" ? (He = e, !0) : !1;
}
function fg(e, t) {
  return Ot[e] === void 0 ? !1 : t === void 0 ? Ot[e] : (Ot[e] = t, e === "s" && (Ot.ss = t - 1), !0);
}
function hg(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var r = !1, n = Ot, a, o;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (r = e), typeof t == "object" && (n = Object.assign({}, Ot, t), t.s != null && t.ss == null && (n.ss = t.s - 1)), a = this.localeData(), o = ug(this, !r, n, a), r && (o = a.pastFuture(+this, o)), a.postformat(o);
}
var on = Math.abs;
function _t(e) {
  return (e > 0) - (e < 0) || +e;
}
function qr() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = on(this._milliseconds) / 1e3, t = on(this._days), r = on(this._months), n, a, o, s, i = this.asSeconds(), l, d, u, c;
  return i ? (n = De(e / 60), a = De(n / 60), e %= 60, n %= 60, o = De(r / 12), r %= 12, s = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", l = i < 0 ? "-" : "", d = _t(this._months) !== _t(i) ? "-" : "", u = _t(this._days) !== _t(i) ? "-" : "", c = _t(this._milliseconds) !== _t(i) ? "-" : "", l + "P" + (o ? d + o + "Y" : "") + (r ? d + r + "M" : "") + (t ? u + t + "D" : "") + (a || n || e ? "T" : "") + (a ? c + a + "H" : "") + (n ? c + n + "M" : "") + (e ? c + s + "S" : "")) : "P0D";
}
var E = Jr.prototype;
E.isValid = sh;
E.abs = Fm;
E.add = Lm;
E.subtract = jm;
E.as = Hm;
E.asMilliseconds = Js;
E.asSeconds = Vm;
E.asMinutes = Um;
E.asHours = Bm;
E.asDays = Gm;
E.asWeeks = Xm;
E.asMonths = Jm;
E.asQuarters = Zm;
E.asYears = qm;
E.valueOf = Km;
E._bubble = zm;
E.clone = Qm;
E.get = eg;
E.milliseconds = tg;
E.seconds = rg;
E.minutes = ng;
E.hours = ag;
E.days = og;
E.weeks = lg;
E.months = sg;
E.years = ig;
E.humanize = hg;
E.toISOString = qr;
E.toString = qr;
E.toJSON = qr;
E.locale = $s;
E.localeData = Ws;
E.toIsoString = _e(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  qr
);
E.lang = Es;
C("X", 0, 0, "unix");
C("x", 0, 0, "valueOf");
k("x", Ur);
k("X", Rc);
V("X", function(e, t, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
V("x", function(e, t, r) {
  r._d = new Date(P(e));
});
//! moment.js
v.version = "2.30.1";
hc(J);
v.fn = m;
v.min = rh;
v.max = nh;
v.now = ah;
v.utc = Ee;
v.unix = Nm;
v.months = Im;
v.isDate = dr;
v.locale = it;
v.invalid = jr;
v.duration = Ne;
v.isMoment = Ae;
v.weekdays = $m;
v.parseZone = Rm;
v.localeData = Ze;
v.isDuration = kr;
v.monthsShort = Pm;
v.weekdaysMin = Wm;
v.defineLocale = Kn;
v.updateLocale = Rf;
v.locales = If;
v.weekdaysShort = Em;
v.normalizeUnits = Ce;
v.relativeTimeRounding = cg;
v.relativeTimeThreshold = fg;
v.calendarFormat = Th;
v.prototype = m;
v.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
function lo(e, t) {
  if (e === "" || !(e instanceof Date) && typeof e != "string")
    return {
      value: {},
      label: ""
    };
  const r = e instanceof Date ? e : new Date(e), n = bn().convertDateToDateObject(r);
  return {
    value: {
      selectedDateObject: n
    },
    label: bn().formatDate(n, {
      format: t
    })
  };
}
var mg = /* @__PURE__ */ $("<span>");
const gg = {
  type: "single",
  renderInput: void 0,
  placeholder: "Select Date.....",
  formatInputLabel: "dd MM yyyy",
  inputWrapperWidth: "100%",
  inputClass: "bg-white  rounded-lg outline-none  !border-[#c4c7cc] !border-[thin]",
  inputWrapperClass: "w-auto",
  errorBorder: "!border-[thin] border-[#d32f2f] focus:border-[#d32f2f]"
}, yg = (e) => f(mi, {
  fullWidth: !0,
  variant: "outlined",
  class: "bg-white rounded-md",
  get children() {
    return f(gi, {
      get onClick() {
        return e.showDate;
      },
      get class() {
        return `${(e.disabled ?? !1) && "pointer-events-none"}`;
      },
      get children() {
        return [f(yi, {
          for: "outlined-adornment-password",
          get children() {
            return e.label;
          }
        }), f(pi, {
          placeholder: "Select Date...",
          id: "outlined-adornment-password",
          get value() {
            return e.value().label;
          },
          get endAdornment() {
            return f(bi, {
              position: "end",
              get children() {
                return f(Nd, {
                  get class() {
                    return `${e.disabled ?? !1 ? "text-[#d0d0cd]" : "text-[#026EA1]"}`;
                  }
                });
              }
            });
          },
          get error() {
            return !!e.error;
          },
          get label() {
            return e.label;
          },
          get disabled() {
            return e.disabled;
          },
          fullWidth: !0
        }), G(() => G(() => !!e.error)() && (() => {
          var t = mg();
          return O(t, () => e.error), t;
        })())];
      }
    });
  }
}), Dg = (e) => {
  const [t, r] = Lt(e, ["value", "setValue", "onChange", "inputClass", "inputWrapperClass", "formatInputLabel", "placeholder", "label", "labelStyle", "inputWrapperWidth", "type", "zIndex", "error", "disabled"]), n = R(gg, t), a = (s) => {
    if (e.type === "single") {
      const i = v(s.value.selected).format("YYYY-MM-DDTHH:mm:ss");
      e.handleChange(i);
    }
    e.type === "range" && e.handleChange({
      startDate: v(s.value.start).format("YYYY-MM-DDTHH:mm:ss"),
      endDate: s.value.end === "" ? "" : v(s.value.end).format("YYYY-MM-DDTHH:mm:ss")
    });
  };
  let o;
  return f(fc, R(r, {
    get placeholder() {
      return n.placeholder;
    },
    get type() {
      return t.type;
    },
    value: () => (e.type === "single", lo(e.value, n.formatInputLabel)),
    setValue: a,
    shouldHighlightWeekends: !0,
    weekDaysType: "single",
    get renderInput() {
      return e.renderInput !== void 0 ? e.renderInput : (s) => f(yg, R(s, {
        get error() {
          return t.error;
        },
        get label() {
          return n.label;
        },
        get disabled() {
          return t.disabled;
        }
      }));
    },
    get inputWrapperWidth() {
      return n.inputWrapperWidth;
    },
    get inputWrapperClass() {
      return n.inputWrapperClass;
    },
    get inputClass() {
      return n.inputClass;
    },
    zIndex: 9999,
    ref(s) {
      var i = o;
      typeof i == "function" ? i(s) : o = s;
    },
    shouldCloseOnSelect: !0,
    get disabledDays() {
      return G(() => !!e.disabledDays)() && [{
        start: {
          year: e.disabledDays.start.getFullYear(),
          month: e.disabledDays.start.getMonth(),
          day: e.disabledDays.start.getDate()
        },
        end: {
          year: e.disabledDays.end.getFullYear(),
          month: e.disabledDays.end.getMonth(),
          day: e.disabledDays.end.getDate() - 1
        }
      }];
    }
  }));
};
export {
  Sg as Button,
  xg as Checkbox,
  kg as Chip,
  Dg as DatePicker,
  wg as Menu
};
