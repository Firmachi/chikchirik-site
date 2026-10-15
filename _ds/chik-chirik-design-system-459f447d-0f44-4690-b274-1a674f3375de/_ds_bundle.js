/* @ds-bundle: {"format":4,"namespace":"ChikChirikDesignSystem_459f44","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"ActionRow","sourcePath":"components/cards/ActionRow.jsx"},{"name":"Card","sourcePath":"components/cards/Card.jsx"},{"name":"CategoryCard","sourcePath":"components/cards/CategoryCard.jsx"},{"name":"HeroBanner","sourcePath":"components/cards/HeroBanner.jsx"},{"name":"TileButton","sourcePath":"components/cards/TileButton.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"ListRow","sourcePath":"components/data/ListRow.jsx"},{"name":"SearchField","sourcePath":"components/forms/SearchField.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"ScreenHeader","sourcePath":"components/navigation/ScreenHeader.jsx"},{"name":"TabBar","sourcePath":"components/navigation/TabBar.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"a416030b18ac","components/cards/ActionRow.jsx":"c20580a0f602","components/cards/Card.jsx":"7266ac6618e9","components/cards/CategoryCard.jsx":"9cfdfaa64b32","components/cards/HeroBanner.jsx":"78be3e9cbd6a","components/cards/TileButton.jsx":"0d36e80650ec","components/core/Badge.jsx":"a91aa3702abf","components/core/Button.jsx":"5cc3970a588a","components/core/Chip.jsx":"38abab281fc3","components/core/IconButton.jsx":"e5e2c73f5bce","components/data/Avatar.jsx":"4c3c7aa154b5","components/data/ListRow.jsx":"737cd85cfcca","components/forms/SearchField.jsx":"676e0fa145cf","components/forms/TextField.jsx":"9cf4e09d2a6c","components/navigation/ScreenHeader.jsx":"11be79285696","components/navigation/TabBar.jsx":"b22b80d30f5c","ui_kits/mobile-app/App.jsx":"15619d6f566a","ui_kits/mobile-app/ChatThread.jsx":"cc03d2d65207","ui_kits/mobile-app/ChatsScreen.jsx":"c6c7dc12443b","ui_kits/mobile-app/CreateProjectSheet.jsx":"0d3e5aed3576","ui_kits/mobile-app/HomeScreen.jsx":"9ac7e4cc509f","ui_kits/mobile-app/JobScreen.jsx":"00fa14e08e03","ui_kits/mobile-app/ProfileScreen.jsx":"dac76e6e7b5c","ui_kits/mobile-app/Shared.jsx":"6c66494d6386","ui_kits/mobile-app/WorkScreen.jsx":"3976040457a3","ui_kits/mobile-app/data.js":"bce05ecba6e8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ChikChirikDesignSystem_459f44 = window.ChikChirikDesignSystem_459f44 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SRC = {
  "bird-blue": "assets/logo-bird.png",
  "bird-white": "assets/logo-bird-white.png",
  "wordmark-black": "assets/logo-wordmark.png",
  "wordmark-blue": "assets/logo-wordmark-blue.png",
  "wordmark-white": "assets/logo-wordmark-white.png",
  "lockup": "assets/logo-lockup.png"
};
function Logo({
  variant = "lockup",
  height = 48,
  basePath = "",
  style,
  ...rest
}) {
  const src = (basePath ? basePath.replace(/\/$/, "") + "/" : "") + (SRC[variant] || SRC.lockup);
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: "ChikChirik",
    style: {
      height,
      width: "auto",
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/cards/ActionRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ActionRow({
  title,
  subtitle,
  trailing,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-md)",
      padding: "var(--pad-card)",
      cursor: onClick ? "pointer" : "default",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-h3)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)",
      marginTop: "var(--space-1)"
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--icon-default)",
      display: "flex",
      alignItems: "center"
    }
  }, trailing));
}
Object.assign(__ds_scope, { ActionRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ActionRow.jsx", error: String((e && e.message) || e) }); }

// components/cards/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  tone = "grey",
  padding = "md",
  radius = "md",
  onClick,
  style,
  ...rest
}) {
  const bg = tone === "white" ? "var(--surface-card-alt)" : tone === "brand" ? "var(--surface-brand)" : tone === "inverse" ? "var(--surface-inverse)" : "var(--surface-card)";
  const color = tone === "brand" || tone === "inverse" ? "var(--text-inverse)" : "var(--text-primary)";
  const pad = {
    none: 0,
    sm: "var(--space-4)",
    md: "var(--pad-card)",
    lg: "var(--pad-card-lg)"
  }[padding];
  const rad = {
    sm: "var(--radius-sm)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    xl: "var(--radius-xl)"
  }[radius];
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      background: bg,
      color,
      padding: pad,
      borderRadius: rad,
      border: tone === "white" ? "1px solid var(--border-subtle)" : "none",
      cursor: onClick ? "pointer" : "default",
      transition: "background var(--dur-fast) var(--ease-standard)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Card.jsx", error: String((e && e.message) || e) }); }

// components/cards/CategoryCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CategoryCard({
  label,
  image,
  width = 160,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: {
      flex: "0 0 auto",
      width,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "var(--space-5)",
      background: "var(--surface-card)",
      border: "none",
      borderRadius: "var(--radius-md)",
      padding: "var(--pad-card)",
      cursor: "pointer",
      textAlign: "left",
      transition: "transform var(--dur-fast) var(--ease-standard)",
      ...style
    },
    onMouseDown: e => e.currentTarget.style.transform = "scale(var(--press-scale))",
    onMouseUp: e => e.currentTarget.style.transform = "none",
    onMouseLeave: e => e.currentTarget.style.transform = "none"
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 64,
      display: "flex",
      alignItems: "center"
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      height: 64,
      width: "auto",
      objectFit: "contain"
    }
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-strong)",
      color: "var(--text-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { CategoryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CategoryCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/HeroBanner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function HeroBanner({
  title,
  subtitle,
  image,
  tone = "image",
  height = 460,
  onClick,
  children,
  style,
  ...rest
}) {
  const isBrand = tone === "brand";
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      position: "relative",
      height,
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      background: isBrand ? "var(--surface-brand-deep)" : "var(--surface-card)",
      cursor: onClick ? "pointer" : "default",
      ...style
    }
  }, rest), image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), !isBrand && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-protect)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "var(--space-6)",
      right: "var(--space-6)",
      bottom: "var(--space-6)",
      color: "var(--text-inverse)"
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-h1)",
      letterSpacing: "var(--tracking-tight)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body)",
      opacity: .8,
      marginTop: "var(--space-2)"
    }
  }, subtitle), children));
}
Object.assign(__ds_scope, { HeroBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/HeroBanner.jsx", error: String((e && e.message) || e) }); }

// components/cards/TileButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TileButton({
  label,
  icon,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-4)",
      background: "var(--surface-card)",
      border: "none",
      borderRadius: "var(--radius-md)",
      padding: "var(--space-7) var(--space-5)",
      cursor: "pointer",
      font: "var(--type-body-strong)",
      color: "var(--text-primary)",
      transition: "transform var(--dur-fast) var(--ease-standard)",
      ...style
    },
    onMouseDown: e => e.currentTarget.style.transform = "scale(var(--press-scale))",
    onMouseUp: e => e.currentTarget.style.transform = "none",
    onMouseLeave: e => e.currentTarget.style.transform = "none"
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--icon-default)",
      display: "flex"
    }
  }, icon), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { TileButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TileButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: ["var(--surface-card)", "var(--text-body)"],
  brand: ["var(--surface-brand)", "var(--text-inverse)"],
  soft: ["var(--surface-brand-soft)", "var(--text-accent)"],
  success: ["rgba(18,161,80,.12)", "var(--success)"],
  warning: ["rgba(233,162,59,.16)", "#8A5A10"],
  danger: ["rgba(226,55,59,.12)", "var(--danger)"]
};
function Badge({
  children,
  tone = "neutral",
  style,
  ...rest
}) {
  const [bg, fg] = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: 22,
      padding: "0 8px",
      borderRadius: "var(--radius-xs)",
      background: bg,
      color: fg,
      font: "var(--type-label)",
      letterSpacing: "var(--tracking-wide)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    h: 36,
    px: 14,
    font: "var(--text-sm)",
    radius: "var(--radius-pill)"
  },
  md: {
    h: 44,
    px: 18,
    font: "var(--text-md)",
    radius: "var(--radius-pill)"
  },
  lg: {
    h: 52,
    px: 22,
    font: "var(--text-lg)",
    radius: "var(--radius-pill)"
  }
};
const variants = {
  primary: {
    background: "var(--surface-brand)",
    color: "var(--text-inverse)",
    border: "1px solid transparent"
  },
  secondary: {
    background: "var(--surface-card)",
    color: "var(--text-primary)",
    border: "1px solid transparent"
  },
  inverse: {
    background: "var(--ink-1000)",
    color: "var(--text-inverse)",
    border: "1px solid transparent"
  },
  outline: {
    background: "transparent",
    color: "var(--text-primary)",
    border: "1px solid var(--border-strong)"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-accent)",
    border: "1px solid transparent"
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  onClick,
  style,
  ...rest
}) {
  const s = sizes[size] || sizes.md,
    v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    style: {
      display: block ? "flex" : "inline-flex",
      width: block ? "100%" : "auto",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-3)",
      height: s.h,
      padding: `0 ${s.px}px`,
      borderRadius: s.radius,
      font: "var(--type-body-strong)",
      fontSize: s.font,
      fontFamily: "var(--font-text)",
      letterSpacing: "var(--tracking-normal)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .4 : 1,
      transition: `transform var(--dur-fast) var(--ease-standard),background var(--dur-fast) var(--ease-standard)`,
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(var(--press-scale))";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "none";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "none";
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Chip({
  children,
  selected = false,
  tone = "default",
  onClick,
  style,
  ...rest
}) {
  const skin = selected ? {
    background: "var(--surface-brand)",
    color: "var(--text-inverse)"
  } : tone === "brand" ? {
    background: "var(--surface-brand-soft)",
    color: "var(--text-accent)"
  } : tone === "inverse" ? {
    background: "rgba(0,0,0,.55)",
    color: "var(--text-inverse)",
    backdropFilter: "var(--blur-chrome)"
  } : {
    background: "var(--surface-card)",
    color: "var(--text-body)"
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      height: 34,
      padding: "0 14px",
      border: "none",
      borderRadius: "var(--radius-pill)",
      font: "var(--type-caption)",
      fontWeight: "var(--weight-semibold)",
      cursor: onClick ? "pointer" : "default",
      whiteSpace: "nowrap",
      transition: "background var(--dur-fast) var(--ease-standard)",
      ...skin,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const boxes = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  children,
  label,
  variant = "secondary",
  size = "md",
  onClick,
  style,
  ...rest
}) {
  const d = boxes[size] || boxes.md;
  const skin = variant === "primary" ? {
    background: "var(--surface-brand)",
    color: "var(--text-inverse)"
  } : variant === "ghost" ? {
    background: "transparent",
    color: "var(--icon-default)"
  } : variant === "inverse" ? {
    background: "var(--ink-1000)",
    color: "var(--text-inverse)"
  } : {
    background: "var(--surface-card)",
    color: "var(--icon-default)"
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    onClick: onClick,
    style: {
      width: d,
      height: d,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      borderRadius: "var(--radius-pill)",
      cursor: "pointer",
      transition: "transform var(--dur-fast) var(--ease-standard)",
      ...skin,
      ...style
    },
    onMouseDown: e => e.currentTarget.style.transform = "scale(var(--press-scale))",
    onMouseUp: e => e.currentTarget.style.transform = "none",
    onMouseLeave: e => e.currentTarget.style.transform = "none"
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 32,
  md: 44,
  lg: 56,
  xl: 88
};
function Avatar({
  src,
  name = "",
  size = "md",
  ring = false,
  style,
  ...rest
}) {
  const d = sizes[size] || sizes.md;
  const initials = name.trim().split(/\s+/).slice(0, 2).map(w => w[0] || "").join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      width: d,
      height: d,
      borderRadius: "var(--radius-pill)",
      overflow: "hidden",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--surface-brand-soft)",
      color: "var(--text-accent)",
      font: "var(--type-body-strong)",
      fontSize: d / 2.8,
      flex: "0 0 auto",
      boxShadow: ring ? "0 0 0 2px var(--white),0 0 0 4px var(--surface-brand)" : "none",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/ListRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ListRow({
  leading,
  title,
  subtitle,
  meta,
  trailing,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      padding: "var(--space-4) 0",
      cursor: onClick ? "pointer" : "default",
      ...style
    }
  }, rest), leading, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-strong)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, title), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      font: "var(--type-caption)",
      color: "var(--text-muted)",
      whiteSpace: "nowrap"
    }
  }, meta)), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)",
      marginTop: "var(--space-1)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, subtitle)), trailing);
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SearchField({
  value,
  onChange,
  placeholder = "Поиск исполнителей",
  leading,
  trailing,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      height: "var(--size-tap)",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-pill)",
      padding: "0 var(--space-5)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--icon-muted)",
      display: "flex"
    }
  }, leading), /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      font: "var(--type-body)",
      color: "var(--text-primary)"
    }
  }, rest)), trailing);
}
Object.assign(__ds_scope, { SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextField({
  label,
  hint,
  error,
  multiline = false,
  style,
  ...rest
}) {
  const base = {
    width: "100%",
    background: "var(--surface-card)",
    border: error ? "1px solid var(--danger)" : "1px solid transparent",
    borderRadius: "var(--radius-sm)",
    padding: "var(--space-4) var(--space-5)",
    font: "var(--type-body)",
    color: "var(--text-primary)",
    outline: "none",
    resize: "vertical"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      color: "var(--text-muted)"
    }
  }, label), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: 4,
    style: base
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    style: {
      ...base,
      height: "var(--size-tap)",
      padding: "0 var(--space-5)"
    }
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: error ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ScreenHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ScreenHeader({
  title,
  logo,
  leading,
  trailing,
  align = "center",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      minHeight: 52,
      padding: "var(--space-3) 0",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      display: "flex",
      justifyContent: "flex-start"
    }
  }, leading), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      justifyContent: align === "center" ? "center" : "flex-start"
    }
  }, logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "ChikChirik",
    style: {
      height: 22,
      width: "auto"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--tracking-tight)"
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      display: "flex",
      justifyContent: "flex-end"
    }
  }, trailing));
}
Object.assign(__ds_scope, { ScreenHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ScreenHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TabBar({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      padding: "var(--space-2)",
      background: "var(--white)",
      borderRadius: "var(--radius-pill)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-float)",
      ...style
    }
  }, rest), items.map(it => {
    const active = it.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      type: "button",
      onClick: () => onChange && onChange(it.id),
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--space-2)",
        height: 56,
        border: "none",
        borderRadius: "var(--radius-pill)",
        cursor: "pointer",
        background: active ? "var(--surface-brand-soft)" : "transparent",
        color: active ? "var(--text-accent)" : "var(--ink-1000)",
        font: "var(--type-tab)",
        transition: "background var(--dur-base) var(--ease-standard)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex"
      }
    }, it.icon), /*#__PURE__*/React.createElement("span", null, it.label));
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/App.jsx
try { (() => {
const {
  TabBar
} = window.ChikChirikDesignSystem_459f44;
function App() {
  const [tab, setTab] = React.useState("home");
  const [job, setJob] = React.useState(null);
  const [chat, setChat] = React.useState(null);
  const [applied, setApplied] = React.useState(false);
  const [sheet, setSheet] = React.useState(false);
  const [toast, setToast] = React.useState("");
  const notify = t => {
    setToast(t);
    setTimeout(() => setToast(""), 2200);
  };
  let screen;
  if (job) screen = /*#__PURE__*/React.createElement(JobScreen, {
    job: job,
    applied: applied,
    onBack: () => setJob(null),
    onApply: () => {
      setApplied(true);
      notify("Отклик отправлен");
    }
  });else if (chat) screen = /*#__PURE__*/React.createElement(ChatThread, {
    chat: chat,
    onBack: () => setChat(null)
  });else if (tab === "home") screen = /*#__PURE__*/React.createElement(HomeScreen, {
    onOpenJobs: () => setTab("work"),
    onCreate: () => setSheet(true)
  });else if (tab === "work") screen = /*#__PURE__*/React.createElement(WorkScreen, {
    onOpenJob: j => {
      setApplied(false);
      setJob(j);
    }
  });else if (tab === "chats") screen = /*#__PURE__*/React.createElement(ChatsScreen, {
    onOpen: setChat
  });else screen = /*#__PURE__*/React.createElement(ProfileScreen, null);
  const hideTabs = !!chat;
  return /*#__PURE__*/React.createElement("div", {
    className: "device"
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      position: "relative"
    }
  }, screen), !hideTabs && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      right: 16,
      bottom: 16
    }
  }, /*#__PURE__*/React.createElement(TabBar, {
    value: tab,
    onChange: t => {
      setJob(null);
      setChat(null);
      setTab(t);
    },
    items: [{
      id: "home",
      label: "Главная",
      icon: /*#__PURE__*/React.createElement(Icon, {
        n: "house",
        s: 20,
        fill: true
      })
    }, {
      id: "work",
      label: "Работа",
      icon: /*#__PURE__*/React.createElement(Icon, {
        n: "layout-list",
        s: 20
      })
    }, {
      id: "chats",
      label: "Чаты",
      icon: /*#__PURE__*/React.createElement(Icon, {
        n: "message-square",
        s: 20,
        fill: true
      })
    }, {
      id: "me",
      label: "Профиль",
      icon: /*#__PURE__*/React.createElement(Icon, {
        n: "user",
        s: 20,
        fill: true
      })
    }]
  })), sheet && /*#__PURE__*/React.createElement(CreateProjectSheet, {
    onClose: () => setSheet(false),
    onDone: () => {
      setSheet(false);
      notify("Проект опубликован");
    }
  }), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      right: 16,
      bottom: 96,
      background: "var(--ink-1000)",
      color: "var(--text-inverse)",
      borderRadius: "var(--radius-pill)",
      padding: "14px 20px",
      font: "var(--type-body-strong)",
      textAlign: "center",
      boxShadow: "var(--shadow-float)",
      zIndex: 30
    }
  }, toast));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/ChatThread.jsx
