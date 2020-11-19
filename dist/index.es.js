import React from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".innerStyle_itwn6q9{color:#00f}.testStyle_tfzq9n9{background:red}.testStyle_tfzq9n9 .innerStyle_itwn6q9{color:red}.testStyle_tfzq9n9 ..exportedStyle_ea768di{background:#00f}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi50c3hfMTQxa3R1bC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CLFVBQVcsQ0FDL0IsbUJBQW1CLGNBQWUsQ0FBQyx1Q0FBdUMsU0FBVSxDQUFDLDJDQUEyQyxlQUFnQiIsImZpbGUiOiJCdXR0b24udHN4XzE0MWt0dWwuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVyU3R5bGVfaXR3bjZxOXtjb2xvcjpibHVlO31cbi50ZXN0U3R5bGVfdGZ6cTluOXtiYWNrZ3JvdW5kOnJlZDt9LnRlc3RTdHlsZV90ZnpxOW45IC5pbm5lclN0eWxlX2l0d242cTl7Y29sb3I6cmVkO30udGVzdFN0eWxlX3RmenE5bjkgLi5leHBvcnRlZFN0eWxlX2VhNzY4ZGl7YmFja2dyb3VuZDpibHVlO31cbiJdfQ== */";
styleInject(css_248z);

var testStyle = "testStyle_tfzq9n9";
var Button = function Button(_ref) {
  var onClick = _ref.onClick,
      disabled = _ref.disabled,
      text = _ref.text;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: testStyle,
    onClick: onClick,
    disabled: disabled
  }, text);
};

export { Button };
//# sourceMappingURL=index.es.js.map