try { (() => {
const {
  Avatar,
  IconButton,
  SearchField
} = window.ChikChirikDesignSystem_459f44;
function ChatThread({
  chat,
  onBack
}) {
  const [msgs, setMsgs] = React.useState(window.CC_DATA.thread);
  const [text, setText] = React.useState("");
  const send = () => {
    if (!text.trim()) return;
    setMsgs(m => [...m, {
      me: true,
      text,
      t: "14:31"
    }]);
    setText("");
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "10px var(--gutter-screen)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "\u041D\u0430\u0437\u0430\u0434",
    variant: "ghost",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "arrow-left"
  })), /*#__PURE__*/React.createElement(Avatar, {
    name: chat.name,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-strong)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, chat.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)"
    }
  }, chat.role)), /*#__PURE__*/React.createElement(IconButton, {
    label: "\u0415\u0449\u0451",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "ellipsis"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "16px var(--gutter-screen)",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      alignSelf: m.me ? "flex-end" : "flex-start",
      maxWidth: "78%",
      background: m.me ? "var(--surface-brand)" : "var(--surface-card)",
      color: m.me ? "var(--text-inverse)" : "var(--text-primary)",
      borderRadius: m.me ? "18px 18px 6px 18px" : "18px 18px 18px 6px",
      padding: "10px 14px",
      font: "var(--type-body)"
    }
  }, m.text, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      fontSize: 11,
      opacity: .6,
      marginTop: 4,
      textAlign: "right"
    }
  }, m.t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      padding: "10px var(--gutter-screen) 20px",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "\u0412\u043B\u043E\u0436\u0435\u043D\u0438\u0435",
    variant: "secondary"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "paperclip"
  })), /*#__PURE__*/React.createElement(SearchField, {
    style: {
      flex: 1
    },
    value: text,
    onChange: e => setText(e.target.value),
    placeholder: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
    onKeyDown: e => {
      if (e.key === "Enter") send();
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
    variant: "primary",
    onClick: send
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "arrow-up"
  }))));
}
window.ChatThread = ChatThread;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/ChatThread.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/ChatsScreen.jsx
try { (() => {
const {
  ScreenHeader,
  SearchField,
  Avatar,
  ListRow,
  Badge
} = window.ChikChirikDesignSystem_459f44;
function ChatsScreen({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--gutter-screen) 120px"
    }
  }, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "\u0427\u0430\u0442\u044B",
    align: "left"
  }), /*#__PURE__*/React.createElement(SearchField, {
    leading: /*#__PURE__*/React.createElement(Icon, {
      n: "search"
    }),
    placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0447\u0430\u0442\u0430\u043C"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8
    }
  }), window.CC_DATA.chats.map(c => /*#__PURE__*/React.createElement(ListRow, {
    key: c.id,
    onClick: () => onOpen(c),
    leading: /*#__PURE__*/React.createElement(Avatar, {
      name: c.name,
      ring: !!c.unread
    }),
    title: c.name,
    subtitle: c.last,
    meta: c.time,
    trailing: c.unread ? /*#__PURE__*/React.createElement(Badge, {
      tone: "brand"
    }, c.unread) : null
  })));
}
window.ChatsScreen = ChatsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/ChatsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/CreateProjectSheet.jsx
try { (() => {
const {
  TextField,
  Button,
  Chip,
  IconButton
} = window.ChikChirikDesignSystem_459f44;
function CreateProjectSheet({
  onClose,
  onDone
}) {
  const [tags, setTags] = React.useState(["монтаж"]);
  const all = ["дизайн", "моушн", "съемка", "смм", "монтаж", "сценарий"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-scrim)",
      display: "flex",
      alignItems: "flex-end",
      zIndex: 20
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--white)",
      width: "100%",
      borderRadius: "28px 28px 0 0",
      padding: "14px var(--gutter-screen) 28px",
      boxShadow: "var(--shadow-sheet)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 4,
      background: "var(--border-strong)",
      borderRadius: 2,
      margin: "0 auto 14px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-h2)"
    }
  }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442"), /*#__PURE__*/React.createElement(IconButton, {
    label: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
    size: "sm",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "x",
    s: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430",
    placeholder: "\u041A\u043B\u0438\u043F \u0434\u043B\u044F Qyzqaras"
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "\u0417\u0430\u0434\u0430\u0447\u0430",
    multiline: true,
    placeholder: "\u041E\u043F\u0438\u0448\u0438, \u0447\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C"
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "\u0411\u044E\u0434\u0436\u0435\u0442, \u20B8",
    placeholder: "250 000"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      color: "var(--text-muted)",
      marginBottom: 8
    }
  }, "\u041A\u043E\u0433\u043E \u0438\u0449\u0435\u0448\u044C"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, all.map(t => /*#__PURE__*/React.createElement(Chip, {
    key: t,
    selected: tags.includes(t),
    onClick: () => setTags(s => s.includes(t) ? s.filter(x => x !== t) : [...s, t])
  }, t)))), /*#__PURE__*/React.createElement(Button, {
    block: true,
    size: "lg",
    onClick: onDone
  }, "\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C"))));
}
window.CreateProjectSheet = CreateProjectSheet;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/CreateProjectSheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/HomeScreen.jsx
try { (() => {
const {
  HeroBanner,
  ActionRow,
  TileButton,
  CategoryCard,
  ScreenHeader,
  Card
} = window.ChikChirikDesignSystem_459f44;
function HomeScreen({
  onOpenJobs,
  onCreate
}) {
  const cats = window.CC_DATA.categories;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--gutter-screen) 120px"
    }
  }, /*#__PURE__*/React.createElement(ScreenHeader, {
    logo: "../../assets/logo-wordmark.png"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      overflowX: "auto",
      margin: "0 calc(var(--gutter-screen) * -1)",
      padding: "0 var(--gutter-screen)",
      scrollbarWidth: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 88%"
    }
  }, /*#__PURE__*/React.createElement(HeroBanner, {
    height: 250,
    image: "../../assets/hero-qyzqaras.png",
    title: "Qyzqaras Film Festival",
    subtitle: "\u0416\u0435\u043D\u0441\u043A\u0438\u0439 \u043A\u0438\u043D\u043E\u0444\u0435\u0441\u0442\u0438\u0432\u0430\u043B\u044C"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 88%"
    }
  }, /*#__PURE__*/React.createElement(HeroBanner, {
    height: 250,
    tone: "brand"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      bottom: 0,
      font: "var(--type-h1)",
      fontSize: 38,
      lineHeight: 1,
      letterSpacing: "-0.03em"
    }
  }, "SHOW", /*#__PURE__*/React.createElement("br", null), "LAB", /*#__PURE__*/React.createElement("br", null), "2.0")))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  }), /*#__PURE__*/React.createElement(ActionRow, {
    title: "\u041F\u0440\u0438\u0433\u043B\u0430\u0441\u0438 \u0434\u0440\u0443\u0437\u0435\u0439",
    subtitle: "\u041F\u043E\u043B\u0443\u0447\u0438 1000 \u0431\u043E\u043D\u0443\u0441\u043E\u0432 \u0432 \u0441\u0432\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C",
    trailing: /*#__PURE__*/React.createElement(Icon, {
      n: "arrow-up-right",
      s: 24
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(TileButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "folder",
      s: 24,
      fill: true
    }),
    label: "\u041C\u043E\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u044B",
    onClick: onOpenJobs
  }), /*#__PURE__*/React.createElement(TileButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "square-plus",
      s: 24
    }),
    label: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442",
    onClick: onCreate
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      overflowX: "auto",
      margin: "0 calc(var(--gutter-screen) * -1)",
      padding: "0 var(--gutter-screen)",
      scrollbarWidth: "none"
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(CategoryCard, {
    key: c.id,
    width: 150,
    image: c.img,
    label: /*#__PURE__*/React.createElement(React.Fragment, null, c.label[0], /*#__PURE__*/React.createElement("br", null), c.label[1]),
    onClick: onOpenJobs
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12
    }
  }), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    action: "\u0432\u0441\u0435"
  }, "\u0411\u043B\u0438\u0446-\u043E\u043F\u0440\u043E\u0441\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-body)"
    }
  }, "\u0427\u0442\u043E \u043C\u0435\u0448\u0430\u0435\u0442 \u043A\u0440\u0435\u0430\u0442\u0438\u0432\u043D\u044B\u043C \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430\u043C \u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D\u0430 \u0431\u0440\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u0437\u0430\u043A\u0430\u0437\u043E\u0432? \u041E\u0442\u0432\u0435\u0442\u044C \u0437\u0430 40 \u0441\u0435\u043A\u0443\u043D\u0434.")));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/JobScreen.jsx
try { (() => {
const {
  Button,
  IconButton,
  Chip,
  Avatar,
  Badge,
  Card
} = window.ChikChirikDesignSystem_459f44;
function JobScreen({
  job,
  onBack,
  onApply,
  applied
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--gutter-screen) 140px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 0"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "\u041D\u0430\u0437\u0430\u0434",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "arrow-left"
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "bookmark"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-h1)",
      letterSpacing: "var(--tracking-tight)"
    }
  }, job.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)",
      marginTop: 8
    }
  }, job.role, " \xB7 ", job.city, " \xB7 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E \u0432\u0447\u0435\u0440\u0430"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 14
    }
  }, job.tags.map(t => /*#__PURE__*/React.createElement(Chip, {
    key: t
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  }), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)"
    }
  }, "\u0411\u044E\u0434\u0436\u0435\u0442"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-h2)"
    }
  }, job.budget)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--border-strong)",
      margin: "14px 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)"
    }
  }, "\u0421\u0440\u043E\u043A"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-strong)"
    }
  }, "10 \u0434\u043D\u0435\u0439"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-h3)",
      marginBottom: 8
    }
  }, "\u0417\u0430\u0434\u0430\u0447\u0430"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-body)"
    }
  }, "\u041D\u0443\u0436\u0435\u043D \u043C\u043E\u043D\u0442\u0430\u0436 \u0440\u043E\u043B\u0438\u043A\u0430 \u043D\u0430 2 \u043C\u0438\u043D\u0443\u0442\u044B: \u0441\u0431\u043E\u0440\u043A\u0430 \u043F\u043E \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044E, \u0440\u0438\u0442\u043C \u043F\u043E\u0434 \u0442\u0440\u0435\u043A, \u0446\u0432\u0435\u0442\u043E\u043A\u043E\u0440 \u0438 \u0442\u0438\u0442\u0440\u044B. \u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u2014 4 \u0441\u043C\u0435\u043D\u044B \u0441\u044A\u0451\u043C\u043A\u0438, \u0441\u043D\u044F\u0442\u043E \u043D\u0430 Sony FX3."), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Qyzqaras Film",
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-strong)"
    }
  }, "Qyzqaras Film Festival"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)"
    }
  }, "12 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \xB7 \u043D\u0430 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435 \u0441 2024")), /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "\u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    size: "lg",
    variant: applied ? "secondary" : "primary",
    onClick: onApply,
    disabled: applied
  }, applied ? "Отклик отправлен" : "Откликнуться")));
}
window.JobScreen = JobScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/JobScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/ProfileScreen.jsx
try { (() => {
const {
  ScreenHeader,
  Avatar,
  Card,
  Chip,
  Button,
  ActionRow,
  Badge
} = window.ChikChirikDesignSystem_459f44;
function ProfileScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--gutter-screen) 120px"
    }
  }, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C",
    align: "left",
    trailing: /*#__PURE__*/React.createElement(Icon, {
      n: "settings",
      s: 22
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "6px 0 18px"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "\u0427\u0438\u043D\u0433\u0438\u0437 \u0410\u043A\u0431\u0430\u0435\u0432",
    size: "xl",
    ring: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-h2)"
    }
  }, "\u0427\u0438\u043D\u0433\u0438\u0437 \u0410\u043A\u0431\u0430\u0435\u0432"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, "product design \xB7 \u0410\u043B\u043C\u0430\u0442\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "soft"
  }, "1000 \u0431\u043E\u043D\u0443\u0441\u043E\u0432")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, ["дизайн", "иллюстрации", "сценарий", "смм-контент"].map(t => /*#__PURE__*/React.createElement(Chip, {
    key: t
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 12
    }
  }, [["24", "проекта"], ["4.9", "рейтинг"], ["2 ч", "ответ"]].map(([v, l]) => /*#__PURE__*/React.createElement(Card, {
    key: l,
    padding: "sm",
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-h2)"
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)"
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12
    }
  }), /*#__PURE__*/React.createElement(ActionRow, {
    title: "\u041C\u043E\u0438 \u043E\u0442\u043A\u043B\u0438\u043A\u0438",
    subtitle: "3 \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445",
    trailing: /*#__PURE__*/React.createElement(Icon, {
      n: "chevron-right",
      s: 22
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12
    }
  }), /*#__PURE__*/React.createElement(ActionRow, {
    title: "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E",
    subtitle: "\u0414\u043E\u0431\u0430\u0432\u044C 3 \u043A\u0435\u0439\u0441\u0430 \u2014 \u0437\u0430\u043A\u0430\u0437\u044B \u043F\u0440\u0438\u0445\u043E\u0434\u044F\u0442 \u0447\u0430\u0449\u0435",
    trailing: /*#__PURE__*/React.createElement(Icon, {
      n: "chevron-right",
      s: 22
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  }), /*#__PURE__*/React.createElement(Button, {
    block: true,
    variant: "secondary"
  }, "\u0412\u044B\u0439\u0442\u0438"));
}
window.ProfileScreen = ProfileScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/ProfileScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/Shared.jsx
try { (() => {
const {
  Avatar,
  Badge
} = window.ChikChirikDesignSystem_459f44;
function Icon({
  n,
  s = 20,
  c = "currentColor",
  fill = false
}) {
  const r = React.useRef(null);
  React.useEffect(() => {
    if (!r.current) return;
    r.current.innerHTML = "";
    const el = document.createElement("i");
    el.setAttribute("data-lucide", n);
    r.current.appendChild(el);
    window.lucide && window.lucide.createIcons({
      attrs: {
        width: s,
        height: s,
        "stroke-width": 2
      }
    });
    if (fill) {
      const svg = r.current.querySelector("svg");
      if (svg) svg.style.fill = "currentColor";
    }
  }, [n, s, fill]);
  return /*#__PURE__*/React.createElement("span", {
    ref: r,
    style: {
      display: "inline-flex",
      color: c
    }
  });
}
function StatusBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 24px 2px",
      font: "var(--type-body-strong)",
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "signal",
    s: 16
  }), /*#__PURE__*/React.createElement(Icon, {
    n: "wifi",
    s: 16
  }), /*#__PURE__*/React.createElement(Icon, {
    n: "battery-full",
    s: 18
  })));
}
function SectionTitle({
  children,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      margin: "4px 0 10px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--tracking-tight)"
    }
  }, children), action && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-accent)",
      fontWeight: 600
    }
  }, action));
}
function JobCard({
  job,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onOpen,
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-md)",
      padding: "var(--pad-card)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-strong)",
      fontSize: 16,
      lineHeight: 1.25
    }
  }, job.title), job.new && /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "\u043D\u043E\u0432\u043E\u0435")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)",
      marginTop: 6
    }
  }, job.role, " \xB7 ", job.city), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, job.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      background: "var(--white)",
      borderRadius: "var(--radius-pill)",
      padding: "5px 10px",
      font: "var(--type-caption)",
      color: "var(--text-body)"
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-strong)"
    }
  }, job.budget)));
}
Object.assign(window, {
  Icon,
  StatusBar,
  SectionTitle,
  JobCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/Shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/WorkScreen.jsx
try { (() => {
const {
  ScreenHeader,
  SearchField,
  Chip,
  IconButton,
  Button
} = window.ChikChirikDesignSystem_459f44;
function WorkScreen({
  onOpenJob
}) {
  const [q, setQ] = React.useState("");
  const [filter, setFilter] = React.useState("Все");
  const filters = ["Все", "дизайн", "моушн", "съемка", "смм", "монтаж"];
  const jobs = window.CC_DATA.jobs.filter(j => (filter === "Все" || j.tags.includes(filter)) && j.title.toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--gutter-screen) 120px"
    }
  }, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "\u0420\u0430\u0431\u043E\u0442\u0430",
    align: "left",
    trailing: /*#__PURE__*/React.createElement(IconButton, {
      label: "\u0424\u0438\u043B\u044C\u0442\u0440\u044B",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "sliders-horizontal",
      s: 18
    }))
  }), /*#__PURE__*/React.createElement(SearchField, {
    value: q,
    onChange: e => setQ(e.target.value),
    leading: /*#__PURE__*/React.createElement(Icon, {
      n: "search"
    }),
    placeholder: "\u041F\u043E\u0438\u0441\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      overflowX: "auto",
      margin: "12px calc(var(--gutter-screen) * -1)",
      padding: "0 var(--gutter-screen)",
      scrollbarWidth: "none"
    }
  }, filters.map(t => /*#__PURE__*/React.createElement(Chip, {
    key: t,
    selected: t === filter,
    onClick: () => setFilter(t)
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, jobs.map(j => /*#__PURE__*/React.createElement(JobCard, {
    key: j.id,
    job: j,
    onOpen: () => onOpenJob(j)
  })), !jobs.length && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)",
      padding: "24px 0"
    }
  }, "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0448\u043B\u0438. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u0434\u0440\u0443\u0433\u043E\u0439 \u0442\u0435\u0433.")));
}
window.WorkScreen = WorkScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/WorkScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/data.js
try { (() => {
window.CC_DATA = {
  categories: [{
    id: "editor",
    label: ["Режиссер", "монтажа"],
    img: "../../assets/cat-editor.png"
  }, {
    id: "design",
    label: ["Графические", "дизайнеры"],
    img: "../../assets/cat-figma.png"
  }, {
    id: "smm",
    label: ["СММ", "специалисты"],
    img: "../../assets/cat-smm.png"
  }, {
    id: "ai",
    label: ["AI", "креаторы"],
    img: "../../assets/logo-bird.png"
  }],
  jobs: [{
    id: 1,
    title: "Монтаж ролика для показа Qyzqaras",
    role: "Режиссер монтажа",
    budget: "250 000 ₸",
    city: "Алматы",
    tags: ["монтаж", "цветокор"],
    new: true
  }, {
    id: 2,
    title: "Ключевые визуалы для ивента SHOW LAB 2.0",
    role: "Графический дизайнер",
    budget: "180 000 ₸",
    city: "Астана",
    tags: ["дизайн", "постеры"]
  }, {
    id: 3,
    title: "Съёмка бэкстейджа, 2 смены",
    role: "Фотограф",
    budget: "120 000 ₸",
    city: "Алматы",
    tags: ["фото", "съемка"]
  }, {
    id: 4,
    title: "Моушн-паки для рилсов бренда",
    role: "Motion-дизайнер",
    budget: "320 000 ₸",
    city: "удалённо",
    tags: ["моушн", "анимация"]
  }],
  chats: [{
    id: 1,
    name: "Арман Копеев",
    role: "режиссер монтажа",
    last: "Скинул черновой монтаж, глянь",
    time: "14:20",
    unread: 2
  }, {
    id: 2,
    name: "Айгерим Смагул",
    role: "графический дизайнер",
    last: "Ок, беру задачу на выходные",
    time: "вчера"
  }, {
    id: 3,
    name: "Qyzqaras Film Festival",
    role: "заказчик",
    last: "Бриф обновлён",
    time: "12 авг"
  }, {
    id: 4,
    name: "Чингиз Акбаев",
    role: "product design",
    last: "Отправил ссылку на референсы",
    time: "10 авг"
  }],
  thread: [{
    me: false,
    text: "Привет! Видел бриф по клипу — интересно, возьмусь.",
    t: "13:58"
  }, {
    me: true,
    text: "Привет! Сроки — 10 дней, бюджет 250 000 ₸. Ок?",
    t: "14:02"
  }, {
    me: false,
    text: "Ок. Скинул черновой монтаж, глянь.",
    t: "14:20"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.ActionRow = __ds_scope.ActionRow;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CategoryCard = __ds_scope.CategoryCard;

__ds_ns.HeroBanner = __ds_scope.HeroBanner;

__ds_ns.TileButton = __ds_scope.TileButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.ScreenHeader = __ds_scope.ScreenHeader;

__ds_ns.TabBar = __ds_scope.TabBar;

})();
