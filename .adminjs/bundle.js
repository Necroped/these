(function (designSystem, adminjs, React$1, reactDom) {
  'use strict';

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n.default = e;
    return Object.freeze(n);
  }

  var React__namespace = /*#__PURE__*/_interopNamespace(React$1);

  function _extends$1() {
    _extends$1 = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends$1.apply(this, arguments);
  }

  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }

  function toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }

  function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : String(i);
  }

  function _defineProperty(obj, key, value) {
    key = toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }

  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
  }

  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }

  /*

  Based off glamor's StyleSheet, thanks Sunil ❤️

  high performance StyleSheet for css-in-js systems

  - uses multiple style tags behind the scenes for millions of rules
  - uses `insertRule` for appending in production for *much* faster performance

  // usage

  import { StyleSheet } from '@emotion/sheet'

  let styleSheet = new StyleSheet({ key: '', container: document.head })

  styleSheet.insert('#box { border: 1px solid red; }')
  - appends a css rule into the stylesheet

  styleSheet.flush()
  - empties the stylesheet of all its contents

  */
  // $FlowFixMe
  function sheetForTag(tag) {
    if (tag.sheet) {
      // $FlowFixMe
      return tag.sheet;
    } // this weirdness brought to you by firefox

    /* istanbul ignore next */


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        // $FlowFixMe
        return document.styleSheets[i];
      }
    }
  }

  function createStyleElement(options) {
    var tag = document.createElement('style');
    tag.setAttribute('data-emotion', options.key);

    if (options.nonce !== undefined) {
      tag.setAttribute('nonce', options.nonce);
    }

    tag.appendChild(document.createTextNode(''));
    tag.setAttribute('data-s', '');
    return tag;
  }

  var StyleSheet = /*#__PURE__*/function () {
    // Using Node instead of HTMLElement since container may be a ShadowRoot
    function StyleSheet(options) {
      var _this = this;

      this._insertTag = function (tag) {
        var before;

        if (_this.tags.length === 0) {
          if (_this.insertionPoint) {
            before = _this.insertionPoint.nextSibling;
          } else if (_this.prepend) {
            before = _this.container.firstChild;
          } else {
            before = _this.before;
          }
        } else {
          before = _this.tags[_this.tags.length - 1].nextSibling;
        }

        _this.container.insertBefore(tag, before);

        _this.tags.push(tag);
      };

      this.isSpeedy = options.speedy === undefined ? "development" === 'production' : options.speedy;
      this.tags = [];
      this.ctr = 0;
      this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

      this.key = options.key;
      this.container = options.container;
      this.prepend = options.prepend;
      this.insertionPoint = options.insertionPoint;
      this.before = null;
    }

    var _proto = StyleSheet.prototype;

    _proto.hydrate = function hydrate(nodes) {
      nodes.forEach(this._insertTag);
    };

    _proto.insert = function insert(rule) {
      // the max length is how many rules we have per style tag, it's 65000 in speedy mode
      // it's 1 in dev because we insert source maps that map a single rule to a location
      // and you can only have one source map per style tag
      if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
        this._insertTag(createStyleElement(this));
      }

      var tag = this.tags[this.tags.length - 1];

      {
        var isImportRule = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;

        if (isImportRule && this._alreadyInsertedOrderInsensitiveRule) {
          // this would only cause problem in speedy mode
          // but we don't want enabling speedy to affect the observable behavior
          // so we report this error at all times
          console.error("You're attempting to insert the following rule:\n" + rule + '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.');
        }
        this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule;
      }

      if (this.isSpeedy) {
        var sheet = sheetForTag(tag);

        try {
          // this is the ultrafast version, works across browsers
          // the big drawback is that the css won't be editable in devtools
          sheet.insertRule(rule, sheet.cssRules.length);
        } catch (e) {
          if (!/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(rule)) {
            console.error("There was a problem inserting the following rule: \"" + rule + "\"", e);
          }
        }
      } else {
        tag.appendChild(document.createTextNode(rule));
      }

      this.ctr++;
    };

    _proto.flush = function flush() {
      // $FlowFixMe
      this.tags.forEach(function (tag) {
        return tag.parentNode && tag.parentNode.removeChild(tag);
      });
      this.tags = [];
      this.ctr = 0;

      {
        this._alreadyInsertedOrderInsensitiveRule = false;
      }
    };

    return StyleSheet;
  }();

  var MS = '-ms-';
  var MOZ = '-moz-';
  var WEBKIT = '-webkit-';

  var COMMENT = 'comm';
  var RULESET = 'rule';
  var DECLARATION = 'decl';
  var IMPORT = '@import';
  var KEYFRAMES = '@keyframes';
  var LAYER = '@layer';

  /**
   * @param {number}
   * @return {number}
   */
  var abs = Math.abs;

  /**
   * @param {number}
   * @return {string}
   */
  var from = String.fromCharCode;

  /**
   * @param {object}
   * @return {object}
   */
  var assign = Object.assign;

  /**
   * @param {string} value
   * @param {number} length
   * @return {number}
   */
  function hash (value, length) {
  	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
  }

  /**
   * @param {string} value
   * @return {string}
   */
  function trim (value) {
  	return value.trim()
  }

  /**
   * @param {string} value
   * @param {RegExp} pattern
   * @return {string?}
   */
  function match (value, pattern) {
  	return (value = pattern.exec(value)) ? value[0] : value
  }

  /**
   * @param {string} value
   * @param {(string|RegExp)} pattern
   * @param {string} replacement
   * @return {string}
   */
  function replace (value, pattern, replacement) {
  	return value.replace(pattern, replacement)
  }

  /**
   * @param {string} value
   * @param {string} search
   * @return {number}
   */
  function indexof (value, search) {
  	return value.indexOf(search)
  }

  /**
   * @param {string} value
   * @param {number} index
   * @return {number}
   */
  function charat (value, index) {
  	return value.charCodeAt(index) | 0
  }

  /**
   * @param {string} value
   * @param {number} begin
   * @param {number} end
   * @return {string}
   */
  function substr (value, begin, end) {
  	return value.slice(begin, end)
  }

  /**
   * @param {string} value
   * @return {number}
   */
  function strlen (value) {
  	return value.length
  }

  /**
   * @param {any[]} value
   * @return {number}
   */
  function sizeof (value) {
  	return value.length
  }

  /**
   * @param {any} value
   * @param {any[]} array
   * @return {any}
   */
  function append (value, array) {
  	return array.push(value), value
  }

  /**
   * @param {string[]} array
   * @param {function} callback
   * @return {string}
   */
  function combine (array, callback) {
  	return array.map(callback).join('')
  }

  var line = 1;
  var column = 1;
  var length = 0;
  var position = 0;
  var character = 0;
  var characters = '';

  /**
   * @param {string} value
   * @param {object | null} root
   * @param {object | null} parent
   * @param {string} type
   * @param {string[] | string} props
   * @param {object[] | string} children
   * @param {number} length
   */
  function node (value, root, parent, type, props, children, length) {
  	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
  }

  /**
   * @param {object} root
   * @param {object} props
   * @return {object}
   */
  function copy (root, props) {
  	return assign(node('', null, null, '', null, null, 0), root, {length: -root.length}, props)
  }

  /**
   * @return {number}
   */
  function char () {
  	return character
  }

  /**
   * @return {number}
   */
  function prev () {
  	character = position > 0 ? charat(characters, --position) : 0;

  	if (column--, character === 10)
  		column = 1, line--;

  	return character
  }

  /**
   * @return {number}
   */
  function next () {
  	character = position < length ? charat(characters, position++) : 0;

  	if (column++, character === 10)
  		column = 1, line++;

  	return character
  }

  /**
   * @return {number}
   */
  function peek () {
  	return charat(characters, position)
  }

  /**
   * @return {number}
   */
  function caret () {
  	return position
  }

  /**
   * @param {number} begin
   * @param {number} end
   * @return {string}
   */
  function slice (begin, end) {
  	return substr(characters, begin, end)
  }

  /**
   * @param {number} type
   * @return {number}
   */
  function token (type) {
  	switch (type) {
  		// \0 \t \n \r \s whitespace token
  		case 0: case 9: case 10: case 13: case 32:
  			return 5
  		// ! + , / > @ ~ isolate token
  		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
  		// ; { } breakpoint token
  		case 59: case 123: case 125:
  			return 4
  		// : accompanied token
  		case 58:
  			return 3
  		// " ' ( [ opening delimit token
  		case 34: case 39: case 40: case 91:
  			return 2
  		// ) ] closing delimit token
  		case 41: case 93:
  			return 1
  	}

  	return 0
  }

  /**
   * @param {string} value
   * @return {any[]}
   */
  function alloc (value) {
  	return line = column = 1, length = strlen(characters = value), position = 0, []
  }

  /**
   * @param {any} value
   * @return {any}
   */
  function dealloc (value) {
  	return characters = '', value
  }

  /**
   * @param {number} type
   * @return {string}
   */
  function delimit (type) {
  	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
  }

  /**
   * @param {number} type
   * @return {string}
   */
  function whitespace (type) {
  	while (character = peek())
  		if (character < 33)
  			next();
  		else
  			break

  	return token(type) > 2 || token(character) > 3 ? '' : ' '
  }

  /**
   * @param {number} index
   * @param {number} count
   * @return {string}
   */
  function escaping (index, count) {
  	while (--count && next())
  		// not 0-9 A-F a-f
  		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
  			break

  	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
  }

  /**
   * @param {number} type
   * @return {number}
   */
  function delimiter (type) {
  	while (next())
  		switch (character) {
  			// ] ) " '
  			case type:
  				return position
  			// " '
  			case 34: case 39:
  				if (type !== 34 && type !== 39)
  					delimiter(character);
  				break
  			// (
  			case 40:
  				if (type === 41)
  					delimiter(type);
  				break
  			// \
  			case 92:
  				next();
  				break
  		}

  	return position
  }

  /**
   * @param {number} type
   * @param {number} index
   * @return {number}
   */
  function commenter (type, index) {
  	while (next())
  		// //
  		if (type + character === 47 + 10)
  			break
  		// /*
  		else if (type + character === 42 + 42 && peek() === 47)
  			break

  	return '/*' + slice(index, position - 1) + '*' + from(type === 47 ? type : next())
  }

  /**
   * @param {number} index
   * @return {string}
   */
  function identifier (index) {
  	while (!token(peek()))
  		next();

  	return slice(index, position)
  }

  /**
   * @param {string} value
   * @return {object[]}
   */
  function compile (value) {
  	return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value))
  }

  /**
   * @param {string} value
   * @param {object} root
   * @param {object?} parent
   * @param {string[]} rule
   * @param {string[]} rules
   * @param {string[]} rulesets
   * @param {number[]} pseudo
   * @param {number[]} points
   * @param {string[]} declarations
   * @return {object}
   */
  function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  	var index = 0;
  	var offset = 0;
  	var length = pseudo;
  	var atrule = 0;
  	var property = 0;
  	var previous = 0;
  	var variable = 1;
  	var scanning = 1;
  	var ampersand = 1;
  	var character = 0;
  	var type = '';
  	var props = rules;
  	var children = rulesets;
  	var reference = rule;
  	var characters = type;

  	while (scanning)
  		switch (previous = character, character = next()) {
  			// (
  			case 40:
  				if (previous != 108 && charat(characters, length - 1) == 58) {
  					if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f') != -1)
  						ampersand = -1;
  					break
  				}
  			// " ' [
  			case 34: case 39: case 91:
  				characters += delimit(character);
  				break
  			// \t \n \r \s
  			case 9: case 10: case 13: case 32:
  				characters += whitespace(previous);
  				break
  			// \
  			case 92:
  				characters += escaping(caret() - 1, 7);
  				continue
  			// /
  			case 47:
  				switch (peek()) {
  					case 42: case 47:
  						append(comment(commenter(next(), caret()), root, parent), declarations);
  						break
  					default:
  						characters += '/';
  				}
  				break
  			// {
  			case 123 * variable:
  				points[index++] = strlen(characters) * ampersand;
  			// } ; \0
  			case 125 * variable: case 59: case 0:
  				switch (character) {
  					// \0 }
  					case 0: case 125: scanning = 0;
  					// ;
  					case 59 + offset: if (ampersand == -1) characters = replace(characters, /\f/g, '');
  						if (property > 0 && (strlen(characters) - length))
  							append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
  						break
  					// @ ;
  					case 59: characters += ';';
  					// { rule/at-rule
  					default:
  						append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);

  						if (character === 123)
  							if (offset === 0)
  								parse(characters, root, reference, reference, props, rulesets, length, points, children);
  							else
  								switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
  									// d l m s
  									case 100: case 108: case 109: case 115:
  										parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
  										break
  									default:
  										parse(characters, reference, reference, reference, [''], children, 0, points, children);
  								}
  				}

  				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
  				break
  			// :
  			case 58:
  				length = 1 + strlen(characters), property = previous;
  			default:
  				if (variable < 1)
  					if (character == 123)
  						--variable;
  					else if (character == 125 && variable++ == 0 && prev() == 125)
  						continue

  				switch (characters += from(character), character * variable) {
  					// &
  					case 38:
  						ampersand = offset > 0 ? 1 : (characters += '\f', -1);
  						break
  					// ,
  					case 44:
  						points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
  						break
  					// @
  					case 64:
  						// -
  						if (peek() === 45)
  							characters += delimit(next());

  						atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
  						break
  					// -
  					case 45:
  						if (previous === 45 && strlen(characters) == 2)
  							variable = 0;
  				}
  		}

  	return rulesets
  }

  /**
   * @param {string} value
   * @param {object} root
   * @param {object?} parent
   * @param {number} index
   * @param {number} offset
   * @param {string[]} rules
   * @param {number[]} points
   * @param {string} type
   * @param {string[]} props
   * @param {string[]} children
   * @param {number} length
   * @return {object}
   */
  function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
  	var post = offset - 1;
  	var rule = offset === 0 ? rules : [''];
  	var size = sizeof(rule);

  	for (var i = 0, j = 0, k = 0; i < index; ++i)
  		for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
  			if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x])))
  				props[k++] = z;

  	return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length)
  }

  /**
   * @param {number} value
   * @param {object} root
   * @param {object?} parent
   * @return {object}
   */
  function comment (value, root, parent) {
  	return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0)
  }

  /**
   * @param {string} value
   * @param {object} root
   * @param {object?} parent
   * @param {number} length
   * @return {object}
   */
  function declaration (value, root, parent, length) {
  	return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length)
  }

  /**
   * @param {object[]} children
   * @param {function} callback
   * @return {string}
   */
  function serialize (children, callback) {
  	var output = '';
  	var length = sizeof(children);

  	for (var i = 0; i < length; i++)
  		output += callback(children[i], i, children, callback) || '';

  	return output
  }

  /**
   * @param {object} element
   * @param {number} index
   * @param {object[]} children
   * @param {function} callback
   * @return {string}
   */
  function stringify (element, index, children, callback) {
  	switch (element.type) {
  		case LAYER: if (element.children.length) break
  		case IMPORT: case DECLARATION: return element.return = element.return || element.value
  		case COMMENT: return ''
  		case KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
  		case RULESET: element.value = element.props.join(',');
  	}

  	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
  }

  /**
   * @param {function[]} collection
   * @return {function}
   */
  function middleware (collection) {
  	var length = sizeof(collection);

  	return function (element, index, children, callback) {
  		var output = '';

  		for (var i = 0; i < length; i++)
  			output += collection[i](element, index, children, callback) || '';

  		return output
  	}
  }

  function memoize(fn) {
    var cache = Object.create(null);
    return function (arg) {
      if (cache[arg] === undefined) cache[arg] = fn(arg);
      return cache[arg];
    };
  }

  var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
    var previous = 0;
    var character = 0;

    while (true) {
      previous = character;
      character = peek(); // &\f

      if (previous === 38 && character === 12) {
        points[index] = 1;
      }

      if (token(character)) {
        break;
      }

      next();
    }

    return slice(begin, position);
  };

  var toRules = function toRules(parsed, points) {
    // pretend we've started with a comma
    var index = -1;
    var character = 44;

    do {
      switch (token(character)) {
        case 0:
          // &\f
          if (character === 38 && peek() === 12) {
            // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
            // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
            // and when it should just concatenate the outer and inner selectors
            // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
            points[index] = 1;
          }

          parsed[index] += identifierWithPointTracking(position - 1, points, index);
          break;

        case 2:
          parsed[index] += delimit(character);
          break;

        case 4:
          // comma
          if (character === 44) {
            // colon
            parsed[++index] = peek() === 58 ? '&\f' : '';
            points[index] = parsed[index].length;
            break;
          }

        // fallthrough

        default:
          parsed[index] += from(character);
      }
    } while (character = next());

    return parsed;
  };

  var getRules = function getRules(value, points) {
    return dealloc(toRules(alloc(value), points));
  }; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


  var fixedElements = /* #__PURE__ */new WeakMap();
  var compat = function compat(element) {
    if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
    // negative .length indicates that this rule has been already prefixed
    element.length < 1) {
      return;
    }

    var value = element.value,
        parent = element.parent;
    var isImplicitRule = element.column === parent.column && element.line === parent.line;

    while (parent.type !== 'rule') {
      parent = parent.parent;
      if (!parent) return;
    } // short-circuit for the simplest case


    if (element.props.length === 1 && value.charCodeAt(0) !== 58
    /* colon */
    && !fixedElements.get(parent)) {
      return;
    } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
    // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


    if (isImplicitRule) {
      return;
    }

    fixedElements.set(element, true);
    var points = [];
    var rules = getRules(value, points);
    var parentRules = parent.props;

    for (var i = 0, k = 0; i < rules.length; i++) {
      for (var j = 0; j < parentRules.length; j++, k++) {
        element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
      }
    }
  };
  var removeLabel = function removeLabel(element) {
    if (element.type === 'decl') {
      var value = element.value;

      if ( // charcode for l
      value.charCodeAt(0) === 108 && // charcode for b
      value.charCodeAt(2) === 98) {
        // this ignores label
        element["return"] = '';
        element.value = '';
      }
    }
  };
  var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';

  var isIgnoringComment = function isIgnoringComment(element) {
    return element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
  };

  var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
    return function (element, index, children) {
      if (element.type !== 'rule' || cache.compat) return;
      var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);

      if (unsafePseudoClasses) {
        var isNested = !!element.parent; // in nested rules comments become children of the "auto-inserted" rule and that's always the `element.parent`
        //
        // considering this input:
        // .a {
        //   .b /* comm */ {}
        //   color: hotpink;
        // }
        // we get output corresponding to this:
        // .a {
        //   & {
        //     /* comm */
        //     color: hotpink;
        //   }
        //   .b {}
        // }

        var commentContainer = isNested ? element.parent.children : // global rule at the root level
        children;

        for (var i = commentContainer.length - 1; i >= 0; i--) {
          var node = commentContainer[i];

          if (node.line < element.line) {
            break;
          } // it is quite weird but comments are *usually* put at `column: element.column - 1`
          // so we seek *from the end* for the node that is earlier than the rule's `element` and check that
          // this will also match inputs like this:
          // .a {
          //   /* comm */
          //   .b {}
          // }
          //
          // but that is fine
          //
          // it would be the easiest to change the placement of the comment to be the first child of the rule:
          // .a {
          //   .b { /* comm */ }
          // }
          // with such inputs we wouldn't have to search for the comment at all
          // TODO: consider changing this comment placement in the next major version


          if (node.column < element.column) {
            if (isIgnoringComment(node)) {
              return;
            }

            break;
          }
        }

        unsafePseudoClasses.forEach(function (unsafePseudoClass) {
          console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
        });
      }
    };
  };

  var isImportRule = function isImportRule(element) {
    return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
  };

  var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
    for (var i = index - 1; i >= 0; i--) {
      if (!isImportRule(children[i])) {
        return true;
      }
    }

    return false;
  }; // use this to remove incorrect elements from further processing
  // so they don't get handed to the `sheet` (or anything else)
  // as that could potentially lead to additional logs which in turn could be overhelming to the user


  var nullifyElement = function nullifyElement(element) {
    element.type = '';
    element.value = '';
    element["return"] = '';
    element.children = '';
    element.props = '';
  };

  var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
    if (!isImportRule(element)) {
      return;
    }

    if (element.parent) {
      console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
      nullifyElement(element);
    } else if (isPrependedWithRegularRules(index, children)) {
      console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
      nullifyElement(element);
    }
  };

  /* eslint-disable no-fallthrough */

  function prefix(value, length) {
    switch (hash(value, length)) {
      // color-adjust
      case 5103:
        return WEBKIT + 'print-' + value + value;
      // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return WEBKIT + value + value;
      // appearance, user-select, transform, hyphens, text-size-adjust

      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return WEBKIT + value + MOZ + value + MS + value + value;
      // flex, flex-direction

      case 6828:
      case 4268:
        return WEBKIT + value + MS + value + value;
      // order

      case 6165:
        return WEBKIT + value + MS + 'flex-' + value + value;
      // align-items

      case 5187:
        return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value;
      // align-self

      case 5443:
        return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/, '') + value;
      // align-content

      case 4675:
        return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/, '') + value;
      // flex-shrink

      case 5548:
        return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value;
      // flex-basis

      case 5292:
        return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value;
      // flex-grow

      case 6060:
        return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value;
      // transition

      case 4554:
        return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value;
      // cursor

      case 6187:
        return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value;
      // background, background-image

      case 5495:
      case 3959:
        return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1');
      // justify-content

      case 4968:
        return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + WEBKIT + value + value;
      // (margin|padding)-inline-(start|end)

      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value;
      // (min|max)?(width|height|inline-size|block-size)

      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        // stretch, max-content, min-content, fill-available
        if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            // -
            if (charat(value, length + 4) !== 45) break;
          // (f)ill-available, (f)it-content

          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
          // (s)tretch

          case 115:
            return ~indexof(value, 'stretch') ? prefix(replace(value, 'stretch', 'fill-available'), length) + value : value;
        }
        break;
      // position: sticky

      case 4949:
        // (s)ticky?
        if (charat(value, length + 1) !== 115) break;
      // display: (flex|inline-flex)

      case 6444:
        switch (charat(value, strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
          // stic(k)y
          case 107:
            return replace(value, ':', ':' + WEBKIT) + value;
          // (inline-)?fl(e)x

          case 101:
            return replace(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + WEBKIT + (charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value;
        }

        break;
      // writing-mode

      case 5936:
        switch (charat(value, length + 11)) {
          // vertical-l(r)
          case 114:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
          // vertical-r(l)

          case 108:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
          // horizontal(-)tb

          case 45:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
        }

        return WEBKIT + value + MS + value + value;
    }

    return value;
  }

  var prefixer = function prefixer(element, index, children, callback) {
    if (element.length > -1) if (!element["return"]) switch (element.type) {
      case DECLARATION:
        element["return"] = prefix(element.value, element.length);
        break;

      case KEYFRAMES:
        return serialize([copy(element, {
          value: replace(element.value, '@', '@' + WEBKIT)
        })], callback);

      case RULESET:
        if (element.length) return combine(element.props, function (value) {
          switch (match(value, /(::plac\w+|:read-\w+)/)) {
            // :read-(only|write)
            case ':read-only':
            case ':read-write':
              return serialize([copy(element, {
                props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]
              })], callback);
            // :placeholder

            case '::placeholder':
              return serialize([copy(element, {
                props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]
              }), copy(element, {
                props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]
              }), copy(element, {
                props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]
              })], callback);
          }

          return '';
        });
    }
  };

  var defaultStylisPlugins = [prefixer];

  var createCache = function createCache(options) {
    var key = options.key;

    if (!key) {
      throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\n" + "If multiple caches share the same key they might \"fight\" for each other's style elements.");
    }

    if (key === 'css') {
      var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
      // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
      // note this very very intentionally targets all style elements regardless of the key to ensure
      // that creating a cache works inside of render of a React component

      Array.prototype.forEach.call(ssrStyles, function (node) {
        // we want to only move elements which have a space in the data-emotion attribute value
        // because that indicates that it is an Emotion 11 server-side rendered style elements
        // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
        // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
        // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
        // will not result in the Emotion 10 styles being destroyed
        var dataEmotionAttribute = node.getAttribute('data-emotion');

        if (dataEmotionAttribute.indexOf(' ') === -1) {
          return;
        }
        document.head.appendChild(node);
        node.setAttribute('data-s', '');
      });
    }

    var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

    {
      // $FlowFixMe
      if (/[^a-z-]/.test(key)) {
        throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
      }
    }

    var inserted = {};
    var container;
    var nodesToHydrate = [];

    {
      container = options.container || document.head;
      Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
      // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
      document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
        var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

        for (var i = 1; i < attrib.length; i++) {
          inserted[attrib[i]] = true;
        }

        nodesToHydrate.push(node);
      });
    }

    var _insert;

    var omnipresentPlugins = [compat, removeLabel];

    {
      omnipresentPlugins.push(createUnsafeSelectorsAlarm({
        get compat() {
          return cache.compat;
        }

      }), incorrectImportAlarm);
    }

    {
      var currentSheet;
      var finalizingPlugins = [stringify, function (element) {
        if (!element.root) {
          if (element["return"]) {
            currentSheet.insert(element["return"]);
          } else if (element.value && element.type !== COMMENT) {
            // insert empty rule in non-production environments
            // so @emotion/jest can grab `key` from the (JS)DOM for caches without any rules inserted yet
            currentSheet.insert(element.value + "{}");
          }
        }
      } ];
      var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

      var stylis = function stylis(styles) {
        return serialize(compile(styles), serializer);
      };

      _insert = function insert(selector, serialized, sheet, shouldCache) {
        currentSheet = sheet;

        if (serialized.map !== undefined) {
          currentSheet = {
            insert: function insert(rule) {
              sheet.insert(rule + serialized.map);
            }
          };
        }

        stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

        if (shouldCache) {
          cache.inserted[serialized.name] = true;
        }
      };
    }

    var cache = {
      key: key,
      sheet: new StyleSheet({
        key: key,
        container: container,
        nonce: options.nonce,
        speedy: options.speedy,
        prepend: options.prepend,
        insertionPoint: options.insertionPoint
      }),
      nonce: options.nonce,
      inserted: inserted,
      registered: {},
      insert: _insert
    };
    cache.sheet.hydrate(nodesToHydrate);
    return cache;
  };

  var reactIs$1 = {exports: {}};

  var reactIs_development = {};

  /** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */



  {
    (function() {

  // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
  // nor polyfill, then a plain number is used for performance.
  var hasSymbol = typeof Symbol === 'function' && Symbol.for;
  var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
  var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
  var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
  var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
  var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
  var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
  var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
  // (unstable) APIs that have been removed. Can we remove the symbols?

  var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
  var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
  var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
  var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
  var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
  var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
  var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
  var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
  var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
  var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
  var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

  function isValidElementType(type) {
    return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
    type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
  }

  function typeOf(object) {
    if (typeof object === 'object' && object !== null) {
      var $$typeof = object.$$typeof;

      switch ($$typeof) {
        case REACT_ELEMENT_TYPE:
          var type = object.type;

          switch (type) {
            case REACT_ASYNC_MODE_TYPE:
            case REACT_CONCURRENT_MODE_TYPE:
            case REACT_FRAGMENT_TYPE:
            case REACT_PROFILER_TYPE:
            case REACT_STRICT_MODE_TYPE:
            case REACT_SUSPENSE_TYPE:
              return type;

            default:
              var $$typeofType = type && type.$$typeof;

              switch ($$typeofType) {
                case REACT_CONTEXT_TYPE:
                case REACT_FORWARD_REF_TYPE:
                case REACT_LAZY_TYPE:
                case REACT_MEMO_TYPE:
                case REACT_PROVIDER_TYPE:
                  return $$typeofType;

                default:
                  return $$typeof;
              }

          }

        case REACT_PORTAL_TYPE:
          return $$typeof;
      }
    }

    return undefined;
  } // AsyncMode is deprecated along with isAsyncMode

  var AsyncMode = REACT_ASYNC_MODE_TYPE;
  var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  var ContextConsumer = REACT_CONTEXT_TYPE;
  var ContextProvider = REACT_PROVIDER_TYPE;
  var Element = REACT_ELEMENT_TYPE;
  var ForwardRef = REACT_FORWARD_REF_TYPE;
  var Fragment = REACT_FRAGMENT_TYPE;
  var Lazy = REACT_LAZY_TYPE;
  var Memo = REACT_MEMO_TYPE;
  var Portal = REACT_PORTAL_TYPE;
  var Profiler = REACT_PROFILER_TYPE;
  var StrictMode = REACT_STRICT_MODE_TYPE;
  var Suspense = REACT_SUSPENSE_TYPE;
  var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

  function isAsyncMode(object) {
    {
      if (!hasWarnedAboutDeprecatedIsAsyncMode) {
        hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

        console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
      }
    }

    return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
  }
  function isConcurrentMode(object) {
    return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
  }
  function isContextConsumer(object) {
    return typeOf(object) === REACT_CONTEXT_TYPE;
  }
  function isContextProvider(object) {
    return typeOf(object) === REACT_PROVIDER_TYPE;
  }
  function isElement(object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
  function isForwardRef(object) {
    return typeOf(object) === REACT_FORWARD_REF_TYPE;
  }
  function isFragment(object) {
    return typeOf(object) === REACT_FRAGMENT_TYPE;
  }
  function isLazy(object) {
    return typeOf(object) === REACT_LAZY_TYPE;
  }
  function isMemo(object) {
    return typeOf(object) === REACT_MEMO_TYPE;
  }
  function isPortal(object) {
    return typeOf(object) === REACT_PORTAL_TYPE;
  }
  function isProfiler(object) {
    return typeOf(object) === REACT_PROFILER_TYPE;
  }
  function isStrictMode(object) {
    return typeOf(object) === REACT_STRICT_MODE_TYPE;
  }
  function isSuspense(object) {
    return typeOf(object) === REACT_SUSPENSE_TYPE;
  }

  reactIs_development.AsyncMode = AsyncMode;
  reactIs_development.ConcurrentMode = ConcurrentMode;
  reactIs_development.ContextConsumer = ContextConsumer;
  reactIs_development.ContextProvider = ContextProvider;
  reactIs_development.Element = Element;
  reactIs_development.ForwardRef = ForwardRef;
  reactIs_development.Fragment = Fragment;
  reactIs_development.Lazy = Lazy;
  reactIs_development.Memo = Memo;
  reactIs_development.Portal = Portal;
  reactIs_development.Profiler = Profiler;
  reactIs_development.StrictMode = StrictMode;
  reactIs_development.Suspense = Suspense;
  reactIs_development.isAsyncMode = isAsyncMode;
  reactIs_development.isConcurrentMode = isConcurrentMode;
  reactIs_development.isContextConsumer = isContextConsumer;
  reactIs_development.isContextProvider = isContextProvider;
  reactIs_development.isElement = isElement;
  reactIs_development.isForwardRef = isForwardRef;
  reactIs_development.isFragment = isFragment;
  reactIs_development.isLazy = isLazy;
  reactIs_development.isMemo = isMemo;
  reactIs_development.isPortal = isPortal;
  reactIs_development.isProfiler = isProfiler;
  reactIs_development.isStrictMode = isStrictMode;
  reactIs_development.isSuspense = isSuspense;
  reactIs_development.isValidElementType = isValidElementType;
  reactIs_development.typeOf = typeOf;
    })();
  }

  {
    reactIs$1.exports = reactIs_development;
  }

  var reactIsExports = reactIs$1.exports;

  var reactIs = reactIsExports;
  var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  };
  var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  };
  var TYPE_STATICS = {};
  TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
  TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

  var isBrowser$1 = "object" !== 'undefined';
  function getRegisteredStyles(registered, registeredStyles, classNames) {
    var rawClassName = '';
    classNames.split(' ').forEach(function (className) {
      if (registered[className] !== undefined) {
        registeredStyles.push(registered[className] + ";");
      } else {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }
  var registerStyles = function registerStyles(cache, serialized, isStringTag) {
    var className = cache.key + "-" + serialized.name;

    if ( // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser$1 === false ) && cache.registered[className] === undefined) {
      cache.registered[className] = serialized.styles;
    }
  };
  var insertStyles = function insertStyles(cache, serialized, isStringTag) {
    registerStyles(cache, serialized, isStringTag);
    var className = cache.key + "-" + serialized.name;

    if (cache.inserted[serialized.name] === undefined) {
      var current = serialized;

      do {
        cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

        current = current.next;
      } while (current !== undefined);
    }
  };

  /* eslint-disable */
  // Inspired by https://github.com/garycourt/murmurhash-js
  // Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
  function murmur2(str) {
    // 'm' and 'r' are mixing constants generated offline.
    // They're not really 'magic', they just happen to work well.
    // const m = 0x5bd1e995;
    // const r = 24;
    // Initialize the hash
    var h = 0; // Mix 4 bytes at a time into the hash

    var k,
        i = 0,
        len = str.length;

    for (; len >= 4; ++i, len -= 4) {
      k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
      k =
      /* Math.imul(k, m): */
      (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
      k ^=
      /* k >>> r: */
      k >>> 24;
      h =
      /* Math.imul(k, m): */
      (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Handle the last few bytes of the input array


    switch (len) {
      case 3:
        h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

      case 2:
        h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

      case 1:
        h ^= str.charCodeAt(i) & 0xff;
        h =
        /* Math.imul(h, m): */
        (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Do a few final mixes of the hash to ensure the last few
    // bytes are well-incorporated.


    h ^= h >>> 13;
    h =
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
  }

  var unitlessKeys = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };

  var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
  var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
  var hyphenateRegex = /[A-Z]|^ms/g;
  var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

  var isCustomProperty = function isCustomProperty(property) {
    return property.charCodeAt(1) === 45;
  };

  var isProcessableValue = function isProcessableValue(value) {
    return value != null && typeof value !== 'boolean';
  };

  var processStyleName = /* #__PURE__ */memoize(function (styleName) {
    return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
  });

  var processStyleValue = function processStyleValue(key, value) {
    switch (key) {
      case 'animation':
      case 'animationName':
        {
          if (typeof value === 'string') {
            return value.replace(animationRegex, function (match, p1, p2) {
              cursor = {
                name: p1,
                styles: p2,
                next: cursor
              };
              return p1;
            });
          }
        }
    }

    if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
      return value + 'px';
    }

    return value;
  };

  {
    var contentValuePattern = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
    var contentValues = ['normal', 'none', 'initial', 'inherit', 'unset'];
    var oldProcessStyleValue = processStyleValue;
    var msPattern = /^-ms-/;
    var hyphenPattern = /-(.)/g;
    var hyphenatedCache = {};

    processStyleValue = function processStyleValue(key, value) {
      if (key === 'content') {
        if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
          throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
        }
      }

      var processed = oldProcessStyleValue(key, value);

      if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
        hyphenatedCache[key] = true;
        console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
          return _char.toUpperCase();
        }) + "?");
      }

      return processed;
    };
  }

  var noComponentSelectorMessage = 'Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.';

  function handleInterpolation(mergedProps, registered, interpolation) {
    if (interpolation == null) {
      return '';
    }

    if (interpolation.__emotion_styles !== undefined) {
      if (interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
        throw new Error(noComponentSelectorMessage);
      }

      return interpolation;
    }

    switch (typeof interpolation) {
      case 'boolean':
        {
          return '';
        }

      case 'object':
        {
          if (interpolation.anim === 1) {
            cursor = {
              name: interpolation.name,
              styles: interpolation.styles,
              next: cursor
            };
            return interpolation.name;
          }

          if (interpolation.styles !== undefined) {
            var next = interpolation.next;

            if (next !== undefined) {
              // not the most efficient thing ever but this is a pretty rare case
              // and there will be very few iterations of this generally
              while (next !== undefined) {
                cursor = {
                  name: next.name,
                  styles: next.styles,
                  next: cursor
                };
                next = next.next;
              }
            }

            var styles = interpolation.styles + ";";

            if (interpolation.map !== undefined) {
              styles += interpolation.map;
            }

            return styles;
          }

          return createStringFromObject(mergedProps, registered, interpolation);
        }

      case 'function':
        {
          if (mergedProps !== undefined) {
            var previousCursor = cursor;
            var result = interpolation(mergedProps);
            cursor = previousCursor;
            return handleInterpolation(mergedProps, registered, result);
          } else {
            console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
          }

          break;
        }

      case 'string':
        {
          var matched = [];
          var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
            var fakeVarName = "animation" + matched.length;
            matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
            return "${" + fakeVarName + "}";
          });

          if (matched.length) {
            console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
          }
        }

        break;
    } // finalize string values (regular strings and functions interpolated into css calls)


    if (registered == null) {
      return interpolation;
    }

    var cached = registered[interpolation];
    return cached !== undefined ? cached : interpolation;
  }

  function createStringFromObject(mergedProps, registered, obj) {
    var string = '';

    if (Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
      }
    } else {
      for (var _key in obj) {
        var value = obj[_key];

        if (typeof value !== 'object') {
          if (registered != null && registered[value] !== undefined) {
            string += _key + "{" + registered[value] + "}";
          } else if (isProcessableValue(value)) {
            string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
          }
        } else {
          if (_key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
            throw new Error(noComponentSelectorMessage);
          }

          if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
            for (var _i = 0; _i < value.length; _i++) {
              if (isProcessableValue(value[_i])) {
                string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
              }
            }
          } else {
            var interpolated = handleInterpolation(mergedProps, registered, value);

            switch (_key) {
              case 'animation':
              case 'animationName':
                {
                  string += processStyleName(_key) + ":" + interpolated + ";";
                  break;
                }

              default:
                {
                  if (_key === 'undefined') {
                    console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                  }

                  string += _key + "{" + interpolated + "}";
                }
            }
          }
        }
      }
    }

    return string;
  }

  var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
  var sourceMapPattern;

  {
    sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
  } // this is the cursor for keyframes
  // keyframes are stored on the SerializedStyles object as a linked list


  var cursor;
  var serializeStyles = function serializeStyles(args, registered, mergedProps) {
    if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
      return args[0];
    }

    var stringMode = true;
    var styles = '';
    cursor = undefined;
    var strings = args[0];

    if (strings == null || strings.raw === undefined) {
      stringMode = false;
      styles += handleInterpolation(mergedProps, registered, strings);
    } else {
      if (strings[0] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[0];
    } // we start at 1 since we've already handled the first arg


    for (var i = 1; i < args.length; i++) {
      styles += handleInterpolation(mergedProps, registered, args[i]);

      if (stringMode) {
        if (strings[i] === undefined) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        }

        styles += strings[i];
      }
    }

    var sourceMap;

    {
      styles = styles.replace(sourceMapPattern, function (match) {
        sourceMap = match;
        return '';
      });
    } // using a global regex with .exec is stateful so lastIndex has to be reset each time


    labelPattern.lastIndex = 0;
    var identifierName = '';
    var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

    while ((match = labelPattern.exec(styles)) !== null) {
      identifierName += '-' + // $FlowFixMe we know it's not null
      match[1];
    }

    var name = murmur2(styles) + identifierName;

    {
      // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
      return {
        name: name,
        styles: styles,
        map: sourceMap,
        next: cursor,
        toString: function toString() {
          return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
        }
      };
    }
  };

  var syncFallback = function syncFallback(create) {
    return create();
  };

  var useInsertionEffect = React__namespace['useInsertion' + 'Effect'] ? React__namespace['useInsertion' + 'Effect'] : false;
  var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect || syncFallback;
  var useInsertionEffectWithLayoutFallback = useInsertionEffect || React__namespace.useLayoutEffect;

  var hasOwn = {}.hasOwnProperty;

  var EmotionCacheContext = /* #__PURE__ */React__namespace.createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
    key: 'css'
  }) : null);

  {
    EmotionCacheContext.displayName = 'EmotionCacheContext';
  }

  EmotionCacheContext.Provider;

  var withEmotionCache = function withEmotionCache(func) {
    // $FlowFixMe
    return /*#__PURE__*/React$1.forwardRef(function (props, ref) {
      // the cache will never be null in the browser
      var cache = React$1.useContext(EmotionCacheContext);
      return func(props, cache, ref);
    });
  };

  var ThemeContext = /* #__PURE__ */React__namespace.createContext({});

  {
    ThemeContext.displayName = 'EmotionThemeContext';
  }

  var getLastPart = function getLastPart(functionName) {
    // The match may be something like 'Object.createEmotionProps' or
    // 'Loader.prototype.render'
    var parts = functionName.split('.');
    return parts[parts.length - 1];
  };

  var getFunctionNameFromStackTraceLine = function getFunctionNameFromStackTraceLine(line) {
    // V8
    var match = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(line);
    if (match) return getLastPart(match[1]); // Safari / Firefox

    match = /^([A-Za-z0-9$.]+)@/.exec(line);
    if (match) return getLastPart(match[1]);
    return undefined;
  };

  var internalReactFunctionNames = /* #__PURE__ */new Set(['renderWithHooks', 'processChild', 'finishClassComponent', 'renderToString']); // These identifiers come from error stacks, so they have to be valid JS
  // identifiers, thus we only need to replace what is a valid character for JS,
  // but not for CSS.

  var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
    return identifier.replace(/\$/g, '-');
  };

  var getLabelFromStackTrace = function getLabelFromStackTrace(stackTrace) {
    if (!stackTrace) return undefined;
    var lines = stackTrace.split('\n');

    for (var i = 0; i < lines.length; i++) {
      var functionName = getFunctionNameFromStackTraceLine(lines[i]); // The first line of V8 stack traces is just "Error"

      if (!functionName) continue; // If we reach one of these, we have gone too far and should quit

      if (internalReactFunctionNames.has(functionName)) break; // The component name is the first function in the stack that starts with an
      // uppercase letter

      if (/^[A-Z]/.test(functionName)) return sanitizeIdentifier(functionName);
    }

    return undefined;
  };

  var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
  var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
  var createEmotionProps = function createEmotionProps(type, props) {
    if (typeof props.css === 'string' && // check if there is a css declaration
    props.css.indexOf(':') !== -1) {
      throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + props.css + "`");
    }

    var newProps = {};

    for (var key in props) {
      if (hasOwn.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps[typePropName] = type; // For performance, only call getLabelFromStackTrace in development and when
    // the label hasn't already been computed

    if (!!props.css && (typeof props.css !== 'object' || typeof props.css.name !== 'string' || props.css.name.indexOf('-') === -1)) {
      var label = getLabelFromStackTrace(new Error().stack);
      if (label) newProps[labelPropName] = label;
    }

    return newProps;
  };

  var Insertion$1 = function Insertion(_ref) {
    var cache = _ref.cache,
        serialized = _ref.serialized,
        isStringTag = _ref.isStringTag;
    registerStyles(cache, serialized, isStringTag);
    useInsertionEffectAlwaysWithSyncFallback(function () {
      return insertStyles(cache, serialized, isStringTag);
    });

    return null;
  };

  var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
    var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
    // not passing the registered cache to serializeStyles because it would
    // make certain babel optimisations not possible

    if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
      cssProp = cache.registered[cssProp];
    }

    var WrappedComponent = props[typePropName];
    var registeredStyles = [cssProp];
    var className = '';

    if (typeof props.className === 'string') {
      className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
    } else if (props.className != null) {
      className = props.className + " ";
    }

    var serialized = serializeStyles(registeredStyles, undefined, React__namespace.useContext(ThemeContext));

    if (serialized.name.indexOf('-') === -1) {
      var labelFromStack = props[labelPropName];

      if (labelFromStack) {
        serialized = serializeStyles([serialized, 'label:' + labelFromStack + ';']);
      }
    }

    className += cache.key + "-" + serialized.name;
    var newProps = {};

    for (var key in props) {
      if (hasOwn.call(props, key) && key !== 'css' && key !== typePropName && (key !== labelPropName)) {
        newProps[key] = props[key];
      }
    }

    newProps.ref = ref;
    newProps.className = className;
    return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement(Insertion$1, {
      cache: cache,
      serialized: serialized,
      isStringTag: typeof WrappedComponent === 'string'
    }), /*#__PURE__*/React__namespace.createElement(WrappedComponent, newProps));
  });

  {
    Emotion.displayName = 'EmotionCssPropInternal';
  }

  var Emotion$1 = Emotion;

  var pkg = {
  	name: "@emotion/react",
  	version: "11.11.4",
  	main: "dist/emotion-react.cjs.js",
  	module: "dist/emotion-react.esm.js",
  	browser: {
  		"./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  	},
  	exports: {
  		".": {
  			module: {
  				worker: "./dist/emotion-react.worker.esm.js",
  				browser: "./dist/emotion-react.browser.esm.js",
  				"default": "./dist/emotion-react.esm.js"
  			},
  			"import": "./dist/emotion-react.cjs.mjs",
  			"default": "./dist/emotion-react.cjs.js"
  		},
  		"./jsx-runtime": {
  			module: {
  				worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
  				browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
  				"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
  			},
  			"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
  			"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
  		},
  		"./_isolated-hnrs": {
  			module: {
  				worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
  				browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
  				"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
  			},
  			"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
  			"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
  		},
  		"./jsx-dev-runtime": {
  			module: {
  				worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
  				browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
  				"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
  			},
  			"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
  			"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
  		},
  		"./package.json": "./package.json",
  		"./types/css-prop": "./types/css-prop.d.ts",
  		"./macro": {
  			types: {
  				"import": "./macro.d.mts",
  				"default": "./macro.d.ts"
  			},
  			"default": "./macro.js"
  		}
  	},
  	types: "types/index.d.ts",
  	files: [
  		"src",
  		"dist",
  		"jsx-runtime",
  		"jsx-dev-runtime",
  		"_isolated-hnrs",
  		"types/*.d.ts",
  		"macro.*"
  	],
  	sideEffects: false,
  	author: "Emotion Contributors",
  	license: "MIT",
  	scripts: {
  		"test:typescript": "dtslint types"
  	},
  	dependencies: {
  		"@babel/runtime": "^7.18.3",
  		"@emotion/babel-plugin": "^11.11.0",
  		"@emotion/cache": "^11.11.0",
  		"@emotion/serialize": "^1.1.3",
  		"@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
  		"@emotion/utils": "^1.2.1",
  		"@emotion/weak-memoize": "^0.3.1",
  		"hoist-non-react-statics": "^3.3.1"
  	},
  	peerDependencies: {
  		react: ">=16.8.0"
  	},
  	peerDependenciesMeta: {
  		"@types/react": {
  			optional: true
  		}
  	},
  	devDependencies: {
  		"@definitelytyped/dtslint": "0.0.112",
  		"@emotion/css": "11.11.2",
  		"@emotion/css-prettifier": "1.1.3",
  		"@emotion/server": "11.11.0",
  		"@emotion/styled": "11.11.0",
  		"html-tag-names": "^1.1.2",
  		react: "16.14.0",
  		"svg-tag-names": "^1.1.1",
  		typescript: "^4.5.5"
  	},
  	repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  	publishConfig: {
  		access: "public"
  	},
  	"umd:main": "dist/emotion-react.umd.min.js",
  	preconstruct: {
  		entrypoints: [
  			"./index.js",
  			"./jsx-runtime.js",
  			"./jsx-dev-runtime.js",
  			"./_isolated-hnrs.js"
  		],
  		umdName: "emotionReact",
  		exports: {
  			envConditions: [
  				"browser",
  				"worker"
  			],
  			extra: {
  				"./types/css-prop": "./types/css-prop.d.ts",
  				"./macro": {
  					types: {
  						"import": "./macro.d.mts",
  						"default": "./macro.d.ts"
  					},
  					"default": "./macro.js"
  				}
  			}
  		}
  	}
  };

  var jsx = function jsx(type, props) {
    var args = arguments;

    if (props == null || !hasOwn.call(props, 'css')) {
      // $FlowFixMe
      return React__namespace.createElement.apply(undefined, args);
    }

    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = Emotion$1;
    createElementArgArray[1] = createEmotionProps(type, props);

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    } // $FlowFixMe


    return React__namespace.createElement.apply(null, createElementArgArray);
  };

  var warnedAboutCssPropForGlobal = false; // maintain place over rerenders.
  // initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
  // initial client-side render from SSR, use place of hydrating tag

  var Global = /* #__PURE__ */withEmotionCache(function (props, cache) {
    if (!warnedAboutCssPropForGlobal && ( // check for className as well since the user is
    // probably using the custom createElement which
    // means it will be turned into a className prop
    // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
    props.className || props.css)) {
      console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
      warnedAboutCssPropForGlobal = true;
    }

    var styles = props.styles;
    var serialized = serializeStyles([styles], undefined, React__namespace.useContext(ThemeContext));
    // but it is based on a constant that will never change at runtime
    // it's effectively like having two implementations and switching them out
    // so it's not actually breaking anything


    var sheetRef = React__namespace.useRef();
    useInsertionEffectWithLayoutFallback(function () {
      var key = cache.key + "-global"; // use case of https://github.com/emotion-js/emotion/issues/2675

      var sheet = new cache.sheet.constructor({
        key: key,
        nonce: cache.sheet.nonce,
        container: cache.sheet.container,
        speedy: cache.sheet.isSpeedy
      });
      var rehydrating = false; // $FlowFixMe

      var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");

      if (cache.sheet.tags.length) {
        sheet.before = cache.sheet.tags[0];
      }

      if (node !== null) {
        rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

        node.setAttribute('data-emotion', key);
        sheet.hydrate([node]);
      }

      sheetRef.current = [sheet, rehydrating];
      return function () {
        sheet.flush();
      };
    }, [cache]);
    useInsertionEffectWithLayoutFallback(function () {
      var sheetRefCurrent = sheetRef.current;
      var sheet = sheetRefCurrent[0],
          rehydrating = sheetRefCurrent[1];

      if (rehydrating) {
        sheetRefCurrent[1] = false;
        return;
      }

      if (serialized.next !== undefined) {
        // insert keyframes
        insertStyles(cache, serialized.next, true);
      }

      if (sheet.tags.length) {
        // if this doesn't exist then it will be null so the style element will be appended
        var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
        sheet.before = element;
        sheet.flush();
      }

      cache.insert("", serialized, sheet, false);
    }, [cache, serialized.name]);
    return null;
  });

  {
    Global.displayName = 'EmotionGlobal';
  }

  function css() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return serializeStyles(args);
  }

  var keyframes = function keyframes() {
    var insertable = css.apply(void 0, arguments);
    var name = "animation-" + insertable.name; // $FlowFixMe

    return {
      name: name,
      styles: "@keyframes " + name + "{" + insertable.styles + "}",
      anim: 1,
      toString: function toString() {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      }
    };
  };

  var classnames = function classnames(args) {
    var len = args.length;
    var i = 0;
    var cls = '';

    for (; i < len; i++) {
      var arg = args[i];
      if (arg == null) continue;
      var toAdd = void 0;

      switch (typeof arg) {
        case 'boolean':
          break;

        case 'object':
          {
            if (Array.isArray(arg)) {
              toAdd = classnames(arg);
            } else {
              if (arg.styles !== undefined && arg.name !== undefined) {
                console.error('You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n' + '`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.');
              }

              toAdd = '';

              for (var k in arg) {
                if (arg[k] && k) {
                  toAdd && (toAdd += ' ');
                  toAdd += k;
                }
              }
            }

            break;
          }

        default:
          {
            toAdd = arg;
          }
      }

      if (toAdd) {
        cls && (cls += ' ');
        cls += toAdd;
      }
    }

    return cls;
  };

  function merge(registered, css, className) {
    var registeredStyles = [];
    var rawClassName = getRegisteredStyles(registered, registeredStyles, className);

    if (registeredStyles.length < 2) {
      return className;
    }

    return rawClassName + css(registeredStyles);
  }

  var Insertion = function Insertion(_ref) {
    var cache = _ref.cache,
        serializedArr = _ref.serializedArr;
    useInsertionEffectAlwaysWithSyncFallback(function () {

      for (var i = 0; i < serializedArr.length; i++) {
        insertStyles(cache, serializedArr[i], false);
      }
    });

    return null;
  };

  var ClassNames = /* #__PURE__ */withEmotionCache(function (props, cache) {
    var hasRendered = false;
    var serializedArr = [];

    var css = function css() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('css can only be used during render');
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = serializeStyles(args, cache.registered);
      serializedArr.push(serialized); // registration has to happen here as the result of this might get consumed by `cx`

      registerStyles(cache, serialized, false);
      return cache.key + "-" + serialized.name;
    };

    var cx = function cx() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('cx can only be used during render');
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return merge(cache.registered, css, classnames(args));
    };

    var content = {
      css: css,
      cx: cx,
      theme: React__namespace.useContext(ThemeContext)
    };
    var ele = props.children(content);
    hasRendered = true;
    return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement(Insertion, {
      cache: cache,
      serializedArr: serializedArr
    }), ele);
  });

  {
    ClassNames.displayName = 'EmotionClassNames';
  }

  {
    var isBrowser = "object" !== 'undefined'; // #1727, #2905 for some reason Jest and Vitest evaluate modules twice if some consuming module gets mocked

    var isTestEnv = typeof jest !== 'undefined' || typeof vi !== 'undefined';

    if (isBrowser && !isTestEnv) {
      // globalThis has wide browser support - https://caniuse.com/?search=globalThis, Node.js 12 and later
      var globalContext = // $FlowIgnore
      typeof globalThis !== 'undefined' ? globalThis // eslint-disable-line no-undef
      : isBrowser ? window : global;
      var globalKey = "__EMOTION_REACT_" + pkg.version.split('.')[0] + "__";

      if (globalContext[globalKey]) {
        console.warn('You are loading @emotion/react when it is already loaded. Running ' + 'multiple instances may cause problems. This can happen if multiple ' + 'versions are used, or if multiple builds of the same version are ' + 'used.');
      }

      globalContext[globalKey] = true;
    }
  }

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  /**
   * Custom positioning reference element.
   * @see https://floating-ui.com/docs/virtual-elements
   */

  const min = Math.min;
  const max = Math.max;
  const round = Math.round;
  const floor = Math.floor;
  const createCoords = v => ({
    x: v,
    y: v
  });
  function rectToClientRect(rect) {
    return {
      ...rect,
      top: rect.y,
      left: rect.x,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    };
  }

  function getNodeName(node) {
    if (isNode(node)) {
      return (node.nodeName || '').toLowerCase();
    }
    // Mocked nodes in testing environments may not be instances of Node. By
    // returning `#document` an infinite loop won't occur.
    // https://github.com/floating-ui/floating-ui/issues/2317
    return '#document';
  }
  function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
  }
  function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
  }
  function isNode(value) {
    return value instanceof Node || value instanceof getWindow(value).Node;
  }
  function isElement(value) {
    return value instanceof Element || value instanceof getWindow(value).Element;
  }
  function isHTMLElement(value) {
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
  }
  function isShadowRoot(value) {
    // Browsers without `ShadowRoot` support.
    if (typeof ShadowRoot === 'undefined') {
      return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
  }
  function isOverflowElement(element) {
    const {
      overflow,
      overflowX,
      overflowY,
      display
    } = getComputedStyle(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
  }
  function isWebKit() {
    if (typeof CSS === 'undefined' || !CSS.supports) return false;
    return CSS.supports('-webkit-backdrop-filter', 'none');
  }
  function isLastTraversableNode(node) {
    return ['html', 'body', '#document'].includes(getNodeName(node));
  }
  function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function getParentNode(node) {
    if (getNodeName(node) === 'html') {
      return node;
    }
    const result =
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot ||
    // DOM Element detected.
    node.parentNode ||
    // ShadowRoot detected.
    isShadowRoot(node) && node.host ||
    // Fallback.
    getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
  }
  function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
      return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
      return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
  }
  function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
      list = [];
    }
    if (traverseIframes === void 0) {
      traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
      return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }

  function getCssDimensions(element) {
    const css = getComputedStyle(element);
    // In testing environments, the `width` and `height` properties are empty
    // strings for SVG elements, returning NaN. Fallback to `0` in this case.
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = isHTMLElement(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
      width = offsetWidth;
      height = offsetHeight;
    }
    return {
      width,
      height,
      $: shouldFallback
    };
  }
  function unwrapElement(element) {
    return !isElement(element) ? element.contextElement : element;
  }
  function getScale(element) {
    const domElement = unwrapElement(element);
    if (!isHTMLElement(domElement)) {
      return createCoords(1);
    }
    const rect = domElement.getBoundingClientRect();
    const {
      width,
      height,
      $
    } = getCssDimensions(domElement);
    let x = ($ ? round(rect.width) : rect.width) / width;
    let y = ($ ? round(rect.height) : rect.height) / height;

    // 0, NaN, or Infinity should always fallback to 1.

    if (!x || !Number.isFinite(x)) {
      x = 1;
    }
    if (!y || !Number.isFinite(y)) {
      y = 1;
    }
    return {
      x,
      y
    };
  }
  const noOffsets = /*#__PURE__*/createCoords(0);
  function getVisualOffsets(element) {
    const win = getWindow(element);
    if (!isWebKit() || !win.visualViewport) {
      return noOffsets;
    }
    return {
      x: win.visualViewport.offsetLeft,
      y: win.visualViewport.offsetTop
    };
  }
  function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
      return false;
    }
    return isFixed;
  }
  function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = createCoords(1);
    if (includeScale) {
      if (offsetParent) {
        if (isElement(offsetParent)) {
          scale = getScale(offsetParent);
        }
      } else {
        scale = getScale(element);
      }
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
    let x = (clientRect.left + visualOffsets.x) / scale.x;
    let y = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
      const win = getWindow(domElement);
      const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
      let currentWin = win;
      let currentIFrame = currentWin.frameElement;
      while (currentIFrame && offsetParent && offsetWin !== currentWin) {
        const iframeScale = getScale(currentIFrame);
        const iframeRect = currentIFrame.getBoundingClientRect();
        const css = getComputedStyle(currentIFrame);
        const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
        const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
        x *= iframeScale.x;
        y *= iframeScale.y;
        width *= iframeScale.x;
        height *= iframeScale.y;
        x += left;
        y += top;
        currentWin = getWindow(currentIFrame);
        currentIFrame = currentWin.frameElement;
      }
    }
    return rectToClientRect({
      width,
      height,
      x,
      y
    });
  }

  // https://samthor.au/2021/observing-dom/
  function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = getDocumentElement(element);
    function cleanup() {
      var _io;
      clearTimeout(timeoutId);
      (_io = io) == null || _io.disconnect();
      io = null;
    }
    function refresh(skip, threshold) {
      if (skip === void 0) {
        skip = false;
      }
      if (threshold === void 0) {
        threshold = 1;
      }
      cleanup();
      const {
        left,
        top,
        width,
        height
      } = element.getBoundingClientRect();
      if (!skip) {
        onMove();
      }
      if (!width || !height) {
        return;
      }
      const insetTop = floor(top);
      const insetRight = floor(root.clientWidth - (left + width));
      const insetBottom = floor(root.clientHeight - (top + height));
      const insetLeft = floor(left);
      const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
      const options = {
        rootMargin,
        threshold: max(0, min(1, threshold)) || 1
      };
      let isFirstUpdate = true;
      function handleObserve(entries) {
        const ratio = entries[0].intersectionRatio;
        if (ratio !== threshold) {
          if (!isFirstUpdate) {
            return refresh();
          }
          if (!ratio) {
            timeoutId = setTimeout(() => {
              refresh(false, 1e-7);
            }, 100);
          } else {
            refresh(false, ratio);
          }
        }
        isFirstUpdate = false;
      }

      // Older browsers don't support a `document` as the root and will throw an
      // error.
      try {
        io = new IntersectionObserver(handleObserve, {
          ...options,
          // Handle <iframe>s
          root: root.ownerDocument
        });
      } catch (e) {
        io = new IntersectionObserver(handleObserve, options);
      }
      io.observe(element);
    }
    refresh(true);
    return cleanup;
  }

  /**
   * Automatically updates the position of the floating element when necessary.
   * Should only be called when the floating element is mounted on the DOM or
   * visible on the screen.
   * @returns cleanup function that should be invoked when the floating element is
   * removed from the DOM or hidden from the screen.
   * @see https://floating-ui.com/docs/autoUpdate
   */
  function autoUpdate(reference, floating, update, options) {
    if (options === void 0) {
      options = {};
    }
    const {
      ancestorScroll = true,
      ancestorResize = true,
      elementResize = typeof ResizeObserver === 'function',
      layoutShift = typeof IntersectionObserver === 'function',
      animationFrame = false
    } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.addEventListener('scroll', update, {
        passive: true
      });
      ancestorResize && ancestor.addEventListener('resize', update);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
      resizeObserver = new ResizeObserver(_ref => {
        let [firstEntry] = _ref;
        if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
          // Prevent update loops when using the `size` middleware.
          // https://github.com/floating-ui/floating-ui/issues/1740
          resizeObserver.unobserve(floating);
          cancelAnimationFrame(reobserveFrame);
          reobserveFrame = requestAnimationFrame(() => {
            var _resizeObserver;
            (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
          });
        }
        update();
      });
      if (referenceEl && !animationFrame) {
        resizeObserver.observe(referenceEl);
      }
      resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
      frameLoop();
    }
    function frameLoop() {
      const nextRefRect = getBoundingClientRect(reference);
      if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
        update();
      }
      prevRefRect = nextRefRect;
      frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return () => {
      var _resizeObserver2;
      ancestors.forEach(ancestor => {
        ancestorScroll && ancestor.removeEventListener('scroll', update);
        ancestorResize && ancestor.removeEventListener('resize', update);
      });
      cleanupIo == null || cleanupIo();
      (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
      resizeObserver = null;
      if (animationFrame) {
        cancelAnimationFrame(frameId);
      }
    };
  }

  var useIsomorphicLayoutEffect_browser_cjs = {};

  Object.defineProperty(useIsomorphicLayoutEffect_browser_cjs, '__esModule', { value: true });

  var react = React__namespace.default;

  var index =  react.useLayoutEffect ;

  var _default = useIsomorphicLayoutEffect_browser_cjs.default = index;

  var _excluded$4 = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];
  // ==============================
  // NO OP
  // ==============================

  var noop = function noop() {};

  // ==============================
  // Clean Common Props
  // ==============================

  var cleanCommonProps = function cleanCommonProps(props) {
    //className
    props.className;
      props.clearValue;
      props.cx;
      props.getStyles;
      props.getClassNames;
      props.getValue;
      props.hasValue;
      props.isMulti;
      props.isRtl;
      props.options;
      props.selectOption;
      props.selectProps;
      props.setValue;
      props.theme;
      var innerProps = _objectWithoutProperties(props, _excluded$4);
    return _objectSpread2({}, innerProps);
  };

  // ==============================
  // Get Style Props
  // ==============================

  var getStyleProps = function getStyleProps(props, name, classNamesState) {
    var cx = props.cx,
      getStyles = props.getStyles,
      getClassNames = props.getClassNames,
      className = props.className;
    return {
      css: getStyles(name, props),
      className: cx(classNamesState !== null && classNamesState !== void 0 ? classNamesState : {}, getClassNames(name, props), className)
    };
  };

  // ==============================
  // Get bounding client object
  // ==============================

  // cannot get keys using array notation with DOMRect
  function getBoundingClientObj(element) {
    var rect = element.getBoundingClientRect();
    return {
      bottom: rect.bottom,
      height: rect.height,
      left: rect.left,
      right: rect.right,
      top: rect.top,
      width: rect.width
    };
  }
  var options = {
    get passive() {
      return true;
    }
  };
  // check for SSR
  var w = typeof window !== 'undefined' ? window : {};
  if (w.addEventListener && w.removeEventListener) {
    w.addEventListener('p', noop, options);
    w.removeEventListener('p', noop, false);
  }

  var _excluded$3 = ["children", "innerProps"],
    _excluded2$1 = ["children", "innerProps"];
  var coercePlacement = function coercePlacement(p) {
    return p === 'auto' ? 'bottom' : p;
  };
  var PortalPlacementContext = /*#__PURE__*/React$1.createContext(null);
  var Menu = function Menu(props) {
    var children = props.children,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
    return jsx("div", _extends({}, getStyleProps(props, 'menu', {
      menu: true
    }), {
      ref: innerRef
    }, innerProps), children);
  };
  var Menu$1 = Menu;
  var MenuList = function MenuList(props) {
    var children = props.children,
      innerProps = props.innerProps,
      innerRef = props.innerRef,
      isMulti = props.isMulti;
    return jsx("div", _extends({}, getStyleProps(props, 'menuList', {
      'menu-list': true,
      'menu-list--is-multi': isMulti
    }), {
      ref: innerRef
    }, innerProps), children);
  };
  var NoOptionsMessage = function NoOptionsMessage(_ref6) {
    var _ref6$children = _ref6.children,
      children = _ref6$children === void 0 ? 'No options' : _ref6$children,
      innerProps = _ref6.innerProps,
      restProps = _objectWithoutProperties(_ref6, _excluded$3);
    return jsx("div", _extends({}, getStyleProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
      children: children,
      innerProps: innerProps
    }), 'noOptionsMessage', {
      'menu-notice': true,
      'menu-notice--no-options': true
    }), innerProps), children);
  };
  var LoadingMessage = function LoadingMessage(_ref7) {
    var _ref7$children = _ref7.children,
      children = _ref7$children === void 0 ? 'Loading...' : _ref7$children,
      innerProps = _ref7.innerProps,
      restProps = _objectWithoutProperties(_ref7, _excluded2$1);
    return jsx("div", _extends({}, getStyleProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
      children: children,
      innerProps: innerProps
    }), 'loadingMessage', {
      'menu-notice': true,
      'menu-notice--loading': true
    }), innerProps), children);
  };
  var MenuPortal = function MenuPortal(props) {
    var appendTo = props.appendTo,
      children = props.children,
      controlElement = props.controlElement,
      innerProps = props.innerProps,
      menuPlacement = props.menuPlacement,
      menuPosition = props.menuPosition;
    var menuPortalRef = React$1.useRef(null);
    var cleanupRef = React$1.useRef(null);
    var _useState5 = React$1.useState(coercePlacement(menuPlacement)),
      _useState6 = _slicedToArray(_useState5, 2),
      placement = _useState6[0],
      setPortalPlacement = _useState6[1];
    var portalPlacementContext = React$1.useMemo(function () {
      return {
        setPortalPlacement: setPortalPlacement
      };
    }, []);
    var _useState7 = React$1.useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      computedPosition = _useState8[0],
      setComputedPosition = _useState8[1];
    var updateComputedPosition = React$1.useCallback(function () {
      if (!controlElement) return;
      var rect = getBoundingClientObj(controlElement);
      var scrollDistance = menuPosition === 'fixed' ? 0 : window.pageYOffset;
      var offset = rect[placement] + scrollDistance;
      if (offset !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset) || rect.left !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left) || rect.width !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width)) {
        setComputedPosition({
          offset: offset,
          rect: rect
        });
      }
    }, [controlElement, menuPosition, placement, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width]);
    _default(function () {
      updateComputedPosition();
    }, [updateComputedPosition]);
    var runAutoUpdate = React$1.useCallback(function () {
      if (typeof cleanupRef.current === 'function') {
        cleanupRef.current();
        cleanupRef.current = null;
      }
      if (controlElement && menuPortalRef.current) {
        cleanupRef.current = autoUpdate(controlElement, menuPortalRef.current, updateComputedPosition, {
          elementResize: 'ResizeObserver' in window
        });
      }
    }, [controlElement, updateComputedPosition]);
    _default(function () {
      runAutoUpdate();
    }, [runAutoUpdate]);
    var setMenuPortalElement = React$1.useCallback(function (menuPortalElement) {
      menuPortalRef.current = menuPortalElement;
      runAutoUpdate();
    }, [runAutoUpdate]);

    // bail early if required elements aren't present
    if (!appendTo && menuPosition !== 'fixed' || !computedPosition) return null;

    // same wrapper element whether fixed or portalled
    var menuWrapper = jsx("div", _extends({
      ref: setMenuPortalElement
    }, getStyleProps(_objectSpread2(_objectSpread2({}, props), {}, {
      offset: computedPosition.offset,
      position: menuPosition,
      rect: computedPosition.rect
    }), 'menuPortal', {
      'menu-portal': true
    }), innerProps), children);
    return jsx(PortalPlacementContext.Provider, {
      value: portalPlacementContext
    }, appendTo ? /*#__PURE__*/reactDom.createPortal(menuWrapper, appendTo) : menuWrapper);
  };
  var SelectContainer = function SelectContainer(props) {
    var children = props.children,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      isRtl = props.isRtl;
    return jsx("div", _extends({}, getStyleProps(props, 'container', {
      '--is-disabled': isDisabled,
      '--is-rtl': isRtl
    }), innerProps), children);
  };
  var ValueContainer = function ValueContainer(props) {
    var children = props.children,
      innerProps = props.innerProps,
      isMulti = props.isMulti,
      hasValue = props.hasValue;
    return jsx("div", _extends({}, getStyleProps(props, 'valueContainer', {
      'value-container': true,
      'value-container--is-multi': isMulti,
      'value-container--has-value': hasValue
    }), innerProps), children);
  };
  var IndicatorsContainer = function IndicatorsContainer(props) {
    var children = props.children,
      innerProps = props.innerProps;
    return jsx("div", _extends({}, getStyleProps(props, 'indicatorsContainer', {
      indicators: true
    }), innerProps), children);
  };

  var _templateObject;
  var _excluded$2 = ["size"],
    _excluded2 = ["innerProps", "isRtl", "size"];
  function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

  // ==============================
  // Dropdown & Clear Icons
  // ==============================
  var _ref2 = {
    name: "tj5bde-Svg",
    styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4LCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmltcG9ydCB7XG4gIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lLFxuICBDU1NPYmplY3RXaXRoTGFiZWwsXG4gIEdyb3VwQmFzZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0U3R5bGVQcm9wcyB9IGZyb20gJy4uL3V0aWxzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHtcbiAgc2l6ZSxcbiAgLi4ucHJvcHNcbn06IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU6IG51bWJlciB9KSA9PiAoXG4gIDxzdmdcbiAgICBoZWlnaHQ9e3NpemV9XG4gICAgd2lkdGg9e3NpemV9XG4gICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgY3NzPXt7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgIHN0cm9rZTogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBzdHJva2VXaWR0aDogMCxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIENyb3NzSWNvblByb3BzID0gSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZT86IG51bWJlciB9O1xuZXhwb3J0IGNvbnN0IENyb3NzSWNvbiA9IChwcm9wczogQ3Jvc3NJY29uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCB0eXBlIERvd25DaGV2cm9uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgRG93bkNoZXZyb24gPSAocHJvcHM6IERvd25DaGV2cm9uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTQuNTE2IDcuNTQ4YzAuNDM2LTAuNDQ2IDEuMDQzLTAuNDgxIDEuNTc2IDBsMy45MDggMy43NDcgMy45MDgtMy43NDdjMC41MzMtMC40ODEgMS4xNDEtMC40NDYgMS41NzQgMCAwLjQzNiAwLjQ0NSAwLjQwOCAxLjE5NyAwIDEuNjE1LTAuNDA2IDAuNDE4LTQuNjk1IDQuNTAyLTQuNjk1IDQuNTAyLTAuMjE3IDAuMjIzLTAuNTAyIDAuMzM1LTAuNzg3IDAuMzM1cy0wLjU3LTAuMTEyLTAuNzg5LTAuMzM1YzAgMC00LjI4Ny00LjA4NC00LjY5NS00LjUwMnMtMC40MzYtMS4xNyAwLTEuNjE1elwiIC8+XG4gIDwvU3ZnPlxuKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEJ1dHRvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xufVxuXG5jb25zdCBiYXNlQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTpcbiAgICB8IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbiAgICB8IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JDb250YWluZXInLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDQwLFxuICAgICAgICB9LFxuICAgICAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBEcm9wZG93bkluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2Ryb3Bkb3duSW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckluZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2NsZWFySW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdjbGVhci1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPENyb3NzSWNvbiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2VwYXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGludGVyZmFjZSBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaW5uZXJQcm9wcz86IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3BhbiddO1xufVxuXG5leHBvcnQgY29uc3QgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNEaXNhYmxlZCxcbiAgICB0aGVtZToge1xuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgICAgY29sb3JzLFxuICAgIH0sXG4gIH06IEluZGljYXRvclNlcGFyYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+LFxuICB1bnN0eWxlZDogYm9vbGVhblxuKTogQ1NTT2JqZWN0V2l0aExhYmVsID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yU2VwYXJhdG9yJyxcbiAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gIHdpZHRoOiAxLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsMTAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBtYXJnaW5Cb3R0b206IGJhc2VVbml0ICogMixcbiAgICAgICAgbWFyZ2luVG9wOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnaW5kaWNhdG9yU2VwYXJhdG9yJywge1xuICAgICAgICAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHNpemUsXG4gICAgdGhlbWU6IHtcbiAgICAgIGNvbG9ycyxcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICB9LFxuICB9OiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICAgICAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICAgICAgfSksXG59KTtcblxuaW50ZXJmYWNlIExvYWRpbmdEb3RQcm9wcyB7XG4gIGRlbGF5OiBudW1iZXI7XG4gIG9mZnNldDogYm9vbGVhbjtcbn1cbmNvbnN0IExvYWRpbmdEb3QgPSAoeyBkZWxheSwgb2Zmc2V0IH06IExvYWRpbmdEb3RQcm9wcykgPT4gKFxuICA8c3BhblxuICAgIGNzcz17e1xuICAgICAgYW5pbWF0aW9uOiBgJHtsb2FkaW5nRG90QW5pbWF0aW9uc30gMXMgZWFzZS1pbi1vdXQgJHtkZWxheX1tcyBpbmZpbml0ZTtgLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzFlbScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIG1hcmdpbkxlZnQ6IG9mZnNldCA/ICcxZW0nIDogdW5kZWZpbmVkLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgIH19XG4gIC8+XG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRpbmdJbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgLyoqIFNldCBzaXplIG9mIHRoZSBjb250YWluZXIuICovXG4gIHNpemU6IG51bWJlcjtcbn1cbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KHtcbiAgaW5uZXJQcm9wcyxcbiAgaXNSdGwsXG4gIHNpemUgPSA0LFxuICAuLi5yZXN0UHJvcHNcbn06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKFxuICAgICAgICB7IC4uLnJlc3RQcm9wcywgaW5uZXJQcm9wcywgaXNSdGwsIHNpemUgfSxcbiAgICAgICAgJ2xvYWRpbmdJbmRpY2F0b3InLFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH1cbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MH0gb2Zmc2V0PXtpc1J0bH0gLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXsxNjB9IG9mZnNldCAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezMyMH0gb2Zmc2V0PXshaXNSdGx9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19 */",
    toString: _EMOTION_STRINGIFIED_CSS_ERROR__
  };
  var Svg = function Svg(_ref) {
    var size = _ref.size,
      props = _objectWithoutProperties(_ref, _excluded$2);
    return jsx("svg", _extends({
      height: size,
      width: size,
      viewBox: "0 0 20 20",
      "aria-hidden": "true",
      focusable: "false",
      css: _ref2
    }, props));
  };
  var CrossIcon = function CrossIcon(props) {
    return jsx(Svg, _extends({
      size: 20
    }, props), jsx("path", {
      d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
    }));
  };
  var DownChevron = function DownChevron(props) {
    return jsx(Svg, _extends({
      size: 20
    }, props), jsx("path", {
      d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
    }));
  };
  var DropdownIndicator = function DropdownIndicator(props) {
    var children = props.children,
      innerProps = props.innerProps;
    return jsx("div", _extends({}, getStyleProps(props, 'dropdownIndicator', {
      indicator: true,
      'dropdown-indicator': true
    }), innerProps), children || jsx(DownChevron, null));
  };
  var ClearIndicator = function ClearIndicator(props) {
    var children = props.children,
      innerProps = props.innerProps;
    return jsx("div", _extends({}, getStyleProps(props, 'clearIndicator', {
      indicator: true,
      'clear-indicator': true
    }), innerProps), children || jsx(CrossIcon, null));
  };
  var IndicatorSeparator = function IndicatorSeparator(props) {
    var innerProps = props.innerProps;
    return jsx("span", _extends({}, innerProps, getStyleProps(props, 'indicatorSeparator', {
      'indicator-separator': true
    })));
  };

  // ==============================
  // Loading
  // ==============================

  var loadingDotAnimations = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"])));
  var LoadingDot = function LoadingDot(_ref6) {
    var delay = _ref6.delay,
      offset = _ref6.offset;
    return jsx("span", {
      css: /*#__PURE__*/css({
        animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
        backgroundColor: 'currentColor',
        borderRadius: '1em',
        display: 'inline-block',
        marginLeft: offset ? '1em' : undefined,
        height: '1em',
        verticalAlign: 'top',
        width: '1em'
      }, ";label:LoadingDot;", "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1RSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4LCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmltcG9ydCB7XG4gIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lLFxuICBDU1NPYmplY3RXaXRoTGFiZWwsXG4gIEdyb3VwQmFzZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0U3R5bGVQcm9wcyB9IGZyb20gJy4uL3V0aWxzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHtcbiAgc2l6ZSxcbiAgLi4ucHJvcHNcbn06IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU6IG51bWJlciB9KSA9PiAoXG4gIDxzdmdcbiAgICBoZWlnaHQ9e3NpemV9XG4gICAgd2lkdGg9e3NpemV9XG4gICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgY3NzPXt7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgIHN0cm9rZTogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBzdHJva2VXaWR0aDogMCxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIENyb3NzSWNvblByb3BzID0gSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZT86IG51bWJlciB9O1xuZXhwb3J0IGNvbnN0IENyb3NzSWNvbiA9IChwcm9wczogQ3Jvc3NJY29uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCB0eXBlIERvd25DaGV2cm9uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgRG93bkNoZXZyb24gPSAocHJvcHM6IERvd25DaGV2cm9uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTQuNTE2IDcuNTQ4YzAuNDM2LTAuNDQ2IDEuMDQzLTAuNDgxIDEuNTc2IDBsMy45MDggMy43NDcgMy45MDgtMy43NDdjMC41MzMtMC40ODEgMS4xNDEtMC40NDYgMS41NzQgMCAwLjQzNiAwLjQ0NSAwLjQwOCAxLjE5NyAwIDEuNjE1LTAuNDA2IDAuNDE4LTQuNjk1IDQuNTAyLTQuNjk1IDQuNTAyLTAuMjE3IDAuMjIzLTAuNTAyIDAuMzM1LTAuNzg3IDAuMzM1cy0wLjU3LTAuMTEyLTAuNzg5LTAuMzM1YzAgMC00LjI4Ny00LjA4NC00LjY5NS00LjUwMnMtMC40MzYtMS4xNyAwLTEuNjE1elwiIC8+XG4gIDwvU3ZnPlxuKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEJ1dHRvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xufVxuXG5jb25zdCBiYXNlQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTpcbiAgICB8IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbiAgICB8IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JDb250YWluZXInLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDQwLFxuICAgICAgICB9LFxuICAgICAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBEcm9wZG93bkluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2Ryb3Bkb3duSW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckluZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2NsZWFySW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdjbGVhci1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPENyb3NzSWNvbiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2VwYXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGludGVyZmFjZSBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaW5uZXJQcm9wcz86IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3BhbiddO1xufVxuXG5leHBvcnQgY29uc3QgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNEaXNhYmxlZCxcbiAgICB0aGVtZToge1xuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgICAgY29sb3JzLFxuICAgIH0sXG4gIH06IEluZGljYXRvclNlcGFyYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+LFxuICB1bnN0eWxlZDogYm9vbGVhblxuKTogQ1NTT2JqZWN0V2l0aExhYmVsID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yU2VwYXJhdG9yJyxcbiAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gIHdpZHRoOiAxLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsMTAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBtYXJnaW5Cb3R0b206IGJhc2VVbml0ICogMixcbiAgICAgICAgbWFyZ2luVG9wOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnaW5kaWNhdG9yU2VwYXJhdG9yJywge1xuICAgICAgICAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHNpemUsXG4gICAgdGhlbWU6IHtcbiAgICAgIGNvbG9ycyxcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICB9LFxuICB9OiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICAgICAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICAgICAgfSksXG59KTtcblxuaW50ZXJmYWNlIExvYWRpbmdEb3RQcm9wcyB7XG4gIGRlbGF5OiBudW1iZXI7XG4gIG9mZnNldDogYm9vbGVhbjtcbn1cbmNvbnN0IExvYWRpbmdEb3QgPSAoeyBkZWxheSwgb2Zmc2V0IH06IExvYWRpbmdEb3RQcm9wcykgPT4gKFxuICA8c3BhblxuICAgIGNzcz17e1xuICAgICAgYW5pbWF0aW9uOiBgJHtsb2FkaW5nRG90QW5pbWF0aW9uc30gMXMgZWFzZS1pbi1vdXQgJHtkZWxheX1tcyBpbmZpbml0ZTtgLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzFlbScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIG1hcmdpbkxlZnQ6IG9mZnNldCA/ICcxZW0nIDogdW5kZWZpbmVkLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgIH19XG4gIC8+XG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRpbmdJbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgLyoqIFNldCBzaXplIG9mIHRoZSBjb250YWluZXIuICovXG4gIHNpemU6IG51bWJlcjtcbn1cbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KHtcbiAgaW5uZXJQcm9wcyxcbiAgaXNSdGwsXG4gIHNpemUgPSA0LFxuICAuLi5yZXN0UHJvcHNcbn06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKFxuICAgICAgICB7IC4uLnJlc3RQcm9wcywgaW5uZXJQcm9wcywgaXNSdGwsIHNpemUgfSxcbiAgICAgICAgJ2xvYWRpbmdJbmRpY2F0b3InLFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH1cbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MH0gb2Zmc2V0PXtpc1J0bH0gLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXsxNjB9IG9mZnNldCAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezMyMH0gb2Zmc2V0PXshaXNSdGx9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19 */")
    });
  };
  var LoadingIndicator = function LoadingIndicator(_ref7) {
    var innerProps = _ref7.innerProps,
      isRtl = _ref7.isRtl,
      _ref7$size = _ref7.size,
      size = _ref7$size === void 0 ? 4 : _ref7$size,
      restProps = _objectWithoutProperties(_ref7, _excluded2);
    return jsx("div", _extends({}, getStyleProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
      innerProps: innerProps,
      isRtl: isRtl,
      size: size
    }), 'loadingIndicator', {
      indicator: true,
      'loading-indicator': true
    }), innerProps), jsx(LoadingDot, {
      delay: 0,
      offset: isRtl
    }), jsx(LoadingDot, {
      delay: 160,
      offset: true
    }), jsx(LoadingDot, {
      delay: 320,
      offset: !isRtl
    }));
  };
  var Control = function Control(props) {
    var children = props.children,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      innerRef = props.innerRef,
      innerProps = props.innerProps,
      menuIsOpen = props.menuIsOpen;
    return jsx("div", _extends({
      ref: innerRef
    }, getStyleProps(props, 'control', {
      control: true,
      'control--is-disabled': isDisabled,
      'control--is-focused': isFocused,
      'control--menu-is-open': menuIsOpen
    }), innerProps, {
      "aria-disabled": isDisabled || undefined
    }), children);
  };
  var Control$1 = Control;

  var _excluded$1 = ["data"];
  var Group = function Group(props) {
    var children = props.children,
      cx = props.cx,
      getStyles = props.getStyles,
      getClassNames = props.getClassNames,
      Heading = props.Heading,
      headingProps = props.headingProps,
      innerProps = props.innerProps,
      label = props.label,
      theme = props.theme,
      selectProps = props.selectProps;
    return jsx("div", _extends({}, getStyleProps(props, 'group', {
      group: true
    }), innerProps), jsx(Heading, _extends({}, headingProps, {
      selectProps: selectProps,
      theme: theme,
      getStyles: getStyles,
      getClassNames: getClassNames,
      cx: cx
    }), label), jsx("div", null, children));
  };
  var GroupHeading = function GroupHeading(props) {
    var _cleanCommonProps = cleanCommonProps(props);
      _cleanCommonProps.data;
      var innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded$1);
    return jsx("div", _extends({}, getStyleProps(props, 'groupHeading', {
      'group-heading': true
    }), innerProps));
  };
  var Group$1 = Group;

  var _excluded = ["innerRef", "isDisabled", "isHidden", "inputClassName"];
  var spacingStyle = {
    gridArea: '1 / 2',
    font: 'inherit',
    minWidth: '2px',
    border: 0,
    margin: 0,
    outline: 0,
    padding: 0
  };
  ({
    flex: '1 1 auto',
    display: 'inline-grid',
    gridArea: '1 / 1 / 2 / 3',
    gridTemplateColumns: '0 min-content',
    '&:after': _objectSpread2({
      content: 'attr(data-value) " "',
      visibility: 'hidden',
      whiteSpace: 'pre'
    }, spacingStyle)
  });
  var inputStyle = function inputStyle(isHidden) {
    return _objectSpread2({
      label: 'input',
      color: 'inherit',
      background: 0,
      opacity: isHidden ? 0 : 1,
      width: '100%'
    }, spacingStyle);
  };
  var Input = function Input(props) {
    var cx = props.cx,
      value = props.value;
    var _cleanCommonProps = cleanCommonProps(props),
      innerRef = _cleanCommonProps.innerRef,
      isDisabled = _cleanCommonProps.isDisabled,
      isHidden = _cleanCommonProps.isHidden,
      inputClassName = _cleanCommonProps.inputClassName,
      innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded);
    return jsx("div", _extends({}, getStyleProps(props, 'input', {
      'input-container': true
    }), {
      "data-value": value || ''
    }), jsx("input", _extends({
      className: cx({
        input: true
      }, inputClassName),
      ref: innerRef,
      style: inputStyle(isHidden),
      disabled: isDisabled
    }, innerProps)));
  };
  var Input$1 = Input;
  var MultiValueGeneric = function MultiValueGeneric(_ref4) {
    var children = _ref4.children,
      innerProps = _ref4.innerProps;
    return jsx("div", innerProps, children);
  };
  var MultiValueContainer = MultiValueGeneric;
  var MultiValueLabel = MultiValueGeneric;
  function MultiValueRemove(_ref5) {
    var children = _ref5.children,
      innerProps = _ref5.innerProps;
    return jsx("div", _extends({
      role: "button"
    }, innerProps), children || jsx(CrossIcon, {
      size: 14
    }));
  }
  var MultiValue = function MultiValue(props) {
    var children = props.children,
      components = props.components,
      data = props.data,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      removeProps = props.removeProps,
      selectProps = props.selectProps;
    var Container = components.Container,
      Label = components.Label,
      Remove = components.Remove;
    return jsx(Container, {
      data: data,
      innerProps: _objectSpread2(_objectSpread2({}, getStyleProps(props, 'multiValue', {
        'multi-value': true,
        'multi-value--is-disabled': isDisabled
      })), innerProps),
      selectProps: selectProps
    }, jsx(Label, {
      data: data,
      innerProps: _objectSpread2({}, getStyleProps(props, 'multiValueLabel', {
        'multi-value__label': true
      })),
      selectProps: selectProps
    }, children), jsx(Remove, {
      data: data,
      innerProps: _objectSpread2(_objectSpread2({}, getStyleProps(props, 'multiValueRemove', {
        'multi-value__remove': true
      })), {}, {
        'aria-label': "Remove ".concat(children || 'option')
      }, removeProps),
      selectProps: selectProps
    }));
  };
  var MultiValue$1 = MultiValue;
  var Option = function Option(props) {
    var children = props.children,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      isSelected = props.isSelected,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
    return jsx("div", _extends({}, getStyleProps(props, 'option', {
      option: true,
      'option--is-disabled': isDisabled,
      'option--is-focused': isFocused,
      'option--is-selected': isSelected
    }), {
      ref: innerRef,
      "aria-disabled": isDisabled
    }, innerProps), children);
  };
  var Option$1 = Option;
  var Placeholder = function Placeholder(props) {
    var children = props.children,
      innerProps = props.innerProps;
    return jsx("div", _extends({}, getStyleProps(props, 'placeholder', {
      placeholder: true
    }), innerProps), children);
  };
  var Placeholder$1 = Placeholder;
  var SingleValue = function SingleValue(props) {
    var children = props.children,
      isDisabled = props.isDisabled,
      innerProps = props.innerProps;
    return jsx("div", _extends({}, getStyleProps(props, 'singleValue', {
      'single-value': true,
      'single-value--is-disabled': isDisabled
    }), innerProps), children);
  };
  var SingleValue$1 = SingleValue;

  var components = {
    ClearIndicator: ClearIndicator,
    Control: Control$1,
    DropdownIndicator: DropdownIndicator,
    DownChevron: DownChevron,
    CrossIcon: CrossIcon,
    Group: Group$1,
    GroupHeading: GroupHeading,
    IndicatorsContainer: IndicatorsContainer,
    IndicatorSeparator: IndicatorSeparator,
    Input: Input$1,
    LoadingIndicator: LoadingIndicator,
    Menu: Menu$1,
    MenuList: MenuList,
    MenuPortal: MenuPortal,
    LoadingMessage: LoadingMessage,
    NoOptionsMessage: NoOptionsMessage,
    MultiValue: MultiValue$1,
    MultiValueContainer: MultiValueContainer,
    MultiValueLabel: MultiValueLabel,
    MultiValueRemove: MultiValueRemove,
    Option: Option$1,
    Placeholder: Placeholder$1,
    SelectContainer: SelectContainer,
    SingleValue: SingleValue$1,
    ValueContainer: ValueContainer
  };

  const Test = () => {
    const hook = adminjs.useRecords('guests');
    const [value, setValue] = React$1.useState([]);
    console.log(hook);
    return /*#__PURE__*/React.createElement(designSystem.Box, {
      variant: "grey",
      id: "storyook",
      "data-css": "design-system-examples"
    }, /*#__PURE__*/React.createElement(designSystem.Header, null, "Storybook"), /*#__PURE__*/React.createElement(designSystem.Box, {
      variant: "container"
    }, "CurrentValue: ", JSON.stringify(value), /*#__PURE__*/React.createElement(designSystem.Select, {
      components: {
        Group: props => {
          const onClick = () => props.selectProps.onChange(props.options.map(option => option.data));
          return /*#__PURE__*/React.createElement(components.Group, _extends$1({}, props, {
            style: {
              cursor: 'pointer'
            },
            headingProps: {
              ...props.headingProps,
              onClick
            }
          }));
        }
      },
      closeMenuOnSelect: false,
      menuIsOpen: true,
      isMulti: true,
      variant: "filter",
      value: value,
      onChange: selected => setValue(selected),
      options: [{
        label: 'Group 1',
        options: [{
          label: 'Group 1, option 1',
          value: 'value_1'
        }, {
          label: 'Group 1, option 2',
          value: 'value_2'
        }]
      }, {
        label: 'A root option',
        value: 'value_3'
      }, {
        label: 'Another root option',
        value: 'value_4'
      }]
    }), /*#__PURE__*/React.createElement(designSystem.Text, null, "For more examples visit our Storybook")));
  };

  const minMessageLength = 20;
  const SendEmailButton = props => {
    const [recipients, setRecipients] = React$1.useState(props?.records.map(({
      params
    }) => params?.email).sort() || []);
    const [subject, setSubject] = React$1.useState('');
    const [message, setMessage] = React$1.useState('');
    const send = async () => {
      console.log(recipients);
      await fetch('/mail', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          recipients,
          subject,
          message
        })
      });
    };
    const mailTo = `mailto:${recipients.join()}?subject=${subject}&body=${message}`;
    const isValid = recipients.length > 0 && subject.length > 0 && message.length > minMessageLength;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(designSystem.Box, {
      variant: "card"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '2rem 0'
      }
    }, /*#__PURE__*/React.createElement(designSystem.Label, {
      htmlFor: "recipients",
      required: true
    }, "Destinataires :"), /*#__PURE__*/React.createElement(designSystem.TextArea, {
      id: "recipients",
      value: recipients,
      disabled: true,
      style: {
        width: '100%',
        resize: 'none'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '2rem 0'
      }
    }, /*#__PURE__*/React.createElement(designSystem.Label, {
      htmlFor: "subject",
      required: true
    }, "Sujet :"), /*#__PURE__*/React.createElement(designSystem.Input, {
      id: "subject",
      value: subject,
      onChange: e => setSubject(e.target.value),
      style: {
        width: '100%'
      }
    }), subject.length === 0 && /*#__PURE__*/React.createElement(designSystem.Label, {
      style: {
        color: 'red'
      }
    }, "Le sujet ne peut pas \xEAtre vide")), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '2rem 0'
      }
    }, /*#__PURE__*/React.createElement(designSystem.Label, {
      htmlFor: "message",
      required: true
    }, "Message :"), /*#__PURE__*/React.createElement(designSystem.RichTextEditor, {
      value: message,
      onChange: setMessage
    }), message.length < minMessageLength && /*#__PURE__*/React.createElement(designSystem.Label, {
      style: {
        color: 'red'
      }
    }, "Encore ", minMessageLength - message.length, " caract\xE8res pour que ce message soit valide.")), isValid && /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '2rem 0'
      }
    }, /*#__PURE__*/React.createElement(designSystem.Button, {
      type: "submit",
      variant: "contained",
      onClick: send
    }, "Envoyer"))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(designSystem.Link, {
      href: mailTo,
      variant: "info"
    }, "Un probl\xE8me ? Tu peux essayer la version classique \uD83D\uDE00"));
  };

  AdminJS.UserComponents = {};
  AdminJS.UserComponents.Test = Test;
  AdminJS.UserComponents.SendEmailButton = SendEmailButton;

})(AdminJSDesignSystem, AdminJS, React, ReactDOM);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvUHJpbWl0aXZlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvUHJvcGVydHlLZXkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlUmVzdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zaGVldC9kaXN0L2Vtb3Rpb24tc2hlZXQuYnJvd3Nlci5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvc3R5bGlzL3NyYy9FbnVtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3N0eWxpcy9zcmMvVXRpbGl0eS5qcyIsIi4uL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL1Rva2VuaXplci5qcyIsIi4uL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL1BhcnNlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL1NlcmlhbGl6ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvc3R5bGlzL3NyYy9NaWRkbGV3YXJlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL21lbW9pemUvZGlzdC9lbW90aW9uLW1lbW9pemUuZXNtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2NhY2hlL2Rpc3QvZW1vdGlvbi1jYWNoZS5icm93c2VyLmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9kaXN0L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLmNqcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91dGlscy9kaXN0L2Vtb3Rpb24tdXRpbHMuYnJvd3Nlci5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vaGFzaC9kaXN0L2Vtb3Rpb24taGFzaC5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vdW5pdGxlc3MvZGlzdC9lbW90aW9uLXVuaXRsZXNzLmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zZXJpYWxpemUvZGlzdC9lbW90aW9uLXNlcmlhbGl6ZS5icm93c2VyLmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91c2UtaW5zZXJ0aW9uLWVmZmVjdC13aXRoLWZhbGxiYWNrcy9kaXN0L2Vtb3Rpb24tdXNlLWluc2VydGlvbi1lZmZlY3Qtd2l0aC1mYWxsYmFja3MuYnJvd3Nlci5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vcmVhY3QvZGlzdC9lbW90aW9uLWVsZW1lbnQtNDNjNmZlYTAuYnJvd3Nlci5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vcmVhY3QvZGlzdC9lbW90aW9uLXJlYWN0LmJyb3dzZXIuZXNtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZmxvYXRpbmctdWkvdXRpbHMvZGlzdC9mbG9hdGluZy11aS51dGlscy5tanMiLCIuLi9ub2RlX21vZHVsZXMvQGZsb2F0aW5nLXVpL3V0aWxzL2Rpc3QvZmxvYXRpbmctdWkudXRpbHMuZG9tLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9AZmxvYXRpbmctdWkvZG9tL2Rpc3QvZmxvYXRpbmctdWkuZG9tLm1qcyIsIi4uL25vZGVfbW9kdWxlcy91c2UtaXNvbW9ycGhpYy1sYXlvdXQtZWZmZWN0L2Rpc3QvdXNlLWlzb21vcnBoaWMtbGF5b3V0LWVmZmVjdC5icm93c2VyLmNqcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvZGlzdC9pbmRleC1hMzAxZjUyNi5lc20uanMiLCIuLi9hcHAvYWRtaW4vY29tcG9uZW50cy9UZXN0LnRzeCIsIi4uL2FwcC9hZG1pbi9jb21wb25lbnRzL1NlbmRFbWFpbEJ1dHRvbi50c3giLCJlbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBfdHlwZW9mKG8pO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9QcmltaXRpdmUodCwgcikge1xuICBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDtcbiAgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gIGlmICh2b2lkIDAgIT09IGUpIHtcbiAgICB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTtcbiAgICBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmltcG9ydCB0b1ByaW1pdGl2ZSBmcm9tIFwiLi90b1ByaW1pdGl2ZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9Qcm9wZXJ0eUtleSh0KSB7XG4gIHZhciBpID0gdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7XG4gIHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogU3RyaW5nKGkpO1xufSIsImltcG9ydCB0b1Byb3BlcnR5S2V5IGZyb20gXCIuL3RvUHJvcGVydHlLZXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufSIsImltcG9ydCBkZWZpbmVQcm9wZXJ0eSBmcm9tIFwiLi9kZWZpbmVQcm9wZXJ0eS5qc1wiO1xuZnVuY3Rpb24gb3duS2V5cyhlLCByKSB7XG4gIHZhciB0ID0gT2JqZWN0LmtleXMoZSk7XG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIG8gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO1xuICAgIHIgJiYgKG8gPSBvLmZpbHRlcihmdW5jdGlvbiAocikge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgcikuZW51bWVyYWJsZTtcbiAgICB9KSksIHQucHVzaC5hcHBseSh0LCBvKTtcbiAgfVxuICByZXR1cm4gdDtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKGUpIHtcbiAgZm9yICh2YXIgciA9IDE7IHIgPCBhcmd1bWVudHMubGVuZ3RoOyByKyspIHtcbiAgICB2YXIgdCA9IG51bGwgIT0gYXJndW1lbnRzW3JdID8gYXJndW1lbnRzW3JdIDoge307XG4gICAgciAlIDIgPyBvd25LZXlzKE9iamVjdCh0KSwgITApLmZvckVhY2goZnVuY3Rpb24gKHIpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KGUsIHIsIHRbcl0pO1xuICAgIH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh0KSkgOiBvd25LZXlzKE9iamVjdCh0KSkuZm9yRWFjaChmdW5jdGlvbiAocikge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCwgcikpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQociwgbCkge1xuICB2YXIgdCA9IG51bGwgPT0gciA/IG51bGwgOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgcltTeW1ib2wuaXRlcmF0b3JdIHx8IHJbXCJAQGl0ZXJhdG9yXCJdO1xuICBpZiAobnVsbCAhPSB0KSB7XG4gICAgdmFyIGUsXG4gICAgICBuLFxuICAgICAgaSxcbiAgICAgIHUsXG4gICAgICBhID0gW10sXG4gICAgICBmID0gITAsXG4gICAgICBvID0gITE7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChpID0gKHQgPSB0LmNhbGwocikpLm5leHQsIDAgPT09IGwpIHtcbiAgICAgICAgaWYgKE9iamVjdCh0KSAhPT0gdCkgcmV0dXJuO1xuICAgICAgICBmID0gITE7XG4gICAgICB9IGVsc2UgZm9yICg7ICEoZiA9IChlID0gaS5jYWxsKHQpKS5kb25lKSAmJiAoYS5wdXNoKGUudmFsdWUpLCBhLmxlbmd0aCAhPT0gbCk7IGYgPSAhMCk7XG4gICAgfSBjYXRjaCAocikge1xuICAgICAgbyA9ICEwLCBuID0gcjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFmICYmIG51bGwgIT0gdFtcInJldHVyblwiXSAmJiAodSA9IHRbXCJyZXR1cm5cIl0oKSwgT2JqZWN0KHUpICE9PSB1KSkgcmV0dXJuO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG47XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcbiAgcmV0dXJuIGFycjI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIi4vbm9uSXRlcmFibGVSZXN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59IiwiaW1wb3J0IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIi4vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICB2YXIga2V5LCBpO1xuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsIi8qXG5cbkJhc2VkIG9mZiBnbGFtb3IncyBTdHlsZVNoZWV0LCB0aGFua3MgU3VuaWwg4p2k77iPXG5cbmhpZ2ggcGVyZm9ybWFuY2UgU3R5bGVTaGVldCBmb3IgY3NzLWluLWpzIHN5c3RlbXNcblxuLSB1c2VzIG11bHRpcGxlIHN0eWxlIHRhZ3MgYmVoaW5kIHRoZSBzY2VuZXMgZm9yIG1pbGxpb25zIG9mIHJ1bGVzXG4tIHVzZXMgYGluc2VydFJ1bGVgIGZvciBhcHBlbmRpbmcgaW4gcHJvZHVjdGlvbiBmb3IgKm11Y2gqIGZhc3RlciBwZXJmb3JtYW5jZVxuXG4vLyB1c2FnZVxuXG5pbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSAnQGVtb3Rpb24vc2hlZXQnXG5cbmxldCBzdHlsZVNoZWV0ID0gbmV3IFN0eWxlU2hlZXQoeyBrZXk6ICcnLCBjb250YWluZXI6IGRvY3VtZW50LmhlYWQgfSlcblxuc3R5bGVTaGVldC5pbnNlcnQoJyNib3ggeyBib3JkZXI6IDFweCBzb2xpZCByZWQ7IH0nKVxuLSBhcHBlbmRzIGEgY3NzIHJ1bGUgaW50byB0aGUgc3R5bGVzaGVldFxuXG5zdHlsZVNoZWV0LmZsdXNoKClcbi0gZW1wdGllcyB0aGUgc3R5bGVzaGVldCBvZiBhbGwgaXRzIGNvbnRlbnRzXG5cbiovXG4vLyAkRmxvd0ZpeE1lXG5mdW5jdGlvbiBzaGVldEZvclRhZyh0YWcpIHtcbiAgaWYgKHRhZy5zaGVldCkge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICByZXR1cm4gdGFnLnNoZWV0O1xuICB9IC8vIHRoaXMgd2VpcmRuZXNzIGJyb3VnaHQgdG8geW91IGJ5IGZpcmVmb3hcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChkb2N1bWVudC5zdHlsZVNoZWV0c1tpXS5vd25lck5vZGUgPT09IHRhZykge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgcmV0dXJuIGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdGFnLnNldEF0dHJpYnV0ZSgnZGF0YS1lbW90aW9uJywgb3B0aW9ucy5rZXkpO1xuXG4gIGlmIChvcHRpb25zLm5vbmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB0YWcuc2V0QXR0cmlidXRlKCdub25jZScsIG9wdGlvbnMubm9uY2UpO1xuICB9XG5cbiAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSk7XG4gIHRhZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtcycsICcnKTtcbiAgcmV0dXJuIHRhZztcbn1cblxudmFyIFN0eWxlU2hlZXQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvLyBVc2luZyBOb2RlIGluc3RlYWQgb2YgSFRNTEVsZW1lbnQgc2luY2UgY29udGFpbmVyIG1heSBiZSBhIFNoYWRvd1Jvb3RcbiAgZnVuY3Rpb24gU3R5bGVTaGVldChvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuX2luc2VydFRhZyA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgIHZhciBiZWZvcmU7XG5cbiAgICAgIGlmIChfdGhpcy50YWdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpZiAoX3RoaXMuaW5zZXJ0aW9uUG9pbnQpIHtcbiAgICAgICAgICBiZWZvcmUgPSBfdGhpcy5pbnNlcnRpb25Qb2ludC5uZXh0U2libGluZztcbiAgICAgICAgfSBlbHNlIGlmIChfdGhpcy5wcmVwZW5kKSB7XG4gICAgICAgICAgYmVmb3JlID0gX3RoaXMuY29udGFpbmVyLmZpcnN0Q2hpbGQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYmVmb3JlID0gX3RoaXMuYmVmb3JlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiZWZvcmUgPSBfdGhpcy50YWdzW190aGlzLnRhZ3MubGVuZ3RoIC0gMV0ubmV4dFNpYmxpbmc7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmNvbnRhaW5lci5pbnNlcnRCZWZvcmUodGFnLCBiZWZvcmUpO1xuXG4gICAgICBfdGhpcy50YWdzLnB1c2godGFnKTtcbiAgICB9O1xuXG4gICAgdGhpcy5pc1NwZWVkeSA9IG9wdGlvbnMuc3BlZWR5ID09PSB1bmRlZmluZWQgPyBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nIDogb3B0aW9ucy5zcGVlZHk7XG4gICAgdGhpcy50YWdzID0gW107XG4gICAgdGhpcy5jdHIgPSAwO1xuICAgIHRoaXMubm9uY2UgPSBvcHRpb25zLm5vbmNlOyAvLyBrZXkgaXMgdGhlIHZhbHVlIG9mIHRoZSBkYXRhLWVtb3Rpb24gYXR0cmlidXRlLCBpdCdzIHVzZWQgdG8gaWRlbnRpZnkgZGlmZmVyZW50IHNoZWV0c1xuXG4gICAgdGhpcy5rZXkgPSBvcHRpb25zLmtleTtcbiAgICB0aGlzLmNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyO1xuICAgIHRoaXMucHJlcGVuZCA9IG9wdGlvbnMucHJlcGVuZDtcbiAgICB0aGlzLmluc2VydGlvblBvaW50ID0gb3B0aW9ucy5pbnNlcnRpb25Qb2ludDtcbiAgICB0aGlzLmJlZm9yZSA9IG51bGw7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3R5bGVTaGVldC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmh5ZHJhdGUgPSBmdW5jdGlvbiBoeWRyYXRlKG5vZGVzKSB7XG4gICAgbm9kZXMuZm9yRWFjaCh0aGlzLl9pbnNlcnRUYWcpO1xuICB9O1xuXG4gIF9wcm90by5pbnNlcnQgPSBmdW5jdGlvbiBpbnNlcnQocnVsZSkge1xuICAgIC8vIHRoZSBtYXggbGVuZ3RoIGlzIGhvdyBtYW55IHJ1bGVzIHdlIGhhdmUgcGVyIHN0eWxlIHRhZywgaXQncyA2NTAwMCBpbiBzcGVlZHkgbW9kZVxuICAgIC8vIGl0J3MgMSBpbiBkZXYgYmVjYXVzZSB3ZSBpbnNlcnQgc291cmNlIG1hcHMgdGhhdCBtYXAgYSBzaW5nbGUgcnVsZSB0byBhIGxvY2F0aW9uXG4gICAgLy8gYW5kIHlvdSBjYW4gb25seSBoYXZlIG9uZSBzb3VyY2UgbWFwIHBlciBzdHlsZSB0YWdcbiAgICBpZiAodGhpcy5jdHIgJSAodGhpcy5pc1NwZWVkeSA/IDY1MDAwIDogMSkgPT09IDApIHtcbiAgICAgIHRoaXMuX2luc2VydFRhZyhjcmVhdGVTdHlsZUVsZW1lbnQodGhpcykpO1xuICAgIH1cblxuICAgIHZhciB0YWcgPSB0aGlzLnRhZ3NbdGhpcy50YWdzLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBpc0ltcG9ydFJ1bGUgPSBydWxlLmNoYXJDb2RlQXQoMCkgPT09IDY0ICYmIHJ1bGUuY2hhckNvZGVBdCgxKSA9PT0gMTA1O1xuXG4gICAgICBpZiAoaXNJbXBvcnRSdWxlICYmIHRoaXMuX2FscmVhZHlJbnNlcnRlZE9yZGVySW5zZW5zaXRpdmVSdWxlKSB7XG4gICAgICAgIC8vIHRoaXMgd291bGQgb25seSBjYXVzZSBwcm9ibGVtIGluIHNwZWVkeSBtb2RlXG4gICAgICAgIC8vIGJ1dCB3ZSBkb24ndCB3YW50IGVuYWJsaW5nIHNwZWVkeSB0byBhZmZlY3QgdGhlIG9ic2VydmFibGUgYmVoYXZpb3JcbiAgICAgICAgLy8gc28gd2UgcmVwb3J0IHRoaXMgZXJyb3IgYXQgYWxsIHRpbWVzXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJZb3UncmUgYXR0ZW1wdGluZyB0byBpbnNlcnQgdGhlIGZvbGxvd2luZyBydWxlOlxcblwiICsgcnVsZSArICdcXG5cXG5gQGltcG9ydGAgcnVsZXMgbXVzdCBiZSBiZWZvcmUgYWxsIG90aGVyIHR5cGVzIG9mIHJ1bGVzIGluIGEgc3R5bGVzaGVldCBidXQgb3RoZXIgcnVsZXMgaGF2ZSBhbHJlYWR5IGJlZW4gaW5zZXJ0ZWQuIFBsZWFzZSBlbnN1cmUgdGhhdCBgQGltcG9ydGAgcnVsZXMgYXJlIGJlZm9yZSBhbGwgb3RoZXIgcnVsZXMuJyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9hbHJlYWR5SW5zZXJ0ZWRPcmRlckluc2Vuc2l0aXZlUnVsZSA9IHRoaXMuX2FscmVhZHlJbnNlcnRlZE9yZGVySW5zZW5zaXRpdmVSdWxlIHx8ICFpc0ltcG9ydFJ1bGU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNTcGVlZHkpIHtcbiAgICAgIHZhciBzaGVldCA9IHNoZWV0Rm9yVGFnKHRhZyk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIHRoaXMgaXMgdGhlIHVsdHJhZmFzdCB2ZXJzaW9uLCB3b3JrcyBhY3Jvc3MgYnJvd3NlcnNcbiAgICAgICAgLy8gdGhlIGJpZyBkcmF3YmFjayBpcyB0aGF0IHRoZSBjc3Mgd29uJ3QgYmUgZWRpdGFibGUgaW4gZGV2dG9vbHNcbiAgICAgICAgc2hlZXQuaW5zZXJ0UnVsZShydWxlLCBzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhLzooLW1vei1wbGFjZWhvbGRlcnwtbW96LWZvY3VzLWlubmVyfC1tb3otZm9jdXNyaW5nfC1tcy1pbnB1dC1wbGFjZWhvbGRlcnwtbW96LXJlYWQtd3JpdGV8LW1vei1yZWFkLW9ubHl8LW1zLWNsZWFyfC1tcy1leHBhbmR8LW1zLXJldmVhbCl7Ly50ZXN0KHJ1bGUpKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZXJlIHdhcyBhIHByb2JsZW0gaW5zZXJ0aW5nIHRoZSBmb2xsb3dpbmcgcnVsZTogXFxcIlwiICsgcnVsZSArIFwiXFxcIlwiLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocnVsZSkpO1xuICAgIH1cblxuICAgIHRoaXMuY3RyKys7XG4gIH07XG5cbiAgX3Byb3RvLmZsdXNoID0gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHRoaXMudGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgIHJldHVybiB0YWcucGFyZW50Tm9kZSAmJiB0YWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YWcpO1xuICAgIH0pO1xuICAgIHRoaXMudGFncyA9IFtdO1xuICAgIHRoaXMuY3RyID0gMDtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aGlzLl9hbHJlYWR5SW5zZXJ0ZWRPcmRlckluc2Vuc2l0aXZlUnVsZSA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gU3R5bGVTaGVldDtcbn0oKTtcblxuZXhwb3J0IHsgU3R5bGVTaGVldCB9O1xuIiwiZXhwb3J0IHZhciBNUyA9ICctbXMtJ1xuZXhwb3J0IHZhciBNT1ogPSAnLW1vei0nXG5leHBvcnQgdmFyIFdFQktJVCA9ICctd2Via2l0LSdcblxuZXhwb3J0IHZhciBDT01NRU5UID0gJ2NvbW0nXG5leHBvcnQgdmFyIFJVTEVTRVQgPSAncnVsZSdcbmV4cG9ydCB2YXIgREVDTEFSQVRJT04gPSAnZGVjbCdcblxuZXhwb3J0IHZhciBQQUdFID0gJ0BwYWdlJ1xuZXhwb3J0IHZhciBNRURJQSA9ICdAbWVkaWEnXG5leHBvcnQgdmFyIElNUE9SVCA9ICdAaW1wb3J0J1xuZXhwb3J0IHZhciBDSEFSU0VUID0gJ0BjaGFyc2V0J1xuZXhwb3J0IHZhciBWSUVXUE9SVCA9ICdAdmlld3BvcnQnXG5leHBvcnQgdmFyIFNVUFBPUlRTID0gJ0BzdXBwb3J0cydcbmV4cG9ydCB2YXIgRE9DVU1FTlQgPSAnQGRvY3VtZW50J1xuZXhwb3J0IHZhciBOQU1FU1BBQ0UgPSAnQG5hbWVzcGFjZSdcbmV4cG9ydCB2YXIgS0VZRlJBTUVTID0gJ0BrZXlmcmFtZXMnXG5leHBvcnQgdmFyIEZPTlRfRkFDRSA9ICdAZm9udC1mYWNlJ1xuZXhwb3J0IHZhciBDT1VOVEVSX1NUWUxFID0gJ0Bjb3VudGVyLXN0eWxlJ1xuZXhwb3J0IHZhciBGT05UX0ZFQVRVUkVfVkFMVUVTID0gJ0Bmb250LWZlYXR1cmUtdmFsdWVzJ1xuZXhwb3J0IHZhciBMQVlFUiA9ICdAbGF5ZXInXG4iLCIvKipcbiAqIEBwYXJhbSB7bnVtYmVyfVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgdmFyIGFicyA9IE1hdGguYWJzXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCB2YXIgZnJvbSA9IFN0cmluZy5mcm9tQ2hhckNvZGVcblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH1cbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IHZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNoICh2YWx1ZSwgbGVuZ3RoKSB7XG5cdHJldHVybiBjaGFyYXQodmFsdWUsIDApIF4gNDUgPyAoKCgoKCgobGVuZ3RoIDw8IDIpIF4gY2hhcmF0KHZhbHVlLCAwKSkgPDwgMikgXiBjaGFyYXQodmFsdWUsIDEpKSA8PCAyKSBeIGNoYXJhdCh2YWx1ZSwgMikpIDw8IDIpIF4gY2hhcmF0KHZhbHVlLCAzKSA6IDBcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyaW0gKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZS50cmltKClcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7UmVnRXhwfSBwYXR0ZXJuXG4gKiBAcmV0dXJuIHtzdHJpbmc/fVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2ggKHZhbHVlLCBwYXR0ZXJuKSB7XG5cdHJldHVybiAodmFsdWUgPSBwYXR0ZXJuLmV4ZWModmFsdWUpKSA/IHZhbHVlWzBdIDogdmFsdWVcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7KHN0cmluZ3xSZWdFeHApfSBwYXR0ZXJuXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZW1lbnRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2UgKHZhbHVlLCBwYXR0ZXJuLCByZXBsYWNlbWVudCkge1xuXHRyZXR1cm4gdmFsdWUucmVwbGFjZShwYXR0ZXJuLCByZXBsYWNlbWVudClcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWFyY2hcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluZGV4b2YgKHZhbHVlLCBzZWFyY2gpIHtcblx0cmV0dXJuIHZhbHVlLmluZGV4T2Yoc2VhcmNoKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFyYXQgKHZhbHVlLCBpbmRleCkge1xuXHRyZXR1cm4gdmFsdWUuY2hhckNvZGVBdChpbmRleCkgfCAwXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gYmVnaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0ciAodmFsdWUsIGJlZ2luLCBlbmQpIHtcblx0cmV0dXJuIHZhbHVlLnNsaWNlKGJlZ2luLCBlbmQpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJsZW4gKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZS5sZW5ndGhcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2FueVtdfSB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2l6ZW9mICh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUubGVuZ3RoXG59XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcGFyYW0ge2FueVtdfSBhcnJheVxuICogQHJldHVybiB7YW55fVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kICh2YWx1ZSwgYXJyYXkpIHtcblx0cmV0dXJuIGFycmF5LnB1c2godmFsdWUpLCB2YWx1ZVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nW119IGFycmF5XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZSAoYXJyYXksIGNhbGxiYWNrKSB7XG5cdHJldHVybiBhcnJheS5tYXAoY2FsbGJhY2spLmpvaW4oJycpXG59XG4iLCJpbXBvcnQge2Zyb20sIHRyaW0sIGNoYXJhdCwgc3RybGVuLCBzdWJzdHIsIGFwcGVuZCwgYXNzaWdufSBmcm9tICcuL1V0aWxpdHkuanMnXG5cbmV4cG9ydCB2YXIgbGluZSA9IDFcbmV4cG9ydCB2YXIgY29sdW1uID0gMVxuZXhwb3J0IHZhciBsZW5ndGggPSAwXG5leHBvcnQgdmFyIHBvc2l0aW9uID0gMFxuZXhwb3J0IHZhciBjaGFyYWN0ZXIgPSAwXG5leHBvcnQgdmFyIGNoYXJhY3RlcnMgPSAnJ1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3QgfCBudWxsfSByb290XG4gKiBAcGFyYW0ge29iamVjdCB8IG51bGx9IHBhcmVudFxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7c3RyaW5nW10gfCBzdHJpbmd9IHByb3BzXG4gKiBAcGFyYW0ge29iamVjdFtdIHwgc3RyaW5nfSBjaGlsZHJlblxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9kZSAodmFsdWUsIHJvb3QsIHBhcmVudCwgdHlwZSwgcHJvcHMsIGNoaWxkcmVuLCBsZW5ndGgpIHtcblx0cmV0dXJuIHt2YWx1ZTogdmFsdWUsIHJvb3Q6IHJvb3QsIHBhcmVudDogcGFyZW50LCB0eXBlOiB0eXBlLCBwcm9wczogcHJvcHMsIGNoaWxkcmVuOiBjaGlsZHJlbiwgbGluZTogbGluZSwgY29sdW1uOiBjb2x1bW4sIGxlbmd0aDogbGVuZ3RoLCByZXR1cm46ICcnfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSByb290XG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkgKHJvb3QsIHByb3BzKSB7XG5cdHJldHVybiBhc3NpZ24obm9kZSgnJywgbnVsbCwgbnVsbCwgJycsIG51bGwsIG51bGwsIDApLCByb290LCB7bGVuZ3RoOiAtcm9vdC5sZW5ndGh9LCBwcm9wcylcbn1cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFyICgpIHtcblx0cmV0dXJuIGNoYXJhY3RlclxufVxuXG4vKipcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByZXYgKCkge1xuXHRjaGFyYWN0ZXIgPSBwb3NpdGlvbiA+IDAgPyBjaGFyYXQoY2hhcmFjdGVycywgLS1wb3NpdGlvbikgOiAwXG5cblx0aWYgKGNvbHVtbi0tLCBjaGFyYWN0ZXIgPT09IDEwKVxuXHRcdGNvbHVtbiA9IDEsIGxpbmUtLVxuXG5cdHJldHVybiBjaGFyYWN0ZXJcbn1cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXh0ICgpIHtcblx0Y2hhcmFjdGVyID0gcG9zaXRpb24gPCBsZW5ndGggPyBjaGFyYXQoY2hhcmFjdGVycywgcG9zaXRpb24rKykgOiAwXG5cblx0aWYgKGNvbHVtbisrLCBjaGFyYWN0ZXIgPT09IDEwKVxuXHRcdGNvbHVtbiA9IDEsIGxpbmUrK1xuXG5cdHJldHVybiBjaGFyYWN0ZXJcbn1cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwZWVrICgpIHtcblx0cmV0dXJuIGNoYXJhdChjaGFyYWN0ZXJzLCBwb3NpdGlvbilcbn1cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYXJldCAoKSB7XG5cdHJldHVybiBwb3NpdGlvblxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBiZWdpblxuICogQHBhcmFtIHtudW1iZXJ9IGVuZFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2xpY2UgKGJlZ2luLCBlbmQpIHtcblx0cmV0dXJuIHN1YnN0cihjaGFyYWN0ZXJzLCBiZWdpbiwgZW5kKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbiAodHlwZSkge1xuXHRzd2l0Y2ggKHR5cGUpIHtcblx0XHQvLyBcXDAgXFx0IFxcbiBcXHIgXFxzIHdoaXRlc3BhY2UgdG9rZW5cblx0XHRjYXNlIDA6IGNhc2UgOTogY2FzZSAxMDogY2FzZSAxMzogY2FzZSAzMjpcblx0XHRcdHJldHVybiA1XG5cdFx0Ly8gISArICwgLyA+IEAgfiBpc29sYXRlIHRva2VuXG5cdFx0Y2FzZSAzMzogY2FzZSA0MzogY2FzZSA0NDogY2FzZSA0NzogY2FzZSA2MjogY2FzZSA2NDogY2FzZSAxMjY6XG5cdFx0Ly8gOyB7IH0gYnJlYWtwb2ludCB0b2tlblxuXHRcdGNhc2UgNTk6IGNhc2UgMTIzOiBjYXNlIDEyNTpcblx0XHRcdHJldHVybiA0XG5cdFx0Ly8gOiBhY2NvbXBhbmllZCB0b2tlblxuXHRcdGNhc2UgNTg6XG5cdFx0XHRyZXR1cm4gM1xuXHRcdC8vIFwiICcgKCBbIG9wZW5pbmcgZGVsaW1pdCB0b2tlblxuXHRcdGNhc2UgMzQ6IGNhc2UgMzk6IGNhc2UgNDA6IGNhc2UgOTE6XG5cdFx0XHRyZXR1cm4gMlxuXHRcdC8vICkgXSBjbG9zaW5nIGRlbGltaXQgdG9rZW5cblx0XHRjYXNlIDQxOiBjYXNlIDkzOlxuXHRcdFx0cmV0dXJuIDFcblx0fVxuXG5cdHJldHVybiAwXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHthbnlbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFsbG9jICh2YWx1ZSkge1xuXHRyZXR1cm4gbGluZSA9IGNvbHVtbiA9IDEsIGxlbmd0aCA9IHN0cmxlbihjaGFyYWN0ZXJzID0gdmFsdWUpLCBwb3NpdGlvbiA9IDAsIFtdXG59XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcmV0dXJuIHthbnl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWFsbG9jICh2YWx1ZSkge1xuXHRyZXR1cm4gY2hhcmFjdGVycyA9ICcnLCB2YWx1ZVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxpbWl0ICh0eXBlKSB7XG5cdHJldHVybiB0cmltKHNsaWNlKHBvc2l0aW9uIC0gMSwgZGVsaW1pdGVyKHR5cGUgPT09IDkxID8gdHlwZSArIDIgOiB0eXBlID09PSA0MCA/IHR5cGUgKyAxIDogdHlwZSkpKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7c3RyaW5nW119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZSAodmFsdWUpIHtcblx0cmV0dXJuIGRlYWxsb2ModG9rZW5pemVyKGFsbG9jKHZhbHVlKSkpXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdoaXRlc3BhY2UgKHR5cGUpIHtcblx0d2hpbGUgKGNoYXJhY3RlciA9IHBlZWsoKSlcblx0XHRpZiAoY2hhcmFjdGVyIDwgMzMpXG5cdFx0XHRuZXh0KClcblx0XHRlbHNlXG5cdFx0XHRicmVha1xuXG5cdHJldHVybiB0b2tlbih0eXBlKSA+IDIgfHwgdG9rZW4oY2hhcmFjdGVyKSA+IDMgPyAnJyA6ICcgJ1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nW119IGNoaWxkcmVuXG4gKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRva2VuaXplciAoY2hpbGRyZW4pIHtcblx0d2hpbGUgKG5leHQoKSlcblx0XHRzd2l0Y2ggKHRva2VuKGNoYXJhY3RlcikpIHtcblx0XHRcdGNhc2UgMDogYXBwZW5kKGlkZW50aWZpZXIocG9zaXRpb24gLSAxKSwgY2hpbGRyZW4pXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIDI6IGFwcGVuZChkZWxpbWl0KGNoYXJhY3RlciksIGNoaWxkcmVuKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0ZGVmYXVsdDogYXBwZW5kKGZyb20oY2hhcmFjdGVyKSwgY2hpbGRyZW4pXG5cdFx0fVxuXG5cdHJldHVybiBjaGlsZHJlblxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGluZyAoaW5kZXgsIGNvdW50KSB7XG5cdHdoaWxlICgtLWNvdW50ICYmIG5leHQoKSlcblx0XHQvLyBub3QgMC05IEEtRiBhLWZcblx0XHRpZiAoY2hhcmFjdGVyIDwgNDggfHwgY2hhcmFjdGVyID4gMTAyIHx8IChjaGFyYWN0ZXIgPiA1NyAmJiBjaGFyYWN0ZXIgPCA2NSkgfHwgKGNoYXJhY3RlciA+IDcwICYmIGNoYXJhY3RlciA8IDk3KSlcblx0XHRcdGJyZWFrXG5cblx0cmV0dXJuIHNsaWNlKGluZGV4LCBjYXJldCgpICsgKGNvdW50IDwgNiAmJiBwZWVrKCkgPT0gMzIgJiYgbmV4dCgpID09IDMyKSlcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdHlwZVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsaW1pdGVyICh0eXBlKSB7XG5cdHdoaWxlIChuZXh0KCkpXG5cdFx0c3dpdGNoIChjaGFyYWN0ZXIpIHtcblx0XHRcdC8vIF0gKSBcIiAnXG5cdFx0XHRjYXNlIHR5cGU6XG5cdFx0XHRcdHJldHVybiBwb3NpdGlvblxuXHRcdFx0Ly8gXCIgJ1xuXHRcdFx0Y2FzZSAzNDogY2FzZSAzOTpcblx0XHRcdFx0aWYgKHR5cGUgIT09IDM0ICYmIHR5cGUgIT09IDM5KVxuXHRcdFx0XHRcdGRlbGltaXRlcihjaGFyYWN0ZXIpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHQvLyAoXG5cdFx0XHRjYXNlIDQwOlxuXHRcdFx0XHRpZiAodHlwZSA9PT0gNDEpXG5cdFx0XHRcdFx0ZGVsaW1pdGVyKHR5cGUpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHQvLyBcXFxuXHRcdFx0Y2FzZSA5Mjpcblx0XHRcdFx0bmV4dCgpXG5cdFx0XHRcdGJyZWFrXG5cdFx0fVxuXG5cdHJldHVybiBwb3NpdGlvblxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbW1lbnRlciAodHlwZSwgaW5kZXgpIHtcblx0d2hpbGUgKG5leHQoKSlcblx0XHQvLyAvL1xuXHRcdGlmICh0eXBlICsgY2hhcmFjdGVyID09PSA0NyArIDEwKVxuXHRcdFx0YnJlYWtcblx0XHQvLyAvKlxuXHRcdGVsc2UgaWYgKHR5cGUgKyBjaGFyYWN0ZXIgPT09IDQyICsgNDIgJiYgcGVlaygpID09PSA0Nylcblx0XHRcdGJyZWFrXG5cblx0cmV0dXJuICcvKicgKyBzbGljZShpbmRleCwgcG9zaXRpb24gLSAxKSArICcqJyArIGZyb20odHlwZSA9PT0gNDcgPyB0eXBlIDogbmV4dCgpKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpZmllciAoaW5kZXgpIHtcblx0d2hpbGUgKCF0b2tlbihwZWVrKCkpKVxuXHRcdG5leHQoKVxuXG5cdHJldHVybiBzbGljZShpbmRleCwgcG9zaXRpb24pXG59XG4iLCJpbXBvcnQge0NPTU1FTlQsIFJVTEVTRVQsIERFQ0xBUkFUSU9OfSBmcm9tICcuL0VudW0uanMnXG5pbXBvcnQge2FicywgY2hhcmF0LCB0cmltLCBmcm9tLCBzaXplb2YsIHN0cmxlbiwgc3Vic3RyLCBhcHBlbmQsIHJlcGxhY2UsIGluZGV4b2Z9IGZyb20gJy4vVXRpbGl0eS5qcydcbmltcG9ydCB7bm9kZSwgY2hhciwgcHJldiwgbmV4dCwgcGVlaywgY2FyZXQsIGFsbG9jLCBkZWFsbG9jLCBkZWxpbWl0LCB3aGl0ZXNwYWNlLCBlc2NhcGluZywgaWRlbnRpZmllciwgY29tbWVudGVyfSBmcm9tICcuL1Rva2VuaXplci5qcydcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge29iamVjdFtdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZSAodmFsdWUpIHtcblx0cmV0dXJuIGRlYWxsb2MocGFyc2UoJycsIG51bGwsIG51bGwsIG51bGwsIFsnJ10sIHZhbHVlID0gYWxsb2ModmFsdWUpLCAwLCBbMF0sIHZhbHVlKSlcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7b2JqZWN0fSByb290XG4gKiBAcGFyYW0ge29iamVjdD99IHBhcmVudFxuICogQHBhcmFtIHtzdHJpbmdbXX0gcnVsZVxuICogQHBhcmFtIHtzdHJpbmdbXX0gcnVsZXNcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJ1bGVzZXRzXG4gKiBAcGFyYW0ge251bWJlcltdfSBwc2V1ZG9cbiAqIEBwYXJhbSB7bnVtYmVyW119IHBvaW50c1xuICogQHBhcmFtIHtzdHJpbmdbXX0gZGVjbGFyYXRpb25zXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZSAodmFsdWUsIHJvb3QsIHBhcmVudCwgcnVsZSwgcnVsZXMsIHJ1bGVzZXRzLCBwc2V1ZG8sIHBvaW50cywgZGVjbGFyYXRpb25zKSB7XG5cdHZhciBpbmRleCA9IDBcblx0dmFyIG9mZnNldCA9IDBcblx0dmFyIGxlbmd0aCA9IHBzZXVkb1xuXHR2YXIgYXRydWxlID0gMFxuXHR2YXIgcHJvcGVydHkgPSAwXG5cdHZhciBwcmV2aW91cyA9IDBcblx0dmFyIHZhcmlhYmxlID0gMVxuXHR2YXIgc2Nhbm5pbmcgPSAxXG5cdHZhciBhbXBlcnNhbmQgPSAxXG5cdHZhciBjaGFyYWN0ZXIgPSAwXG5cdHZhciB0eXBlID0gJydcblx0dmFyIHByb3BzID0gcnVsZXNcblx0dmFyIGNoaWxkcmVuID0gcnVsZXNldHNcblx0dmFyIHJlZmVyZW5jZSA9IHJ1bGVcblx0dmFyIGNoYXJhY3RlcnMgPSB0eXBlXG5cblx0d2hpbGUgKHNjYW5uaW5nKVxuXHRcdHN3aXRjaCAocHJldmlvdXMgPSBjaGFyYWN0ZXIsIGNoYXJhY3RlciA9IG5leHQoKSkge1xuXHRcdFx0Ly8gKFxuXHRcdFx0Y2FzZSA0MDpcblx0XHRcdFx0aWYgKHByZXZpb3VzICE9IDEwOCAmJiBjaGFyYXQoY2hhcmFjdGVycywgbGVuZ3RoIC0gMSkgPT0gNTgpIHtcblx0XHRcdFx0XHRpZiAoaW5kZXhvZihjaGFyYWN0ZXJzICs9IHJlcGxhY2UoZGVsaW1pdChjaGFyYWN0ZXIpLCAnJicsICcmXFxmJyksICcmXFxmJykgIT0gLTEpXG5cdFx0XHRcdFx0XHRhbXBlcnNhbmQgPSAtMVxuXHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdH1cblx0XHRcdC8vIFwiICcgW1xuXHRcdFx0Y2FzZSAzNDogY2FzZSAzOTogY2FzZSA5MTpcblx0XHRcdFx0Y2hhcmFjdGVycyArPSBkZWxpbWl0KGNoYXJhY3Rlcilcblx0XHRcdFx0YnJlYWtcblx0XHRcdC8vIFxcdCBcXG4gXFxyIFxcc1xuXHRcdFx0Y2FzZSA5OiBjYXNlIDEwOiBjYXNlIDEzOiBjYXNlIDMyOlxuXHRcdFx0XHRjaGFyYWN0ZXJzICs9IHdoaXRlc3BhY2UocHJldmlvdXMpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHQvLyBcXFxuXHRcdFx0Y2FzZSA5Mjpcblx0XHRcdFx0Y2hhcmFjdGVycyArPSBlc2NhcGluZyhjYXJldCgpIC0gMSwgNylcblx0XHRcdFx0Y29udGludWVcblx0XHRcdC8vIC9cblx0XHRcdGNhc2UgNDc6XG5cdFx0XHRcdHN3aXRjaCAocGVlaygpKSB7XG5cdFx0XHRcdFx0Y2FzZSA0MjogY2FzZSA0Nzpcblx0XHRcdFx0XHRcdGFwcGVuZChjb21tZW50KGNvbW1lbnRlcihuZXh0KCksIGNhcmV0KCkpLCByb290LCBwYXJlbnQpLCBkZWNsYXJhdGlvbnMpXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRjaGFyYWN0ZXJzICs9ICcvJ1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHQvLyB7XG5cdFx0XHRjYXNlIDEyMyAqIHZhcmlhYmxlOlxuXHRcdFx0XHRwb2ludHNbaW5kZXgrK10gPSBzdHJsZW4oY2hhcmFjdGVycykgKiBhbXBlcnNhbmRcblx0XHRcdC8vIH0gOyBcXDBcblx0XHRcdGNhc2UgMTI1ICogdmFyaWFibGU6IGNhc2UgNTk6IGNhc2UgMDpcblx0XHRcdFx0c3dpdGNoIChjaGFyYWN0ZXIpIHtcblx0XHRcdFx0XHQvLyBcXDAgfVxuXHRcdFx0XHRcdGNhc2UgMDogY2FzZSAxMjU6IHNjYW5uaW5nID0gMFxuXHRcdFx0XHRcdC8vIDtcblx0XHRcdFx0XHRjYXNlIDU5ICsgb2Zmc2V0OiBpZiAoYW1wZXJzYW5kID09IC0xKSBjaGFyYWN0ZXJzID0gcmVwbGFjZShjaGFyYWN0ZXJzLCAvXFxmL2csICcnKVxuXHRcdFx0XHRcdFx0aWYgKHByb3BlcnR5ID4gMCAmJiAoc3RybGVuKGNoYXJhY3RlcnMpIC0gbGVuZ3RoKSlcblx0XHRcdFx0XHRcdFx0YXBwZW5kKHByb3BlcnR5ID4gMzIgPyBkZWNsYXJhdGlvbihjaGFyYWN0ZXJzICsgJzsnLCBydWxlLCBwYXJlbnQsIGxlbmd0aCAtIDEpIDogZGVjbGFyYXRpb24ocmVwbGFjZShjaGFyYWN0ZXJzLCAnICcsICcnKSArICc7JywgcnVsZSwgcGFyZW50LCBsZW5ndGggLSAyKSwgZGVjbGFyYXRpb25zKVxuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHQvLyBAIDtcblx0XHRcdFx0XHRjYXNlIDU5OiBjaGFyYWN0ZXJzICs9ICc7J1xuXHRcdFx0XHRcdC8vIHsgcnVsZS9hdC1ydWxlXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdGFwcGVuZChyZWZlcmVuY2UgPSBydWxlc2V0KGNoYXJhY3RlcnMsIHJvb3QsIHBhcmVudCwgaW5kZXgsIG9mZnNldCwgcnVsZXMsIHBvaW50cywgdHlwZSwgcHJvcHMgPSBbXSwgY2hpbGRyZW4gPSBbXSwgbGVuZ3RoKSwgcnVsZXNldHMpXG5cblx0XHRcdFx0XHRcdGlmIChjaGFyYWN0ZXIgPT09IDEyMylcblx0XHRcdFx0XHRcdFx0aWYgKG9mZnNldCA9PT0gMClcblx0XHRcdFx0XHRcdFx0XHRwYXJzZShjaGFyYWN0ZXJzLCByb290LCByZWZlcmVuY2UsIHJlZmVyZW5jZSwgcHJvcHMsIHJ1bGVzZXRzLCBsZW5ndGgsIHBvaW50cywgY2hpbGRyZW4pXG5cdFx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0XHRzd2l0Y2ggKGF0cnVsZSA9PT0gOTkgJiYgY2hhcmF0KGNoYXJhY3RlcnMsIDMpID09PSAxMTAgPyAxMDAgOiBhdHJ1bGUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIGQgbCBtIHNcblx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgMTAwOiBjYXNlIDEwODogY2FzZSAxMDk6IGNhc2UgMTE1OlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYXJzZSh2YWx1ZSwgcmVmZXJlbmNlLCByZWZlcmVuY2UsIHJ1bGUgJiYgYXBwZW5kKHJ1bGVzZXQodmFsdWUsIHJlZmVyZW5jZSwgcmVmZXJlbmNlLCAwLCAwLCBydWxlcywgcG9pbnRzLCB0eXBlLCBydWxlcywgcHJvcHMgPSBbXSwgbGVuZ3RoKSwgY2hpbGRyZW4pLCBydWxlcywgY2hpbGRyZW4sIGxlbmd0aCwgcG9pbnRzLCBydWxlID8gcHJvcHMgOiBjaGlsZHJlbilcblx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhcnNlKGNoYXJhY3RlcnMsIHJlZmVyZW5jZSwgcmVmZXJlbmNlLCByZWZlcmVuY2UsIFsnJ10sIGNoaWxkcmVuLCAwLCBwb2ludHMsIGNoaWxkcmVuKVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGluZGV4ID0gb2Zmc2V0ID0gcHJvcGVydHkgPSAwLCB2YXJpYWJsZSA9IGFtcGVyc2FuZCA9IDEsIHR5cGUgPSBjaGFyYWN0ZXJzID0gJycsIGxlbmd0aCA9IHBzZXVkb1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Ly8gOlxuXHRcdFx0Y2FzZSA1ODpcblx0XHRcdFx0bGVuZ3RoID0gMSArIHN0cmxlbihjaGFyYWN0ZXJzKSwgcHJvcGVydHkgPSBwcmV2aW91c1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0aWYgKHZhcmlhYmxlIDwgMSlcblx0XHRcdFx0XHRpZiAoY2hhcmFjdGVyID09IDEyMylcblx0XHRcdFx0XHRcdC0tdmFyaWFibGVcblx0XHRcdFx0XHRlbHNlIGlmIChjaGFyYWN0ZXIgPT0gMTI1ICYmIHZhcmlhYmxlKysgPT0gMCAmJiBwcmV2KCkgPT0gMTI1KVxuXHRcdFx0XHRcdFx0Y29udGludWVcblxuXHRcdFx0XHRzd2l0Y2ggKGNoYXJhY3RlcnMgKz0gZnJvbShjaGFyYWN0ZXIpLCBjaGFyYWN0ZXIgKiB2YXJpYWJsZSkge1xuXHRcdFx0XHRcdC8vICZcblx0XHRcdFx0XHRjYXNlIDM4OlxuXHRcdFx0XHRcdFx0YW1wZXJzYW5kID0gb2Zmc2V0ID4gMCA/IDEgOiAoY2hhcmFjdGVycyArPSAnXFxmJywgLTEpXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdC8vICxcblx0XHRcdFx0XHRjYXNlIDQ0OlxuXHRcdFx0XHRcdFx0cG9pbnRzW2luZGV4KytdID0gKHN0cmxlbihjaGFyYWN0ZXJzKSAtIDEpICogYW1wZXJzYW5kLCBhbXBlcnNhbmQgPSAxXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdC8vIEBcblx0XHRcdFx0XHRjYXNlIDY0OlxuXHRcdFx0XHRcdFx0Ly8gLVxuXHRcdFx0XHRcdFx0aWYgKHBlZWsoKSA9PT0gNDUpXG5cdFx0XHRcdFx0XHRcdGNoYXJhY3RlcnMgKz0gZGVsaW1pdChuZXh0KCkpXG5cblx0XHRcdFx0XHRcdGF0cnVsZSA9IHBlZWsoKSwgb2Zmc2V0ID0gbGVuZ3RoID0gc3RybGVuKHR5cGUgPSBjaGFyYWN0ZXJzICs9IGlkZW50aWZpZXIoY2FyZXQoKSkpLCBjaGFyYWN0ZXIrK1xuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHQvLyAtXG5cdFx0XHRcdFx0Y2FzZSA0NTpcblx0XHRcdFx0XHRcdGlmIChwcmV2aW91cyA9PT0gNDUgJiYgc3RybGVuKGNoYXJhY3RlcnMpID09IDIpXG5cdFx0XHRcdFx0XHRcdHZhcmlhYmxlID0gMFxuXHRcdFx0XHR9XG5cdFx0fVxuXG5cdHJldHVybiBydWxlc2V0c1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0P30gcGFyZW50XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJ1bGVzXG4gKiBAcGFyYW0ge251bWJlcltdfSBwb2ludHNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmdbXX0gY2hpbGRyZW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzZXQgKHZhbHVlLCByb290LCBwYXJlbnQsIGluZGV4LCBvZmZzZXQsIHJ1bGVzLCBwb2ludHMsIHR5cGUsIHByb3BzLCBjaGlsZHJlbiwgbGVuZ3RoKSB7XG5cdHZhciBwb3N0ID0gb2Zmc2V0IC0gMVxuXHR2YXIgcnVsZSA9IG9mZnNldCA9PT0gMCA/IHJ1bGVzIDogWycnXVxuXHR2YXIgc2l6ZSA9IHNpemVvZihydWxlKVxuXG5cdGZvciAodmFyIGkgPSAwLCBqID0gMCwgayA9IDA7IGkgPCBpbmRleDsgKytpKVxuXHRcdGZvciAodmFyIHggPSAwLCB5ID0gc3Vic3RyKHZhbHVlLCBwb3N0ICsgMSwgcG9zdCA9IGFicyhqID0gcG9pbnRzW2ldKSksIHogPSB2YWx1ZTsgeCA8IHNpemU7ICsreClcblx0XHRcdGlmICh6ID0gdHJpbShqID4gMCA/IHJ1bGVbeF0gKyAnICcgKyB5IDogcmVwbGFjZSh5LCAvJlxcZi9nLCBydWxlW3hdKSkpXG5cdFx0XHRcdHByb3BzW2srK10gPSB6XG5cblx0cmV0dXJuIG5vZGUodmFsdWUsIHJvb3QsIHBhcmVudCwgb2Zmc2V0ID09PSAwID8gUlVMRVNFVCA6IHR5cGUsIHByb3BzLCBjaGlsZHJlbiwgbGVuZ3RoKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0P30gcGFyZW50XG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21tZW50ICh2YWx1ZSwgcm9vdCwgcGFyZW50KSB7XG5cdHJldHVybiBub2RlKHZhbHVlLCByb290LCBwYXJlbnQsIENPTU1FTlQsIGZyb20oY2hhcigpKSwgc3Vic3RyKHZhbHVlLCAyLCAtMiksIDApXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge29iamVjdH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3Q/fSBwYXJlbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY2xhcmF0aW9uICh2YWx1ZSwgcm9vdCwgcGFyZW50LCBsZW5ndGgpIHtcblx0cmV0dXJuIG5vZGUodmFsdWUsIHJvb3QsIHBhcmVudCwgREVDTEFSQVRJT04sIHN1YnN0cih2YWx1ZSwgMCwgbGVuZ3RoKSwgc3Vic3RyKHZhbHVlLCBsZW5ndGggKyAxLCAtMSksIGxlbmd0aClcbn1cbiIsImltcG9ydCB7SU1QT1JULCBMQVlFUiwgQ09NTUVOVCwgUlVMRVNFVCwgREVDTEFSQVRJT04sIEtFWUZSQU1FU30gZnJvbSAnLi9FbnVtLmpzJ1xuaW1wb3J0IHtzdHJsZW4sIHNpemVvZn0gZnJvbSAnLi9VdGlsaXR5LmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0W119IGNoaWxkcmVuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplIChjaGlsZHJlbiwgY2FsbGJhY2spIHtcblx0dmFyIG91dHB1dCA9ICcnXG5cdHZhciBsZW5ndGggPSBzaXplb2YoY2hpbGRyZW4pXG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcblx0XHRvdXRwdXQgKz0gY2FsbGJhY2soY2hpbGRyZW5baV0sIGksIGNoaWxkcmVuLCBjYWxsYmFjaykgfHwgJydcblxuXHRyZXR1cm4gb3V0cHV0XG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHtvYmplY3RbXX0gY2hpbGRyZW5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnkgKGVsZW1lbnQsIGluZGV4LCBjaGlsZHJlbiwgY2FsbGJhY2spIHtcblx0c3dpdGNoIChlbGVtZW50LnR5cGUpIHtcblx0XHRjYXNlIExBWUVSOiBpZiAoZWxlbWVudC5jaGlsZHJlbi5sZW5ndGgpIGJyZWFrXG5cdFx0Y2FzZSBJTVBPUlQ6IGNhc2UgREVDTEFSQVRJT046IHJldHVybiBlbGVtZW50LnJldHVybiA9IGVsZW1lbnQucmV0dXJuIHx8IGVsZW1lbnQudmFsdWVcblx0XHRjYXNlIENPTU1FTlQ6IHJldHVybiAnJ1xuXHRcdGNhc2UgS0VZRlJBTUVTOiByZXR1cm4gZWxlbWVudC5yZXR1cm4gPSBlbGVtZW50LnZhbHVlICsgJ3snICsgc2VyaWFsaXplKGVsZW1lbnQuY2hpbGRyZW4sIGNhbGxiYWNrKSArICd9J1xuXHRcdGNhc2UgUlVMRVNFVDogZWxlbWVudC52YWx1ZSA9IGVsZW1lbnQucHJvcHMuam9pbignLCcpXG5cdH1cblxuXHRyZXR1cm4gc3RybGVuKGNoaWxkcmVuID0gc2VyaWFsaXplKGVsZW1lbnQuY2hpbGRyZW4sIGNhbGxiYWNrKSkgPyBlbGVtZW50LnJldHVybiA9IGVsZW1lbnQudmFsdWUgKyAneycgKyBjaGlsZHJlbiArICd9JyA6ICcnXG59XG4iLCJpbXBvcnQge01TLCBNT1osIFdFQktJVCwgUlVMRVNFVCwgS0VZRlJBTUVTLCBERUNMQVJBVElPTn0gZnJvbSAnLi9FbnVtLmpzJ1xuaW1wb3J0IHttYXRjaCwgY2hhcmF0LCBzdWJzdHIsIHN0cmxlbiwgc2l6ZW9mLCByZXBsYWNlLCBjb21iaW5lfSBmcm9tICcuL1V0aWxpdHkuanMnXG5pbXBvcnQge2NvcHksIHRva2VuaXplfSBmcm9tICcuL1Rva2VuaXplci5qcydcbmltcG9ydCB7c2VyaWFsaXplfSBmcm9tICcuL1NlcmlhbGl6ZXIuanMnXG5pbXBvcnQge3ByZWZpeH0gZnJvbSAnLi9QcmVmaXhlci5qcydcblxuLyoqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uW119IGNvbGxlY3Rpb25cbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZSAoY29sbGVjdGlvbikge1xuXHR2YXIgbGVuZ3RoID0gc2l6ZW9mKGNvbGxlY3Rpb24pXG5cblx0cmV0dXJuIGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCwgY2hpbGRyZW4sIGNhbGxiYWNrKSB7XG5cdFx0dmFyIG91dHB1dCA9ICcnXG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuXHRcdFx0b3V0cHV0ICs9IGNvbGxlY3Rpb25baV0oZWxlbWVudCwgaW5kZXgsIGNoaWxkcmVuLCBjYWxsYmFjaykgfHwgJydcblxuXHRcdHJldHVybiBvdXRwdXRcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzaGVldCAoY2FsbGJhY2spIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0aWYgKCFlbGVtZW50LnJvb3QpXG5cdFx0XHRpZiAoZWxlbWVudCA9IGVsZW1lbnQucmV0dXJuKVxuXHRcdFx0XHRjYWxsYmFjayhlbGVtZW50KVxuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHtvYmplY3RbXX0gY2hpbGRyZW5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmVmaXhlciAoZWxlbWVudCwgaW5kZXgsIGNoaWxkcmVuLCBjYWxsYmFjaykge1xuXHRpZiAoZWxlbWVudC5sZW5ndGggPiAtMSlcblx0XHRpZiAoIWVsZW1lbnQucmV0dXJuKVxuXHRcdFx0c3dpdGNoIChlbGVtZW50LnR5cGUpIHtcblx0XHRcdFx0Y2FzZSBERUNMQVJBVElPTjogZWxlbWVudC5yZXR1cm4gPSBwcmVmaXgoZWxlbWVudC52YWx1ZSwgZWxlbWVudC5sZW5ndGgsIGNoaWxkcmVuKVxuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHRjYXNlIEtFWUZSQU1FUzpcblx0XHRcdFx0XHRyZXR1cm4gc2VyaWFsaXplKFtjb3B5KGVsZW1lbnQsIHt2YWx1ZTogcmVwbGFjZShlbGVtZW50LnZhbHVlLCAnQCcsICdAJyArIFdFQktJVCl9KV0sIGNhbGxiYWNrKVxuXHRcdFx0XHRjYXNlIFJVTEVTRVQ6XG5cdFx0XHRcdFx0aWYgKGVsZW1lbnQubGVuZ3RoKVxuXHRcdFx0XHRcdFx0cmV0dXJuIGNvbWJpbmUoZWxlbWVudC5wcm9wcywgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRcdHN3aXRjaCAobWF0Y2godmFsdWUsIC8oOjpwbGFjXFx3K3w6cmVhZC1cXHcrKS8pKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gOnJlYWQtKG9ubHl8d3JpdGUpXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnOnJlYWQtb25seSc6IGNhc2UgJzpyZWFkLXdyaXRlJzpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBzZXJpYWxpemUoW2NvcHkoZWxlbWVudCwge3Byb3BzOiBbcmVwbGFjZSh2YWx1ZSwgLzoocmVhZC1cXHcrKS8sICc6JyArIE1PWiArICckMScpXX0pXSwgY2FsbGJhY2spXG5cdFx0XHRcdFx0XHRcdFx0Ly8gOnBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnOjpwbGFjZWhvbGRlcic6XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2VyaWFsaXplKFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29weShlbGVtZW50LCB7cHJvcHM6IFtyZXBsYWNlKHZhbHVlLCAvOihwbGFjXFx3KykvLCAnOicgKyBXRUJLSVQgKyAnaW5wdXQtJDEnKV19KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29weShlbGVtZW50LCB7cHJvcHM6IFtyZXBsYWNlKHZhbHVlLCAvOihwbGFjXFx3KykvLCAnOicgKyBNT1ogKyAnJDEnKV19KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29weShlbGVtZW50LCB7cHJvcHM6IFtyZXBsYWNlKHZhbHVlLCAvOihwbGFjXFx3KykvLCBNUyArICdpbnB1dC0kMScpXX0pXG5cdFx0XHRcdFx0XHRcdFx0XHRdLCBjYWxsYmFjaylcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHJldHVybiAnJ1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gZWxlbWVudFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0ge29iamVjdFtdfSBjaGlsZHJlblxuICovXG5leHBvcnQgZnVuY3Rpb24gbmFtZXNwYWNlIChlbGVtZW50KSB7XG5cdHN3aXRjaCAoZWxlbWVudC50eXBlKSB7XG5cdFx0Y2FzZSBSVUxFU0VUOlxuXHRcdFx0ZWxlbWVudC5wcm9wcyA9IGVsZW1lbnQucHJvcHMubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gY29tYmluZSh0b2tlbml6ZSh2YWx1ZSksIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIGNoaWxkcmVuKSB7XG5cdFx0XHRcdFx0c3dpdGNoIChjaGFyYXQodmFsdWUsIDApKSB7XG5cdFx0XHRcdFx0XHQvLyBcXGZcblx0XHRcdFx0XHRcdGNhc2UgMTI6XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzdWJzdHIodmFsdWUsIDEsIHN0cmxlbih2YWx1ZSkpXG5cdFx0XHRcdFx0XHQvLyBcXDAgKCArID4gflxuXHRcdFx0XHRcdFx0Y2FzZSAwOiBjYXNlIDQwOiBjYXNlIDQzOiBjYXNlIDYyOiBjYXNlIDEyNjpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlXG5cdFx0XHRcdFx0XHQvLyA6XG5cdFx0XHRcdFx0XHRjYXNlIDU4OlxuXHRcdFx0XHRcdFx0XHRpZiAoY2hpbGRyZW5bKytpbmRleF0gPT09ICdnbG9iYWwnKVxuXHRcdFx0XHRcdFx0XHRcdGNoaWxkcmVuW2luZGV4XSA9ICcnLCBjaGlsZHJlblsrK2luZGV4XSA9ICdcXGYnICsgc3Vic3RyKGNoaWxkcmVuW2luZGV4XSwgaW5kZXggPSAxLCAtMSlcblx0XHRcdFx0XHRcdC8vIFxcc1xuXHRcdFx0XHRcdFx0Y2FzZSAzMjpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGluZGV4ID09PSAxID8gJycgOiB2YWx1ZVxuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0c3dpdGNoIChpbmRleCkge1xuXHRcdFx0XHRcdFx0XHRcdGNhc2UgMDogZWxlbWVudCA9IHZhbHVlXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2l6ZW9mKGNoaWxkcmVuKSA+IDEgPyAnJyA6IHZhbHVlXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSBpbmRleCA9IHNpemVvZihjaGlsZHJlbikgLSAxOiBjYXNlIDI6XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gaW5kZXggPT09IDIgPyB2YWx1ZSArIGVsZW1lbnQgKyBlbGVtZW50IDogdmFsdWUgKyBlbGVtZW50XG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fSlcblx0fVxufVxuIiwiZnVuY3Rpb24gbWVtb2l6ZShmbikge1xuICB2YXIgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChjYWNoZVthcmddID09PSB1bmRlZmluZWQpIGNhY2hlW2FyZ10gPSBmbihhcmcpO1xuICAgIHJldHVybiBjYWNoZVthcmddO1xuICB9O1xufVxuXG5leHBvcnQgeyBtZW1vaXplIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tICdAZW1vdGlvbi9zaGVldCc7XG5pbXBvcnQgeyBkZWFsbG9jLCBhbGxvYywgbmV4dCwgdG9rZW4sIGZyb20sIHBlZWssIGRlbGltaXQsIHNsaWNlLCBwb3NpdGlvbiwgUlVMRVNFVCwgY29tYmluZSwgbWF0Y2gsIHNlcmlhbGl6ZSwgY29weSwgcmVwbGFjZSwgV0VCS0lULCBNT1osIE1TLCBLRVlGUkFNRVMsIERFQ0xBUkFUSU9OLCBoYXNoLCBjaGFyYXQsIHN0cmxlbiwgaW5kZXhvZiwgc3RyaW5naWZ5LCBDT01NRU5ULCBydWxlc2hlZXQsIG1pZGRsZXdhcmUsIGNvbXBpbGUgfSBmcm9tICdzdHlsaXMnO1xuaW1wb3J0ICdAZW1vdGlvbi93ZWFrLW1lbW9pemUnO1xuaW1wb3J0ICdAZW1vdGlvbi9tZW1vaXplJztcblxudmFyIGlkZW50aWZpZXJXaXRoUG9pbnRUcmFja2luZyA9IGZ1bmN0aW9uIGlkZW50aWZpZXJXaXRoUG9pbnRUcmFja2luZyhiZWdpbiwgcG9pbnRzLCBpbmRleCkge1xuICB2YXIgcHJldmlvdXMgPSAwO1xuICB2YXIgY2hhcmFjdGVyID0gMDtcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHByZXZpb3VzID0gY2hhcmFjdGVyO1xuICAgIGNoYXJhY3RlciA9IHBlZWsoKTsgLy8gJlxcZlxuXG4gICAgaWYgKHByZXZpb3VzID09PSAzOCAmJiBjaGFyYWN0ZXIgPT09IDEyKSB7XG4gICAgICBwb2ludHNbaW5kZXhdID0gMTtcbiAgICB9XG5cbiAgICBpZiAodG9rZW4oY2hhcmFjdGVyKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbmV4dCgpO1xuICB9XG5cbiAgcmV0dXJuIHNsaWNlKGJlZ2luLCBwb3NpdGlvbik7XG59O1xuXG52YXIgdG9SdWxlcyA9IGZ1bmN0aW9uIHRvUnVsZXMocGFyc2VkLCBwb2ludHMpIHtcbiAgLy8gcHJldGVuZCB3ZSd2ZSBzdGFydGVkIHdpdGggYSBjb21tYVxuICB2YXIgaW5kZXggPSAtMTtcbiAgdmFyIGNoYXJhY3RlciA9IDQ0O1xuXG4gIGRvIHtcbiAgICBzd2l0Y2ggKHRva2VuKGNoYXJhY3RlcikpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgLy8gJlxcZlxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSAzOCAmJiBwZWVrKCkgPT09IDEyKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBub3QgMTAwJSBjb3JyZWN0LCB3ZSBkb24ndCBhY2NvdW50IGZvciBsaXRlcmFsIHNlcXVlbmNlcyBoZXJlIC0gbGlrZSBmb3IgZXhhbXBsZSBxdW90ZWQgc3RyaW5nc1xuICAgICAgICAgIC8vIHN0eWxpcyBpbnNlcnRzIFxcZiBhZnRlciAmIHRvIGtub3cgd2hlbiAmIHdoZXJlIGl0IHNob3VsZCByZXBsYWNlIHRoaXMgc2VxdWVuY2Ugd2l0aCB0aGUgY29udGV4dCBzZWxlY3RvclxuICAgICAgICAgIC8vIGFuZCB3aGVuIGl0IHNob3VsZCBqdXN0IGNvbmNhdGVuYXRlIHRoZSBvdXRlciBhbmQgaW5uZXIgc2VsZWN0b3JzXG4gICAgICAgICAgLy8gaXQncyB2ZXJ5IHVubGlrZWx5IGZvciB0aGlzIHNlcXVlbmNlIHRvIGFjdHVhbGx5IGFwcGVhciBpbiBhIGRpZmZlcmVudCBjb250ZXh0LCBzbyB3ZSBqdXN0IGxldmVyYWdlIHRoaXMgZmFjdCBoZXJlXG4gICAgICAgICAgcG9pbnRzW2luZGV4XSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJzZWRbaW5kZXhdICs9IGlkZW50aWZpZXJXaXRoUG9pbnRUcmFja2luZyhwb3NpdGlvbiAtIDEsIHBvaW50cywgaW5kZXgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICBwYXJzZWRbaW5kZXhdICs9IGRlbGltaXQoY2hhcmFjdGVyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgNDpcbiAgICAgICAgLy8gY29tbWFcbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gNDQpIHtcbiAgICAgICAgICAvLyBjb2xvblxuICAgICAgICAgIHBhcnNlZFsrK2luZGV4XSA9IHBlZWsoKSA9PT0gNTggPyAnJlxcZicgOiAnJztcbiAgICAgICAgICBwb2ludHNbaW5kZXhdID0gcGFyc2VkW2luZGV4XS5sZW5ndGg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgLy8gZmFsbHRocm91Z2hcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcGFyc2VkW2luZGV4XSArPSBmcm9tKGNoYXJhY3Rlcik7XG4gICAgfVxuICB9IHdoaWxlIChjaGFyYWN0ZXIgPSBuZXh0KCkpO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuXG52YXIgZ2V0UnVsZXMgPSBmdW5jdGlvbiBnZXRSdWxlcyh2YWx1ZSwgcG9pbnRzKSB7XG4gIHJldHVybiBkZWFsbG9jKHRvUnVsZXMoYWxsb2ModmFsdWUpLCBwb2ludHMpKTtcbn07IC8vIFdlYWtTZXQgd291bGQgYmUgbW9yZSBhcHByb3ByaWF0ZSwgYnV0IG9ubHkgV2Vha01hcCBpcyBzdXBwb3J0ZWQgaW4gSUUxMVxuXG5cbnZhciBmaXhlZEVsZW1lbnRzID0gLyogI19fUFVSRV9fICovbmV3IFdlYWtNYXAoKTtcbnZhciBjb21wYXQgPSBmdW5jdGlvbiBjb21wYXQoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC50eXBlICE9PSAncnVsZScgfHwgIWVsZW1lbnQucGFyZW50IHx8IC8vIHBvc2l0aXZlIC5sZW5ndGggaW5kaWNhdGVzIHRoYXQgdGhpcyBydWxlIGNvbnRhaW5zIHBzZXVkb1xuICAvLyBuZWdhdGl2ZSAubGVuZ3RoIGluZGljYXRlcyB0aGF0IHRoaXMgcnVsZSBoYXMgYmVlbiBhbHJlYWR5IHByZWZpeGVkXG4gIGVsZW1lbnQubGVuZ3RoIDwgMSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB2YWx1ZSA9IGVsZW1lbnQudmFsdWUsXG4gICAgICBwYXJlbnQgPSBlbGVtZW50LnBhcmVudDtcbiAgdmFyIGlzSW1wbGljaXRSdWxlID0gZWxlbWVudC5jb2x1bW4gPT09IHBhcmVudC5jb2x1bW4gJiYgZWxlbWVudC5saW5lID09PSBwYXJlbnQubGluZTtcblxuICB3aGlsZSAocGFyZW50LnR5cGUgIT09ICdydWxlJykge1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgaWYgKCFwYXJlbnQpIHJldHVybjtcbiAgfSAvLyBzaG9ydC1jaXJjdWl0IGZvciB0aGUgc2ltcGxlc3QgY2FzZVxuXG5cbiAgaWYgKGVsZW1lbnQucHJvcHMubGVuZ3RoID09PSAxICYmIHZhbHVlLmNoYXJDb2RlQXQoMCkgIT09IDU4XG4gIC8qIGNvbG9uICovXG4gICYmICFmaXhlZEVsZW1lbnRzLmdldChwYXJlbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIGlmIHRoaXMgaXMgYW4gaW1wbGljaXRseSBpbnNlcnRlZCBydWxlICh0aGUgb25lIGVhZ2VybHkgaW5zZXJ0ZWQgYXQgdGhlIGVhY2ggbmV3IG5lc3RlZCBsZXZlbClcbiAgLy8gdGhlbiB0aGUgcHJvcHMgaGFzIGFscmVhZHkgYmVlbiBtYW5pcHVsYXRlZCBiZWZvcmVoYW5kIGFzIHRoZXkgdGhhdCBhcnJheSBpcyBzaGFyZWQgYmV0d2VlbiBpdCBhbmQgaXRzIFwicnVsZSBwYXJlbnRcIlxuXG5cbiAgaWYgKGlzSW1wbGljaXRSdWxlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZml4ZWRFbGVtZW50cy5zZXQoZWxlbWVudCwgdHJ1ZSk7XG4gIHZhciBwb2ludHMgPSBbXTtcbiAgdmFyIHJ1bGVzID0gZ2V0UnVsZXModmFsdWUsIHBvaW50cyk7XG4gIHZhciBwYXJlbnRSdWxlcyA9IHBhcmVudC5wcm9wcztcblxuICBmb3IgKHZhciBpID0gMCwgayA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGFyZW50UnVsZXMubGVuZ3RoOyBqKyssIGsrKykge1xuICAgICAgZWxlbWVudC5wcm9wc1trXSA9IHBvaW50c1tpXSA/IHJ1bGVzW2ldLnJlcGxhY2UoLyZcXGYvZywgcGFyZW50UnVsZXNbal0pIDogcGFyZW50UnVsZXNbal0gKyBcIiBcIiArIHJ1bGVzW2ldO1xuICAgIH1cbiAgfVxufTtcbnZhciByZW1vdmVMYWJlbCA9IGZ1bmN0aW9uIHJlbW92ZUxhYmVsKGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2RlY2wnKSB7XG4gICAgdmFyIHZhbHVlID0gZWxlbWVudC52YWx1ZTtcblxuICAgIGlmICggLy8gY2hhcmNvZGUgZm9yIGxcbiAgICB2YWx1ZS5jaGFyQ29kZUF0KDApID09PSAxMDggJiYgLy8gY2hhcmNvZGUgZm9yIGJcbiAgICB2YWx1ZS5jaGFyQ29kZUF0KDIpID09PSA5OCkge1xuICAgICAgLy8gdGhpcyBpZ25vcmVzIGxhYmVsXG4gICAgICBlbGVtZW50W1wicmV0dXJuXCJdID0gJyc7XG4gICAgICBlbGVtZW50LnZhbHVlID0gJyc7XG4gICAgfVxuICB9XG59O1xudmFyIGlnbm9yZUZsYWcgPSAnZW1vdGlvbi1kaXNhYmxlLXNlcnZlci1yZW5kZXJpbmctdW5zYWZlLXNlbGVjdG9yLXdhcm5pbmctcGxlYXNlLWRvLW5vdC11c2UtdGhpcy10aGUtd2FybmluZy1leGlzdHMtZm9yLWEtcmVhc29uJztcblxudmFyIGlzSWdub3JpbmdDb21tZW50ID0gZnVuY3Rpb24gaXNJZ25vcmluZ0NvbW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC50eXBlID09PSAnY29tbScgJiYgZWxlbWVudC5jaGlsZHJlbi5pbmRleE9mKGlnbm9yZUZsYWcpID4gLTE7XG59O1xuXG52YXIgY3JlYXRlVW5zYWZlU2VsZWN0b3JzQWxhcm0gPSBmdW5jdGlvbiBjcmVhdGVVbnNhZmVTZWxlY3RvcnNBbGFybShjYWNoZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4LCBjaGlsZHJlbikge1xuICAgIGlmIChlbGVtZW50LnR5cGUgIT09ICdydWxlJyB8fCBjYWNoZS5jb21wYXQpIHJldHVybjtcbiAgICB2YXIgdW5zYWZlUHNldWRvQ2xhc3NlcyA9IGVsZW1lbnQudmFsdWUubWF0Y2goLyg6Zmlyc3R8Om50aHw6bnRoLWxhc3QpLWNoaWxkL2cpO1xuXG4gICAgaWYgKHVuc2FmZVBzZXVkb0NsYXNzZXMpIHtcbiAgICAgIHZhciBpc05lc3RlZCA9ICEhZWxlbWVudC5wYXJlbnQ7IC8vIGluIG5lc3RlZCBydWxlcyBjb21tZW50cyBiZWNvbWUgY2hpbGRyZW4gb2YgdGhlIFwiYXV0by1pbnNlcnRlZFwiIHJ1bGUgYW5kIHRoYXQncyBhbHdheXMgdGhlIGBlbGVtZW50LnBhcmVudGBcbiAgICAgIC8vXG4gICAgICAvLyBjb25zaWRlcmluZyB0aGlzIGlucHV0OlxuICAgICAgLy8gLmEge1xuICAgICAgLy8gICAuYiAvKiBjb21tICovIHt9XG4gICAgICAvLyAgIGNvbG9yOiBob3RwaW5rO1xuICAgICAgLy8gfVxuICAgICAgLy8gd2UgZ2V0IG91dHB1dCBjb3JyZXNwb25kaW5nIHRvIHRoaXM6XG4gICAgICAvLyAuYSB7XG4gICAgICAvLyAgICYge1xuICAgICAgLy8gICAgIC8qIGNvbW0gKi9cbiAgICAgIC8vICAgICBjb2xvcjogaG90cGluaztcbiAgICAgIC8vICAgfVxuICAgICAgLy8gICAuYiB7fVxuICAgICAgLy8gfVxuXG4gICAgICB2YXIgY29tbWVudENvbnRhaW5lciA9IGlzTmVzdGVkID8gZWxlbWVudC5wYXJlbnQuY2hpbGRyZW4gOiAvLyBnbG9iYWwgcnVsZSBhdCB0aGUgcm9vdCBsZXZlbFxuICAgICAgY2hpbGRyZW47XG5cbiAgICAgIGZvciAodmFyIGkgPSBjb21tZW50Q29udGFpbmVyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHZhciBub2RlID0gY29tbWVudENvbnRhaW5lcltpXTtcblxuICAgICAgICBpZiAobm9kZS5saW5lIDwgZWxlbWVudC5saW5lKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gLy8gaXQgaXMgcXVpdGUgd2VpcmQgYnV0IGNvbW1lbnRzIGFyZSAqdXN1YWxseSogcHV0IGF0IGBjb2x1bW46IGVsZW1lbnQuY29sdW1uIC0gMWBcbiAgICAgICAgLy8gc28gd2Ugc2VlayAqZnJvbSB0aGUgZW5kKiBmb3IgdGhlIG5vZGUgdGhhdCBpcyBlYXJsaWVyIHRoYW4gdGhlIHJ1bGUncyBgZWxlbWVudGAgYW5kIGNoZWNrIHRoYXRcbiAgICAgICAgLy8gdGhpcyB3aWxsIGFsc28gbWF0Y2ggaW5wdXRzIGxpa2UgdGhpczpcbiAgICAgICAgLy8gLmEge1xuICAgICAgICAvLyAgIC8qIGNvbW0gKi9cbiAgICAgICAgLy8gICAuYiB7fVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGJ1dCB0aGF0IGlzIGZpbmVcbiAgICAgICAgLy9cbiAgICAgICAgLy8gaXQgd291bGQgYmUgdGhlIGVhc2llc3QgdG8gY2hhbmdlIHRoZSBwbGFjZW1lbnQgb2YgdGhlIGNvbW1lbnQgdG8gYmUgdGhlIGZpcnN0IGNoaWxkIG9mIHRoZSBydWxlOlxuICAgICAgICAvLyAuYSB7XG4gICAgICAgIC8vICAgLmIgeyAvKiBjb21tICovIH1cbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB3aXRoIHN1Y2ggaW5wdXRzIHdlIHdvdWxkbid0IGhhdmUgdG8gc2VhcmNoIGZvciB0aGUgY29tbWVudCBhdCBhbGxcbiAgICAgICAgLy8gVE9ETzogY29uc2lkZXIgY2hhbmdpbmcgdGhpcyBjb21tZW50IHBsYWNlbWVudCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uXG5cblxuICAgICAgICBpZiAobm9kZS5jb2x1bW4gPCBlbGVtZW50LmNvbHVtbikge1xuICAgICAgICAgIGlmIChpc0lnbm9yaW5nQ29tbWVudChub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHVuc2FmZVBzZXVkb0NsYXNzZXMuZm9yRWFjaChmdW5jdGlvbiAodW5zYWZlUHNldWRvQ2xhc3MpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZSBwc2V1ZG8gY2xhc3MgXFxcIlwiICsgdW5zYWZlUHNldWRvQ2xhc3MgKyBcIlxcXCIgaXMgcG90ZW50aWFsbHkgdW5zYWZlIHdoZW4gZG9pbmcgc2VydmVyLXNpZGUgcmVuZGVyaW5nLiBUcnkgY2hhbmdpbmcgaXQgdG8gXFxcIlwiICsgdW5zYWZlUHNldWRvQ2xhc3Muc3BsaXQoJy1jaGlsZCcpWzBdICsgXCItb2YtdHlwZVxcXCIuXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufTtcblxudmFyIGlzSW1wb3J0UnVsZSA9IGZ1bmN0aW9uIGlzSW1wb3J0UnVsZShlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50LnR5cGUuY2hhckNvZGVBdCgxKSA9PT0gMTA1ICYmIGVsZW1lbnQudHlwZS5jaGFyQ29kZUF0KDApID09PSA2NDtcbn07XG5cbnZhciBpc1ByZXBlbmRlZFdpdGhSZWd1bGFyUnVsZXMgPSBmdW5jdGlvbiBpc1ByZXBlbmRlZFdpdGhSZWd1bGFyUnVsZXMoaW5kZXgsIGNoaWxkcmVuKSB7XG4gIGZvciAodmFyIGkgPSBpbmRleCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKCFpc0ltcG9ydFJ1bGUoY2hpbGRyZW5baV0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59OyAvLyB1c2UgdGhpcyB0byByZW1vdmUgaW5jb3JyZWN0IGVsZW1lbnRzIGZyb20gZnVydGhlciBwcm9jZXNzaW5nXG4vLyBzbyB0aGV5IGRvbid0IGdldCBoYW5kZWQgdG8gdGhlIGBzaGVldGAgKG9yIGFueXRoaW5nIGVsc2UpXG4vLyBhcyB0aGF0IGNvdWxkIHBvdGVudGlhbGx5IGxlYWQgdG8gYWRkaXRpb25hbCBsb2dzIHdoaWNoIGluIHR1cm4gY291bGQgYmUgb3ZlcmhlbG1pbmcgdG8gdGhlIHVzZXJcblxuXG52YXIgbnVsbGlmeUVsZW1lbnQgPSBmdW5jdGlvbiBudWxsaWZ5RWxlbWVudChlbGVtZW50KSB7XG4gIGVsZW1lbnQudHlwZSA9ICcnO1xuICBlbGVtZW50LnZhbHVlID0gJyc7XG4gIGVsZW1lbnRbXCJyZXR1cm5cIl0gPSAnJztcbiAgZWxlbWVudC5jaGlsZHJlbiA9ICcnO1xuICBlbGVtZW50LnByb3BzID0gJyc7XG59O1xuXG52YXIgaW5jb3JyZWN0SW1wb3J0QWxhcm0gPSBmdW5jdGlvbiBpbmNvcnJlY3RJbXBvcnRBbGFybShlbGVtZW50LCBpbmRleCwgY2hpbGRyZW4pIHtcbiAgaWYgKCFpc0ltcG9ydFJ1bGUoZWxlbWVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZWxlbWVudC5wYXJlbnQpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiYEBpbXBvcnRgIHJ1bGVzIGNhbid0IGJlIG5lc3RlZCBpbnNpZGUgb3RoZXIgcnVsZXMuIFBsZWFzZSBtb3ZlIGl0IHRvIHRoZSB0b3AgbGV2ZWwgYW5kIHB1dCBpdCBiZWZvcmUgcmVndWxhciBydWxlcy4gS2VlcCBpbiBtaW5kIHRoYXQgdGhleSBjYW4gb25seSBiZSB1c2VkIHdpdGhpbiBnbG9iYWwgc3R5bGVzLlwiKTtcbiAgICBudWxsaWZ5RWxlbWVudChlbGVtZW50KTtcbiAgfSBlbHNlIGlmIChpc1ByZXBlbmRlZFdpdGhSZWd1bGFyUnVsZXMoaW5kZXgsIGNoaWxkcmVuKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJgQGltcG9ydGAgcnVsZXMgY2FuJ3QgYmUgYWZ0ZXIgb3RoZXIgcnVsZXMuIFBsZWFzZSBwdXQgeW91ciBgQGltcG9ydGAgcnVsZXMgYmVmb3JlIHlvdXIgb3RoZXIgcnVsZXMuXCIpO1xuICAgIG51bGxpZnlFbGVtZW50KGVsZW1lbnQpO1xuICB9XG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1mYWxsdGhyb3VnaCAqL1xuXG5mdW5jdGlvbiBwcmVmaXgodmFsdWUsIGxlbmd0aCkge1xuICBzd2l0Y2ggKGhhc2godmFsdWUsIGxlbmd0aCkpIHtcbiAgICAvLyBjb2xvci1hZGp1c3RcbiAgICBjYXNlIDUxMDM6XG4gICAgICByZXR1cm4gV0VCS0lUICsgJ3ByaW50LScgKyB2YWx1ZSArIHZhbHVlO1xuICAgIC8vIGFuaW1hdGlvbiwgYW5pbWF0aW9uLShkZWxheXxkaXJlY3Rpb258ZHVyYXRpb258ZmlsbC1tb2RlfGl0ZXJhdGlvbi1jb3VudHxuYW1lfHBsYXktc3RhdGV8dGltaW5nLWZ1bmN0aW9uKVxuXG4gICAgY2FzZSA1NzM3OlxuICAgIGNhc2UgNDIwMTpcbiAgICBjYXNlIDMxNzc6XG4gICAgY2FzZSAzNDMzOlxuICAgIGNhc2UgMTY0MTpcbiAgICBjYXNlIDQ0NTc6XG4gICAgY2FzZSAyOTIxOiAvLyB0ZXh0LWRlY29yYXRpb24sIGZpbHRlciwgY2xpcC1wYXRoLCBiYWNrZmFjZS12aXNpYmlsaXR5LCBjb2x1bW4sIGJveC1kZWNvcmF0aW9uLWJyZWFrXG5cbiAgICBjYXNlIDU1NzI6XG4gICAgY2FzZSA2MzU2OlxuICAgIGNhc2UgNTg0NDpcbiAgICBjYXNlIDMxOTE6XG4gICAgY2FzZSA2NjQ1OlxuICAgIGNhc2UgMzAwNTogLy8gbWFzaywgbWFzay1pbWFnZSwgbWFzay0obW9kZXxjbGlwfHNpemUpLCBtYXNrLShyZXBlYXR8b3JpZ2luKSwgbWFzay1wb3NpdGlvbiwgbWFzay1jb21wb3NpdGUsXG5cbiAgICBjYXNlIDYzOTE6XG4gICAgY2FzZSA1ODc5OlxuICAgIGNhc2UgNTYyMzpcbiAgICBjYXNlIDYxMzU6XG4gICAgY2FzZSA0NTk5OlxuICAgIGNhc2UgNDg1NTogLy8gYmFja2dyb3VuZC1jbGlwLCBjb2x1bW5zLCBjb2x1bW4tKGNvdW50fGZpbGx8Z2FwfHJ1bGV8cnVsZS1jb2xvcnxydWxlLXN0eWxlfHJ1bGUtd2lkdGh8c3Bhbnx3aWR0aClcblxuICAgIGNhc2UgNDIxNTpcbiAgICBjYXNlIDYzODk6XG4gICAgY2FzZSA1MTA5OlxuICAgIGNhc2UgNTM2NTpcbiAgICBjYXNlIDU2MjE6XG4gICAgY2FzZSAzODI5OlxuICAgICAgcmV0dXJuIFdFQktJVCArIHZhbHVlICsgdmFsdWU7XG4gICAgLy8gYXBwZWFyYW5jZSwgdXNlci1zZWxlY3QsIHRyYW5zZm9ybSwgaHlwaGVucywgdGV4dC1zaXplLWFkanVzdFxuXG4gICAgY2FzZSA1MzQ5OlxuICAgIGNhc2UgNDI0NjpcbiAgICBjYXNlIDQ4MTA6XG4gICAgY2FzZSA2OTY4OlxuICAgIGNhc2UgMjc1NjpcbiAgICAgIHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1PWiArIHZhbHVlICsgTVMgKyB2YWx1ZSArIHZhbHVlO1xuICAgIC8vIGZsZXgsIGZsZXgtZGlyZWN0aW9uXG5cbiAgICBjYXNlIDY4Mjg6XG4gICAgY2FzZSA0MjY4OlxuICAgICAgcmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyB2YWx1ZSArIHZhbHVlO1xuICAgIC8vIG9yZGVyXG5cbiAgICBjYXNlIDYxNjU6XG4gICAgICByZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArICdmbGV4LScgKyB2YWx1ZSArIHZhbHVlO1xuICAgIC8vIGFsaWduLWl0ZW1zXG5cbiAgICBjYXNlIDUxODc6XG4gICAgICByZXR1cm4gV0VCS0lUICsgdmFsdWUgKyByZXBsYWNlKHZhbHVlLCAvKFxcdyspLisoOlteXSspLywgV0VCS0lUICsgJ2JveC0kMSQyJyArIE1TICsgJ2ZsZXgtJDEkMicpICsgdmFsdWU7XG4gICAgLy8gYWxpZ24tc2VsZlxuXG4gICAgY2FzZSA1NDQzOlxuICAgICAgcmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyAnZmxleC1pdGVtLScgKyByZXBsYWNlKHZhbHVlLCAvZmxleC18LXNlbGYvLCAnJykgKyB2YWx1ZTtcbiAgICAvLyBhbGlnbi1jb250ZW50XG5cbiAgICBjYXNlIDQ2NzU6XG4gICAgICByZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArICdmbGV4LWxpbmUtcGFjaycgKyByZXBsYWNlKHZhbHVlLCAvYWxpZ24tY29udGVudHxmbGV4LXwtc2VsZi8sICcnKSArIHZhbHVlO1xuICAgIC8vIGZsZXgtc2hyaW5rXG5cbiAgICBjYXNlIDU1NDg6XG4gICAgICByZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArIHJlcGxhY2UodmFsdWUsICdzaHJpbmsnLCAnbmVnYXRpdmUnKSArIHZhbHVlO1xuICAgIC8vIGZsZXgtYmFzaXNcblxuICAgIGNhc2UgNTI5MjpcbiAgICAgIHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgcmVwbGFjZSh2YWx1ZSwgJ2Jhc2lzJywgJ3ByZWZlcnJlZC1zaXplJykgKyB2YWx1ZTtcbiAgICAvLyBmbGV4LWdyb3dcblxuICAgIGNhc2UgNjA2MDpcbiAgICAgIHJldHVybiBXRUJLSVQgKyAnYm94LScgKyByZXBsYWNlKHZhbHVlLCAnLWdyb3cnLCAnJykgKyBXRUJLSVQgKyB2YWx1ZSArIE1TICsgcmVwbGFjZSh2YWx1ZSwgJ2dyb3cnLCAncG9zaXRpdmUnKSArIHZhbHVlO1xuICAgIC8vIHRyYW5zaXRpb25cblxuICAgIGNhc2UgNDU1NDpcbiAgICAgIHJldHVybiBXRUJLSVQgKyByZXBsYWNlKHZhbHVlLCAvKFteLV0pKHRyYW5zZm9ybSkvZywgJyQxJyArIFdFQktJVCArICckMicpICsgdmFsdWU7XG4gICAgLy8gY3Vyc29yXG5cbiAgICBjYXNlIDYxODc6XG4gICAgICByZXR1cm4gcmVwbGFjZShyZXBsYWNlKHJlcGxhY2UodmFsdWUsIC8oem9vbS18Z3JhYikvLCBXRUJLSVQgKyAnJDEnKSwgLyhpbWFnZS1zZXQpLywgV0VCS0lUICsgJyQxJyksIHZhbHVlLCAnJykgKyB2YWx1ZTtcbiAgICAvLyBiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kLWltYWdlXG5cbiAgICBjYXNlIDU0OTU6XG4gICAgY2FzZSAzOTU5OlxuICAgICAgcmV0dXJuIHJlcGxhY2UodmFsdWUsIC8oaW1hZ2Utc2V0XFwoW15dKikvLCBXRUJLSVQgKyAnJDEnICsgJyRgJDEnKTtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnRcblxuICAgIGNhc2UgNDk2ODpcbiAgICAgIHJldHVybiByZXBsYWNlKHJlcGxhY2UodmFsdWUsIC8oLis6KShmbGV4LSk/KC4qKS8sIFdFQktJVCArICdib3gtcGFjazokMycgKyBNUyArICdmbGV4LXBhY2s6JDMnKSwgL3MuKy1iW147XSsvLCAnanVzdGlmeScpICsgV0VCS0lUICsgdmFsdWUgKyB2YWx1ZTtcbiAgICAvLyAobWFyZ2lufHBhZGRpbmcpLWlubGluZS0oc3RhcnR8ZW5kKVxuXG4gICAgY2FzZSA0MDk1OlxuICAgIGNhc2UgMzU4MzpcbiAgICBjYXNlIDQwNjg6XG4gICAgY2FzZSAyNTMyOlxuICAgICAgcmV0dXJuIHJlcGxhY2UodmFsdWUsIC8oLispLWlubGluZSguKykvLCBXRUJLSVQgKyAnJDEkMicpICsgdmFsdWU7XG4gICAgLy8gKG1pbnxtYXgpPyh3aWR0aHxoZWlnaHR8aW5saW5lLXNpemV8YmxvY2stc2l6ZSlcblxuICAgIGNhc2UgODExNjpcbiAgICBjYXNlIDcwNTk6XG4gICAgY2FzZSA1NzUzOlxuICAgIGNhc2UgNTUzNTpcbiAgICBjYXNlIDU0NDU6XG4gICAgY2FzZSA1NzAxOlxuICAgIGNhc2UgNDkzMzpcbiAgICBjYXNlIDQ2Nzc6XG4gICAgY2FzZSA1NTMzOlxuICAgIGNhc2UgNTc4OTpcbiAgICBjYXNlIDUwMjE6XG4gICAgY2FzZSA0NzY1OlxuICAgICAgLy8gc3RyZXRjaCwgbWF4LWNvbnRlbnQsIG1pbi1jb250ZW50LCBmaWxsLWF2YWlsYWJsZVxuICAgICAgaWYgKHN0cmxlbih2YWx1ZSkgLSAxIC0gbGVuZ3RoID4gNikgc3dpdGNoIChjaGFyYXQodmFsdWUsIGxlbmd0aCArIDEpKSB7XG4gICAgICAgIC8vIChtKWF4LWNvbnRlbnQsIChtKWluLWNvbnRlbnRcbiAgICAgICAgY2FzZSAxMDk6XG4gICAgICAgICAgLy8gLVxuICAgICAgICAgIGlmIChjaGFyYXQodmFsdWUsIGxlbmd0aCArIDQpICE9PSA0NSkgYnJlYWs7XG4gICAgICAgIC8vIChmKWlsbC1hdmFpbGFibGUsIChmKWl0LWNvbnRlbnRcblxuICAgICAgICBjYXNlIDEwMjpcbiAgICAgICAgICByZXR1cm4gcmVwbGFjZSh2YWx1ZSwgLyguKzopKC4rKS0oW15dKykvLCAnJDEnICsgV0VCS0lUICsgJyQyLSQzJyArICckMScgKyBNT1ogKyAoY2hhcmF0KHZhbHVlLCBsZW5ndGggKyAzKSA9PSAxMDggPyAnJDMnIDogJyQyLSQzJykpICsgdmFsdWU7XG4gICAgICAgIC8vIChzKXRyZXRjaFxuXG4gICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgIHJldHVybiB+aW5kZXhvZih2YWx1ZSwgJ3N0cmV0Y2gnKSA/IHByZWZpeChyZXBsYWNlKHZhbHVlLCAnc3RyZXRjaCcsICdmaWxsLWF2YWlsYWJsZScpLCBsZW5ndGgpICsgdmFsdWUgOiB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIC8vIHBvc2l0aW9uOiBzdGlja3lcblxuICAgIGNhc2UgNDk0OTpcbiAgICAgIC8vIChzKXRpY2t5P1xuICAgICAgaWYgKGNoYXJhdCh2YWx1ZSwgbGVuZ3RoICsgMSkgIT09IDExNSkgYnJlYWs7XG4gICAgLy8gZGlzcGxheTogKGZsZXh8aW5saW5lLWZsZXgpXG5cbiAgICBjYXNlIDY0NDQ6XG4gICAgICBzd2l0Y2ggKGNoYXJhdCh2YWx1ZSwgc3RybGVuKHZhbHVlKSAtIDMgLSAofmluZGV4b2YodmFsdWUsICchaW1wb3J0YW50JykgJiYgMTApKSkge1xuICAgICAgICAvLyBzdGljKGspeVxuICAgICAgICBjYXNlIDEwNzpcbiAgICAgICAgICByZXR1cm4gcmVwbGFjZSh2YWx1ZSwgJzonLCAnOicgKyBXRUJLSVQpICsgdmFsdWU7XG4gICAgICAgIC8vIChpbmxpbmUtKT9mbChlKXhcblxuICAgICAgICBjYXNlIDEwMTpcbiAgICAgICAgICByZXR1cm4gcmVwbGFjZSh2YWx1ZSwgLyguKzopKFteOyFdKykoO3whLispPy8sICckMScgKyBXRUJLSVQgKyAoY2hhcmF0KHZhbHVlLCAxNCkgPT09IDQ1ID8gJ2lubGluZS0nIDogJycpICsgJ2JveCQzJyArICckMScgKyBXRUJLSVQgKyAnJDIkMycgKyAnJDEnICsgTVMgKyAnJDJib3gkMycpICsgdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIC8vIHdyaXRpbmctbW9kZVxuXG4gICAgY2FzZSA1OTM2OlxuICAgICAgc3dpdGNoIChjaGFyYXQodmFsdWUsIGxlbmd0aCArIDExKSkge1xuICAgICAgICAvLyB2ZXJ0aWNhbC1sKHIpXG4gICAgICAgIGNhc2UgMTE0OlxuICAgICAgICAgIHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgcmVwbGFjZSh2YWx1ZSwgL1tzdmhdXFx3Ky1bdGJscl17Mn0vLCAndGInKSArIHZhbHVlO1xuICAgICAgICAvLyB2ZXJ0aWNhbC1yKGwpXG5cbiAgICAgICAgY2FzZSAxMDg6XG4gICAgICAgICAgcmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyByZXBsYWNlKHZhbHVlLCAvW3N2aF1cXHcrLVt0YmxyXXsyfS8sICd0Yi1ybCcpICsgdmFsdWU7XG4gICAgICAgIC8vIGhvcml6b250YWwoLSl0YlxuXG4gICAgICAgIGNhc2UgNDU6XG4gICAgICAgICAgcmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyByZXBsYWNlKHZhbHVlLCAvW3N2aF1cXHcrLVt0YmxyXXsyfS8sICdscicpICsgdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgdmFsdWUgKyB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxudmFyIHByZWZpeGVyID0gZnVuY3Rpb24gcHJlZml4ZXIoZWxlbWVudCwgaW5kZXgsIGNoaWxkcmVuLCBjYWxsYmFjaykge1xuICBpZiAoZWxlbWVudC5sZW5ndGggPiAtMSkgaWYgKCFlbGVtZW50W1wicmV0dXJuXCJdKSBzd2l0Y2ggKGVsZW1lbnQudHlwZSkge1xuICAgIGNhc2UgREVDTEFSQVRJT046XG4gICAgICBlbGVtZW50W1wicmV0dXJuXCJdID0gcHJlZml4KGVsZW1lbnQudmFsdWUsIGVsZW1lbnQubGVuZ3RoKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBLRVlGUkFNRVM6XG4gICAgICByZXR1cm4gc2VyaWFsaXplKFtjb3B5KGVsZW1lbnQsIHtcbiAgICAgICAgdmFsdWU6IHJlcGxhY2UoZWxlbWVudC52YWx1ZSwgJ0AnLCAnQCcgKyBXRUJLSVQpXG4gICAgICB9KV0sIGNhbGxiYWNrKTtcblxuICAgIGNhc2UgUlVMRVNFVDpcbiAgICAgIGlmIChlbGVtZW50Lmxlbmd0aCkgcmV0dXJuIGNvbWJpbmUoZWxlbWVudC5wcm9wcywgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHN3aXRjaCAobWF0Y2godmFsdWUsIC8oOjpwbGFjXFx3K3w6cmVhZC1cXHcrKS8pKSB7XG4gICAgICAgICAgLy8gOnJlYWQtKG9ubHl8d3JpdGUpXG4gICAgICAgICAgY2FzZSAnOnJlYWQtb25seSc6XG4gICAgICAgICAgY2FzZSAnOnJlYWQtd3JpdGUnOlxuICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZShbY29weShlbGVtZW50LCB7XG4gICAgICAgICAgICAgIHByb3BzOiBbcmVwbGFjZSh2YWx1ZSwgLzoocmVhZC1cXHcrKS8sICc6JyArIE1PWiArICckMScpXVxuICAgICAgICAgICAgfSldLCBjYWxsYmFjayk7XG4gICAgICAgICAgLy8gOnBsYWNlaG9sZGVyXG5cbiAgICAgICAgICBjYXNlICc6OnBsYWNlaG9sZGVyJzpcbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemUoW2NvcHkoZWxlbWVudCwge1xuICAgICAgICAgICAgICBwcm9wczogW3JlcGxhY2UodmFsdWUsIC86KHBsYWNcXHcrKS8sICc6JyArIFdFQktJVCArICdpbnB1dC0kMScpXVxuICAgICAgICAgICAgfSksIGNvcHkoZWxlbWVudCwge1xuICAgICAgICAgICAgICBwcm9wczogW3JlcGxhY2UodmFsdWUsIC86KHBsYWNcXHcrKS8sICc6JyArIE1PWiArICckMScpXVxuICAgICAgICAgICAgfSksIGNvcHkoZWxlbWVudCwge1xuICAgICAgICAgICAgICBwcm9wczogW3JlcGxhY2UodmFsdWUsIC86KHBsYWNcXHcrKS8sIE1TICsgJ2lucHV0LSQxJyldXG4gICAgICAgICAgICB9KV0sIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH0pO1xuICB9XG59O1xuXG52YXIgZGVmYXVsdFN0eWxpc1BsdWdpbnMgPSBbcHJlZml4ZXJdO1xuXG52YXIgY3JlYXRlQ2FjaGUgPSBmdW5jdGlvbiBjcmVhdGVDYWNoZShvcHRpb25zKSB7XG4gIHZhciBrZXkgPSBvcHRpb25zLmtleTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAha2V5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGhhdmUgdG8gY29uZmlndXJlIGBrZXlgIGZvciB5b3VyIGNhY2hlLiBQbGVhc2UgbWFrZSBzdXJlIGl0J3MgdW5pcXVlIChhbmQgbm90IGVxdWFsIHRvICdjc3MnKSBhcyBpdCdzIHVzZWQgZm9yIGxpbmtpbmcgc3R5bGVzIHRvIHlvdXIgY2FjaGUuXFxuXCIgKyBcIklmIG11bHRpcGxlIGNhY2hlcyBzaGFyZSB0aGUgc2FtZSBrZXkgdGhleSBtaWdodCBcXFwiZmlnaHRcXFwiIGZvciBlYWNoIG90aGVyJ3Mgc3R5bGUgZWxlbWVudHMuXCIpO1xuICB9XG5cbiAgaWYgKGtleSA9PT0gJ2NzcycpIHtcbiAgICB2YXIgc3NyU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInN0eWxlW2RhdGEtZW1vdGlvbl06bm90KFtkYXRhLXNdKVwiKTsgLy8gZ2V0IFNTUmVkIHN0eWxlcyBvdXQgb2YgdGhlIHdheSBvZiBSZWFjdCdzIGh5ZHJhdGlvblxuICAgIC8vIGRvY3VtZW50LmhlYWQgaXMgYSBzYWZlIHBsYWNlIHRvIG1vdmUgdGhlbSB0byh0aG91Z2ggbm90ZSBkb2N1bWVudC5oZWFkIGlzIG5vdCBuZWNlc3NhcmlseSB0aGUgbGFzdCBwbGFjZSB0aGV5IHdpbGwgYmUpXG4gICAgLy8gbm90ZSB0aGlzIHZlcnkgdmVyeSBpbnRlbnRpb25hbGx5IHRhcmdldHMgYWxsIHN0eWxlIGVsZW1lbnRzIHJlZ2FyZGxlc3Mgb2YgdGhlIGtleSB0byBlbnN1cmVcbiAgICAvLyB0aGF0IGNyZWF0aW5nIGEgY2FjaGUgd29ya3MgaW5zaWRlIG9mIHJlbmRlciBvZiBhIFJlYWN0IGNvbXBvbmVudFxuXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChzc3JTdHlsZXMsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAvLyB3ZSB3YW50IHRvIG9ubHkgbW92ZSBlbGVtZW50cyB3aGljaCBoYXZlIGEgc3BhY2UgaW4gdGhlIGRhdGEtZW1vdGlvbiBhdHRyaWJ1dGUgdmFsdWVcbiAgICAgIC8vIGJlY2F1c2UgdGhhdCBpbmRpY2F0ZXMgdGhhdCBpdCBpcyBhbiBFbW90aW9uIDExIHNlcnZlci1zaWRlIHJlbmRlcmVkIHN0eWxlIGVsZW1lbnRzXG4gICAgICAvLyB3aGlsZSB3ZSB3aWxsIGFscmVhZHkgaWdub3JlIEVtb3Rpb24gMTEgY2xpZW50LXNpZGUgaW5zZXJ0ZWQgc3R5bGVzIGJlY2F1c2Ugb2YgdGhlIDpub3QoW2RhdGEtc10pIHBhcnQgaW4gdGhlIHNlbGVjdG9yXG4gICAgICAvLyBFbW90aW9uIDEwIGNsaWVudC1zaWRlIGluc2VydGVkIHN0eWxlcyBkaWQgbm90IGhhdmUgZGF0YS1zIChidXQgaW1wb3J0YW50bHkgZGlkIG5vdCBoYXZlIGEgc3BhY2UgaW4gdGhlaXIgZGF0YS1lbW90aW9uIGF0dHJpYnV0ZXMpXG4gICAgICAvLyBzbyBjaGVja2luZyBmb3IgdGhlIHNwYWNlIGVuc3VyZXMgdGhhdCBsb2FkaW5nIEVtb3Rpb24gMTEgYWZ0ZXIgRW1vdGlvbiAxMCBoYXMgaW5zZXJ0ZWQgc29tZSBzdHlsZXNcbiAgICAgIC8vIHdpbGwgbm90IHJlc3VsdCBpbiB0aGUgRW1vdGlvbiAxMCBzdHlsZXMgYmVpbmcgZGVzdHJveWVkXG4gICAgICB2YXIgZGF0YUVtb3Rpb25BdHRyaWJ1dGUgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1lbW90aW9uJyk7XG5cbiAgICAgIGlmIChkYXRhRW1vdGlvbkF0dHJpYnV0ZS5pbmRleE9mKCcgJykgPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1zJywgJycpO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHN0eWxpc1BsdWdpbnMgPSBvcHRpb25zLnN0eWxpc1BsdWdpbnMgfHwgZGVmYXVsdFN0eWxpc1BsdWdpbnM7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgaWYgKC9bXmEtei1dLy50ZXN0KGtleSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkVtb3Rpb24ga2V5IG11c3Qgb25seSBjb250YWluIGxvd2VyIGNhc2UgYWxwaGFiZXRpY2FsIGNoYXJhY3RlcnMgYW5kIC0gYnV0IFxcXCJcIiArIGtleSArIFwiXFxcIiB3YXMgcGFzc2VkXCIpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpbnNlcnRlZCA9IHt9O1xuICB2YXIgY29udGFpbmVyO1xuICB2YXIgbm9kZXNUb0h5ZHJhdGUgPSBbXTtcblxuICB7XG4gICAgY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXIgfHwgZG9jdW1lbnQuaGVhZDtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKCAvLyB0aGlzIG1lYW5zIHdlIHdpbGwgaWdub3JlIGVsZW1lbnRzIHdoaWNoIGRvbid0IGhhdmUgYSBzcGFjZSBpbiB0aGVtIHdoaWNoXG4gICAgLy8gbWVhbnMgdGhhdCB0aGUgc3R5bGUgZWxlbWVudHMgd2UncmUgbG9va2luZyBhdCBhcmUgb25seSBFbW90aW9uIDExIHNlcnZlci1yZW5kZXJlZCBzdHlsZSBlbGVtZW50c1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdHlsZVtkYXRhLWVtb3Rpb25ePVxcXCJcIiArIGtleSArIFwiIFxcXCJdXCIpLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgdmFyIGF0dHJpYiA9IG5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1lbW90aW9uXCIpLnNwbGl0KCcgJyk7IC8vICRGbG93Rml4TWVcblxuICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhdHRyaWIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaW5zZXJ0ZWRbYXR0cmliW2ldXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIG5vZGVzVG9IeWRyYXRlLnB1c2gobm9kZSk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgX2luc2VydDtcblxuICB2YXIgb21uaXByZXNlbnRQbHVnaW5zID0gW2NvbXBhdCwgcmVtb3ZlTGFiZWxdO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgb21uaXByZXNlbnRQbHVnaW5zLnB1c2goY3JlYXRlVW5zYWZlU2VsZWN0b3JzQWxhcm0oe1xuICAgICAgZ2V0IGNvbXBhdCgpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlLmNvbXBhdDtcbiAgICAgIH1cblxuICAgIH0pLCBpbmNvcnJlY3RJbXBvcnRBbGFybSk7XG4gIH1cblxuICB7XG4gICAgdmFyIGN1cnJlbnRTaGVldDtcbiAgICB2YXIgZmluYWxpemluZ1BsdWdpbnMgPSBbc3RyaW5naWZ5LCBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgIGlmICghZWxlbWVudC5yb290KSB7XG4gICAgICAgIGlmIChlbGVtZW50W1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgY3VycmVudFNoZWV0Lmluc2VydChlbGVtZW50W1wicmV0dXJuXCJdKTtcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnZhbHVlICYmIGVsZW1lbnQudHlwZSAhPT0gQ09NTUVOVCkge1xuICAgICAgICAgIC8vIGluc2VydCBlbXB0eSBydWxlIGluIG5vbi1wcm9kdWN0aW9uIGVudmlyb25tZW50c1xuICAgICAgICAgIC8vIHNvIEBlbW90aW9uL2plc3QgY2FuIGdyYWIgYGtleWAgZnJvbSB0aGUgKEpTKURPTSBmb3IgY2FjaGVzIHdpdGhvdXQgYW55IHJ1bGVzIGluc2VydGVkIHlldFxuICAgICAgICAgIGN1cnJlbnRTaGVldC5pbnNlcnQoZWxlbWVudC52YWx1ZSArIFwie31cIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IDogcnVsZXNoZWV0KGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICBjdXJyZW50U2hlZXQuaW5zZXJ0KHJ1bGUpO1xuICAgIH0pXTtcbiAgICB2YXIgc2VyaWFsaXplciA9IG1pZGRsZXdhcmUob21uaXByZXNlbnRQbHVnaW5zLmNvbmNhdChzdHlsaXNQbHVnaW5zLCBmaW5hbGl6aW5nUGx1Z2lucykpO1xuXG4gICAgdmFyIHN0eWxpcyA9IGZ1bmN0aW9uIHN0eWxpcyhzdHlsZXMpIHtcbiAgICAgIHJldHVybiBzZXJpYWxpemUoY29tcGlsZShzdHlsZXMpLCBzZXJpYWxpemVyKTtcbiAgICB9O1xuXG4gICAgX2luc2VydCA9IGZ1bmN0aW9uIGluc2VydChzZWxlY3Rvciwgc2VyaWFsaXplZCwgc2hlZXQsIHNob3VsZENhY2hlKSB7XG4gICAgICBjdXJyZW50U2hlZXQgPSBzaGVldDtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgc2VyaWFsaXplZC5tYXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjdXJyZW50U2hlZXQgPSB7XG4gICAgICAgICAgaW5zZXJ0OiBmdW5jdGlvbiBpbnNlcnQocnVsZSkge1xuICAgICAgICAgICAgc2hlZXQuaW5zZXJ0KHJ1bGUgKyBzZXJpYWxpemVkLm1hcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBzdHlsaXMoc2VsZWN0b3IgPyBzZWxlY3RvciArIFwie1wiICsgc2VyaWFsaXplZC5zdHlsZXMgKyBcIn1cIiA6IHNlcmlhbGl6ZWQuc3R5bGVzKTtcblxuICAgICAgaWYgKHNob3VsZENhY2hlKSB7XG4gICAgICAgIGNhY2hlLmluc2VydGVkW3NlcmlhbGl6ZWQubmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSB7XG4gICAga2V5OiBrZXksXG4gICAgc2hlZXQ6IG5ldyBTdHlsZVNoZWV0KHtcbiAgICAgIGtleToga2V5LFxuICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICBub25jZTogb3B0aW9ucy5ub25jZSxcbiAgICAgIHNwZWVkeTogb3B0aW9ucy5zcGVlZHksXG4gICAgICBwcmVwZW5kOiBvcHRpb25zLnByZXBlbmQsXG4gICAgICBpbnNlcnRpb25Qb2ludDogb3B0aW9ucy5pbnNlcnRpb25Qb2ludFxuICAgIH0pLFxuICAgIG5vbmNlOiBvcHRpb25zLm5vbmNlLFxuICAgIGluc2VydGVkOiBpbnNlcnRlZCxcbiAgICByZWdpc3RlcmVkOiB7fSxcbiAgICBpbnNlcnQ6IF9pbnNlcnRcbiAgfTtcbiAgY2FjaGUuc2hlZXQuaHlkcmF0ZShub2Rlc1RvSHlkcmF0ZSk7XG4gIHJldHVybiBjYWNoZTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUNhY2hlIGFzIGRlZmF1bHQgfTtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28hIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICBjb250ZXh0VHlwZTogdHJ1ZSxcbiAgY29udGV4dFR5cGVzOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICBtaXhpbnM6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICBuYW1lOiB0cnVlLFxuICBsZW5ndGg6IHRydWUsXG4gIHByb3RvdHlwZTogdHJ1ZSxcbiAgY2FsbGVyOiB0cnVlLFxuICBjYWxsZWU6IHRydWUsXG4gIGFyZ3VtZW50czogdHJ1ZSxcbiAgYXJpdHk6IHRydWVcbn07XG52YXIgRk9SV0FSRF9SRUZfU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgcmVuZGVyOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWVcbn07XG52YXIgTUVNT19TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICBjb21wYXJlOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgVFlQRV9TVEFUSUNTID0ge307XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5Gb3J3YXJkUmVmXSA9IEZPUldBUkRfUkVGX1NUQVRJQ1M7XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5NZW1vXSA9IE1FTU9fU1RBVElDUztcblxuZnVuY3Rpb24gZ2V0U3RhdGljcyhjb21wb25lbnQpIHtcbiAgLy8gUmVhY3QgdjE2LjExIGFuZCBiZWxvd1xuICBpZiAocmVhY3RJcy5pc01lbW8oY29tcG9uZW50KSkge1xuICAgIHJldHVybiBNRU1PX1NUQVRJQ1M7XG4gIH0gLy8gUmVhY3QgdjE2LjEyIGFuZCBhYm92ZVxuXG5cbiAgcmV0dXJuIFRZUEVfU1RBVElDU1tjb21wb25lbnRbJyQkdHlwZW9mJ11dIHx8IFJFQUNUX1NUQVRJQ1M7XG59XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIG9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG4gICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgdmFyIGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQsIGJsYWNrbGlzdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXRTdGF0aWNzID0gZ2V0U3RhdGljcyh0YXJnZXRDb21wb25lbnQpO1xuICAgIHZhciBzb3VyY2VTdGF0aWNzID0gZ2V0U3RhdGljcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFLTk9XTl9TVEFUSUNTW2tleV0gJiYgIShibGFja2xpc3QgJiYgYmxhY2tsaXN0W2tleV0pICYmICEoc291cmNlU3RhdGljcyAmJiBzb3VyY2VTdGF0aWNzW2tleV0pICYmICEodGFyZ2V0U3RhdGljcyAmJiB0YXJnZXRTdGF0aWNzW2tleV0pKSB7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIEF2b2lkIGZhaWx1cmVzIGZyb20gcmVhZC1vbmx5IHByb3BlcnRpZXNcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXRDb21wb25lbnQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBob2lzdE5vblJlYWN0U3RhdGljcztcbiIsInZhciBpc0Jyb3dzZXIgPSBcIm9iamVjdFwiICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIGdldFJlZ2lzdGVyZWRTdHlsZXMocmVnaXN0ZXJlZCwgcmVnaXN0ZXJlZFN0eWxlcywgY2xhc3NOYW1lcykge1xuICB2YXIgcmF3Q2xhc3NOYW1lID0gJyc7XG4gIGNsYXNzTmFtZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICBpZiAocmVnaXN0ZXJlZFtjbGFzc05hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlZ2lzdGVyZWRTdHlsZXMucHVzaChyZWdpc3RlcmVkW2NsYXNzTmFtZV0gKyBcIjtcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJhd0NsYXNzTmFtZSArPSBjbGFzc05hbWUgKyBcIiBcIjtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmF3Q2xhc3NOYW1lO1xufVxudmFyIHJlZ2lzdGVyU3R5bGVzID0gZnVuY3Rpb24gcmVnaXN0ZXJTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGlzU3RyaW5nVGFnKSB7XG4gIHZhciBjbGFzc05hbWUgPSBjYWNoZS5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcblxuICBpZiAoIC8vIHdlIG9ubHkgbmVlZCB0byBhZGQgdGhlIHN0eWxlcyB0byB0aGUgcmVnaXN0ZXJlZCBjYWNoZSBpZiB0aGVcbiAgLy8gY2xhc3MgbmFtZSBjb3VsZCBiZSB1c2VkIGZ1cnRoZXIgZG93blxuICAvLyB0aGUgdHJlZSBidXQgaWYgaXQncyBhIHN0cmluZyB0YWcsIHdlIGtub3cgaXQgd29uJ3RcbiAgLy8gc28gd2UgZG9uJ3QgaGF2ZSB0byBhZGQgaXQgdG8gcmVnaXN0ZXJlZCBjYWNoZS5cbiAgLy8gdGhpcyBpbXByb3ZlcyBtZW1vcnkgdXNhZ2Ugc2luY2Ugd2UgY2FuIGF2b2lkIHN0b3JpbmcgdGhlIHdob2xlIHN0eWxlIHN0cmluZ1xuICAoaXNTdHJpbmdUYWcgPT09IGZhbHNlIHx8IC8vIHdlIG5lZWQgdG8gYWx3YXlzIHN0b3JlIGl0IGlmIHdlJ3JlIGluIGNvbXBhdCBtb2RlIGFuZFxuICAvLyBpbiBub2RlIHNpbmNlIGVtb3Rpb24tc2VydmVyIHJlbGllcyBvbiB3aGV0aGVyIGEgc3R5bGUgaXMgaW5cbiAgLy8gdGhlIHJlZ2lzdGVyZWQgY2FjaGUgdG8ga25vdyB3aGV0aGVyIGEgc3R5bGUgaXMgZ2xvYmFsIG9yIG5vdFxuICAvLyBhbHNvLCBub3RlIHRoYXQgdGhpcyBjaGVjayB3aWxsIGJlIGRlYWQgY29kZSBlbGltaW5hdGVkIGluIHRoZSBicm93c2VyXG4gIGlzQnJvd3NlciA9PT0gZmFsc2UgKSAmJiBjYWNoZS5yZWdpc3RlcmVkW2NsYXNzTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgIGNhY2hlLnJlZ2lzdGVyZWRbY2xhc3NOYW1lXSA9IHNlcmlhbGl6ZWQuc3R5bGVzO1xuICB9XG59O1xudmFyIGluc2VydFN0eWxlcyA9IGZ1bmN0aW9uIGluc2VydFN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgaXNTdHJpbmdUYWcpIHtcbiAgcmVnaXN0ZXJTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGlzU3RyaW5nVGFnKTtcbiAgdmFyIGNsYXNzTmFtZSA9IGNhY2hlLmtleSArIFwiLVwiICsgc2VyaWFsaXplZC5uYW1lO1xuXG4gIGlmIChjYWNoZS5pbnNlcnRlZFtzZXJpYWxpemVkLm5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgY3VycmVudCA9IHNlcmlhbGl6ZWQ7XG5cbiAgICBkbyB7XG4gICAgICBjYWNoZS5pbnNlcnQoc2VyaWFsaXplZCA9PT0gY3VycmVudCA/IFwiLlwiICsgY2xhc3NOYW1lIDogJycsIGN1cnJlbnQsIGNhY2hlLnNoZWV0LCB0cnVlKTtcblxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9IHdoaWxlIChjdXJyZW50ICE9PSB1bmRlZmluZWQpO1xuICB9XG59O1xuXG5leHBvcnQgeyBnZXRSZWdpc3RlcmVkU3R5bGVzLCBpbnNlcnRTdHlsZXMsIHJlZ2lzdGVyU3R5bGVzIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2dhcnljb3VydC9tdXJtdXJoYXNoLWpzXG4vLyBQb3J0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYWFwcGxlYnkvc21oYXNoZXIvYmxvYi82MWEwNTMwZjI4Mjc3ZjJlODUwYmZjMzk2MDBjZTYxZDAyYjUxOGRlL3NyYy9NdXJtdXJIYXNoMi5jcHAjTDM3LUw4NlxuZnVuY3Rpb24gbXVybXVyMihzdHIpIHtcbiAgLy8gJ20nIGFuZCAncicgYXJlIG1peGluZyBjb25zdGFudHMgZ2VuZXJhdGVkIG9mZmxpbmUuXG4gIC8vIFRoZXkncmUgbm90IHJlYWxseSAnbWFnaWMnLCB0aGV5IGp1c3QgaGFwcGVuIHRvIHdvcmsgd2VsbC5cbiAgLy8gY29uc3QgbSA9IDB4NWJkMWU5OTU7XG4gIC8vIGNvbnN0IHIgPSAyNDtcbiAgLy8gSW5pdGlhbGl6ZSB0aGUgaGFzaFxuICB2YXIgaCA9IDA7IC8vIE1peCA0IGJ5dGVzIGF0IGEgdGltZSBpbnRvIHRoZSBoYXNoXG5cbiAgdmFyIGssXG4gICAgICBpID0gMCxcbiAgICAgIGxlbiA9IHN0ci5sZW5ndGg7XG5cbiAgZm9yICg7IGxlbiA+PSA0OyArK2ksIGxlbiAtPSA0KSB7XG4gICAgayA9IHN0ci5jaGFyQ29kZUF0KGkpICYgMHhmZiB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgOCB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgMTYgfCAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDI0O1xuICAgIGsgPVxuICAgIC8qIE1hdGguaW11bChrLCBtKTogKi9cbiAgICAoayAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChrID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xuICAgIGsgXj1cbiAgICAvKiBrID4+PiByOiAqL1xuICAgIGsgPj4+IDI0O1xuICAgIGggPVxuICAgIC8qIE1hdGguaW11bChrLCBtKTogKi9cbiAgICAoayAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChrID4+PiAxNikgKiAweGU5OTUgPDwgMTYpIF5cbiAgICAvKiBNYXRoLmltdWwoaCwgbSk6ICovXG4gICAgKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoaCA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcbiAgfSAvLyBIYW5kbGUgdGhlIGxhc3QgZmV3IGJ5dGVzIG9mIHRoZSBpbnB1dCBhcnJheVxuXG5cbiAgc3dpdGNoIChsZW4pIHtcbiAgICBjYXNlIDM6XG4gICAgICBoIF49IChzdHIuY2hhckNvZGVBdChpICsgMikgJiAweGZmKSA8PCAxNjtcblxuICAgIGNhc2UgMjpcbiAgICAgIGggXj0gKHN0ci5jaGFyQ29kZUF0KGkgKyAxKSAmIDB4ZmYpIDw8IDg7XG5cbiAgICBjYXNlIDE6XG4gICAgICBoIF49IHN0ci5jaGFyQ29kZUF0KGkpICYgMHhmZjtcbiAgICAgIGggPVxuICAgICAgLyogTWF0aC5pbXVsKGgsIG0pOiAqL1xuICAgICAgKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoaCA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcbiAgfSAvLyBEbyBhIGZldyBmaW5hbCBtaXhlcyBvZiB0aGUgaGFzaCB0byBlbnN1cmUgdGhlIGxhc3QgZmV3XG4gIC8vIGJ5dGVzIGFyZSB3ZWxsLWluY29ycG9yYXRlZC5cblxuXG4gIGggXj0gaCA+Pj4gMTM7XG4gIGggPVxuICAvKiBNYXRoLmltdWwoaCwgbSk6ICovXG4gIChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGggPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNik7XG4gIHJldHVybiAoKGggXiBoID4+PiAxNSkgPj4+IDApLnRvU3RyaW5nKDM2KTtcbn1cblxuZXhwb3J0IHsgbXVybXVyMiBhcyBkZWZhdWx0IH07XG4iLCJ2YXIgdW5pdGxlc3NLZXlzID0ge1xuICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogMSxcbiAgYXNwZWN0UmF0aW86IDEsXG4gIGJvcmRlckltYWdlT3V0c2V0OiAxLFxuICBib3JkZXJJbWFnZVNsaWNlOiAxLFxuICBib3JkZXJJbWFnZVdpZHRoOiAxLFxuICBib3hGbGV4OiAxLFxuICBib3hGbGV4R3JvdXA6IDEsXG4gIGJveE9yZGluYWxHcm91cDogMSxcbiAgY29sdW1uQ291bnQ6IDEsXG4gIGNvbHVtbnM6IDEsXG4gIGZsZXg6IDEsXG4gIGZsZXhHcm93OiAxLFxuICBmbGV4UG9zaXRpdmU6IDEsXG4gIGZsZXhTaHJpbms6IDEsXG4gIGZsZXhOZWdhdGl2ZTogMSxcbiAgZmxleE9yZGVyOiAxLFxuICBncmlkUm93OiAxLFxuICBncmlkUm93RW5kOiAxLFxuICBncmlkUm93U3BhbjogMSxcbiAgZ3JpZFJvd1N0YXJ0OiAxLFxuICBncmlkQ29sdW1uOiAxLFxuICBncmlkQ29sdW1uRW5kOiAxLFxuICBncmlkQ29sdW1uU3BhbjogMSxcbiAgZ3JpZENvbHVtblN0YXJ0OiAxLFxuICBtc0dyaWRSb3c6IDEsXG4gIG1zR3JpZFJvd1NwYW46IDEsXG4gIG1zR3JpZENvbHVtbjogMSxcbiAgbXNHcmlkQ29sdW1uU3BhbjogMSxcbiAgZm9udFdlaWdodDogMSxcbiAgbGluZUhlaWdodDogMSxcbiAgb3BhY2l0eTogMSxcbiAgb3JkZXI6IDEsXG4gIG9ycGhhbnM6IDEsXG4gIHRhYlNpemU6IDEsXG4gIHdpZG93czogMSxcbiAgekluZGV4OiAxLFxuICB6b29tOiAxLFxuICBXZWJraXRMaW5lQ2xhbXA6IDEsXG4gIC8vIFNWRy1yZWxhdGVkIHByb3BlcnRpZXNcbiAgZmlsbE9wYWNpdHk6IDEsXG4gIGZsb29kT3BhY2l0eTogMSxcbiAgc3RvcE9wYWNpdHk6IDEsXG4gIHN0cm9rZURhc2hhcnJheTogMSxcbiAgc3Ryb2tlRGFzaG9mZnNldDogMSxcbiAgc3Ryb2tlTWl0ZXJsaW1pdDogMSxcbiAgc3Ryb2tlT3BhY2l0eTogMSxcbiAgc3Ryb2tlV2lkdGg6IDFcbn07XG5cbmV4cG9ydCB7IHVuaXRsZXNzS2V5cyBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgaGFzaFN0cmluZyBmcm9tICdAZW1vdGlvbi9oYXNoJztcbmltcG9ydCB1bml0bGVzcyBmcm9tICdAZW1vdGlvbi91bml0bGVzcyc7XG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdAZW1vdGlvbi9tZW1vaXplJztcblxudmFyIElMTEVHQUxfRVNDQVBFX1NFUVVFTkNFX0VSUk9SID0gXCJZb3UgaGF2ZSBpbGxlZ2FsIGVzY2FwZSBzZXF1ZW5jZSBpbiB5b3VyIHRlbXBsYXRlIGxpdGVyYWwsIG1vc3QgbGlrZWx5IGluc2lkZSBjb250ZW50J3MgcHJvcGVydHkgdmFsdWUuXFxuQmVjYXVzZSB5b3Ugd3JpdGUgeW91ciBDU1MgaW5zaWRlIGEgSmF2YVNjcmlwdCBzdHJpbmcgeW91IGFjdHVhbGx5IGhhdmUgdG8gZG8gZG91YmxlIGVzY2FwaW5nLCBzbyBmb3IgZXhhbXBsZSBcXFwiY29udGVudDogJ1xcXFwwMGQ3JztcXFwiIHNob3VsZCBiZWNvbWUgXFxcImNvbnRlbnQ6ICdcXFxcXFxcXDAwZDcnO1xcXCIuXFxuWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgdGhpcyBoZXJlOlxcbmh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL1RlbXBsYXRlX2xpdGVyYWxzI0VTMjAxOF9yZXZpc2lvbl9vZl9pbGxlZ2FsX2VzY2FwZV9zZXF1ZW5jZXNcIjtcbnZhciBVTkRFRklORURfQVNfT0JKRUNUX0tFWV9FUlJPUiA9IFwiWW91IGhhdmUgcGFzc2VkIGluIGZhbHN5IHZhbHVlIGFzIHN0eWxlIG9iamVjdCdzIGtleSAoY2FuIGhhcHBlbiB3aGVuIGluIGV4YW1wbGUgeW91IHBhc3MgdW5leHBvcnRlZCBjb21wb25lbnQgYXMgY29tcHV0ZWQga2V5KS5cIjtcbnZhciBoeXBoZW5hdGVSZWdleCA9IC9bQS1aXXxebXMvZztcbnZhciBhbmltYXRpb25SZWdleCA9IC9fRU1PXyhbXl9dKz8pXyhbXl0qPylfRU1PXy9nO1xuXG52YXIgaXNDdXN0b21Qcm9wZXJ0eSA9IGZ1bmN0aW9uIGlzQ3VzdG9tUHJvcGVydHkocHJvcGVydHkpIHtcbiAgcmV0dXJuIHByb3BlcnR5LmNoYXJDb2RlQXQoMSkgPT09IDQ1O1xufTtcblxudmFyIGlzUHJvY2Vzc2FibGVWYWx1ZSA9IGZ1bmN0aW9uIGlzUHJvY2Vzc2FibGVWYWx1ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgIT09ICdib29sZWFuJztcbn07XG5cbnZhciBwcm9jZXNzU3R5bGVOYW1lID0gLyogI19fUFVSRV9fICovbWVtb2l6ZShmdW5jdGlvbiAoc3R5bGVOYW1lKSB7XG4gIHJldHVybiBpc0N1c3RvbVByb3BlcnR5KHN0eWxlTmFtZSkgPyBzdHlsZU5hbWUgOiBzdHlsZU5hbWUucmVwbGFjZShoeXBoZW5hdGVSZWdleCwgJy0kJicpLnRvTG93ZXJDYXNlKCk7XG59KTtcblxudmFyIHByb2Nlc3NTdHlsZVZhbHVlID0gZnVuY3Rpb24gcHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZSkge1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJ2FuaW1hdGlvbic6XG4gICAgY2FzZSAnYW5pbWF0aW9uTmFtZSc6XG4gICAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoYW5pbWF0aW9uUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCwgcDEsIHAyKSB7XG4gICAgICAgICAgICBjdXJzb3IgPSB7XG4gICAgICAgICAgICAgIG5hbWU6IHAxLFxuICAgICAgICAgICAgICBzdHlsZXM6IHAyLFxuICAgICAgICAgICAgICBuZXh0OiBjdXJzb3JcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gcDE7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIGlmICh1bml0bGVzc1trZXldICE9PSAxICYmICFpc0N1c3RvbVByb3BlcnR5KGtleSkgJiYgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSAhPT0gMCkge1xuICAgIHJldHVybiB2YWx1ZSArICdweCc7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgY29udGVudFZhbHVlUGF0dGVybiA9IC8odmFyfGF0dHJ8Y291bnRlcnM/fHVybHxlbGVtZW50fCgoKHJlcGVhdGluZy0pPyhsaW5lYXJ8cmFkaWFsKSl8Y29uaWMpLWdyYWRpZW50KVxcKHwobm8tKT8ob3BlbnxjbG9zZSktcXVvdGUvO1xuICB2YXIgY29udGVudFZhbHVlcyA9IFsnbm9ybWFsJywgJ25vbmUnLCAnaW5pdGlhbCcsICdpbmhlcml0JywgJ3Vuc2V0J107XG4gIHZhciBvbGRQcm9jZXNzU3R5bGVWYWx1ZSA9IHByb2Nlc3NTdHlsZVZhbHVlO1xuICB2YXIgbXNQYXR0ZXJuID0gL14tbXMtLztcbiAgdmFyIGh5cGhlblBhdHRlcm4gPSAvLSguKS9nO1xuICB2YXIgaHlwaGVuYXRlZENhY2hlID0ge307XG5cbiAgcHJvY2Vzc1N0eWxlVmFsdWUgPSBmdW5jdGlvbiBwcm9jZXNzU3R5bGVWYWx1ZShrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJyB8fCBjb250ZW50VmFsdWVzLmluZGV4T2YodmFsdWUpID09PSAtMSAmJiAhY29udGVudFZhbHVlUGF0dGVybi50ZXN0KHZhbHVlKSAmJiAodmFsdWUuY2hhckF0KDApICE9PSB2YWx1ZS5jaGFyQXQodmFsdWUubGVuZ3RoIC0gMSkgfHwgdmFsdWUuY2hhckF0KDApICE9PSAnXCInICYmIHZhbHVlLmNoYXJBdCgwKSAhPT0gXCInXCIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBzZWVtIHRvIGJlIHVzaW5nIGEgdmFsdWUgZm9yICdjb250ZW50JyB3aXRob3V0IHF1b3RlcywgdHJ5IHJlcGxhY2luZyBpdCB3aXRoIGBjb250ZW50OiAnXFxcIlwiICsgdmFsdWUgKyBcIlxcXCInYFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJvY2Vzc2VkID0gb2xkUHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZSk7XG5cbiAgICBpZiAocHJvY2Vzc2VkICE9PSAnJyAmJiAhaXNDdXN0b21Qcm9wZXJ0eShrZXkpICYmIGtleS5pbmRleE9mKCctJykgIT09IC0xICYmIGh5cGhlbmF0ZWRDYWNoZVtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGh5cGhlbmF0ZWRDYWNoZVtrZXldID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJVc2luZyBrZWJhYi1jYXNlIGZvciBjc3MgcHJvcGVydGllcyBpbiBvYmplY3RzIGlzIG5vdCBzdXBwb3J0ZWQuIERpZCB5b3UgbWVhbiBcIiArIGtleS5yZXBsYWNlKG1zUGF0dGVybiwgJ21zLScpLnJlcGxhY2UoaHlwaGVuUGF0dGVybiwgZnVuY3Rpb24gKHN0ciwgX2NoYXIpIHtcbiAgICAgICAgcmV0dXJuIF9jaGFyLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9KSArIFwiP1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2Vzc2VkO1xuICB9O1xufVxuXG52YXIgbm9Db21wb25lbnRTZWxlY3Rvck1lc3NhZ2UgPSAnQ29tcG9uZW50IHNlbGVjdG9ycyBjYW4gb25seSBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggJyArICdAZW1vdGlvbi9iYWJlbC1wbHVnaW4sIHRoZSBzd2MgRW1vdGlvbiBwbHVnaW4sIG9yIGFub3RoZXIgRW1vdGlvbi1hd2FyZSAnICsgJ2NvbXBpbGVyIHRyYW5zZm9ybS4nO1xuXG5mdW5jdGlvbiBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBpbnRlcnBvbGF0aW9uKSB7XG4gIGlmIChpbnRlcnBvbGF0aW9uID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAoaW50ZXJwb2xhdGlvbi5fX2Vtb3Rpb25fc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpbnRlcnBvbGF0aW9uLnRvU3RyaW5nKCkgPT09ICdOT19DT01QT05FTlRfU0VMRUNUT1InKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3Iobm9Db21wb25lbnRTZWxlY3Rvck1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHJldHVybiBpbnRlcnBvbGF0aW9uO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlb2YgaW50ZXJwb2xhdGlvbikge1xuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAge1xuICAgICAgICBpZiAoaW50ZXJwb2xhdGlvbi5hbmltID09PSAxKSB7XG4gICAgICAgICAgY3Vyc29yID0ge1xuICAgICAgICAgICAgbmFtZTogaW50ZXJwb2xhdGlvbi5uYW1lLFxuICAgICAgICAgICAgc3R5bGVzOiBpbnRlcnBvbGF0aW9uLnN0eWxlcyxcbiAgICAgICAgICAgIG5leHQ6IGN1cnNvclxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIGludGVycG9sYXRpb24ubmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnRlcnBvbGF0aW9uLnN0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIG5leHQgPSBpbnRlcnBvbGF0aW9uLm5leHQ7XG5cbiAgICAgICAgICBpZiAobmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBub3QgdGhlIG1vc3QgZWZmaWNpZW50IHRoaW5nIGV2ZXIgYnV0IHRoaXMgaXMgYSBwcmV0dHkgcmFyZSBjYXNlXG4gICAgICAgICAgICAvLyBhbmQgdGhlcmUgd2lsbCBiZSB2ZXJ5IGZldyBpdGVyYXRpb25zIG9mIHRoaXMgZ2VuZXJhbGx5XG4gICAgICAgICAgICB3aGlsZSAobmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGN1cnNvciA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuZXh0Lm5hbWUsXG4gICAgICAgICAgICAgICAgc3R5bGVzOiBuZXh0LnN0eWxlcyxcbiAgICAgICAgICAgICAgICBuZXh0OiBjdXJzb3JcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgbmV4dCA9IG5leHQubmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgc3R5bGVzID0gaW50ZXJwb2xhdGlvbi5zdHlsZXMgKyBcIjtcIjtcblxuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGludGVycG9sYXRpb24ubWFwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHN0eWxlcyArPSBpbnRlcnBvbGF0aW9uLm1hcDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gc3R5bGVzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZVN0cmluZ0Zyb21PYmplY3QobWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIGludGVycG9sYXRpb24pO1xuICAgICAgfVxuXG4gICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAge1xuICAgICAgICBpZiAobWVyZ2VkUHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhciBwcmV2aW91c0N1cnNvciA9IGN1cnNvcjtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gaW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcyk7XG4gICAgICAgICAgY3Vyc29yID0gcHJldmlvdXNDdXJzb3I7XG4gICAgICAgICAgcmV0dXJuIGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Z1bmN0aW9ucyB0aGF0IGFyZSBpbnRlcnBvbGF0ZWQgaW4gY3NzIGNhbGxzIHdpbGwgYmUgc3RyaW5naWZpZWQuXFxuJyArICdJZiB5b3Ugd2FudCB0byBoYXZlIGEgY3NzIGNhbGwgYmFzZWQgb24gcHJvcHMsIGNyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGNzcyBjYWxsIGxpa2UgdGhpc1xcbicgKyAnbGV0IGR5bmFtaWNTdHlsZSA9IChwcm9wcykgPT4gY3NzYGNvbG9yOiAke3Byb3BzLmNvbG9yfWBcXG4nICsgJ0l0IGNhbiBiZSBjYWxsZWQgZGlyZWN0bHkgd2l0aCBwcm9wcyBvciBpbnRlcnBvbGF0ZWQgaW4gYSBzdHlsZWQgY2FsbCBsaWtlIHRoaXNcXG4nICsgXCJsZXQgU29tZUNvbXBvbmVudCA9IHN0eWxlZCgnZGl2JylgJHtkeW5hbWljU3R5bGV9YFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHZhciBtYXRjaGVkID0gW107XG4gICAgICAgIHZhciByZXBsYWNlZCA9IGludGVycG9sYXRpb24ucmVwbGFjZShhbmltYXRpb25SZWdleCwgZnVuY3Rpb24gKG1hdGNoLCBwMSwgcDIpIHtcbiAgICAgICAgICB2YXIgZmFrZVZhck5hbWUgPSBcImFuaW1hdGlvblwiICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgICAgICAgbWF0Y2hlZC5wdXNoKFwiY29uc3QgXCIgKyBmYWtlVmFyTmFtZSArIFwiID0ga2V5ZnJhbWVzYFwiICsgcDIucmVwbGFjZSgvXkBrZXlmcmFtZXMgYW5pbWF0aW9uLVxcdysvLCAnJykgKyBcImBcIik7XG4gICAgICAgICAgcmV0dXJuIFwiJHtcIiArIGZha2VWYXJOYW1lICsgXCJ9XCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaGVkLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2BrZXlmcmFtZXNgIG91dHB1dCBnb3QgaW50ZXJwb2xhdGVkIGludG8gcGxhaW4gc3RyaW5nLCBwbGVhc2Ugd3JhcCBpdCB3aXRoIGBjc3NgLlxcblxcbicgKyAnSW5zdGVhZCBvZiBkb2luZyB0aGlzOlxcblxcbicgKyBbXS5jb25jYXQobWF0Y2hlZCwgW1wiYFwiICsgcmVwbGFjZWQgKyBcImBcIl0pLmpvaW4oJ1xcbicpICsgJ1xcblxcbllvdSBzaG91bGQgd3JhcCBpdCB3aXRoIGBjc3NgIGxpa2UgdGhpczpcXG5cXG4nICsgKFwiY3NzYFwiICsgcmVwbGFjZWQgKyBcImBcIikpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICB9IC8vIGZpbmFsaXplIHN0cmluZyB2YWx1ZXMgKHJlZ3VsYXIgc3RyaW5ncyBhbmQgZnVuY3Rpb25zIGludGVycG9sYXRlZCBpbnRvIGNzcyBjYWxscylcblxuXG4gIGlmIChyZWdpc3RlcmVkID09IG51bGwpIHtcbiAgICByZXR1cm4gaW50ZXJwb2xhdGlvbjtcbiAgfVxuXG4gIHZhciBjYWNoZWQgPSByZWdpc3RlcmVkW2ludGVycG9sYXRpb25dO1xuICByZXR1cm4gY2FjaGVkICE9PSB1bmRlZmluZWQgPyBjYWNoZWQgOiBpbnRlcnBvbGF0aW9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHJpbmdGcm9tT2JqZWN0KG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBvYmopIHtcbiAgdmFyIHN0cmluZyA9ICcnO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgICAgc3RyaW5nICs9IGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIG9ialtpXSkgKyBcIjtcIjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIgX2tleSBpbiBvYmopIHtcbiAgICAgIHZhciB2YWx1ZSA9IG9ialtfa2V5XTtcblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKHJlZ2lzdGVyZWQgIT0gbnVsbCAmJiByZWdpc3RlcmVkW3ZhbHVlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3RyaW5nICs9IF9rZXkgKyBcIntcIiArIHJlZ2lzdGVyZWRbdmFsdWVdICsgXCJ9XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNQcm9jZXNzYWJsZVZhbHVlKHZhbHVlKSkge1xuICAgICAgICAgIHN0cmluZyArPSBwcm9jZXNzU3R5bGVOYW1lKF9rZXkpICsgXCI6XCIgKyBwcm9jZXNzU3R5bGVWYWx1ZShfa2V5LCB2YWx1ZSkgKyBcIjtcIjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKF9rZXkgPT09ICdOT19DT01QT05FTlRfU0VMRUNUT1InICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Iobm9Db21wb25lbnRTZWxlY3Rvck1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHR5cGVvZiB2YWx1ZVswXSA9PT0gJ3N0cmluZycgJiYgKHJlZ2lzdGVyZWQgPT0gbnVsbCB8fCByZWdpc3RlcmVkW3ZhbHVlWzBdXSA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB2YWx1ZS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGlmIChpc1Byb2Nlc3NhYmxlVmFsdWUodmFsdWVbX2ldKSkge1xuICAgICAgICAgICAgICBzdHJpbmcgKz0gcHJvY2Vzc1N0eWxlTmFtZShfa2V5KSArIFwiOlwiICsgcHJvY2Vzc1N0eWxlVmFsdWUoX2tleSwgdmFsdWVbX2ldKSArIFwiO1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaW50ZXJwb2xhdGVkID0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgdmFsdWUpO1xuXG4gICAgICAgICAgc3dpdGNoIChfa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdhbmltYXRpb24nOlxuICAgICAgICAgICAgY2FzZSAnYW5pbWF0aW9uTmFtZSc6XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gcHJvY2Vzc1N0eWxlTmFtZShfa2V5KSArIFwiOlwiICsgaW50ZXJwb2xhdGVkICsgXCI7XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF9rZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFVOREVGSU5FRF9BU19PQkpFQ1RfS0VZX0VSUk9SKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gX2tleSArIFwie1wiICsgaW50ZXJwb2xhdGVkICsgXCJ9XCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG52YXIgbGFiZWxQYXR0ZXJuID0gL2xhYmVsOlxccyooW15cXHM7XFxue10rKVxccyooO3wkKS9nO1xudmFyIHNvdXJjZU1hcFBhdHRlcm47XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHNvdXJjZU1hcFBhdHRlcm4gPSAvXFwvXFwqI1xcc3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvblxcL2pzb247XFxTK1xccytcXCpcXC8vZztcbn0gLy8gdGhpcyBpcyB0aGUgY3Vyc29yIGZvciBrZXlmcmFtZXNcbi8vIGtleWZyYW1lcyBhcmUgc3RvcmVkIG9uIHRoZSBTZXJpYWxpemVkU3R5bGVzIG9iamVjdCBhcyBhIGxpbmtlZCBsaXN0XG5cblxudmFyIGN1cnNvcjtcbnZhciBzZXJpYWxpemVTdHlsZXMgPSBmdW5jdGlvbiBzZXJpYWxpemVTdHlsZXMoYXJncywgcmVnaXN0ZXJlZCwgbWVyZ2VkUHJvcHMpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhcmdzWzBdID09PSAnb2JqZWN0JyAmJiBhcmdzWzBdICE9PSBudWxsICYmIGFyZ3NbMF0uc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gYXJnc1swXTtcbiAgfVxuXG4gIHZhciBzdHJpbmdNb2RlID0gdHJ1ZTtcbiAgdmFyIHN0eWxlcyA9ICcnO1xuICBjdXJzb3IgPSB1bmRlZmluZWQ7XG4gIHZhciBzdHJpbmdzID0gYXJnc1swXTtcblxuICBpZiAoc3RyaW5ncyA9PSBudWxsIHx8IHN0cmluZ3MucmF3ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdHJpbmdNb2RlID0gZmFsc2U7XG4gICAgc3R5bGVzICs9IGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIHN0cmluZ3MpO1xuICB9IGVsc2Uge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHN0cmluZ3NbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS5lcnJvcihJTExFR0FMX0VTQ0FQRV9TRVFVRU5DRV9FUlJPUik7XG4gICAgfVxuXG4gICAgc3R5bGVzICs9IHN0cmluZ3NbMF07XG4gIH0gLy8gd2Ugc3RhcnQgYXQgMSBzaW5jZSB3ZSd2ZSBhbHJlYWR5IGhhbmRsZWQgdGhlIGZpcnN0IGFyZ1xuXG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgc3R5bGVzICs9IGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIGFyZ3NbaV0pO1xuXG4gICAgaWYgKHN0cmluZ01vZGUpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHN0cmluZ3NbaV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKElMTEVHQUxfRVNDQVBFX1NFUVVFTkNFX0VSUk9SKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzICs9IHN0cmluZ3NbaV07XG4gICAgfVxuICB9XG5cbiAgdmFyIHNvdXJjZU1hcDtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHN0eWxlcyA9IHN0eWxlcy5yZXBsYWNlKHNvdXJjZU1hcFBhdHRlcm4sIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgc291cmNlTWFwID0gbWF0Y2g7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSk7XG4gIH0gLy8gdXNpbmcgYSBnbG9iYWwgcmVnZXggd2l0aCAuZXhlYyBpcyBzdGF0ZWZ1bCBzbyBsYXN0SW5kZXggaGFzIHRvIGJlIHJlc2V0IGVhY2ggdGltZVxuXG5cbiAgbGFiZWxQYXR0ZXJuLmxhc3RJbmRleCA9IDA7XG4gIHZhciBpZGVudGlmaWVyTmFtZSA9ICcnO1xuICB2YXIgbWF0Y2g7IC8vIGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWI4MDljMmNmMjk0OTgwMGEwZjYxZmI1XG5cbiAgd2hpbGUgKChtYXRjaCA9IGxhYmVsUGF0dGVybi5leGVjKHN0eWxlcykpICE9PSBudWxsKSB7XG4gICAgaWRlbnRpZmllck5hbWUgKz0gJy0nICsgLy8gJEZsb3dGaXhNZSB3ZSBrbm93IGl0J3Mgbm90IG51bGxcbiAgICBtYXRjaFsxXTtcbiAgfVxuXG4gIHZhciBuYW1lID0gaGFzaFN0cmluZyhzdHlsZXMpICsgaWRlbnRpZmllck5hbWU7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFNlcmlhbGl6ZWRTdHlsZXMgdHlwZSBkb2Vzbid0IGhhdmUgdG9TdHJpbmcgcHJvcGVydHkgKGFuZCB3ZSBkb24ndCB3YW50IHRvIGFkZCBpdClcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIHN0eWxlczogc3R5bGVzLFxuICAgICAgbWFwOiBzb3VyY2VNYXAsXG4gICAgICBuZXh0OiBjdXJzb3IsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBcIllvdSBoYXZlIHRyaWVkIHRvIHN0cmluZ2lmeSBvYmplY3QgcmV0dXJuZWQgZnJvbSBgY3NzYCBmdW5jdGlvbi4gSXQgaXNuJ3Qgc3VwcG9zZWQgdG8gYmUgdXNlZCBkaXJlY3RseSAoZS5nLiBhcyB2YWx1ZSBvZiB0aGUgYGNsYXNzTmFtZWAgcHJvcCksIGJ1dCByYXRoZXIgaGFuZGVkIHRvIGVtb3Rpb24gc28gaXQgY2FuIGhhbmRsZSBpdCAoZS5nLiBhcyB2YWx1ZSBvZiBgY3NzYCBwcm9wKS5cIjtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIHN0eWxlczogc3R5bGVzLFxuICAgIG5leHQ6IGN1cnNvclxuICB9O1xufTtcblxuZXhwb3J0IHsgc2VyaWFsaXplU3R5bGVzIH07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnZhciBzeW5jRmFsbGJhY2sgPSBmdW5jdGlvbiBzeW5jRmFsbGJhY2soY3JlYXRlKSB7XG4gIHJldHVybiBjcmVhdGUoKTtcbn07XG5cbnZhciB1c2VJbnNlcnRpb25FZmZlY3QgPSBSZWFjdFsndXNlSW5zZXJ0aW9uJyArICdFZmZlY3QnXSA/IFJlYWN0Wyd1c2VJbnNlcnRpb24nICsgJ0VmZmVjdCddIDogZmFsc2U7XG52YXIgdXNlSW5zZXJ0aW9uRWZmZWN0QWx3YXlzV2l0aFN5bmNGYWxsYmFjayA9IHVzZUluc2VydGlvbkVmZmVjdCB8fCBzeW5jRmFsbGJhY2s7XG52YXIgdXNlSW5zZXJ0aW9uRWZmZWN0V2l0aExheW91dEZhbGxiYWNrID0gdXNlSW5zZXJ0aW9uRWZmZWN0IHx8IFJlYWN0LnVzZUxheW91dEVmZmVjdDtcblxuZXhwb3J0IHsgdXNlSW5zZXJ0aW9uRWZmZWN0QWx3YXlzV2l0aFN5bmNGYWxsYmFjaywgdXNlSW5zZXJ0aW9uRWZmZWN0V2l0aExheW91dEZhbGxiYWNrIH07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNyZWF0ZUNhY2hlIGZyb20gJ0BlbW90aW9uL2NhY2hlJztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCB3ZWFrTWVtb2l6ZSBmcm9tICdAZW1vdGlvbi93ZWFrLW1lbW9pemUnO1xuaW1wb3J0IGhvaXN0Tm9uUmVhY3RTdGF0aWNzIGZyb20gJy4uL19pc29sYXRlZC1obnJzL2Rpc3QvZW1vdGlvbi1yZWFjdC1faXNvbGF0ZWQtaG5ycy5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBnZXRSZWdpc3RlcmVkU3R5bGVzLCByZWdpc3RlclN0eWxlcywgaW5zZXJ0U3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vdXRpbHMnO1xuaW1wb3J0IHsgc2VyaWFsaXplU3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vc2VyaWFsaXplJztcbmltcG9ydCB7IHVzZUluc2VydGlvbkVmZmVjdEFsd2F5c1dpdGhTeW5jRmFsbGJhY2sgfSBmcm9tICdAZW1vdGlvbi91c2UtaW5zZXJ0aW9uLWVmZmVjdC13aXRoLWZhbGxiYWNrcyc7XG5cbnZhciBpc0Jyb3dzZXIgPSBcIm9iamVjdFwiICE9PSAndW5kZWZpbmVkJztcbnZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIEVtb3Rpb25DYWNoZUNvbnRleHQgPSAvKiAjX19QVVJFX18gKi9SZWFjdC5jcmVhdGVDb250ZXh0KCAvLyB3ZSdyZSBkb2luZyB0aGlzIHRvIGF2b2lkIHByZWNvbnN0cnVjdCdzIGRlYWQgY29kZSBlbGltaW5hdGlvbiBpbiB0aGlzIG9uZSBjYXNlXG4vLyBiZWNhdXNlIHRoaXMgbW9kdWxlIGlzIHByaW1hcmlseSBpbnRlbmRlZCBmb3IgdGhlIGJyb3dzZXIgYW5kIG5vZGVcbi8vIGJ1dCBpdCdzIGFsc28gcmVxdWlyZWQgaW4gcmVhY3QgbmF0aXZlIGFuZCBzaW1pbGFyIGVudmlyb25tZW50cyBzb21ldGltZXNcbi8vIGFuZCB3ZSBjb3VsZCBoYXZlIGEgc3BlY2lhbCBidWlsZCBqdXN0IGZvciB0aGF0XG4vLyBidXQgdGhpcyBpcyBtdWNoIGVhc2llciBhbmQgdGhlIG5hdGl2ZSBwYWNrYWdlc1xuLy8gbWlnaHQgdXNlIGEgZGlmZmVyZW50IHRoZW1lIGNvbnRleHQgaW4gdGhlIGZ1dHVyZSBhbnl3YXlcbnR5cGVvZiBIVE1MRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgPyAvKiAjX19QVVJFX18gKi9jcmVhdGVDYWNoZSh7XG4gIGtleTogJ2Nzcydcbn0pIDogbnVsbCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIEVtb3Rpb25DYWNoZUNvbnRleHQuZGlzcGxheU5hbWUgPSAnRW1vdGlvbkNhY2hlQ29udGV4dCc7XG59XG5cbnZhciBDYWNoZVByb3ZpZGVyID0gRW1vdGlvbkNhY2hlQ29udGV4dC5Qcm92aWRlcjtcbnZhciBfX3Vuc2FmZV91c2VFbW90aW9uQ2FjaGUgPSBmdW5jdGlvbiB1c2VFbW90aW9uQ2FjaGUoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KEVtb3Rpb25DYWNoZUNvbnRleHQpO1xufTtcblxudmFyIHdpdGhFbW90aW9uQ2FjaGUgPSBmdW5jdGlvbiB3aXRoRW1vdGlvbkNhY2hlKGZ1bmMpIHtcbiAgLy8gJEZsb3dGaXhNZVxuICByZXR1cm4gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgICAvLyB0aGUgY2FjaGUgd2lsbCBuZXZlciBiZSBudWxsIGluIHRoZSBicm93c2VyXG4gICAgdmFyIGNhY2hlID0gdXNlQ29udGV4dChFbW90aW9uQ2FjaGVDb250ZXh0KTtcbiAgICByZXR1cm4gZnVuYyhwcm9wcywgY2FjaGUsIHJlZik7XG4gIH0pO1xufTtcblxuaWYgKCFpc0Jyb3dzZXIpIHtcbiAgd2l0aEVtb3Rpb25DYWNoZSA9IGZ1bmN0aW9uIHdpdGhFbW90aW9uQ2FjaGUoZnVuYykge1xuICAgIHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgIHZhciBjYWNoZSA9IHVzZUNvbnRleHQoRW1vdGlvbkNhY2hlQ29udGV4dCk7XG5cbiAgICAgIGlmIChjYWNoZSA9PT0gbnVsbCkge1xuICAgICAgICAvLyB5ZXMsIHdlJ3JlIHBvdGVudGlhbGx5IGNyZWF0aW5nIHRoaXMgb24gZXZlcnkgcmVuZGVyXG4gICAgICAgIC8vIGl0IGRvZXNuJ3QgYWN0dWFsbHkgbWF0dGVyIHRob3VnaCBzaW5jZSBpdCdzIG9ubHkgb24gdGhlIHNlcnZlclxuICAgICAgICAvLyBzbyB0aGVyZSB3aWxsIG9ubHkgZXZlcnkgYmUgYSBzaW5nbGUgcmVuZGVyXG4gICAgICAgIC8vIHRoYXQgY291bGQgY2hhbmdlIGluIHRoZSBmdXR1cmUgYmVjYXVzZSBvZiBzdXNwZW5zZSBhbmQgZXRjLiBidXQgZm9yIG5vdyxcbiAgICAgICAgLy8gdGhpcyB3b3JrcyBhbmQgaSBkb24ndCB3YW50IHRvIG9wdGltaXNlIGZvciBhIGZ1dHVyZSB0aGluZyB0aGF0IHdlIGFyZW4ndCBzdXJlIGFib3V0XG4gICAgICAgIGNhY2hlID0gY3JlYXRlQ2FjaGUoe1xuICAgICAgICAgIGtleTogJ2NzcydcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChFbW90aW9uQ2FjaGVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgICAgdmFsdWU6IGNhY2hlXG4gICAgICAgIH0sIGZ1bmMocHJvcHMsIGNhY2hlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZnVuYyhwcm9wcywgY2FjaGUpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG59XG5cbnZhciBUaGVtZUNvbnRleHQgPSAvKiAjX19QVVJFX18gKi9SZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgVGhlbWVDb250ZXh0LmRpc3BsYXlOYW1lID0gJ0Vtb3Rpb25UaGVtZUNvbnRleHQnO1xufVxuXG52YXIgdXNlVGhlbWUgPSBmdW5jdGlvbiB1c2VUaGVtZSgpIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcbn07XG5cbnZhciBnZXRUaGVtZSA9IGZ1bmN0aW9uIGdldFRoZW1lKG91dGVyVGhlbWUsIHRoZW1lKSB7XG4gIGlmICh0eXBlb2YgdGhlbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgbWVyZ2VkVGhlbWUgPSB0aGVtZShvdXRlclRoZW1lKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIChtZXJnZWRUaGVtZSA9PSBudWxsIHx8IHR5cGVvZiBtZXJnZWRUaGVtZSAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShtZXJnZWRUaGVtZSkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tUaGVtZVByb3ZpZGVyXSBQbGVhc2UgcmV0dXJuIGFuIG9iamVjdCBmcm9tIHlvdXIgdGhlbWUgZnVuY3Rpb24sIGkuZS4gdGhlbWU9eygpID0+ICh7fSl9IScpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXJnZWRUaGVtZTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICh0aGVtZSA9PSBudWxsIHx8IHR5cGVvZiB0aGVtZSAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheSh0aGVtZSkpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdbVGhlbWVQcm92aWRlcl0gUGxlYXNlIG1ha2UgeW91ciB0aGVtZSBwcm9wIGEgcGxhaW4gb2JqZWN0Jyk7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIG91dGVyVGhlbWUsIHRoZW1lKTtcbn07XG5cbnZhciBjcmVhdGVDYWNoZVdpdGhUaGVtZSA9IC8qICNfX1BVUkVfXyAqL3dlYWtNZW1vaXplKGZ1bmN0aW9uIChvdXRlclRoZW1lKSB7XG4gIHJldHVybiB3ZWFrTWVtb2l6ZShmdW5jdGlvbiAodGhlbWUpIHtcbiAgICByZXR1cm4gZ2V0VGhlbWUob3V0ZXJUaGVtZSwgdGhlbWUpO1xuICB9KTtcbn0pO1xudmFyIFRoZW1lUHJvdmlkZXIgPSBmdW5jdGlvbiBUaGVtZVByb3ZpZGVyKHByb3BzKSB7XG4gIHZhciB0aGVtZSA9IFJlYWN0LnVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcblxuICBpZiAocHJvcHMudGhlbWUgIT09IHRoZW1lKSB7XG4gICAgdGhlbWUgPSBjcmVhdGVDYWNoZVdpdGhUaGVtZSh0aGVtZSkocHJvcHMudGhlbWUpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRoZW1lQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiB0aGVtZVxuICB9LCBwcm9wcy5jaGlsZHJlbik7XG59O1xuZnVuY3Rpb24gd2l0aFRoZW1lKENvbXBvbmVudCkge1xuICB2YXIgY29tcG9uZW50TmFtZSA9IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcblxuICB2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHByb3BzLCByZWYpIHtcbiAgICB2YXIgdGhlbWUgPSBSZWFjdC51c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgdGhlbWU6IHRoZW1lLFxuICAgICAgcmVmOiByZWZcbiAgICB9LCBwcm9wcykpO1xuICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICB2YXIgV2l0aFRoZW1lID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYocmVuZGVyKTtcbiAgV2l0aFRoZW1lLmRpc3BsYXlOYW1lID0gXCJXaXRoVGhlbWUoXCIgKyBjb21wb25lbnROYW1lICsgXCIpXCI7XG4gIHJldHVybiBob2lzdE5vblJlYWN0U3RhdGljcyhXaXRoVGhlbWUsIENvbXBvbmVudCk7XG59XG5cbnZhciBnZXRMYXN0UGFydCA9IGZ1bmN0aW9uIGdldExhc3RQYXJ0KGZ1bmN0aW9uTmFtZSkge1xuICAvLyBUaGUgbWF0Y2ggbWF5IGJlIHNvbWV0aGluZyBsaWtlICdPYmplY3QuY3JlYXRlRW1vdGlvblByb3BzJyBvclxuICAvLyAnTG9hZGVyLnByb3RvdHlwZS5yZW5kZXInXG4gIHZhciBwYXJ0cyA9IGZ1bmN0aW9uTmFtZS5zcGxpdCgnLicpO1xuICByZXR1cm4gcGFydHNbcGFydHMubGVuZ3RoIC0gMV07XG59O1xuXG52YXIgZ2V0RnVuY3Rpb25OYW1lRnJvbVN0YWNrVHJhY2VMaW5lID0gZnVuY3Rpb24gZ2V0RnVuY3Rpb25OYW1lRnJvbVN0YWNrVHJhY2VMaW5lKGxpbmUpIHtcbiAgLy8gVjhcbiAgdmFyIG1hdGNoID0gL15cXHMrYXRcXHMrKFtBLVphLXowLTkkLl0rKVxccy8uZXhlYyhsaW5lKTtcbiAgaWYgKG1hdGNoKSByZXR1cm4gZ2V0TGFzdFBhcnQobWF0Y2hbMV0pOyAvLyBTYWZhcmkgLyBGaXJlZm94XG5cbiAgbWF0Y2ggPSAvXihbQS1aYS16MC05JC5dKylALy5leGVjKGxpbmUpO1xuICBpZiAobWF0Y2gpIHJldHVybiBnZXRMYXN0UGFydChtYXRjaFsxXSk7XG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG52YXIgaW50ZXJuYWxSZWFjdEZ1bmN0aW9uTmFtZXMgPSAvKiAjX19QVVJFX18gKi9uZXcgU2V0KFsncmVuZGVyV2l0aEhvb2tzJywgJ3Byb2Nlc3NDaGlsZCcsICdmaW5pc2hDbGFzc0NvbXBvbmVudCcsICdyZW5kZXJUb1N0cmluZyddKTsgLy8gVGhlc2UgaWRlbnRpZmllcnMgY29tZSBmcm9tIGVycm9yIHN0YWNrcywgc28gdGhleSBoYXZlIHRvIGJlIHZhbGlkIEpTXG4vLyBpZGVudGlmaWVycywgdGh1cyB3ZSBvbmx5IG5lZWQgdG8gcmVwbGFjZSB3aGF0IGlzIGEgdmFsaWQgY2hhcmFjdGVyIGZvciBKUyxcbi8vIGJ1dCBub3QgZm9yIENTUy5cblxudmFyIHNhbml0aXplSWRlbnRpZmllciA9IGZ1bmN0aW9uIHNhbml0aXplSWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHJldHVybiBpZGVudGlmaWVyLnJlcGxhY2UoL1xcJC9nLCAnLScpO1xufTtcblxudmFyIGdldExhYmVsRnJvbVN0YWNrVHJhY2UgPSBmdW5jdGlvbiBnZXRMYWJlbEZyb21TdGFja1RyYWNlKHN0YWNrVHJhY2UpIHtcbiAgaWYgKCFzdGFja1RyYWNlKSByZXR1cm4gdW5kZWZpbmVkO1xuICB2YXIgbGluZXMgPSBzdGFja1RyYWNlLnNwbGl0KCdcXG4nKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGZ1bmN0aW9uTmFtZSA9IGdldEZ1bmN0aW9uTmFtZUZyb21TdGFja1RyYWNlTGluZShsaW5lc1tpXSk7IC8vIFRoZSBmaXJzdCBsaW5lIG9mIFY4IHN0YWNrIHRyYWNlcyBpcyBqdXN0IFwiRXJyb3JcIlxuXG4gICAgaWYgKCFmdW5jdGlvbk5hbWUpIGNvbnRpbnVlOyAvLyBJZiB3ZSByZWFjaCBvbmUgb2YgdGhlc2UsIHdlIGhhdmUgZ29uZSB0b28gZmFyIGFuZCBzaG91bGQgcXVpdFxuXG4gICAgaWYgKGludGVybmFsUmVhY3RGdW5jdGlvbk5hbWVzLmhhcyhmdW5jdGlvbk5hbWUpKSBicmVhazsgLy8gVGhlIGNvbXBvbmVudCBuYW1lIGlzIHRoZSBmaXJzdCBmdW5jdGlvbiBpbiB0aGUgc3RhY2sgdGhhdCBzdGFydHMgd2l0aCBhblxuICAgIC8vIHVwcGVyY2FzZSBsZXR0ZXJcblxuICAgIGlmICgvXltBLVpdLy50ZXN0KGZ1bmN0aW9uTmFtZSkpIHJldHVybiBzYW5pdGl6ZUlkZW50aWZpZXIoZnVuY3Rpb25OYW1lKTtcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG52YXIgdHlwZVByb3BOYW1lID0gJ19fRU1PVElPTl9UWVBFX1BMRUFTRV9ET19OT1RfVVNFX18nO1xudmFyIGxhYmVsUHJvcE5hbWUgPSAnX19FTU9USU9OX0xBQkVMX1BMRUFTRV9ET19OT1RfVVNFX18nO1xudmFyIGNyZWF0ZUVtb3Rpb25Qcm9wcyA9IGZ1bmN0aW9uIGNyZWF0ZUVtb3Rpb25Qcm9wcyh0eXBlLCBwcm9wcykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgcHJvcHMuY3NzID09PSAnc3RyaW5nJyAmJiAvLyBjaGVjayBpZiB0aGVyZSBpcyBhIGNzcyBkZWNsYXJhdGlvblxuICBwcm9wcy5jc3MuaW5kZXhPZignOicpICE9PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlN0cmluZ3MgYXJlIG5vdCBhbGxvd2VkIGFzIGNzcyBwcm9wIHZhbHVlcywgcGxlYXNlIHdyYXAgaXQgaW4gYSBjc3MgdGVtcGxhdGUgbGl0ZXJhbCBmcm9tICdAZW1vdGlvbi9yZWFjdCcgbGlrZSB0aGlzOiBjc3NgXCIgKyBwcm9wcy5jc3MgKyBcImBcIik7XG4gIH1cblxuICB2YXIgbmV3UHJvcHMgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICBpZiAoaGFzT3duLmNhbGwocHJvcHMsIGtleSkpIHtcbiAgICAgIG5ld1Byb3BzW2tleV0gPSBwcm9wc1trZXldO1xuICAgIH1cbiAgfVxuXG4gIG5ld1Byb3BzW3R5cGVQcm9wTmFtZV0gPSB0eXBlOyAvLyBGb3IgcGVyZm9ybWFuY2UsIG9ubHkgY2FsbCBnZXRMYWJlbEZyb21TdGFja1RyYWNlIGluIGRldmVsb3BtZW50IGFuZCB3aGVuXG4gIC8vIHRoZSBsYWJlbCBoYXNuJ3QgYWxyZWFkeSBiZWVuIGNvbXB1dGVkXG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgISFwcm9wcy5jc3MgJiYgKHR5cGVvZiBwcm9wcy5jc3MgIT09ICdvYmplY3QnIHx8IHR5cGVvZiBwcm9wcy5jc3MubmFtZSAhPT0gJ3N0cmluZycgfHwgcHJvcHMuY3NzLm5hbWUuaW5kZXhPZignLScpID09PSAtMSkpIHtcbiAgICB2YXIgbGFiZWwgPSBnZXRMYWJlbEZyb21TdGFja1RyYWNlKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICBpZiAobGFiZWwpIG5ld1Byb3BzW2xhYmVsUHJvcE5hbWVdID0gbGFiZWw7XG4gIH1cblxuICByZXR1cm4gbmV3UHJvcHM7XG59O1xuXG52YXIgSW5zZXJ0aW9uID0gZnVuY3Rpb24gSW5zZXJ0aW9uKF9yZWYpIHtcbiAgdmFyIGNhY2hlID0gX3JlZi5jYWNoZSxcbiAgICAgIHNlcmlhbGl6ZWQgPSBfcmVmLnNlcmlhbGl6ZWQsXG4gICAgICBpc1N0cmluZ1RhZyA9IF9yZWYuaXNTdHJpbmdUYWc7XG4gIHJlZ2lzdGVyU3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkLCBpc1N0cmluZ1RhZyk7XG4gIHVzZUluc2VydGlvbkVmZmVjdEFsd2F5c1dpdGhTeW5jRmFsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBpbnNlcnRTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGlzU3RyaW5nVGFnKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG52YXIgRW1vdGlvbiA9IC8qICNfX1BVUkVfXyAqL3dpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzLCBjYWNoZSwgcmVmKSB7XG4gIHZhciBjc3NQcm9wID0gcHJvcHMuY3NzOyAvLyBzbyB0aGF0IHVzaW5nIGBjc3NgIGZyb20gYGVtb3Rpb25gIGFuZCBwYXNzaW5nIHRoZSByZXN1bHQgdG8gdGhlIGNzcyBwcm9wIHdvcmtzXG4gIC8vIG5vdCBwYXNzaW5nIHRoZSByZWdpc3RlcmVkIGNhY2hlIHRvIHNlcmlhbGl6ZVN0eWxlcyBiZWNhdXNlIGl0IHdvdWxkXG4gIC8vIG1ha2UgY2VydGFpbiBiYWJlbCBvcHRpbWlzYXRpb25zIG5vdCBwb3NzaWJsZVxuXG4gIGlmICh0eXBlb2YgY3NzUHJvcCA9PT0gJ3N0cmluZycgJiYgY2FjaGUucmVnaXN0ZXJlZFtjc3NQcm9wXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY3NzUHJvcCA9IGNhY2hlLnJlZ2lzdGVyZWRbY3NzUHJvcF07XG4gIH1cblxuICB2YXIgV3JhcHBlZENvbXBvbmVudCA9IHByb3BzW3R5cGVQcm9wTmFtZV07XG4gIHZhciByZWdpc3RlcmVkU3R5bGVzID0gW2Nzc1Byb3BdO1xuICB2YXIgY2xhc3NOYW1lID0gJyc7XG5cbiAgaWYgKHR5cGVvZiBwcm9wcy5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgY2xhc3NOYW1lID0gZ2V0UmVnaXN0ZXJlZFN0eWxlcyhjYWNoZS5yZWdpc3RlcmVkLCByZWdpc3RlcmVkU3R5bGVzLCBwcm9wcy5jbGFzc05hbWUpO1xuICB9IGVsc2UgaWYgKHByb3BzLmNsYXNzTmFtZSAhPSBudWxsKSB7XG4gICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lICsgXCIgXCI7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZVN0eWxlcyhyZWdpc3RlcmVkU3R5bGVzLCB1bmRlZmluZWQsIFJlYWN0LnVzZUNvbnRleHQoVGhlbWVDb250ZXh0KSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgc2VyaWFsaXplZC5uYW1lLmluZGV4T2YoJy0nKSA9PT0gLTEpIHtcbiAgICB2YXIgbGFiZWxGcm9tU3RhY2sgPSBwcm9wc1tsYWJlbFByb3BOYW1lXTtcblxuICAgIGlmIChsYWJlbEZyb21TdGFjaykge1xuICAgICAgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZVN0eWxlcyhbc2VyaWFsaXplZCwgJ2xhYmVsOicgKyBsYWJlbEZyb21TdGFjayArICc7J10pO1xuICAgIH1cbiAgfVxuXG4gIGNsYXNzTmFtZSArPSBjYWNoZS5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcbiAgdmFyIG5ld1Byb3BzID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgaWYgKGhhc093bi5jYWxsKHByb3BzLCBrZXkpICYmIGtleSAhPT0gJ2NzcycgJiYga2V5ICE9PSB0eXBlUHJvcE5hbWUgJiYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgfHwga2V5ICE9PSBsYWJlbFByb3BOYW1lKSkge1xuICAgICAgbmV3UHJvcHNba2V5XSA9IHByb3BzW2tleV07XG4gICAgfVxuICB9XG5cbiAgbmV3UHJvcHMucmVmID0gcmVmO1xuICBuZXdQcm9wcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5zZXJ0aW9uLCB7XG4gICAgY2FjaGU6IGNhY2hlLFxuICAgIHNlcmlhbGl6ZWQ6IHNlcmlhbGl6ZWQsXG4gICAgaXNTdHJpbmdUYWc6IHR5cGVvZiBXcmFwcGVkQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgbmV3UHJvcHMpKTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBFbW90aW9uLmRpc3BsYXlOYW1lID0gJ0Vtb3Rpb25Dc3NQcm9wSW50ZXJuYWwnO1xufVxuXG52YXIgRW1vdGlvbiQxID0gRW1vdGlvbjtcblxuZXhwb3J0IHsgQ2FjaGVQcm92aWRlciBhcyBDLCBFbW90aW9uJDEgYXMgRSwgVGhlbWVDb250ZXh0IGFzIFQsIF9fdW5zYWZlX3VzZUVtb3Rpb25DYWNoZSBhcyBfLCBUaGVtZVByb3ZpZGVyIGFzIGEsIHdpdGhUaGVtZSBhcyBiLCBjcmVhdGVFbW90aW9uUHJvcHMgYXMgYywgaGFzT3duIGFzIGgsIGlzQnJvd3NlciBhcyBpLCB1c2VUaGVtZSBhcyB1LCB3aXRoRW1vdGlvbkNhY2hlIGFzIHcgfTtcbiIsImltcG9ydCB7IGggYXMgaGFzT3duLCBFIGFzIEVtb3Rpb24sIGMgYXMgY3JlYXRlRW1vdGlvblByb3BzLCB3IGFzIHdpdGhFbW90aW9uQ2FjaGUsIFQgYXMgVGhlbWVDb250ZXh0LCBpIGFzIGlzQnJvd3NlciQxIH0gZnJvbSAnLi9lbW90aW9uLWVsZW1lbnQtNDNjNmZlYTAuYnJvd3Nlci5lc20uanMnO1xuZXhwb3J0IHsgQyBhcyBDYWNoZVByb3ZpZGVyLCBUIGFzIFRoZW1lQ29udGV4dCwgYSBhcyBUaGVtZVByb3ZpZGVyLCBfIGFzIF9fdW5zYWZlX3VzZUVtb3Rpb25DYWNoZSwgdSBhcyB1c2VUaGVtZSwgdyBhcyB3aXRoRW1vdGlvbkNhY2hlLCBiIGFzIHdpdGhUaGVtZSB9IGZyb20gJy4vZW1vdGlvbi1lbGVtZW50LTQzYzZmZWEwLmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGluc2VydFN0eWxlcywgcmVnaXN0ZXJTdHlsZXMsIGdldFJlZ2lzdGVyZWRTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi91dGlscyc7XG5pbXBvcnQgeyB1c2VJbnNlcnRpb25FZmZlY3RXaXRoTGF5b3V0RmFsbGJhY2ssIHVzZUluc2VydGlvbkVmZmVjdEFsd2F5c1dpdGhTeW5jRmFsbGJhY2sgfSBmcm9tICdAZW1vdGlvbi91c2UtaW5zZXJ0aW9uLWVmZmVjdC13aXRoLWZhbGxiYWNrcyc7XG5pbXBvcnQgeyBzZXJpYWxpemVTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi9zZXJpYWxpemUnO1xuaW1wb3J0ICdAZW1vdGlvbi9jYWNoZSc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgJ0BlbW90aW9uL3dlYWstbWVtb2l6ZSc7XG5pbXBvcnQgJy4uL19pc29sYXRlZC1obnJzL2Rpc3QvZW1vdGlvbi1yZWFjdC1faXNvbGF0ZWQtaG5ycy5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcblxudmFyIHBrZyA9IHtcblx0bmFtZTogXCJAZW1vdGlvbi9yZWFjdFwiLFxuXHR2ZXJzaW9uOiBcIjExLjExLjRcIixcblx0bWFpbjogXCJkaXN0L2Vtb3Rpb24tcmVhY3QuY2pzLmpzXCIsXG5cdG1vZHVsZTogXCJkaXN0L2Vtb3Rpb24tcmVhY3QuZXNtLmpzXCIsXG5cdGJyb3dzZXI6IHtcblx0XHRcIi4vZGlzdC9lbW90aW9uLXJlYWN0LmVzbS5qc1wiOiBcIi4vZGlzdC9lbW90aW9uLXJlYWN0LmJyb3dzZXIuZXNtLmpzXCJcblx0fSxcblx0ZXhwb3J0czoge1xuXHRcdFwiLlwiOiB7XG5cdFx0XHRtb2R1bGU6IHtcblx0XHRcdFx0d29ya2VyOiBcIi4vZGlzdC9lbW90aW9uLXJlYWN0Lndvcmtlci5lc20uanNcIixcblx0XHRcdFx0YnJvd3NlcjogXCIuL2Rpc3QvZW1vdGlvbi1yZWFjdC5icm93c2VyLmVzbS5qc1wiLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCIuL2Rpc3QvZW1vdGlvbi1yZWFjdC5lc20uanNcIlxuXHRcdFx0fSxcblx0XHRcdFwiaW1wb3J0XCI6IFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3QuY2pzLm1qc1wiLFxuXHRcdFx0XCJkZWZhdWx0XCI6IFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3QuY2pzLmpzXCJcblx0XHR9LFxuXHRcdFwiLi9qc3gtcnVudGltZVwiOiB7XG5cdFx0XHRtb2R1bGU6IHtcblx0XHRcdFx0d29ya2VyOiBcIi4vanN4LXJ1bnRpbWUvZGlzdC9lbW90aW9uLXJlYWN0LWpzeC1ydW50aW1lLndvcmtlci5lc20uanNcIixcblx0XHRcdFx0YnJvd3NlcjogXCIuL2pzeC1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtcnVudGltZS5icm93c2VyLmVzbS5qc1wiLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCIuL2pzeC1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtcnVudGltZS5lc20uanNcIlxuXHRcdFx0fSxcblx0XHRcdFwiaW1wb3J0XCI6IFwiLi9qc3gtcnVudGltZS9kaXN0L2Vtb3Rpb24tcmVhY3QtanN4LXJ1bnRpbWUuY2pzLm1qc1wiLFxuXHRcdFx0XCJkZWZhdWx0XCI6IFwiLi9qc3gtcnVudGltZS9kaXN0L2Vtb3Rpb24tcmVhY3QtanN4LXJ1bnRpbWUuY2pzLmpzXCJcblx0XHR9LFxuXHRcdFwiLi9faXNvbGF0ZWQtaG5yc1wiOiB7XG5cdFx0XHRtb2R1bGU6IHtcblx0XHRcdFx0d29ya2VyOiBcIi4vX2lzb2xhdGVkLWhucnMvZGlzdC9lbW90aW9uLXJlYWN0LV9pc29sYXRlZC1obnJzLndvcmtlci5lc20uanNcIixcblx0XHRcdFx0YnJvd3NlcjogXCIuL19pc29sYXRlZC1obnJzL2Rpc3QvZW1vdGlvbi1yZWFjdC1faXNvbGF0ZWQtaG5ycy5icm93c2VyLmVzbS5qc1wiLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCIuL19pc29sYXRlZC1obnJzL2Rpc3QvZW1vdGlvbi1yZWFjdC1faXNvbGF0ZWQtaG5ycy5lc20uanNcIlxuXHRcdFx0fSxcblx0XHRcdFwiaW1wb3J0XCI6IFwiLi9faXNvbGF0ZWQtaG5ycy9kaXN0L2Vtb3Rpb24tcmVhY3QtX2lzb2xhdGVkLWhucnMuY2pzLm1qc1wiLFxuXHRcdFx0XCJkZWZhdWx0XCI6IFwiLi9faXNvbGF0ZWQtaG5ycy9kaXN0L2Vtb3Rpb24tcmVhY3QtX2lzb2xhdGVkLWhucnMuY2pzLmpzXCJcblx0XHR9LFxuXHRcdFwiLi9qc3gtZGV2LXJ1bnRpbWVcIjoge1xuXHRcdFx0bW9kdWxlOiB7XG5cdFx0XHRcdHdvcmtlcjogXCIuL2pzeC1kZXYtcnVudGltZS9kaXN0L2Vtb3Rpb24tcmVhY3QtanN4LWRldi1ydW50aW1lLndvcmtlci5lc20uanNcIixcblx0XHRcdFx0YnJvd3NlcjogXCIuL2pzeC1kZXYtcnVudGltZS9kaXN0L2Vtb3Rpb24tcmVhY3QtanN4LWRldi1ydW50aW1lLmJyb3dzZXIuZXNtLmpzXCIsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBcIi4vanN4LWRldi1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZXNtLmpzXCJcblx0XHRcdH0sXG5cdFx0XHRcImltcG9ydFwiOiBcIi4vanN4LWRldi1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuY2pzLm1qc1wiLFxuXHRcdFx0XCJkZWZhdWx0XCI6IFwiLi9qc3gtZGV2LXJ1bnRpbWUvZGlzdC9lbW90aW9uLXJlYWN0LWpzeC1kZXYtcnVudGltZS5janMuanNcIlxuXHRcdH0sXG5cdFx0XCIuL3BhY2thZ2UuanNvblwiOiBcIi4vcGFja2FnZS5qc29uXCIsXG5cdFx0XCIuL3R5cGVzL2Nzcy1wcm9wXCI6IFwiLi90eXBlcy9jc3MtcHJvcC5kLnRzXCIsXG5cdFx0XCIuL21hY3JvXCI6IHtcblx0XHRcdHR5cGVzOiB7XG5cdFx0XHRcdFwiaW1wb3J0XCI6IFwiLi9tYWNyby5kLm10c1wiLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCIuL21hY3JvLmQudHNcIlxuXHRcdFx0fSxcblx0XHRcdFwiZGVmYXVsdFwiOiBcIi4vbWFjcm8uanNcIlxuXHRcdH1cblx0fSxcblx0dHlwZXM6IFwidHlwZXMvaW5kZXguZC50c1wiLFxuXHRmaWxlczogW1xuXHRcdFwic3JjXCIsXG5cdFx0XCJkaXN0XCIsXG5cdFx0XCJqc3gtcnVudGltZVwiLFxuXHRcdFwianN4LWRldi1ydW50aW1lXCIsXG5cdFx0XCJfaXNvbGF0ZWQtaG5yc1wiLFxuXHRcdFwidHlwZXMvKi5kLnRzXCIsXG5cdFx0XCJtYWNyby4qXCJcblx0XSxcblx0c2lkZUVmZmVjdHM6IGZhbHNlLFxuXHRhdXRob3I6IFwiRW1vdGlvbiBDb250cmlidXRvcnNcIixcblx0bGljZW5zZTogXCJNSVRcIixcblx0c2NyaXB0czoge1xuXHRcdFwidGVzdDp0eXBlc2NyaXB0XCI6IFwiZHRzbGludCB0eXBlc1wiXG5cdH0sXG5cdGRlcGVuZGVuY2llczoge1xuXHRcdFwiQGJhYmVsL3J1bnRpbWVcIjogXCJeNy4xOC4zXCIsXG5cdFx0XCJAZW1vdGlvbi9iYWJlbC1wbHVnaW5cIjogXCJeMTEuMTEuMFwiLFxuXHRcdFwiQGVtb3Rpb24vY2FjaGVcIjogXCJeMTEuMTEuMFwiLFxuXHRcdFwiQGVtb3Rpb24vc2VyaWFsaXplXCI6IFwiXjEuMS4zXCIsXG5cdFx0XCJAZW1vdGlvbi91c2UtaW5zZXJ0aW9uLWVmZmVjdC13aXRoLWZhbGxiYWNrc1wiOiBcIl4xLjAuMVwiLFxuXHRcdFwiQGVtb3Rpb24vdXRpbHNcIjogXCJeMS4yLjFcIixcblx0XHRcIkBlbW90aW9uL3dlYWstbWVtb2l6ZVwiOiBcIl4wLjMuMVwiLFxuXHRcdFwiaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3NcIjogXCJeMy4zLjFcIlxuXHR9LFxuXHRwZWVyRGVwZW5kZW5jaWVzOiB7XG5cdFx0cmVhY3Q6IFwiPj0xNi44LjBcIlxuXHR9LFxuXHRwZWVyRGVwZW5kZW5jaWVzTWV0YToge1xuXHRcdFwiQHR5cGVzL3JlYWN0XCI6IHtcblx0XHRcdG9wdGlvbmFsOiB0cnVlXG5cdFx0fVxuXHR9LFxuXHRkZXZEZXBlbmRlbmNpZXM6IHtcblx0XHRcIkBkZWZpbml0ZWx5dHlwZWQvZHRzbGludFwiOiBcIjAuMC4xMTJcIixcblx0XHRcIkBlbW90aW9uL2Nzc1wiOiBcIjExLjExLjJcIixcblx0XHRcIkBlbW90aW9uL2Nzcy1wcmV0dGlmaWVyXCI6IFwiMS4xLjNcIixcblx0XHRcIkBlbW90aW9uL3NlcnZlclwiOiBcIjExLjExLjBcIixcblx0XHRcIkBlbW90aW9uL3N0eWxlZFwiOiBcIjExLjExLjBcIixcblx0XHRcImh0bWwtdGFnLW5hbWVzXCI6IFwiXjEuMS4yXCIsXG5cdFx0cmVhY3Q6IFwiMTYuMTQuMFwiLFxuXHRcdFwic3ZnLXRhZy1uYW1lc1wiOiBcIl4xLjEuMVwiLFxuXHRcdHR5cGVzY3JpcHQ6IFwiXjQuNS41XCJcblx0fSxcblx0cmVwb3NpdG9yeTogXCJodHRwczovL2dpdGh1Yi5jb20vZW1vdGlvbi1qcy9lbW90aW9uL3RyZWUvbWFpbi9wYWNrYWdlcy9yZWFjdFwiLFxuXHRwdWJsaXNoQ29uZmlnOiB7XG5cdFx0YWNjZXNzOiBcInB1YmxpY1wiXG5cdH0sXG5cdFwidW1kOm1haW5cIjogXCJkaXN0L2Vtb3Rpb24tcmVhY3QudW1kLm1pbi5qc1wiLFxuXHRwcmVjb25zdHJ1Y3Q6IHtcblx0XHRlbnRyeXBvaW50czogW1xuXHRcdFx0XCIuL2luZGV4LmpzXCIsXG5cdFx0XHRcIi4vanN4LXJ1bnRpbWUuanNcIixcblx0XHRcdFwiLi9qc3gtZGV2LXJ1bnRpbWUuanNcIixcblx0XHRcdFwiLi9faXNvbGF0ZWQtaG5ycy5qc1wiXG5cdFx0XSxcblx0XHR1bWROYW1lOiBcImVtb3Rpb25SZWFjdFwiLFxuXHRcdGV4cG9ydHM6IHtcblx0XHRcdGVudkNvbmRpdGlvbnM6IFtcblx0XHRcdFx0XCJicm93c2VyXCIsXG5cdFx0XHRcdFwid29ya2VyXCJcblx0XHRcdF0sXG5cdFx0XHRleHRyYToge1xuXHRcdFx0XHRcIi4vdHlwZXMvY3NzLXByb3BcIjogXCIuL3R5cGVzL2Nzcy1wcm9wLmQudHNcIixcblx0XHRcdFx0XCIuL21hY3JvXCI6IHtcblx0XHRcdFx0XHR0eXBlczoge1xuXHRcdFx0XHRcdFx0XCJpbXBvcnRcIjogXCIuL21hY3JvLmQubXRzXCIsXG5cdFx0XHRcdFx0XHRcImRlZmF1bHRcIjogXCIuL21hY3JvLmQudHNcIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiLi9tYWNyby5qc1wiXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbnZhciBqc3ggPSBmdW5jdGlvbiBqc3godHlwZSwgcHJvcHMpIHtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgaWYgKHByb3BzID09IG51bGwgfHwgIWhhc093bi5jYWxsKHByb3BzLCAnY3NzJykpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgfVxuXG4gIHZhciBhcmdzTGVuZ3RoID0gYXJncy5sZW5ndGg7XG4gIHZhciBjcmVhdGVFbGVtZW50QXJnQXJyYXkgPSBuZXcgQXJyYXkoYXJnc0xlbmd0aCk7XG4gIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVswXSA9IEVtb3Rpb247XG4gIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVsxXSA9IGNyZWF0ZUVtb3Rpb25Qcm9wcyh0eXBlLCBwcm9wcyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmdzTGVuZ3RoOyBpKyspIHtcbiAgICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbaV0gPSBhcmdzW2ldO1xuICB9IC8vICRGbG93Rml4TWVcblxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KG51bGwsIGNyZWF0ZUVsZW1lbnRBcmdBcnJheSk7XG59O1xuXG52YXIgd2FybmVkQWJvdXRDc3NQcm9wRm9yR2xvYmFsID0gZmFsc2U7IC8vIG1haW50YWluIHBsYWNlIG92ZXIgcmVyZW5kZXJzLlxuLy8gaW5pdGlhbCByZW5kZXIgZnJvbSBicm93c2VyLCBpbnNlcnRCZWZvcmUgY29udGV4dC5zaGVldC50YWdzWzBdIG9yIGlmIGEgc3R5bGUgaGFzbid0IGJlZW4gaW5zZXJ0ZWQgdGhlcmUgeWV0LCBhcHBlbmRDaGlsZFxuLy8gaW5pdGlhbCBjbGllbnQtc2lkZSByZW5kZXIgZnJvbSBTU1IsIHVzZSBwbGFjZSBvZiBoeWRyYXRpbmcgdGFnXG5cbnZhciBHbG9iYWwgPSAvKiAjX19QVVJFX18gKi93aXRoRW1vdGlvbkNhY2hlKGZ1bmN0aW9uIChwcm9wcywgY2FjaGUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIXdhcm5lZEFib3V0Q3NzUHJvcEZvckdsb2JhbCAmJiAoIC8vIGNoZWNrIGZvciBjbGFzc05hbWUgYXMgd2VsbCBzaW5jZSB0aGUgdXNlciBpc1xuICAvLyBwcm9iYWJseSB1c2luZyB0aGUgY3VzdG9tIGNyZWF0ZUVsZW1lbnQgd2hpY2hcbiAgLy8gbWVhbnMgaXQgd2lsbCBiZSB0dXJuZWQgaW50byBhIGNsYXNzTmFtZSBwcm9wXG4gIC8vICRGbG93Rml4TWUgSSBkb24ndCByZWFsbHkgd2FudCB0byBhZGQgaXQgdG8gdGhlIHR5cGUgc2luY2UgaXQgc2hvdWxkbid0IGJlIHVzZWRcbiAgcHJvcHMuY2xhc3NOYW1lIHx8IHByb3BzLmNzcykpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiSXQgbG9va3MgbGlrZSB5b3UncmUgdXNpbmcgdGhlIGNzcyBwcm9wIG9uIEdsb2JhbCwgZGlkIHlvdSBtZWFuIHRvIHVzZSB0aGUgc3R5bGVzIHByb3AgaW5zdGVhZD9cIik7XG4gICAgd2FybmVkQWJvdXRDc3NQcm9wRm9yR2xvYmFsID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBwcm9wcy5zdHlsZXM7XG4gIHZhciBzZXJpYWxpemVkID0gc2VyaWFsaXplU3R5bGVzKFtzdHlsZXNdLCB1bmRlZmluZWQsIFJlYWN0LnVzZUNvbnRleHQoVGhlbWVDb250ZXh0KSk7XG5cbiAgaWYgKCFpc0Jyb3dzZXIkMSkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIHNlcmlhbGl6ZWROYW1lcyA9IHNlcmlhbGl6ZWQubmFtZTtcbiAgICB2YXIgc2VyaWFsaXplZFN0eWxlcyA9IHNlcmlhbGl6ZWQuc3R5bGVzO1xuICAgIHZhciBuZXh0ID0gc2VyaWFsaXplZC5uZXh0O1xuXG4gICAgd2hpbGUgKG5leHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2VyaWFsaXplZE5hbWVzICs9ICcgJyArIG5leHQubmFtZTtcbiAgICAgIHNlcmlhbGl6ZWRTdHlsZXMgKz0gbmV4dC5zdHlsZXM7XG4gICAgICBuZXh0ID0gbmV4dC5uZXh0O1xuICAgIH1cblxuICAgIHZhciBzaG91bGRDYWNoZSA9IGNhY2hlLmNvbXBhdCA9PT0gdHJ1ZTtcbiAgICB2YXIgcnVsZXMgPSBjYWNoZS5pbnNlcnQoXCJcIiwge1xuICAgICAgbmFtZTogc2VyaWFsaXplZE5hbWVzLFxuICAgICAgc3R5bGVzOiBzZXJpYWxpemVkU3R5bGVzXG4gICAgfSwgY2FjaGUuc2hlZXQsIHNob3VsZENhY2hlKTtcblxuICAgIGlmIChzaG91bGRDYWNoZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwgKF9yZWYgPSB7fSwgX3JlZltcImRhdGEtZW1vdGlvblwiXSA9IGNhY2hlLmtleSArIFwiLWdsb2JhbCBcIiArIHNlcmlhbGl6ZWROYW1lcywgX3JlZi5kYW5nZXJvdXNseVNldElubmVySFRNTCA9IHtcbiAgICAgIF9faHRtbDogcnVsZXNcbiAgICB9LCBfcmVmLm5vbmNlID0gY2FjaGUuc2hlZXQubm9uY2UsIF9yZWYpKTtcbiAgfSAvLyB5ZXMsIGkga25vdyB0aGVzZSBob29rcyBhcmUgdXNlZCBjb25kaXRpb25hbGx5XG4gIC8vIGJ1dCBpdCBpcyBiYXNlZCBvbiBhIGNvbnN0YW50IHRoYXQgd2lsbCBuZXZlciBjaGFuZ2UgYXQgcnVudGltZVxuICAvLyBpdCdzIGVmZmVjdGl2ZWx5IGxpa2UgaGF2aW5nIHR3byBpbXBsZW1lbnRhdGlvbnMgYW5kIHN3aXRjaGluZyB0aGVtIG91dFxuICAvLyBzbyBpdCdzIG5vdCBhY3R1YWxseSBicmVha2luZyBhbnl0aGluZ1xuXG5cbiAgdmFyIHNoZWV0UmVmID0gUmVhY3QudXNlUmVmKCk7XG4gIHVzZUluc2VydGlvbkVmZmVjdFdpdGhMYXlvdXRGYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGtleSA9IGNhY2hlLmtleSArIFwiLWdsb2JhbFwiOyAvLyB1c2UgY2FzZSBvZiBodHRwczovL2dpdGh1Yi5jb20vZW1vdGlvbi1qcy9lbW90aW9uL2lzc3Vlcy8yNjc1XG5cbiAgICB2YXIgc2hlZXQgPSBuZXcgY2FjaGUuc2hlZXQuY29uc3RydWN0b3Ioe1xuICAgICAga2V5OiBrZXksXG4gICAgICBub25jZTogY2FjaGUuc2hlZXQubm9uY2UsXG4gICAgICBjb250YWluZXI6IGNhY2hlLnNoZWV0LmNvbnRhaW5lcixcbiAgICAgIHNwZWVkeTogY2FjaGUuc2hlZXQuaXNTcGVlZHlcbiAgICB9KTtcbiAgICB2YXIgcmVoeWRyYXRpbmcgPSBmYWxzZTsgLy8gJEZsb3dGaXhNZVxuXG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3R5bGVbZGF0YS1lbW90aW9uPVxcXCJcIiArIGtleSArIFwiIFwiICsgc2VyaWFsaXplZC5uYW1lICsgXCJcXFwiXVwiKTtcblxuICAgIGlmIChjYWNoZS5zaGVldC50YWdzLmxlbmd0aCkge1xuICAgICAgc2hlZXQuYmVmb3JlID0gY2FjaGUuc2hlZXQudGFnc1swXTtcbiAgICB9XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgcmVoeWRyYXRpbmcgPSB0cnVlOyAvLyBjbGVhciB0aGUgaGFzaCBzbyB0aGlzIG5vZGUgd29uJ3QgYmUgcmVjb2duaXphYmxlIGFzIHJlaHlkcmF0YWJsZSBieSBvdGhlciA8R2xvYmFsLz5zXG5cbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLWVtb3Rpb24nLCBrZXkpO1xuICAgICAgc2hlZXQuaHlkcmF0ZShbbm9kZV0pO1xuICAgIH1cblxuICAgIHNoZWV0UmVmLmN1cnJlbnQgPSBbc2hlZXQsIHJlaHlkcmF0aW5nXTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgc2hlZXQuZmx1c2goKTtcbiAgICB9O1xuICB9LCBbY2FjaGVdKTtcbiAgdXNlSW5zZXJ0aW9uRWZmZWN0V2l0aExheW91dEZhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2hlZXRSZWZDdXJyZW50ID0gc2hlZXRSZWYuY3VycmVudDtcbiAgICB2YXIgc2hlZXQgPSBzaGVldFJlZkN1cnJlbnRbMF0sXG4gICAgICAgIHJlaHlkcmF0aW5nID0gc2hlZXRSZWZDdXJyZW50WzFdO1xuXG4gICAgaWYgKHJlaHlkcmF0aW5nKSB7XG4gICAgICBzaGVldFJlZkN1cnJlbnRbMV0gPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc2VyaWFsaXplZC5uZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGluc2VydCBrZXlmcmFtZXNcbiAgICAgIGluc2VydFN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZC5uZXh0LCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoc2hlZXQudGFncy5sZW5ndGgpIHtcbiAgICAgIC8vIGlmIHRoaXMgZG9lc24ndCBleGlzdCB0aGVuIGl0IHdpbGwgYmUgbnVsbCBzbyB0aGUgc3R5bGUgZWxlbWVudCB3aWxsIGJlIGFwcGVuZGVkXG4gICAgICB2YXIgZWxlbWVudCA9IHNoZWV0LnRhZ3Nbc2hlZXQudGFncy5sZW5ndGggLSAxXS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICBzaGVldC5iZWZvcmUgPSBlbGVtZW50O1xuICAgICAgc2hlZXQuZmx1c2goKTtcbiAgICB9XG5cbiAgICBjYWNoZS5pbnNlcnQoXCJcIiwgc2VyaWFsaXplZCwgc2hlZXQsIGZhbHNlKTtcbiAgfSwgW2NhY2hlLCBzZXJpYWxpemVkLm5hbWVdKTtcbiAgcmV0dXJuIG51bGw7XG59KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgR2xvYmFsLmRpc3BsYXlOYW1lID0gJ0Vtb3Rpb25HbG9iYWwnO1xufVxuXG5mdW5jdGlvbiBjc3MoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gc2VyaWFsaXplU3R5bGVzKGFyZ3MpO1xufVxuXG52YXIga2V5ZnJhbWVzID0gZnVuY3Rpb24ga2V5ZnJhbWVzKCkge1xuICB2YXIgaW5zZXJ0YWJsZSA9IGNzcy5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gIHZhciBuYW1lID0gXCJhbmltYXRpb24tXCIgKyBpbnNlcnRhYmxlLm5hbWU7IC8vICRGbG93Rml4TWVcblxuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgc3R5bGVzOiBcIkBrZXlmcmFtZXMgXCIgKyBuYW1lICsgXCJ7XCIgKyBpbnNlcnRhYmxlLnN0eWxlcyArIFwifVwiLFxuICAgIGFuaW06IDEsXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuIFwiX0VNT19cIiArIHRoaXMubmFtZSArIFwiX1wiICsgdGhpcy5zdHlsZXMgKyBcIl9FTU9fXCI7XG4gICAgfVxuICB9O1xufTtcblxudmFyIGNsYXNzbmFtZXMgPSBmdW5jdGlvbiBjbGFzc25hbWVzKGFyZ3MpIHtcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBjbHMgPSAnJztcblxuICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGFyZyA9IGFyZ3NbaV07XG4gICAgaWYgKGFyZyA9PSBudWxsKSBjb250aW51ZTtcbiAgICB2YXIgdG9BZGQgPSB2b2lkIDA7XG5cbiAgICBzd2l0Y2ggKHR5cGVvZiBhcmcpIHtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcbiAgICAgICAgICAgIHRvQWRkID0gY2xhc3NuYW1lcyhhcmcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBhcmcuc3R5bGVzICE9PSB1bmRlZmluZWQgJiYgYXJnLm5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdZb3UgaGF2ZSBwYXNzZWQgc3R5bGVzIGNyZWF0ZWQgd2l0aCBgY3NzYCBmcm9tIGBAZW1vdGlvbi9yZWFjdGAgcGFja2FnZSB0byB0aGUgYGN4YC5cXG4nICsgJ2BjeGAgaXMgbWVhbnQgdG8gY29tcG9zZSBjbGFzcyBuYW1lcyAoc3RyaW5ncykgc28geW91IHNob3VsZCBjb252ZXJ0IHRob3NlIHN0eWxlcyB0byBhIGNsYXNzIG5hbWUgYnkgcGFzc2luZyB0aGVtIHRvIHRoZSBgY3NzYCByZWNlaXZlZCBmcm9tIDxDbGFzc05hbWVzLz4gY29tcG9uZW50LicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0b0FkZCA9ICcnO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIGFyZykge1xuICAgICAgICAgICAgICBpZiAoYXJnW2tdICYmIGspIHtcbiAgICAgICAgICAgICAgICB0b0FkZCAmJiAodG9BZGQgKz0gJyAnKTtcbiAgICAgICAgICAgICAgICB0b0FkZCArPSBrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAge1xuICAgICAgICAgIHRvQWRkID0gYXJnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRvQWRkKSB7XG4gICAgICBjbHMgJiYgKGNscyArPSAnICcpO1xuICAgICAgY2xzICs9IHRvQWRkO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjbHM7XG59O1xuXG5mdW5jdGlvbiBtZXJnZShyZWdpc3RlcmVkLCBjc3MsIGNsYXNzTmFtZSkge1xuICB2YXIgcmVnaXN0ZXJlZFN0eWxlcyA9IFtdO1xuICB2YXIgcmF3Q2xhc3NOYW1lID0gZ2V0UmVnaXN0ZXJlZFN0eWxlcyhyZWdpc3RlcmVkLCByZWdpc3RlcmVkU3R5bGVzLCBjbGFzc05hbWUpO1xuXG4gIGlmIChyZWdpc3RlcmVkU3R5bGVzLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgcmV0dXJuIHJhd0NsYXNzTmFtZSArIGNzcyhyZWdpc3RlcmVkU3R5bGVzKTtcbn1cblxudmFyIEluc2VydGlvbiA9IGZ1bmN0aW9uIEluc2VydGlvbihfcmVmKSB7XG4gIHZhciBjYWNoZSA9IF9yZWYuY2FjaGUsXG4gICAgICBzZXJpYWxpemVkQXJyID0gX3JlZi5zZXJpYWxpemVkQXJyO1xuICB1c2VJbnNlcnRpb25FZmZlY3RBbHdheXNXaXRoU3luY0ZhbGxiYWNrKGZ1bmN0aW9uICgpIHtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VyaWFsaXplZEFyci5sZW5ndGg7IGkrKykge1xuICAgICAgaW5zZXJ0U3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkQXJyW2ldLCBmYWxzZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbnVsbDtcbn07XG5cbnZhciBDbGFzc05hbWVzID0gLyogI19fUFVSRV9fICovd2l0aEVtb3Rpb25DYWNoZShmdW5jdGlvbiAocHJvcHMsIGNhY2hlKSB7XG4gIHZhciBoYXNSZW5kZXJlZCA9IGZhbHNlO1xuICB2YXIgc2VyaWFsaXplZEFyciA9IFtdO1xuXG4gIHZhciBjc3MgPSBmdW5jdGlvbiBjc3MoKSB7XG4gICAgaWYgKGhhc1JlbmRlcmVkICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3NzIGNhbiBvbmx5IGJlIHVzZWQgZHVyaW5nIHJlbmRlcicpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZVN0eWxlcyhhcmdzLCBjYWNoZS5yZWdpc3RlcmVkKTtcbiAgICBzZXJpYWxpemVkQXJyLnB1c2goc2VyaWFsaXplZCk7IC8vIHJlZ2lzdHJhdGlvbiBoYXMgdG8gaGFwcGVuIGhlcmUgYXMgdGhlIHJlc3VsdCBvZiB0aGlzIG1pZ2h0IGdldCBjb25zdW1lZCBieSBgY3hgXG5cbiAgICByZWdpc3RlclN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgZmFsc2UpO1xuICAgIHJldHVybiBjYWNoZS5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcbiAgfTtcblxuICB2YXIgY3ggPSBmdW5jdGlvbiBjeCgpIHtcbiAgICBpZiAoaGFzUmVuZGVyZWQgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjeCBjYW4gb25seSBiZSB1c2VkIGR1cmluZyByZW5kZXInKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2UoY2FjaGUucmVnaXN0ZXJlZCwgY3NzLCBjbGFzc25hbWVzKGFyZ3MpKTtcbiAgfTtcblxuICB2YXIgY29udGVudCA9IHtcbiAgICBjc3M6IGNzcyxcbiAgICBjeDogY3gsXG4gICAgdGhlbWU6IFJlYWN0LnVzZUNvbnRleHQoVGhlbWVDb250ZXh0KVxuICB9O1xuICB2YXIgZWxlID0gcHJvcHMuY2hpbGRyZW4oY29udGVudCk7XG4gIGhhc1JlbmRlcmVkID0gdHJ1ZTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbnNlcnRpb24sIHtcbiAgICBjYWNoZTogY2FjaGUsXG4gICAgc2VyaWFsaXplZEFycjogc2VyaWFsaXplZEFyclxuICB9KSwgZWxlKTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBDbGFzc05hbWVzLmRpc3BsYXlOYW1lID0gJ0Vtb3Rpb25DbGFzc05hbWVzJztcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGlzQnJvd3NlciA9IFwib2JqZWN0XCIgIT09ICd1bmRlZmluZWQnOyAvLyAjMTcyNywgIzI5MDUgZm9yIHNvbWUgcmVhc29uIEplc3QgYW5kIFZpdGVzdCBldmFsdWF0ZSBtb2R1bGVzIHR3aWNlIGlmIHNvbWUgY29uc3VtaW5nIG1vZHVsZSBnZXRzIG1vY2tlZFxuXG4gIHZhciBpc1Rlc3RFbnYgPSB0eXBlb2YgamVzdCAhPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHZpICE9PSAndW5kZWZpbmVkJztcblxuICBpZiAoaXNCcm93c2VyICYmICFpc1Rlc3RFbnYpIHtcbiAgICAvLyBnbG9iYWxUaGlzIGhhcyB3aWRlIGJyb3dzZXIgc3VwcG9ydCAtIGh0dHBzOi8vY2FuaXVzZS5jb20vP3NlYXJjaD1nbG9iYWxUaGlzLCBOb2RlLmpzIDEyIGFuZCBsYXRlclxuICAgIHZhciBnbG9iYWxDb250ZXh0ID0gLy8gJEZsb3dJZ25vcmVcbiAgICB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICA6IGlzQnJvd3NlciA/IHdpbmRvdyA6IGdsb2JhbDtcbiAgICB2YXIgZ2xvYmFsS2V5ID0gXCJfX0VNT1RJT05fUkVBQ1RfXCIgKyBwa2cudmVyc2lvbi5zcGxpdCgnLicpWzBdICsgXCJfX1wiO1xuXG4gICAgaWYgKGdsb2JhbENvbnRleHRbZ2xvYmFsS2V5XSkge1xuICAgICAgY29uc29sZS53YXJuKCdZb3UgYXJlIGxvYWRpbmcgQGVtb3Rpb24vcmVhY3Qgd2hlbiBpdCBpcyBhbHJlYWR5IGxvYWRlZC4gUnVubmluZyAnICsgJ211bHRpcGxlIGluc3RhbmNlcyBtYXkgY2F1c2UgcHJvYmxlbXMuIFRoaXMgY2FuIGhhcHBlbiBpZiBtdWx0aXBsZSAnICsgJ3ZlcnNpb25zIGFyZSB1c2VkLCBvciBpZiBtdWx0aXBsZSBidWlsZHMgb2YgdGhlIHNhbWUgdmVyc2lvbiBhcmUgJyArICd1c2VkLicpO1xuICAgIH1cblxuICAgIGdsb2JhbENvbnRleHRbZ2xvYmFsS2V5XSA9IHRydWU7XG4gIH1cbn1cblxuZXhwb3J0IHsgQ2xhc3NOYW1lcywgR2xvYmFsLCBqc3ggYXMgY3JlYXRlRWxlbWVudCwgY3NzLCBqc3gsIGtleWZyYW1lcyB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChzdHJpbmdzLCByYXcpIHtcbiAgaWYgKCFyYXcpIHtcbiAgICByYXcgPSBzdHJpbmdzLnNsaWNlKDApO1xuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHN0cmluZ3MsIHtcbiAgICByYXc6IHtcbiAgICAgIHZhbHVlOiBPYmplY3QuZnJlZXplKHJhdylcbiAgICB9XG4gIH0pKTtcbn0iLCIvKipcbiAqIEN1c3RvbSBwb3NpdGlvbmluZyByZWZlcmVuY2UgZWxlbWVudC5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy92aXJ0dWFsLWVsZW1lbnRzXG4gKi9cblxuY29uc3Qgc2lkZXMgPSBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddO1xuY29uc3QgYWxpZ25tZW50cyA9IFsnc3RhcnQnLCAnZW5kJ107XG5jb25zdCBwbGFjZW1lbnRzID0gLyojX19QVVJFX18qL3NpZGVzLnJlZHVjZSgoYWNjLCBzaWRlKSA9PiBhY2MuY29uY2F0KHNpZGUsIHNpZGUgKyBcIi1cIiArIGFsaWdubWVudHNbMF0sIHNpZGUgKyBcIi1cIiArIGFsaWdubWVudHNbMV0pLCBbXSk7XG5jb25zdCBtaW4gPSBNYXRoLm1pbjtcbmNvbnN0IG1heCA9IE1hdGgubWF4O1xuY29uc3Qgcm91bmQgPSBNYXRoLnJvdW5kO1xuY29uc3QgZmxvb3IgPSBNYXRoLmZsb29yO1xuY29uc3QgY3JlYXRlQ29vcmRzID0gdiA9PiAoe1xuICB4OiB2LFxuICB5OiB2XG59KTtcbmNvbnN0IG9wcG9zaXRlU2lkZU1hcCA9IHtcbiAgbGVmdDogJ3JpZ2h0JyxcbiAgcmlnaHQ6ICdsZWZ0JyxcbiAgYm90dG9tOiAndG9wJyxcbiAgdG9wOiAnYm90dG9tJ1xufTtcbmNvbnN0IG9wcG9zaXRlQWxpZ25tZW50TWFwID0ge1xuICBzdGFydDogJ2VuZCcsXG4gIGVuZDogJ3N0YXJ0J1xufTtcbmZ1bmN0aW9uIGNsYW1wKHN0YXJ0LCB2YWx1ZSwgZW5kKSB7XG4gIHJldHVybiBtYXgoc3RhcnQsIG1pbih2YWx1ZSwgZW5kKSk7XG59XG5mdW5jdGlvbiBldmFsdWF0ZSh2YWx1ZSwgcGFyYW0pIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlKHBhcmFtKSA6IHZhbHVlO1xufVxuZnVuY3Rpb24gZ2V0U2lkZShwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xufVxuZnVuY3Rpb24gZ2V0QWxpZ25tZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG59XG5mdW5jdGlvbiBnZXRPcHBvc2l0ZUF4aXMoYXhpcykge1xuICByZXR1cm4gYXhpcyA9PT0gJ3gnID8gJ3knIDogJ3gnO1xufVxuZnVuY3Rpb24gZ2V0QXhpc0xlbmd0aChheGlzKSB7XG4gIHJldHVybiBheGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG59XG5mdW5jdGlvbiBnZXRTaWRlQXhpcyhwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIFsndG9wJywgJ2JvdHRvbSddLmluY2x1ZGVzKGdldFNpZGUocGxhY2VtZW50KSkgPyAneScgOiAneCc7XG59XG5mdW5jdGlvbiBnZXRBbGlnbm1lbnRBeGlzKHBsYWNlbWVudCkge1xuICByZXR1cm4gZ2V0T3Bwb3NpdGVBeGlzKGdldFNpZGVBeGlzKHBsYWNlbWVudCkpO1xufVxuZnVuY3Rpb24gZ2V0QWxpZ25tZW50U2lkZXMocGxhY2VtZW50LCByZWN0cywgcnRsKSB7XG4gIGlmIChydGwgPT09IHZvaWQgMCkge1xuICAgIHJ0bCA9IGZhbHNlO1xuICB9XG4gIGNvbnN0IGFsaWdubWVudCA9IGdldEFsaWdubWVudChwbGFjZW1lbnQpO1xuICBjb25zdCBhbGlnbm1lbnRBeGlzID0gZ2V0QWxpZ25tZW50QXhpcyhwbGFjZW1lbnQpO1xuICBjb25zdCBsZW5ndGggPSBnZXRBeGlzTGVuZ3RoKGFsaWdubWVudEF4aXMpO1xuICBsZXQgbWFpbkFsaWdubWVudFNpZGUgPSBhbGlnbm1lbnRBeGlzID09PSAneCcgPyBhbGlnbm1lbnQgPT09IChydGwgPyAnZW5kJyA6ICdzdGFydCcpID8gJ3JpZ2h0JyA6ICdsZWZ0JyA6IGFsaWdubWVudCA9PT0gJ3N0YXJ0JyA/ICdib3R0b20nIDogJ3RvcCc7XG4gIGlmIChyZWN0cy5yZWZlcmVuY2VbbGVuZ3RoXSA+IHJlY3RzLmZsb2F0aW5nW2xlbmd0aF0pIHtcbiAgICBtYWluQWxpZ25tZW50U2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5BbGlnbm1lbnRTaWRlKTtcbiAgfVxuICByZXR1cm4gW21haW5BbGlnbm1lbnRTaWRlLCBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluQWxpZ25tZW50U2lkZSldO1xufVxuZnVuY3Rpb24gZ2V0RXhwYW5kZWRQbGFjZW1lbnRzKHBsYWNlbWVudCkge1xuICBjb25zdCBvcHBvc2l0ZVBsYWNlbWVudCA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHJldHVybiBbZ2V0T3Bwb3NpdGVBbGlnbm1lbnRQbGFjZW1lbnQocGxhY2VtZW50KSwgb3Bwb3NpdGVQbGFjZW1lbnQsIGdldE9wcG9zaXRlQWxpZ25tZW50UGxhY2VtZW50KG9wcG9zaXRlUGxhY2VtZW50KV07XG59XG5mdW5jdGlvbiBnZXRPcHBvc2l0ZUFsaWdubWVudFBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9zdGFydHxlbmQvZywgYWxpZ25tZW50ID0+IG9wcG9zaXRlQWxpZ25tZW50TWFwW2FsaWdubWVudF0pO1xufVxuZnVuY3Rpb24gZ2V0U2lkZUxpc3Qoc2lkZSwgaXNTdGFydCwgcnRsKSB7XG4gIGNvbnN0IGxyID0gWydsZWZ0JywgJ3JpZ2h0J107XG4gIGNvbnN0IHJsID0gWydyaWdodCcsICdsZWZ0J107XG4gIGNvbnN0IHRiID0gWyd0b3AnLCAnYm90dG9tJ107XG4gIGNvbnN0IGJ0ID0gWydib3R0b20nLCAndG9wJ107XG4gIHN3aXRjaCAoc2lkZSkge1xuICAgIGNhc2UgJ3RvcCc6XG4gICAgY2FzZSAnYm90dG9tJzpcbiAgICAgIGlmIChydGwpIHJldHVybiBpc1N0YXJ0ID8gcmwgOiBscjtcbiAgICAgIHJldHVybiBpc1N0YXJ0ID8gbHIgOiBybDtcbiAgICBjYXNlICdsZWZ0JzpcbiAgICBjYXNlICdyaWdodCc6XG4gICAgICByZXR1cm4gaXNTdGFydCA/IHRiIDogYnQ7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBbXTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0T3Bwb3NpdGVBeGlzUGxhY2VtZW50cyhwbGFjZW1lbnQsIGZsaXBBbGlnbm1lbnQsIGRpcmVjdGlvbiwgcnRsKSB7XG4gIGNvbnN0IGFsaWdubWVudCA9IGdldEFsaWdubWVudChwbGFjZW1lbnQpO1xuICBsZXQgbGlzdCA9IGdldFNpZGVMaXN0KGdldFNpZGUocGxhY2VtZW50KSwgZGlyZWN0aW9uID09PSAnc3RhcnQnLCBydGwpO1xuICBpZiAoYWxpZ25tZW50KSB7XG4gICAgbGlzdCA9IGxpc3QubWFwKHNpZGUgPT4gc2lkZSArIFwiLVwiICsgYWxpZ25tZW50KTtcbiAgICBpZiAoZmxpcEFsaWdubWVudCkge1xuICAgICAgbGlzdCA9IGxpc3QuY29uY2F0KGxpc3QubWFwKGdldE9wcG9zaXRlQWxpZ25tZW50UGxhY2VtZW50KSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBsaXN0O1xufVxuZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIHNpZGUgPT4gb3Bwb3NpdGVTaWRlTWFwW3NpZGVdKTtcbn1cbmZ1bmN0aW9uIGV4cGFuZFBhZGRpbmdPYmplY3QocGFkZGluZykge1xuICByZXR1cm4ge1xuICAgIHRvcDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMCxcbiAgICAuLi5wYWRkaW5nXG4gIH07XG59XG5mdW5jdGlvbiBnZXRQYWRkaW5nT2JqZWN0KHBhZGRpbmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IGV4cGFuZFBhZGRpbmdPYmplY3QocGFkZGluZykgOiB7XG4gICAgdG9wOiBwYWRkaW5nLFxuICAgIHJpZ2h0OiBwYWRkaW5nLFxuICAgIGJvdHRvbTogcGFkZGluZyxcbiAgICBsZWZ0OiBwYWRkaW5nXG4gIH07XG59XG5mdW5jdGlvbiByZWN0VG9DbGllbnRSZWN0KHJlY3QpIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5yZWN0LFxuICAgIHRvcDogcmVjdC55LFxuICAgIGxlZnQ6IHJlY3QueCxcbiAgICByaWdodDogcmVjdC54ICsgcmVjdC53aWR0aCxcbiAgICBib3R0b206IHJlY3QueSArIHJlY3QuaGVpZ2h0XG4gIH07XG59XG5cbmV4cG9ydCB7IGFsaWdubWVudHMsIGNsYW1wLCBjcmVhdGVDb29yZHMsIGV2YWx1YXRlLCBleHBhbmRQYWRkaW5nT2JqZWN0LCBmbG9vciwgZ2V0QWxpZ25tZW50LCBnZXRBbGlnbm1lbnRBeGlzLCBnZXRBbGlnbm1lbnRTaWRlcywgZ2V0QXhpc0xlbmd0aCwgZ2V0RXhwYW5kZWRQbGFjZW1lbnRzLCBnZXRPcHBvc2l0ZUFsaWdubWVudFBsYWNlbWVudCwgZ2V0T3Bwb3NpdGVBeGlzLCBnZXRPcHBvc2l0ZUF4aXNQbGFjZW1lbnRzLCBnZXRPcHBvc2l0ZVBsYWNlbWVudCwgZ2V0UGFkZGluZ09iamVjdCwgZ2V0U2lkZSwgZ2V0U2lkZUF4aXMsIG1heCwgbWluLCBwbGFjZW1lbnRzLCByZWN0VG9DbGllbnRSZWN0LCByb3VuZCwgc2lkZXMgfTtcbiIsImZ1bmN0aW9uIGdldE5vZGVOYW1lKG5vZGUpIHtcbiAgaWYgKGlzTm9kZShub2RlKSkge1xuICAgIHJldHVybiAobm9kZS5ub2RlTmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuICAvLyBNb2NrZWQgbm9kZXMgaW4gdGVzdGluZyBlbnZpcm9ubWVudHMgbWF5IG5vdCBiZSBpbnN0YW5jZXMgb2YgTm9kZS4gQnlcbiAgLy8gcmV0dXJuaW5nIGAjZG9jdW1lbnRgIGFuIGluZmluaXRlIGxvb3Agd29uJ3Qgb2NjdXIuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mbG9hdGluZy11aS9mbG9hdGluZy11aS9pc3N1ZXMvMjMxN1xuICByZXR1cm4gJyNkb2N1bWVudCc7XG59XG5mdW5jdGlvbiBnZXRXaW5kb3cobm9kZSkge1xuICB2YXIgX25vZGUkb3duZXJEb2N1bWVudDtcbiAgcmV0dXJuIChub2RlID09IG51bGwgfHwgKF9ub2RlJG93bmVyRG9jdW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfbm9kZSRvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3KSB8fCB3aW5kb3c7XG59XG5mdW5jdGlvbiBnZXREb2N1bWVudEVsZW1lbnQobm9kZSkge1xuICB2YXIgX3JlZjtcbiAgcmV0dXJuIChfcmVmID0gKGlzTm9kZShub2RlKSA/IG5vZGUub3duZXJEb2N1bWVudCA6IG5vZGUuZG9jdW1lbnQpIHx8IHdpbmRvdy5kb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9yZWYuZG9jdW1lbnRFbGVtZW50O1xufVxuZnVuY3Rpb24gaXNOb2RlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIE5vZGUgfHwgdmFsdWUgaW5zdGFuY2VvZiBnZXRXaW5kb3codmFsdWUpLk5vZGU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRWxlbWVudCB8fCB2YWx1ZSBpbnN0YW5jZW9mIGdldFdpbmRvdyh2YWx1ZSkuRWxlbWVudDtcbn1cbmZ1bmN0aW9uIGlzSFRNTEVsZW1lbnQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgdmFsdWUgaW5zdGFuY2VvZiBnZXRXaW5kb3codmFsdWUpLkhUTUxFbGVtZW50O1xufVxuZnVuY3Rpb24gaXNTaGFkb3dSb290KHZhbHVlKSB7XG4gIC8vIEJyb3dzZXJzIHdpdGhvdXQgYFNoYWRvd1Jvb3RgIHN1cHBvcnQuXG4gIGlmICh0eXBlb2YgU2hhZG93Um9vdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgU2hhZG93Um9vdCB8fCB2YWx1ZSBpbnN0YW5jZW9mIGdldFdpbmRvdyh2YWx1ZSkuU2hhZG93Um9vdDtcbn1cbmZ1bmN0aW9uIGlzT3ZlcmZsb3dFbGVtZW50KGVsZW1lbnQpIHtcbiAgY29uc3Qge1xuICAgIG92ZXJmbG93LFxuICAgIG92ZXJmbG93WCxcbiAgICBvdmVyZmxvd1ksXG4gICAgZGlzcGxheVxuICB9ID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgcmV0dXJuIC9hdXRvfHNjcm9sbHxvdmVybGF5fGhpZGRlbnxjbGlwLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKSAmJiAhWydpbmxpbmUnLCAnY29udGVudHMnXS5pbmNsdWRlcyhkaXNwbGF5KTtcbn1cbmZ1bmN0aW9uIGlzVGFibGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIFsndGFibGUnLCAndGQnLCAndGgnXS5pbmNsdWRlcyhnZXROb2RlTmFtZShlbGVtZW50KSk7XG59XG5mdW5jdGlvbiBpc0NvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB7XG4gIGNvbnN0IHdlYmtpdCA9IGlzV2ViS2l0KCk7XG4gIGNvbnN0IGNzcyA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG5cbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0NvbnRhaW5pbmdfYmxvY2sjaWRlbnRpZnlpbmdfdGhlX2NvbnRhaW5pbmdfYmxvY2tcbiAgcmV0dXJuIGNzcy50cmFuc2Zvcm0gIT09ICdub25lJyB8fCBjc3MucGVyc3BlY3RpdmUgIT09ICdub25lJyB8fCAoY3NzLmNvbnRhaW5lclR5cGUgPyBjc3MuY29udGFpbmVyVHlwZSAhPT0gJ25vcm1hbCcgOiBmYWxzZSkgfHwgIXdlYmtpdCAmJiAoY3NzLmJhY2tkcm9wRmlsdGVyID8gY3NzLmJhY2tkcm9wRmlsdGVyICE9PSAnbm9uZScgOiBmYWxzZSkgfHwgIXdlYmtpdCAmJiAoY3NzLmZpbHRlciA/IGNzcy5maWx0ZXIgIT09ICdub25lJyA6IGZhbHNlKSB8fCBbJ3RyYW5zZm9ybScsICdwZXJzcGVjdGl2ZScsICdmaWx0ZXInXS5zb21lKHZhbHVlID0+IChjc3Mud2lsbENoYW5nZSB8fCAnJykuaW5jbHVkZXModmFsdWUpKSB8fCBbJ3BhaW50JywgJ2xheW91dCcsICdzdHJpY3QnLCAnY29udGVudCddLnNvbWUodmFsdWUgPT4gKGNzcy5jb250YWluIHx8ICcnKS5pbmNsdWRlcyh2YWx1ZSkpO1xufVxuZnVuY3Rpb24gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHtcbiAgbGV0IGN1cnJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcbiAgd2hpbGUgKGlzSFRNTEVsZW1lbnQoY3VycmVudE5vZGUpICYmICFpc0xhc3RUcmF2ZXJzYWJsZU5vZGUoY3VycmVudE5vZGUpKSB7XG4gICAgaWYgKGlzQ29udGFpbmluZ0Jsb2NrKGN1cnJlbnROb2RlKSkge1xuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoY3VycmVudE5vZGUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIGlzV2ViS2l0KCkge1xuICBpZiAodHlwZW9mIENTUyA9PT0gJ3VuZGVmaW5lZCcgfHwgIUNTUy5zdXBwb3J0cykgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gQ1NTLnN1cHBvcnRzKCctd2Via2l0LWJhY2tkcm9wLWZpbHRlcicsICdub25lJyk7XG59XG5mdW5jdGlvbiBpc0xhc3RUcmF2ZXJzYWJsZU5vZGUobm9kZSkge1xuICByZXR1cm4gWydodG1sJywgJ2JvZHknLCAnI2RvY3VtZW50J10uaW5jbHVkZXMoZ2V0Tm9kZU5hbWUobm9kZSkpO1xufVxuZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSB7XG4gIHJldHVybiBnZXRXaW5kb3coZWxlbWVudCkuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbn1cbmZ1bmN0aW9uIGdldE5vZGVTY3JvbGwoZWxlbWVudCkge1xuICBpZiAoaXNFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcm9sbExlZnQ6IGVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICAgIHNjcm9sbFRvcDogZWxlbWVudC5zY3JvbGxUb3BcbiAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogZWxlbWVudC5wYWdlWE9mZnNldCxcbiAgICBzY3JvbGxUb3A6IGVsZW1lbnQucGFnZVlPZmZzZXRcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldFBhcmVudE5vZGUobm9kZSkge1xuICBpZiAoZ2V0Tm9kZU5hbWUobm9kZSkgPT09ICdodG1sJykge1xuICAgIHJldHVybiBub2RlO1xuICB9XG4gIGNvbnN0IHJlc3VsdCA9XG4gIC8vIFN0ZXAgaW50byB0aGUgc2hhZG93IERPTSBvZiB0aGUgcGFyZW50IG9mIGEgc2xvdHRlZCBub2RlLlxuICBub2RlLmFzc2lnbmVkU2xvdCB8fFxuICAvLyBET00gRWxlbWVudCBkZXRlY3RlZC5cbiAgbm9kZS5wYXJlbnROb2RlIHx8XG4gIC8vIFNoYWRvd1Jvb3QgZGV0ZWN0ZWQuXG4gIGlzU2hhZG93Um9vdChub2RlKSAmJiBub2RlLmhvc3QgfHxcbiAgLy8gRmFsbGJhY2suXG4gIGdldERvY3VtZW50RWxlbWVudChub2RlKTtcbiAgcmV0dXJuIGlzU2hhZG93Um9vdChyZXN1bHQpID8gcmVzdWx0Lmhvc3QgOiByZXN1bHQ7XG59XG5mdW5jdGlvbiBnZXROZWFyZXN0T3ZlcmZsb3dBbmNlc3Rvcihub2RlKSB7XG4gIGNvbnN0IHBhcmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKG5vZGUpO1xuICBpZiAoaXNMYXN0VHJhdmVyc2FibGVOb2RlKHBhcmVudE5vZGUpKSB7XG4gICAgcmV0dXJuIG5vZGUub3duZXJEb2N1bWVudCA/IG5vZGUub3duZXJEb2N1bWVudC5ib2R5IDogbm9kZS5ib2R5O1xuICB9XG4gIGlmIChpc0hUTUxFbGVtZW50KHBhcmVudE5vZGUpICYmIGlzT3ZlcmZsb3dFbGVtZW50KHBhcmVudE5vZGUpKSB7XG4gICAgcmV0dXJuIHBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIGdldE5lYXJlc3RPdmVyZmxvd0FuY2VzdG9yKHBhcmVudE5vZGUpO1xufVxuZnVuY3Rpb24gZ2V0T3ZlcmZsb3dBbmNlc3RvcnMobm9kZSwgbGlzdCwgdHJhdmVyc2VJZnJhbWVzKSB7XG4gIHZhciBfbm9kZSRvd25lckRvY3VtZW50MjtcbiAgaWYgKGxpc3QgPT09IHZvaWQgMCkge1xuICAgIGxpc3QgPSBbXTtcbiAgfVxuICBpZiAodHJhdmVyc2VJZnJhbWVzID09PSB2b2lkIDApIHtcbiAgICB0cmF2ZXJzZUlmcmFtZXMgPSB0cnVlO1xuICB9XG4gIGNvbnN0IHNjcm9sbGFibGVBbmNlc3RvciA9IGdldE5lYXJlc3RPdmVyZmxvd0FuY2VzdG9yKG5vZGUpO1xuICBjb25zdCBpc0JvZHkgPSBzY3JvbGxhYmxlQW5jZXN0b3IgPT09ICgoX25vZGUkb3duZXJEb2N1bWVudDIgPSBub2RlLm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfbm9kZSRvd25lckRvY3VtZW50Mi5ib2R5KTtcbiAgY29uc3Qgd2luID0gZ2V0V2luZG93KHNjcm9sbGFibGVBbmNlc3Rvcik7XG4gIGlmIChpc0JvZHkpIHtcbiAgICByZXR1cm4gbGlzdC5jb25jYXQod2luLCB3aW4udmlzdWFsVmlld3BvcnQgfHwgW10sIGlzT3ZlcmZsb3dFbGVtZW50KHNjcm9sbGFibGVBbmNlc3RvcikgPyBzY3JvbGxhYmxlQW5jZXN0b3IgOiBbXSwgd2luLmZyYW1lRWxlbWVudCAmJiB0cmF2ZXJzZUlmcmFtZXMgPyBnZXRPdmVyZmxvd0FuY2VzdG9ycyh3aW4uZnJhbWVFbGVtZW50KSA6IFtdKTtcbiAgfVxuICByZXR1cm4gbGlzdC5jb25jYXQoc2Nyb2xsYWJsZUFuY2VzdG9yLCBnZXRPdmVyZmxvd0FuY2VzdG9ycyhzY3JvbGxhYmxlQW5jZXN0b3IsIFtdLCB0cmF2ZXJzZUlmcmFtZXMpKTtcbn1cblxuZXhwb3J0IHsgZ2V0Q29tcHV0ZWRTdHlsZSwgZ2V0Q29udGFpbmluZ0Jsb2NrLCBnZXREb2N1bWVudEVsZW1lbnQsIGdldE5lYXJlc3RPdmVyZmxvd0FuY2VzdG9yLCBnZXROb2RlTmFtZSwgZ2V0Tm9kZVNjcm9sbCwgZ2V0T3ZlcmZsb3dBbmNlc3RvcnMsIGdldFBhcmVudE5vZGUsIGdldFdpbmRvdywgaXNDb250YWluaW5nQmxvY2ssIGlzRWxlbWVudCwgaXNIVE1MRWxlbWVudCwgaXNMYXN0VHJhdmVyc2FibGVOb2RlLCBpc05vZGUsIGlzT3ZlcmZsb3dFbGVtZW50LCBpc1NoYWRvd1Jvb3QsIGlzVGFibGVFbGVtZW50LCBpc1dlYktpdCB9O1xuIiwiaW1wb3J0IHsgcmVjdFRvQ2xpZW50UmVjdCwgYXV0b1BsYWNlbWVudCBhcyBhdXRvUGxhY2VtZW50JDEsIHNoaWZ0IGFzIHNoaWZ0JDEsIGZsaXAgYXMgZmxpcCQxLCBzaXplIGFzIHNpemUkMSwgaGlkZSBhcyBoaWRlJDEsIGFycm93IGFzIGFycm93JDEsIGlubGluZSBhcyBpbmxpbmUkMSwgbGltaXRTaGlmdCBhcyBsaW1pdFNoaWZ0JDEsIGNvbXB1dGVQb3NpdGlvbiBhcyBjb21wdXRlUG9zaXRpb24kMSB9IGZyb20gJ0BmbG9hdGluZy11aS9jb3JlJztcbmV4cG9ydCB7IGRldGVjdE92ZXJmbG93LCBvZmZzZXQgfSBmcm9tICdAZmxvYXRpbmctdWkvY29yZSc7XG5pbXBvcnQgeyByb3VuZCwgY3JlYXRlQ29vcmRzLCBtYXgsIG1pbiwgZmxvb3IgfSBmcm9tICdAZmxvYXRpbmctdWkvdXRpbHMnO1xuaW1wb3J0IHsgZ2V0Q29tcHV0ZWRTdHlsZSwgaXNIVE1MRWxlbWVudCwgaXNFbGVtZW50LCBnZXRXaW5kb3csIGlzV2ViS2l0LCBnZXREb2N1bWVudEVsZW1lbnQsIGdldE5vZGVOYW1lLCBpc092ZXJmbG93RWxlbWVudCwgZ2V0Tm9kZVNjcm9sbCwgZ2V0T3ZlcmZsb3dBbmNlc3RvcnMsIGdldFBhcmVudE5vZGUsIGlzTGFzdFRyYXZlcnNhYmxlTm9kZSwgaXNDb250YWluaW5nQmxvY2ssIGlzVGFibGVFbGVtZW50LCBnZXRDb250YWluaW5nQmxvY2sgfSBmcm9tICdAZmxvYXRpbmctdWkvdXRpbHMvZG9tJztcbmV4cG9ydCB7IGdldE92ZXJmbG93QW5jZXN0b3JzIH0gZnJvbSAnQGZsb2F0aW5nLXVpL3V0aWxzL2RvbSc7XG5cbmZ1bmN0aW9uIGdldENzc0RpbWVuc2lvbnMoZWxlbWVudCkge1xuICBjb25zdCBjc3MgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAvLyBJbiB0ZXN0aW5nIGVudmlyb25tZW50cywgdGhlIGB3aWR0aGAgYW5kIGBoZWlnaHRgIHByb3BlcnRpZXMgYXJlIGVtcHR5XG4gIC8vIHN0cmluZ3MgZm9yIFNWRyBlbGVtZW50cywgcmV0dXJuaW5nIE5hTi4gRmFsbGJhY2sgdG8gYDBgIGluIHRoaXMgY2FzZS5cbiAgbGV0IHdpZHRoID0gcGFyc2VGbG9hdChjc3Mud2lkdGgpIHx8IDA7XG4gIGxldCBoZWlnaHQgPSBwYXJzZUZsb2F0KGNzcy5oZWlnaHQpIHx8IDA7XG4gIGNvbnN0IGhhc09mZnNldCA9IGlzSFRNTEVsZW1lbnQoZWxlbWVudCk7XG4gIGNvbnN0IG9mZnNldFdpZHRoID0gaGFzT2Zmc2V0ID8gZWxlbWVudC5vZmZzZXRXaWR0aCA6IHdpZHRoO1xuICBjb25zdCBvZmZzZXRIZWlnaHQgPSBoYXNPZmZzZXQgPyBlbGVtZW50Lm9mZnNldEhlaWdodCA6IGhlaWdodDtcbiAgY29uc3Qgc2hvdWxkRmFsbGJhY2sgPSByb3VuZCh3aWR0aCkgIT09IG9mZnNldFdpZHRoIHx8IHJvdW5kKGhlaWdodCkgIT09IG9mZnNldEhlaWdodDtcbiAgaWYgKHNob3VsZEZhbGxiYWNrKSB7XG4gICAgd2lkdGggPSBvZmZzZXRXaWR0aDtcbiAgICBoZWlnaHQgPSBvZmZzZXRIZWlnaHQ7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgJDogc2hvdWxkRmFsbGJhY2tcbiAgfTtcbn1cblxuZnVuY3Rpb24gdW53cmFwRWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiAhaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudC5jb250ZXh0RWxlbWVudCA6IGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGdldFNjYWxlKGVsZW1lbnQpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9IHVud3JhcEVsZW1lbnQoZWxlbWVudCk7XG4gIGlmICghaXNIVE1MRWxlbWVudChkb21FbGVtZW50KSkge1xuICAgIHJldHVybiBjcmVhdGVDb29yZHMoMSk7XG4gIH1cbiAgY29uc3QgcmVjdCA9IGRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgJFxuICB9ID0gZ2V0Q3NzRGltZW5zaW9ucyhkb21FbGVtZW50KTtcbiAgbGV0IHggPSAoJCA/IHJvdW5kKHJlY3Qud2lkdGgpIDogcmVjdC53aWR0aCkgLyB3aWR0aDtcbiAgbGV0IHkgPSAoJCA/IHJvdW5kKHJlY3QuaGVpZ2h0KSA6IHJlY3QuaGVpZ2h0KSAvIGhlaWdodDtcblxuICAvLyAwLCBOYU4sIG9yIEluZmluaXR5IHNob3VsZCBhbHdheXMgZmFsbGJhY2sgdG8gMS5cblxuICBpZiAoIXggfHwgIU51bWJlci5pc0Zpbml0ZSh4KSkge1xuICAgIHggPSAxO1xuICB9XG4gIGlmICgheSB8fCAhTnVtYmVyLmlzRmluaXRlKHkpKSB7XG4gICAgeSA9IDE7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB4LFxuICAgIHlcbiAgfTtcbn1cblxuY29uc3Qgbm9PZmZzZXRzID0gLyojX19QVVJFX18qL2NyZWF0ZUNvb3JkcygwKTtcbmZ1bmN0aW9uIGdldFZpc3VhbE9mZnNldHMoZWxlbWVudCkge1xuICBjb25zdCB3aW4gPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIGlmICghaXNXZWJLaXQoKSB8fCAhd2luLnZpc3VhbFZpZXdwb3J0KSB7XG4gICAgcmV0dXJuIG5vT2Zmc2V0cztcbiAgfVxuICByZXR1cm4ge1xuICAgIHg6IHdpbi52aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0LFxuICAgIHk6IHdpbi52aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3BcbiAgfTtcbn1cbmZ1bmN0aW9uIHNob3VsZEFkZFZpc3VhbE9mZnNldHMoZWxlbWVudCwgaXNGaXhlZCwgZmxvYXRpbmdPZmZzZXRQYXJlbnQpIHtcbiAgaWYgKGlzRml4ZWQgPT09IHZvaWQgMCkge1xuICAgIGlzRml4ZWQgPSBmYWxzZTtcbiAgfVxuICBpZiAoIWZsb2F0aW5nT2Zmc2V0UGFyZW50IHx8IGlzRml4ZWQgJiYgZmxvYXRpbmdPZmZzZXRQYXJlbnQgIT09IGdldFdpbmRvdyhlbGVtZW50KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gaXNGaXhlZDtcbn1cblxuZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIGluY2x1ZGVTY2FsZSwgaXNGaXhlZFN0cmF0ZWd5LCBvZmZzZXRQYXJlbnQpIHtcbiAgaWYgKGluY2x1ZGVTY2FsZSA9PT0gdm9pZCAwKSB7XG4gICAgaW5jbHVkZVNjYWxlID0gZmFsc2U7XG4gIH1cbiAgaWYgKGlzRml4ZWRTdHJhdGVneSA9PT0gdm9pZCAwKSB7XG4gICAgaXNGaXhlZFN0cmF0ZWd5ID0gZmFsc2U7XG4gIH1cbiAgY29uc3QgY2xpZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSB1bndyYXBFbGVtZW50KGVsZW1lbnQpO1xuICBsZXQgc2NhbGUgPSBjcmVhdGVDb29yZHMoMSk7XG4gIGlmIChpbmNsdWRlU2NhbGUpIHtcbiAgICBpZiAob2Zmc2V0UGFyZW50KSB7XG4gICAgICBpZiAoaXNFbGVtZW50KG9mZnNldFBhcmVudCkpIHtcbiAgICAgICAgc2NhbGUgPSBnZXRTY2FsZShvZmZzZXRQYXJlbnQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzY2FsZSA9IGdldFNjYWxlKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuICBjb25zdCB2aXN1YWxPZmZzZXRzID0gc2hvdWxkQWRkVmlzdWFsT2Zmc2V0cyhkb21FbGVtZW50LCBpc0ZpeGVkU3RyYXRlZ3ksIG9mZnNldFBhcmVudCkgPyBnZXRWaXN1YWxPZmZzZXRzKGRvbUVsZW1lbnQpIDogY3JlYXRlQ29vcmRzKDApO1xuICBsZXQgeCA9IChjbGllbnRSZWN0LmxlZnQgKyB2aXN1YWxPZmZzZXRzLngpIC8gc2NhbGUueDtcbiAgbGV0IHkgPSAoY2xpZW50UmVjdC50b3AgKyB2aXN1YWxPZmZzZXRzLnkpIC8gc2NhbGUueTtcbiAgbGV0IHdpZHRoID0gY2xpZW50UmVjdC53aWR0aCAvIHNjYWxlLng7XG4gIGxldCBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodCAvIHNjYWxlLnk7XG4gIGlmIChkb21FbGVtZW50KSB7XG4gICAgY29uc3Qgd2luID0gZ2V0V2luZG93KGRvbUVsZW1lbnQpO1xuICAgIGNvbnN0IG9mZnNldFdpbiA9IG9mZnNldFBhcmVudCAmJiBpc0VsZW1lbnQob2Zmc2V0UGFyZW50KSA/IGdldFdpbmRvdyhvZmZzZXRQYXJlbnQpIDogb2Zmc2V0UGFyZW50O1xuICAgIGxldCBjdXJyZW50V2luID0gd2luO1xuICAgIGxldCBjdXJyZW50SUZyYW1lID0gY3VycmVudFdpbi5mcmFtZUVsZW1lbnQ7XG4gICAgd2hpbGUgKGN1cnJlbnRJRnJhbWUgJiYgb2Zmc2V0UGFyZW50ICYmIG9mZnNldFdpbiAhPT0gY3VycmVudFdpbikge1xuICAgICAgY29uc3QgaWZyYW1lU2NhbGUgPSBnZXRTY2FsZShjdXJyZW50SUZyYW1lKTtcbiAgICAgIGNvbnN0IGlmcmFtZVJlY3QgPSBjdXJyZW50SUZyYW1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50SUZyYW1lKTtcbiAgICAgIGNvbnN0IGxlZnQgPSBpZnJhbWVSZWN0LmxlZnQgKyAoY3VycmVudElGcmFtZS5jbGllbnRMZWZ0ICsgcGFyc2VGbG9hdChjc3MucGFkZGluZ0xlZnQpKSAqIGlmcmFtZVNjYWxlLng7XG4gICAgICBjb25zdCB0b3AgPSBpZnJhbWVSZWN0LnRvcCArIChjdXJyZW50SUZyYW1lLmNsaWVudFRvcCArIHBhcnNlRmxvYXQoY3NzLnBhZGRpbmdUb3ApKSAqIGlmcmFtZVNjYWxlLnk7XG4gICAgICB4ICo9IGlmcmFtZVNjYWxlLng7XG4gICAgICB5ICo9IGlmcmFtZVNjYWxlLnk7XG4gICAgICB3aWR0aCAqPSBpZnJhbWVTY2FsZS54O1xuICAgICAgaGVpZ2h0ICo9IGlmcmFtZVNjYWxlLnk7XG4gICAgICB4ICs9IGxlZnQ7XG4gICAgICB5ICs9IHRvcDtcbiAgICAgIGN1cnJlbnRXaW4gPSBnZXRXaW5kb3coY3VycmVudElGcmFtZSk7XG4gICAgICBjdXJyZW50SUZyYW1lID0gY3VycmVudFdpbi5mcmFtZUVsZW1lbnQ7XG4gICAgfVxuICB9XG4gIHJldHVybiByZWN0VG9DbGllbnRSZWN0KHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgeCxcbiAgICB5XG4gIH0pO1xufVxuXG5jb25zdCB0b3BMYXllclNlbGVjdG9ycyA9IFsnOnBvcG92ZXItb3BlbicsICc6bW9kYWwnXTtcbmZ1bmN0aW9uIGlzVG9wTGF5ZXIoZmxvYXRpbmcpIHtcbiAgcmV0dXJuIHRvcExheWVyU2VsZWN0b3JzLnNvbWUoc2VsZWN0b3IgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZmxvYXRpbmcubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRPZmZzZXRQYXJlbnRSZWxhdGl2ZVJlY3RUb1ZpZXdwb3J0UmVsYXRpdmVSZWN0KF9yZWYpIHtcbiAgbGV0IHtcbiAgICBlbGVtZW50cyxcbiAgICByZWN0LFxuICAgIG9mZnNldFBhcmVudCxcbiAgICBzdHJhdGVneVxuICB9ID0gX3JlZjtcbiAgY29uc3QgaXNGaXhlZCA9IHN0cmF0ZWd5ID09PSAnZml4ZWQnO1xuICBjb25zdCBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgY29uc3QgdG9wTGF5ZXIgPSBlbGVtZW50cyA/IGlzVG9wTGF5ZXIoZWxlbWVudHMuZmxvYXRpbmcpIDogZmFsc2U7XG4gIGlmIChvZmZzZXRQYXJlbnQgPT09IGRvY3VtZW50RWxlbWVudCB8fCB0b3BMYXllciAmJiBpc0ZpeGVkKSB7XG4gICAgcmV0dXJuIHJlY3Q7XG4gIH1cbiAgbGV0IHNjcm9sbCA9IHtcbiAgICBzY3JvbGxMZWZ0OiAwLFxuICAgIHNjcm9sbFRvcDogMFxuICB9O1xuICBsZXQgc2NhbGUgPSBjcmVhdGVDb29yZHMoMSk7XG4gIGNvbnN0IG9mZnNldHMgPSBjcmVhdGVDb29yZHMoMCk7XG4gIGNvbnN0IGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICBpZiAoaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgfHwgIWlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ICYmICFpc0ZpeGVkKSB7XG4gICAgaWYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgIT09ICdib2R5JyB8fCBpc092ZXJmbG93RWxlbWVudChkb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgICBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKG9mZnNldFBhcmVudCk7XG4gICAgfVxuICAgIGlmIChpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkpIHtcbiAgICAgIGNvbnN0IG9mZnNldFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qob2Zmc2V0UGFyZW50KTtcbiAgICAgIHNjYWxlID0gZ2V0U2NhbGUob2Zmc2V0UGFyZW50KTtcbiAgICAgIG9mZnNldHMueCA9IG9mZnNldFJlY3QueCArIG9mZnNldFBhcmVudC5jbGllbnRMZWZ0O1xuICAgICAgb2Zmc2V0cy55ID0gb2Zmc2V0UmVjdC55ICsgb2Zmc2V0UGFyZW50LmNsaWVudFRvcDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogcmVjdC53aWR0aCAqIHNjYWxlLngsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodCAqIHNjYWxlLnksXG4gICAgeDogcmVjdC54ICogc2NhbGUueCAtIHNjcm9sbC5zY3JvbGxMZWZ0ICogc2NhbGUueCArIG9mZnNldHMueCxcbiAgICB5OiByZWN0LnkgKiBzY2FsZS55IC0gc2Nyb2xsLnNjcm9sbFRvcCAqIHNjYWxlLnkgKyBvZmZzZXRzLnlcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdHMoZWxlbWVudCkge1xuICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LmdldENsaWVudFJlY3RzKCkpO1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpIHtcbiAgLy8gSWYgPGh0bWw+IGhhcyBhIENTUyB3aWR0aCBncmVhdGVyIHRoYW4gdGhlIHZpZXdwb3J0LCB0aGVuIHRoaXMgd2lsbCBiZVxuICAvLyBpbmNvcnJlY3QgZm9yIFJUTC5cbiAgcmV0dXJuIGdldEJvdW5kaW5nQ2xpZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpLmxlZnQgKyBnZXROb2RlU2Nyb2xsKGVsZW1lbnQpLnNjcm9sbExlZnQ7XG59XG5cbi8vIEdldHMgdGhlIGVudGlyZSBzaXplIG9mIHRoZSBzY3JvbGxhYmxlIGRvY3VtZW50IGFyZWEsIGV2ZW4gZXh0ZW5kaW5nIG91dHNpZGVcbi8vIG9mIHRoZSBgPGh0bWw+YCBhbmQgYDxib2R5PmAgcmVjdCBib3VuZHMgaWYgaG9yaXpvbnRhbGx5IHNjcm9sbGFibGUuXG5mdW5jdGlvbiBnZXREb2N1bWVudFJlY3QoZWxlbWVudCkge1xuICBjb25zdCBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICBjb25zdCBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKGVsZW1lbnQpO1xuICBjb25zdCBib2R5ID0gZWxlbWVudC5vd25lckRvY3VtZW50LmJvZHk7XG4gIGNvbnN0IHdpZHRoID0gbWF4KGh0bWwuc2Nyb2xsV2lkdGgsIGh0bWwuY2xpZW50V2lkdGgsIGJvZHkuc2Nyb2xsV2lkdGgsIGJvZHkuY2xpZW50V2lkdGgpO1xuICBjb25zdCBoZWlnaHQgPSBtYXgoaHRtbC5zY3JvbGxIZWlnaHQsIGh0bWwuY2xpZW50SGVpZ2h0LCBib2R5LnNjcm9sbEhlaWdodCwgYm9keS5jbGllbnRIZWlnaHQpO1xuICBsZXQgeCA9IC1zY3JvbGwuc2Nyb2xsTGVmdCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCk7XG4gIGNvbnN0IHkgPSAtc2Nyb2xsLnNjcm9sbFRvcDtcbiAgaWYgKGdldENvbXB1dGVkU3R5bGUoYm9keSkuZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgIHggKz0gbWF4KGh0bWwuY2xpZW50V2lkdGgsIGJvZHkuY2xpZW50V2lkdGgpIC0gd2lkdGg7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgeCxcbiAgICB5XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFZpZXdwb3J0UmVjdChlbGVtZW50LCBzdHJhdGVneSkge1xuICBjb25zdCB3aW4gPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIGNvbnN0IGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIGNvbnN0IHZpc3VhbFZpZXdwb3J0ID0gd2luLnZpc3VhbFZpZXdwb3J0O1xuICBsZXQgd2lkdGggPSBodG1sLmNsaWVudFdpZHRoO1xuICBsZXQgaGVpZ2h0ID0gaHRtbC5jbGllbnRIZWlnaHQ7XG4gIGxldCB4ID0gMDtcbiAgbGV0IHkgPSAwO1xuICBpZiAodmlzdWFsVmlld3BvcnQpIHtcbiAgICB3aWR0aCA9IHZpc3VhbFZpZXdwb3J0LndpZHRoO1xuICAgIGhlaWdodCA9IHZpc3VhbFZpZXdwb3J0LmhlaWdodDtcbiAgICBjb25zdCB2aXN1YWxWaWV3cG9ydEJhc2VkID0gaXNXZWJLaXQoKTtcbiAgICBpZiAoIXZpc3VhbFZpZXdwb3J0QmFzZWQgfHwgdmlzdWFsVmlld3BvcnRCYXNlZCAmJiBzdHJhdGVneSA9PT0gJ2ZpeGVkJykge1xuICAgICAgeCA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQ7XG4gICAgICB5ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICB4LFxuICAgIHlcbiAgfTtcbn1cblxuLy8gUmV0dXJucyB0aGUgaW5uZXIgY2xpZW50IHJlY3QsIHN1YnRyYWN0aW5nIHNjcm9sbGJhcnMgaWYgcHJlc2VudC5cbmZ1bmN0aW9uIGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIHN0cmF0ZWd5KSB7XG4gIGNvbnN0IGNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgdHJ1ZSwgc3RyYXRlZ3kgPT09ICdmaXhlZCcpO1xuICBjb25zdCB0b3AgPSBjbGllbnRSZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50VG9wO1xuICBjb25zdCBsZWZ0ID0gY2xpZW50UmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRMZWZ0O1xuICBjb25zdCBzY2FsZSA9IGlzSFRNTEVsZW1lbnQoZWxlbWVudCkgPyBnZXRTY2FsZShlbGVtZW50KSA6IGNyZWF0ZUNvb3JkcygxKTtcbiAgY29uc3Qgd2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoICogc2NhbGUueDtcbiAgY29uc3QgaGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY2FsZS55O1xuICBjb25zdCB4ID0gbGVmdCAqIHNjYWxlLng7XG4gIGNvbnN0IHkgPSB0b3AgKiBzY2FsZS55O1xuICByZXR1cm4ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICB4LFxuICAgIHlcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldENsaWVudFJlY3RGcm9tQ2xpcHBpbmdBbmNlc3RvcihlbGVtZW50LCBjbGlwcGluZ0FuY2VzdG9yLCBzdHJhdGVneSkge1xuICBsZXQgcmVjdDtcbiAgaWYgKGNsaXBwaW5nQW5jZXN0b3IgPT09ICd2aWV3cG9ydCcpIHtcbiAgICByZWN0ID0gZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQsIHN0cmF0ZWd5KTtcbiAgfSBlbHNlIGlmIChjbGlwcGluZ0FuY2VzdG9yID09PSAnZG9jdW1lbnQnKSB7XG4gICAgcmVjdCA9IGdldERvY3VtZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpO1xuICB9IGVsc2UgaWYgKGlzRWxlbWVudChjbGlwcGluZ0FuY2VzdG9yKSkge1xuICAgIHJlY3QgPSBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChjbGlwcGluZ0FuY2VzdG9yLCBzdHJhdGVneSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdmlzdWFsT2Zmc2V0cyA9IGdldFZpc3VhbE9mZnNldHMoZWxlbWVudCk7XG4gICAgcmVjdCA9IHtcbiAgICAgIC4uLmNsaXBwaW5nQW5jZXN0b3IsXG4gICAgICB4OiBjbGlwcGluZ0FuY2VzdG9yLnggLSB2aXN1YWxPZmZzZXRzLngsXG4gICAgICB5OiBjbGlwcGluZ0FuY2VzdG9yLnkgLSB2aXN1YWxPZmZzZXRzLnlcbiAgICB9O1xuICB9XG4gIHJldHVybiByZWN0VG9DbGllbnRSZWN0KHJlY3QpO1xufVxuZnVuY3Rpb24gaGFzRml4ZWRQb3NpdGlvbkFuY2VzdG9yKGVsZW1lbnQsIHN0b3BOb2RlKSB7XG4gIGNvbnN0IHBhcmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuICBpZiAocGFyZW50Tm9kZSA9PT0gc3RvcE5vZGUgfHwgIWlzRWxlbWVudChwYXJlbnROb2RlKSB8fCBpc0xhc3RUcmF2ZXJzYWJsZU5vZGUocGFyZW50Tm9kZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUocGFyZW50Tm9kZSkucG9zaXRpb24gPT09ICdmaXhlZCcgfHwgaGFzRml4ZWRQb3NpdGlvbkFuY2VzdG9yKHBhcmVudE5vZGUsIHN0b3BOb2RlKTtcbn1cblxuLy8gQSBcImNsaXBwaW5nIGFuY2VzdG9yXCIgaXMgYW4gYG92ZXJmbG93YCBlbGVtZW50IHdpdGggdGhlIGNoYXJhY3RlcmlzdGljIG9mXG4vLyBjbGlwcGluZyAob3IgaGlkaW5nKSBjaGlsZCBlbGVtZW50cy4gVGhpcyByZXR1cm5zIGFsbCBjbGlwcGluZyBhbmNlc3RvcnNcbi8vIG9mIHRoZSBnaXZlbiBlbGVtZW50IHVwIHRoZSB0cmVlLlxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdFbGVtZW50QW5jZXN0b3JzKGVsZW1lbnQsIGNhY2hlKSB7XG4gIGNvbnN0IGNhY2hlZFJlc3VsdCA9IGNhY2hlLmdldChlbGVtZW50KTtcbiAgaWYgKGNhY2hlZFJlc3VsdCkge1xuICAgIHJldHVybiBjYWNoZWRSZXN1bHQ7XG4gIH1cbiAgbGV0IHJlc3VsdCA9IGdldE92ZXJmbG93QW5jZXN0b3JzKGVsZW1lbnQsIFtdLCBmYWxzZSkuZmlsdGVyKGVsID0+IGlzRWxlbWVudChlbCkgJiYgZ2V0Tm9kZU5hbWUoZWwpICE9PSAnYm9keScpO1xuICBsZXQgY3VycmVudENvbnRhaW5pbmdCbG9ja0NvbXB1dGVkU3R5bGUgPSBudWxsO1xuICBjb25zdCBlbGVtZW50SXNGaXhlZCA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gPT09ICdmaXhlZCc7XG4gIGxldCBjdXJyZW50Tm9kZSA9IGVsZW1lbnRJc0ZpeGVkID8gZ2V0UGFyZW50Tm9kZShlbGVtZW50KSA6IGVsZW1lbnQ7XG5cbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0NvbnRhaW5pbmdfYmxvY2sjaWRlbnRpZnlpbmdfdGhlX2NvbnRhaW5pbmdfYmxvY2tcbiAgd2hpbGUgKGlzRWxlbWVudChjdXJyZW50Tm9kZSkgJiYgIWlzTGFzdFRyYXZlcnNhYmxlTm9kZShjdXJyZW50Tm9kZSkpIHtcbiAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50Tm9kZSk7XG4gICAgY29uc3QgY3VycmVudE5vZGVJc0NvbnRhaW5pbmcgPSBpc0NvbnRhaW5pbmdCbG9jayhjdXJyZW50Tm9kZSk7XG4gICAgaWYgKCFjdXJyZW50Tm9kZUlzQ29udGFpbmluZyAmJiBjb21wdXRlZFN0eWxlLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgICBjdXJyZW50Q29udGFpbmluZ0Jsb2NrQ29tcHV0ZWRTdHlsZSA9IG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHNob3VsZERyb3BDdXJyZW50Tm9kZSA9IGVsZW1lbnRJc0ZpeGVkID8gIWN1cnJlbnROb2RlSXNDb250YWluaW5nICYmICFjdXJyZW50Q29udGFpbmluZ0Jsb2NrQ29tcHV0ZWRTdHlsZSA6ICFjdXJyZW50Tm9kZUlzQ29udGFpbmluZyAmJiBjb21wdXRlZFN0eWxlLnBvc2l0aW9uID09PSAnc3RhdGljJyAmJiAhIWN1cnJlbnRDb250YWluaW5nQmxvY2tDb21wdXRlZFN0eWxlICYmIFsnYWJzb2x1dGUnLCAnZml4ZWQnXS5pbmNsdWRlcyhjdXJyZW50Q29udGFpbmluZ0Jsb2NrQ29tcHV0ZWRTdHlsZS5wb3NpdGlvbikgfHwgaXNPdmVyZmxvd0VsZW1lbnQoY3VycmVudE5vZGUpICYmICFjdXJyZW50Tm9kZUlzQ29udGFpbmluZyAmJiBoYXNGaXhlZFBvc2l0aW9uQW5jZXN0b3IoZWxlbWVudCwgY3VycmVudE5vZGUpO1xuICAgIGlmIChzaG91bGREcm9wQ3VycmVudE5vZGUpIHtcbiAgICAgIC8vIERyb3Agbm9uLWNvbnRhaW5pbmcgYmxvY2tzLlxuICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihhbmNlc3RvciA9PiBhbmNlc3RvciAhPT0gY3VycmVudE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZWNvcmQgbGFzdCBjb250YWluaW5nIGJsb2NrIGZvciBuZXh0IGl0ZXJhdGlvbi5cbiAgICAgIGN1cnJlbnRDb250YWluaW5nQmxvY2tDb21wdXRlZFN0eWxlID0gY29tcHV0ZWRTdHlsZTtcbiAgICB9XG4gICAgY3VycmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGN1cnJlbnROb2RlKTtcbiAgfVxuICBjYWNoZS5zZXQoZWxlbWVudCwgcmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gR2V0cyB0aGUgbWF4aW11bSBhcmVhIHRoYXQgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZSBpbiBkdWUgdG8gYW55IG51bWJlciBvZlxuLy8gY2xpcHBpbmcgYW5jZXN0b3JzLlxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdSZWN0KF9yZWYpIHtcbiAgbGV0IHtcbiAgICBlbGVtZW50LFxuICAgIGJvdW5kYXJ5LFxuICAgIHJvb3RCb3VuZGFyeSxcbiAgICBzdHJhdGVneVxuICB9ID0gX3JlZjtcbiAgY29uc3QgZWxlbWVudENsaXBwaW5nQW5jZXN0b3JzID0gYm91bmRhcnkgPT09ICdjbGlwcGluZ0FuY2VzdG9ycycgPyBnZXRDbGlwcGluZ0VsZW1lbnRBbmNlc3RvcnMoZWxlbWVudCwgdGhpcy5fYykgOiBbXS5jb25jYXQoYm91bmRhcnkpO1xuICBjb25zdCBjbGlwcGluZ0FuY2VzdG9ycyA9IFsuLi5lbGVtZW50Q2xpcHBpbmdBbmNlc3RvcnMsIHJvb3RCb3VuZGFyeV07XG4gIGNvbnN0IGZpcnN0Q2xpcHBpbmdBbmNlc3RvciA9IGNsaXBwaW5nQW5jZXN0b3JzWzBdO1xuICBjb25zdCBjbGlwcGluZ1JlY3QgPSBjbGlwcGluZ0FuY2VzdG9ycy5yZWR1Y2UoKGFjY1JlY3QsIGNsaXBwaW5nQW5jZXN0b3IpID0+IHtcbiAgICBjb25zdCByZWN0ID0gZ2V0Q2xpZW50UmVjdEZyb21DbGlwcGluZ0FuY2VzdG9yKGVsZW1lbnQsIGNsaXBwaW5nQW5jZXN0b3IsIHN0cmF0ZWd5KTtcbiAgICBhY2NSZWN0LnRvcCA9IG1heChyZWN0LnRvcCwgYWNjUmVjdC50b3ApO1xuICAgIGFjY1JlY3QucmlnaHQgPSBtaW4ocmVjdC5yaWdodCwgYWNjUmVjdC5yaWdodCk7XG4gICAgYWNjUmVjdC5ib3R0b20gPSBtaW4ocmVjdC5ib3R0b20sIGFjY1JlY3QuYm90dG9tKTtcbiAgICBhY2NSZWN0LmxlZnQgPSBtYXgocmVjdC5sZWZ0LCBhY2NSZWN0LmxlZnQpO1xuICAgIHJldHVybiBhY2NSZWN0O1xuICB9LCBnZXRDbGllbnRSZWN0RnJvbUNsaXBwaW5nQW5jZXN0b3IoZWxlbWVudCwgZmlyc3RDbGlwcGluZ0FuY2VzdG9yLCBzdHJhdGVneSkpO1xuICByZXR1cm4ge1xuICAgIHdpZHRoOiBjbGlwcGluZ1JlY3QucmlnaHQgLSBjbGlwcGluZ1JlY3QubGVmdCxcbiAgICBoZWlnaHQ6IGNsaXBwaW5nUmVjdC5ib3R0b20gLSBjbGlwcGluZ1JlY3QudG9wLFxuICAgIHg6IGNsaXBwaW5nUmVjdC5sZWZ0LFxuICAgIHk6IGNsaXBwaW5nUmVjdC50b3BcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0RGltZW5zaW9ucyhlbGVtZW50KSB7XG4gIGNvbnN0IHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHRcbiAgfSA9IGdldENzc0RpbWVuc2lvbnMoZWxlbWVudCk7XG4gIHJldHVybiB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFJlY3RSZWxhdGl2ZVRvT2Zmc2V0UGFyZW50KGVsZW1lbnQsIG9mZnNldFBhcmVudCwgc3RyYXRlZ3kpIHtcbiAgY29uc3QgaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIGNvbnN0IGRvY3VtZW50RWxlbWVudCA9IGdldERvY3VtZW50RWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICBjb25zdCBpc0ZpeGVkID0gc3RyYXRlZ3kgPT09ICdmaXhlZCc7XG4gIGNvbnN0IHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgdHJ1ZSwgaXNGaXhlZCwgb2Zmc2V0UGFyZW50KTtcbiAgbGV0IHNjcm9sbCA9IHtcbiAgICBzY3JvbGxMZWZ0OiAwLFxuICAgIHNjcm9sbFRvcDogMFxuICB9O1xuICBjb25zdCBvZmZzZXRzID0gY3JlYXRlQ29vcmRzKDApO1xuICBpZiAoaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgfHwgIWlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ICYmICFpc0ZpeGVkKSB7XG4gICAgaWYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgIT09ICdib2R5JyB8fCBpc092ZXJmbG93RWxlbWVudChkb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgICBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKG9mZnNldFBhcmVudCk7XG4gICAgfVxuICAgIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCkge1xuICAgICAgY29uc3Qgb2Zmc2V0UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQsIHRydWUsIGlzRml4ZWQsIG9mZnNldFBhcmVudCk7XG4gICAgICBvZmZzZXRzLnggPSBvZmZzZXRSZWN0LnggKyBvZmZzZXRQYXJlbnQuY2xpZW50TGVmdDtcbiAgICAgIG9mZnNldHMueSA9IG9mZnNldFJlY3QueSArIG9mZnNldFBhcmVudC5jbGllbnRUb3A7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIG9mZnNldHMueCA9IGdldFdpbmRvd1Njcm9sbEJhclgoZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9XG4gIH1cbiAgY29uc3QgeCA9IHJlY3QubGVmdCArIHNjcm9sbC5zY3JvbGxMZWZ0IC0gb2Zmc2V0cy54O1xuICBjb25zdCB5ID0gcmVjdC50b3AgKyBzY3JvbGwuc2Nyb2xsVG9wIC0gb2Zmc2V0cy55O1xuICByZXR1cm4ge1xuICAgIHgsXG4gICAgeSxcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCwgcG9seWZpbGwpIHtcbiAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAocG9seWZpbGwpIHtcbiAgICByZXR1cm4gcG9seWZpbGwoZWxlbWVudCk7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50O1xufVxuXG4vLyBHZXRzIHRoZSBjbG9zZXN0IGFuY2VzdG9yIHBvc2l0aW9uZWQgZWxlbWVudC4gSGFuZGxlcyBzb21lIGVkZ2UgY2FzZXMsXG4vLyBzdWNoIGFzIHRhYmxlIGFuY2VzdG9ycyBhbmQgY3Jvc3MgYnJvd3NlciBidWdzLlxuZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQsIHBvbHlmaWxsKSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8IGlzVG9wTGF5ZXIoZWxlbWVudCkpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG4gIGxldCBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQsIHBvbHlmaWxsKTtcbiAgd2hpbGUgKG9mZnNldFBhcmVudCAmJiBpc1RhYmxlRWxlbWVudChvZmZzZXRQYXJlbnQpICYmIGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCwgcG9seWZpbGwpO1xuICB9XG4gIGlmIChvZmZzZXRQYXJlbnQgJiYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdodG1sJyB8fCBnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnYm9keScgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJyAmJiAhaXNDb250YWluaW5nQmxvY2sob2Zmc2V0UGFyZW50KSkpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG4gIHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHx8IHdpbmRvdztcbn1cblxuY29uc3QgZ2V0RWxlbWVudFJlY3RzID0gYXN5bmMgZnVuY3Rpb24gKGRhdGEpIHtcbiAgY29uc3QgZ2V0T2Zmc2V0UGFyZW50Rm4gPSB0aGlzLmdldE9mZnNldFBhcmVudCB8fCBnZXRPZmZzZXRQYXJlbnQ7XG4gIGNvbnN0IGdldERpbWVuc2lvbnNGbiA9IHRoaXMuZ2V0RGltZW5zaW9ucztcbiAgcmV0dXJuIHtcbiAgICByZWZlcmVuY2U6IGdldFJlY3RSZWxhdGl2ZVRvT2Zmc2V0UGFyZW50KGRhdGEucmVmZXJlbmNlLCBhd2FpdCBnZXRPZmZzZXRQYXJlbnRGbihkYXRhLmZsb2F0aW5nKSwgZGF0YS5zdHJhdGVneSksXG4gICAgZmxvYXRpbmc6IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgICAgLi4uKGF3YWl0IGdldERpbWVuc2lvbnNGbihkYXRhLmZsb2F0aW5nKSlcbiAgICB9XG4gIH07XG59O1xuXG5mdW5jdGlvbiBpc1JUTChlbGVtZW50KSB7XG4gIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmRpcmVjdGlvbiA9PT0gJ3J0bCc7XG59XG5cbmNvbnN0IHBsYXRmb3JtID0ge1xuICBjb252ZXJ0T2Zmc2V0UGFyZW50UmVsYXRpdmVSZWN0VG9WaWV3cG9ydFJlbGF0aXZlUmVjdCxcbiAgZ2V0RG9jdW1lbnRFbGVtZW50LFxuICBnZXRDbGlwcGluZ1JlY3QsXG4gIGdldE9mZnNldFBhcmVudCxcbiAgZ2V0RWxlbWVudFJlY3RzLFxuICBnZXRDbGllbnRSZWN0cyxcbiAgZ2V0RGltZW5zaW9ucyxcbiAgZ2V0U2NhbGUsXG4gIGlzRWxlbWVudCxcbiAgaXNSVExcbn07XG5cbi8vIGh0dHBzOi8vc2FtdGhvci5hdS8yMDIxL29ic2VydmluZy1kb20vXG5mdW5jdGlvbiBvYnNlcnZlTW92ZShlbGVtZW50LCBvbk1vdmUpIHtcbiAgbGV0IGlvID0gbnVsbDtcbiAgbGV0IHRpbWVvdXRJZDtcbiAgY29uc3Qgcm9vdCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICB2YXIgX2lvO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgIChfaW8gPSBpbykgPT0gbnVsbCB8fCBfaW8uZGlzY29ubmVjdCgpO1xuICAgIGlvID0gbnVsbDtcbiAgfVxuICBmdW5jdGlvbiByZWZyZXNoKHNraXAsIHRocmVzaG9sZCkge1xuICAgIGlmIChza2lwID09PSB2b2lkIDApIHtcbiAgICAgIHNraXAgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRocmVzaG9sZCA9PT0gdm9pZCAwKSB7XG4gICAgICB0aHJlc2hvbGQgPSAxO1xuICAgIH1cbiAgICBjbGVhbnVwKCk7XG4gICAgY29uc3Qge1xuICAgICAgbGVmdCxcbiAgICAgIHRvcCxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0XG4gICAgfSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKCFza2lwKSB7XG4gICAgICBvbk1vdmUoKTtcbiAgICB9XG4gICAgaWYgKCF3aWR0aCB8fCAhaGVpZ2h0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGluc2V0VG9wID0gZmxvb3IodG9wKTtcbiAgICBjb25zdCBpbnNldFJpZ2h0ID0gZmxvb3Iocm9vdC5jbGllbnRXaWR0aCAtIChsZWZ0ICsgd2lkdGgpKTtcbiAgICBjb25zdCBpbnNldEJvdHRvbSA9IGZsb29yKHJvb3QuY2xpZW50SGVpZ2h0IC0gKHRvcCArIGhlaWdodCkpO1xuICAgIGNvbnN0IGluc2V0TGVmdCA9IGZsb29yKGxlZnQpO1xuICAgIGNvbnN0IHJvb3RNYXJnaW4gPSAtaW5zZXRUb3AgKyBcInB4IFwiICsgLWluc2V0UmlnaHQgKyBcInB4IFwiICsgLWluc2V0Qm90dG9tICsgXCJweCBcIiArIC1pbnNldExlZnQgKyBcInB4XCI7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHJvb3RNYXJnaW4sXG4gICAgICB0aHJlc2hvbGQ6IG1heCgwLCBtaW4oMSwgdGhyZXNob2xkKSkgfHwgMVxuICAgIH07XG4gICAgbGV0IGlzRmlyc3RVcGRhdGUgPSB0cnVlO1xuICAgIGZ1bmN0aW9uIGhhbmRsZU9ic2VydmUoZW50cmllcykge1xuICAgICAgY29uc3QgcmF0aW8gPSBlbnRyaWVzWzBdLmludGVyc2VjdGlvblJhdGlvO1xuICAgICAgaWYgKHJhdGlvICE9PSB0aHJlc2hvbGQpIHtcbiAgICAgICAgaWYgKCFpc0ZpcnN0VXBkYXRlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlZnJlc2goKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJhdGlvKSB7XG4gICAgICAgICAgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICByZWZyZXNoKGZhbHNlLCAxZS03KTtcbiAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlZnJlc2goZmFsc2UsIHJhdGlvKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaXNGaXJzdFVwZGF0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIE9sZGVyIGJyb3dzZXJzIGRvbid0IHN1cHBvcnQgYSBgZG9jdW1lbnRgIGFzIHRoZSByb290IGFuZCB3aWxsIHRocm93IGFuXG4gICAgLy8gZXJyb3IuXG4gICAgdHJ5IHtcbiAgICAgIGlvID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGhhbmRsZU9ic2VydmUsIHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgLy8gSGFuZGxlIDxpZnJhbWU+c1xuICAgICAgICByb290OiByb290Lm93bmVyRG9jdW1lbnRcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlvID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGhhbmRsZU9ic2VydmUsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBpby5vYnNlcnZlKGVsZW1lbnQpO1xuICB9XG4gIHJlZnJlc2godHJ1ZSk7XG4gIHJldHVybiBjbGVhbnVwO1xufVxuXG4vKipcbiAqIEF1dG9tYXRpY2FsbHkgdXBkYXRlcyB0aGUgcG9zaXRpb24gb2YgdGhlIGZsb2F0aW5nIGVsZW1lbnQgd2hlbiBuZWNlc3NhcnkuXG4gKiBTaG91bGQgb25seSBiZSBjYWxsZWQgd2hlbiB0aGUgZmxvYXRpbmcgZWxlbWVudCBpcyBtb3VudGVkIG9uIHRoZSBET00gb3JcbiAqIHZpc2libGUgb24gdGhlIHNjcmVlbi5cbiAqIEByZXR1cm5zIGNsZWFudXAgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgaW52b2tlZCB3aGVuIHRoZSBmbG9hdGluZyBlbGVtZW50IGlzXG4gKiByZW1vdmVkIGZyb20gdGhlIERPTSBvciBoaWRkZW4gZnJvbSB0aGUgc2NyZWVuLlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2F1dG9VcGRhdGVcbiAqL1xuZnVuY3Rpb24gYXV0b1VwZGF0ZShyZWZlcmVuY2UsIGZsb2F0aW5nLCB1cGRhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBjb25zdCB7XG4gICAgYW5jZXN0b3JTY3JvbGwgPSB0cnVlLFxuICAgIGFuY2VzdG9yUmVzaXplID0gdHJ1ZSxcbiAgICBlbGVtZW50UmVzaXplID0gdHlwZW9mIFJlc2l6ZU9ic2VydmVyID09PSAnZnVuY3Rpb24nLFxuICAgIGxheW91dFNoaWZ0ID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyID09PSAnZnVuY3Rpb24nLFxuICAgIGFuaW1hdGlvbkZyYW1lID0gZmFsc2VcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHJlZmVyZW5jZUVsID0gdW53cmFwRWxlbWVudChyZWZlcmVuY2UpO1xuICBjb25zdCBhbmNlc3RvcnMgPSBhbmNlc3RvclNjcm9sbCB8fCBhbmNlc3RvclJlc2l6ZSA/IFsuLi4ocmVmZXJlbmNlRWwgPyBnZXRPdmVyZmxvd0FuY2VzdG9ycyhyZWZlcmVuY2VFbCkgOiBbXSksIC4uLmdldE92ZXJmbG93QW5jZXN0b3JzKGZsb2F0aW5nKV0gOiBbXTtcbiAgYW5jZXN0b3JzLmZvckVhY2goYW5jZXN0b3IgPT4ge1xuICAgIGFuY2VzdG9yU2Nyb2xsICYmIGFuY2VzdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZSwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuICAgIGFuY2VzdG9yUmVzaXplICYmIGFuY2VzdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZSk7XG4gIH0pO1xuICBjb25zdCBjbGVhbnVwSW8gPSByZWZlcmVuY2VFbCAmJiBsYXlvdXRTaGlmdCA/IG9ic2VydmVNb3ZlKHJlZmVyZW5jZUVsLCB1cGRhdGUpIDogbnVsbDtcbiAgbGV0IHJlb2JzZXJ2ZUZyYW1lID0gLTE7XG4gIGxldCByZXNpemVPYnNlcnZlciA9IG51bGw7XG4gIGlmIChlbGVtZW50UmVzaXplKSB7XG4gICAgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoX3JlZiA9PiB7XG4gICAgICBsZXQgW2ZpcnN0RW50cnldID0gX3JlZjtcbiAgICAgIGlmIChmaXJzdEVudHJ5ICYmIGZpcnN0RW50cnkudGFyZ2V0ID09PSByZWZlcmVuY2VFbCAmJiByZXNpemVPYnNlcnZlcikge1xuICAgICAgICAvLyBQcmV2ZW50IHVwZGF0ZSBsb29wcyB3aGVuIHVzaW5nIHRoZSBgc2l6ZWAgbWlkZGxld2FyZS5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2Zsb2F0aW5nLXVpL2Zsb2F0aW5nLXVpL2lzc3Vlcy8xNzQwXG4gICAgICAgIHJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZShmbG9hdGluZyk7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlb2JzZXJ2ZUZyYW1lKTtcbiAgICAgICAgcmVvYnNlcnZlRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHZhciBfcmVzaXplT2JzZXJ2ZXI7XG4gICAgICAgICAgKF9yZXNpemVPYnNlcnZlciA9IHJlc2l6ZU9ic2VydmVyKSA9PSBudWxsIHx8IF9yZXNpemVPYnNlcnZlci5vYnNlcnZlKGZsb2F0aW5nKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB1cGRhdGUoKTtcbiAgICB9KTtcbiAgICBpZiAocmVmZXJlbmNlRWwgJiYgIWFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKHJlZmVyZW5jZUVsKTtcbiAgICB9XG4gICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShmbG9hdGluZyk7XG4gIH1cbiAgbGV0IGZyYW1lSWQ7XG4gIGxldCBwcmV2UmVmUmVjdCA9IGFuaW1hdGlvbkZyYW1lID8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHJlZmVyZW5jZSkgOiBudWxsO1xuICBpZiAoYW5pbWF0aW9uRnJhbWUpIHtcbiAgICBmcmFtZUxvb3AoKTtcbiAgfVxuICBmdW5jdGlvbiBmcmFtZUxvb3AoKSB7XG4gICAgY29uc3QgbmV4dFJlZlJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QocmVmZXJlbmNlKTtcbiAgICBpZiAocHJldlJlZlJlY3QgJiYgKG5leHRSZWZSZWN0LnggIT09IHByZXZSZWZSZWN0LnggfHwgbmV4dFJlZlJlY3QueSAhPT0gcHJldlJlZlJlY3QueSB8fCBuZXh0UmVmUmVjdC53aWR0aCAhPT0gcHJldlJlZlJlY3Qud2lkdGggfHwgbmV4dFJlZlJlY3QuaGVpZ2h0ICE9PSBwcmV2UmVmUmVjdC5oZWlnaHQpKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9XG4gICAgcHJldlJlZlJlY3QgPSBuZXh0UmVmUmVjdDtcbiAgICBmcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZyYW1lTG9vcCk7XG4gIH1cbiAgdXBkYXRlKCk7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgdmFyIF9yZXNpemVPYnNlcnZlcjI7XG4gICAgYW5jZXN0b3JzLmZvckVhY2goYW5jZXN0b3IgPT4ge1xuICAgICAgYW5jZXN0b3JTY3JvbGwgJiYgYW5jZXN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlKTtcbiAgICAgIGFuY2VzdG9yUmVzaXplICYmIGFuY2VzdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZSk7XG4gICAgfSk7XG4gICAgY2xlYW51cElvID09IG51bGwgfHwgY2xlYW51cElvKCk7XG4gICAgKF9yZXNpemVPYnNlcnZlcjIgPSByZXNpemVPYnNlcnZlcikgPT0gbnVsbCB8fCBfcmVzaXplT2JzZXJ2ZXIyLmRpc2Nvbm5lY3QoKTtcbiAgICByZXNpemVPYnNlcnZlciA9IG51bGw7XG4gICAgaWYgKGFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShmcmFtZUlkKTtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogT3B0aW1pemVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBmbG9hdGluZyBlbGVtZW50IGJ5IGNob29zaW5nIHRoZSBwbGFjZW1lbnRcbiAqIHRoYXQgaGFzIHRoZSBtb3N0IHNwYWNlIGF2YWlsYWJsZSBhdXRvbWF0aWNhbGx5LCB3aXRob3V0IG5lZWRpbmcgdG8gc3BlY2lmeSBhXG4gKiBwcmVmZXJyZWQgcGxhY2VtZW50LiBBbHRlcm5hdGl2ZSB0byBgZmxpcGAuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvYXV0b1BsYWNlbWVudFxuICovXG5jb25zdCBhdXRvUGxhY2VtZW50ID0gYXV0b1BsYWNlbWVudCQxO1xuXG4vKipcbiAqIE9wdGltaXplcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgZmxvYXRpbmcgZWxlbWVudCBieSBzaGlmdGluZyBpdCBpbiBvcmRlciB0b1xuICoga2VlcCBpdCBpbiB2aWV3IHdoZW4gaXQgd2lsbCBvdmVyZmxvdyB0aGUgY2xpcHBpbmcgYm91bmRhcnkuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3Mvc2hpZnRcbiAqL1xuY29uc3Qgc2hpZnQgPSBzaGlmdCQxO1xuXG4vKipcbiAqIE9wdGltaXplcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgZmxvYXRpbmcgZWxlbWVudCBieSBmbGlwcGluZyB0aGUgYHBsYWNlbWVudGBcbiAqIGluIG9yZGVyIHRvIGtlZXAgaXQgaW4gdmlldyB3aGVuIHRoZSBwcmVmZXJyZWQgcGxhY2VtZW50KHMpIHdpbGwgb3ZlcmZsb3cgdGhlXG4gKiBjbGlwcGluZyBib3VuZGFyeS4gQWx0ZXJuYXRpdmUgdG8gYGF1dG9QbGFjZW1lbnRgLlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2ZsaXBcbiAqL1xuY29uc3QgZmxpcCA9IGZsaXAkMTtcblxuLyoqXG4gKiBQcm92aWRlcyBkYXRhIHRoYXQgYWxsb3dzIHlvdSB0byBjaGFuZ2UgdGhlIHNpemUgb2YgdGhlIGZsb2F0aW5nIGVsZW1lbnQg4oCUXG4gKiBmb3IgaW5zdGFuY2UsIHByZXZlbnQgaXQgZnJvbSBvdmVyZmxvd2luZyB0aGUgY2xpcHBpbmcgYm91bmRhcnkgb3IgbWF0Y2ggdGhlXG4gKiB3aWR0aCBvZiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3Mvc2l6ZVxuICovXG5jb25zdCBzaXplID0gc2l6ZSQxO1xuXG4vKipcbiAqIFByb3ZpZGVzIGRhdGEgdG8gaGlkZSB0aGUgZmxvYXRpbmcgZWxlbWVudCBpbiBhcHBsaWNhYmxlIHNpdHVhdGlvbnMsIHN1Y2ggYXNcbiAqIHdoZW4gaXQgaXMgbm90IGluIHRoZSBzYW1lIGNsaXBwaW5nIGNvbnRleHQgYXMgdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2hpZGVcbiAqL1xuY29uc3QgaGlkZSA9IGhpZGUkMTtcblxuLyoqXG4gKiBQcm92aWRlcyBkYXRhIHRvIHBvc2l0aW9uIGFuIGlubmVyIGVsZW1lbnQgb2YgdGhlIGZsb2F0aW5nIGVsZW1lbnQgc28gdGhhdCBpdFxuICogYXBwZWFycyBjZW50ZXJlZCB0byB0aGUgcmVmZXJlbmNlIGVsZW1lbnQuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvYXJyb3dcbiAqL1xuY29uc3QgYXJyb3cgPSBhcnJvdyQxO1xuXG4vKipcbiAqIFByb3ZpZGVzIGltcHJvdmVkIHBvc2l0aW9uaW5nIGZvciBpbmxpbmUgcmVmZXJlbmNlIGVsZW1lbnRzIHRoYXQgY2FuIHNwYW5cbiAqIG92ZXIgbXVsdGlwbGUgbGluZXMsIHN1Y2ggYXMgaHlwZXJsaW5rcyBvciByYW5nZSBzZWxlY3Rpb25zLlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2lubGluZVxuICovXG5jb25zdCBpbmxpbmUgPSBpbmxpbmUkMTtcblxuLyoqXG4gKiBCdWlsdC1pbiBgbGltaXRlcmAgdGhhdCB3aWxsIHN0b3AgYHNoaWZ0KClgIGF0IGEgY2VydGFpbiBwb2ludC5cbiAqL1xuY29uc3QgbGltaXRTaGlmdCA9IGxpbWl0U2hpZnQkMTtcblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgYHhgIGFuZCBgeWAgY29vcmRpbmF0ZXMgdGhhdCB3aWxsIHBsYWNlIHRoZSBmbG9hdGluZyBlbGVtZW50XG4gKiBuZXh0IHRvIGEgZ2l2ZW4gcmVmZXJlbmNlIGVsZW1lbnQuXG4gKi9cbmNvbnN0IGNvbXB1dGVQb3NpdGlvbiA9IChyZWZlcmVuY2UsIGZsb2F0aW5nLCBvcHRpb25zKSA9PiB7XG4gIC8vIFRoaXMgY2FjaGVzIHRoZSBleHBlbnNpdmUgYGdldENsaXBwaW5nRWxlbWVudEFuY2VzdG9yc2AgZnVuY3Rpb24gc28gdGhhdFxuICAvLyBtdWx0aXBsZSBsaWZlY3ljbGUgcmVzZXRzIHJlLXVzZSB0aGUgc2FtZSByZXN1bHQuIEl0IG9ubHkgbGl2ZXMgZm9yIGFcbiAgLy8gc2luZ2xlIGNhbGwuIElmIG90aGVyIGZ1bmN0aW9ucyBiZWNvbWUgZXhwZW5zaXZlLCB3ZSBjYW4gYWRkIHRoZW0gYXMgd2VsbC5cbiAgY29uc3QgY2FjaGUgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IG1lcmdlZE9wdGlvbnMgPSB7XG4gICAgcGxhdGZvcm0sXG4gICAgLi4ub3B0aW9uc1xuICB9O1xuICBjb25zdCBwbGF0Zm9ybVdpdGhDYWNoZSA9IHtcbiAgICAuLi5tZXJnZWRPcHRpb25zLnBsYXRmb3JtLFxuICAgIF9jOiBjYWNoZVxuICB9O1xuICByZXR1cm4gY29tcHV0ZVBvc2l0aW9uJDEocmVmZXJlbmNlLCBmbG9hdGluZywge1xuICAgIC4uLm1lcmdlZE9wdGlvbnMsXG4gICAgcGxhdGZvcm06IHBsYXRmb3JtV2l0aENhY2hlXG4gIH0pO1xufTtcblxuZXhwb3J0IHsgYXJyb3csIGF1dG9QbGFjZW1lbnQsIGF1dG9VcGRhdGUsIGNvbXB1dGVQb3NpdGlvbiwgZmxpcCwgaGlkZSwgaW5saW5lLCBsaW1pdFNoaWZ0LCBwbGF0Zm9ybSwgc2hpZnQsIHNpemUgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIGluZGV4ID0gIHJlYWN0LnVzZUxheW91dEVmZmVjdCA7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGluZGV4O1xuIiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMic7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcywgY3NzIGFzIGNzcyQyIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXknO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgX3R5cGVvZiBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YnO1xuaW1wb3J0IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdGFnZ2VkVGVtcGxhdGVMaXRlcmFsJztcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlTWVtbywgdXNlQ2FsbGJhY2ssIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgYXV0b1VwZGF0ZSB9IGZyb20gJ0BmbG9hdGluZy11aS9kb20nO1xuaW1wb3J0IHVzZUxheW91dEVmZmVjdCBmcm9tICd1c2UtaXNvbW9ycGhpYy1sYXlvdXQtZWZmZWN0JztcblxudmFyIF9leGNsdWRlZCQ0ID0gW1wiY2xhc3NOYW1lXCIsIFwiY2xlYXJWYWx1ZVwiLCBcImN4XCIsIFwiZ2V0U3R5bGVzXCIsIFwiZ2V0Q2xhc3NOYW1lc1wiLCBcImdldFZhbHVlXCIsIFwiaGFzVmFsdWVcIiwgXCJpc011bHRpXCIsIFwiaXNSdGxcIiwgXCJvcHRpb25zXCIsIFwic2VsZWN0T3B0aW9uXCIsIFwic2VsZWN0UHJvcHNcIiwgXCJzZXRWYWx1ZVwiLCBcInRoZW1lXCJdO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBOTyBPUFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENsYXNzIE5hbWUgUHJlZml4ZXJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgY29tcG9uZW50IHN0YXRlIGZvciBzdHlsaW5nIHdpdGggY2xhc3MgbmFtZXMuXG5cbiBFeHBlY3RzIGFuIGFycmF5IG9mIHN0cmluZ3MgT1IgYSBzdHJpbmcvb2JqZWN0IHBhaXI6XG4gLSBjbGFzc05hbWUoWydjb21wJywgJ2NvbXAtYXJnJywgJ2NvbXAtYXJnLTInXSlcbiAgIEByZXR1cm5zICdyZWFjdC1zZWxlY3RfX2NvbXAgcmVhY3Qtc2VsZWN0X19jb21wLWFyZyByZWFjdC1zZWxlY3RfX2NvbXAtYXJnLTInXG4gLSBjbGFzc05hbWUoJ2NvbXAnLCB7IHNvbWU6IHRydWUsIHN0YXRlOiBmYWxzZSB9KVxuICAgQHJldHVybnMgJ3JlYWN0LXNlbGVjdF9fY29tcCByZWFjdC1zZWxlY3RfX2NvbXAtLXNvbWUnXG4qL1xuZnVuY3Rpb24gYXBwbHlQcmVmaXhUb05hbWUocHJlZml4LCBuYW1lKSB7XG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiBwcmVmaXg7XG4gIH0gZWxzZSBpZiAobmFtZVswXSA9PT0gJy0nKSB7XG4gICAgcmV0dXJuIHByZWZpeCArIG5hbWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHByZWZpeCArICdfXycgKyBuYW1lO1xuICB9XG59XG5mdW5jdGlvbiBjbGFzc05hbWVzKHByZWZpeCwgc3RhdGUpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGNsYXNzTmFtZUxpc3QgPSBuZXcgQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGNsYXNzTmFtZUxpc3RbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG4gIHZhciBhcnIgPSBbXS5jb25jYXQoY2xhc3NOYW1lTGlzdCk7XG4gIGlmIChzdGF0ZSAmJiBwcmVmaXgpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHN0YXRlW2tleV0pIHtcbiAgICAgICAgYXJyLnB1c2goXCJcIi5jb25jYXQoYXBwbHlQcmVmaXhUb05hbWUocHJlZml4LCBrZXkpKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnIuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgcmV0dXJuIGk7XG4gIH0pLm1hcChmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBTdHJpbmcoaSkudHJpbSgpO1xuICB9KS5qb2luKCcgJyk7XG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENsZWFuIFZhbHVlXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGNsZWFuVmFsdWUgPSBmdW5jdGlvbiBjbGVhblZhbHVlKHZhbHVlKSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkgcmV0dXJuIHZhbHVlLmZpbHRlcihCb29sZWFuKTtcbiAgaWYgKF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCkgcmV0dXJuIFt2YWx1ZV07XG4gIHJldHVybiBbXTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ2xlYW4gQ29tbW9uIFByb3BzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGNsZWFuQ29tbW9uUHJvcHMgPSBmdW5jdGlvbiBjbGVhbkNvbW1vblByb3BzKHByb3BzKSB7XG4gIC8vY2xhc3NOYW1lXG4gIHByb3BzLmNsYXNzTmFtZTtcbiAgICBwcm9wcy5jbGVhclZhbHVlO1xuICAgIHByb3BzLmN4O1xuICAgIHByb3BzLmdldFN0eWxlcztcbiAgICBwcm9wcy5nZXRDbGFzc05hbWVzO1xuICAgIHByb3BzLmdldFZhbHVlO1xuICAgIHByb3BzLmhhc1ZhbHVlO1xuICAgIHByb3BzLmlzTXVsdGk7XG4gICAgcHJvcHMuaXNSdGw7XG4gICAgcHJvcHMub3B0aW9ucztcbiAgICBwcm9wcy5zZWxlY3RPcHRpb247XG4gICAgcHJvcHMuc2VsZWN0UHJvcHM7XG4gICAgcHJvcHMuc2V0VmFsdWU7XG4gICAgcHJvcHMudGhlbWU7XG4gICAgdmFyIGlubmVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIF9leGNsdWRlZCQ0KTtcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIGlubmVyUHJvcHMpO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBHZXQgU3R5bGUgUHJvcHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgZ2V0U3R5bGVQcm9wcyA9IGZ1bmN0aW9uIGdldFN0eWxlUHJvcHMocHJvcHMsIG5hbWUsIGNsYXNzTmFtZXNTdGF0ZSkge1xuICB2YXIgY3ggPSBwcm9wcy5jeCxcbiAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgZ2V0Q2xhc3NOYW1lcyA9IHByb3BzLmdldENsYXNzTmFtZXMsXG4gICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lO1xuICByZXR1cm4ge1xuICAgIGNzczogZ2V0U3R5bGVzKG5hbWUsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KGNsYXNzTmFtZXNTdGF0ZSAhPT0gbnVsbCAmJiBjbGFzc05hbWVzU3RhdGUgIT09IHZvaWQgMCA/IGNsYXNzTmFtZXNTdGF0ZSA6IHt9LCBnZXRDbGFzc05hbWVzKG5hbWUsIHByb3BzKSwgY2xhc3NOYW1lKVxuICB9O1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBIYW5kbGUgSW5wdXQgQ2hhbmdlXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gaGFuZGxlSW5wdXRDaGFuZ2UoaW5wdXRWYWx1ZSwgYWN0aW9uTWV0YSwgb25JbnB1dENoYW5nZSkge1xuICBpZiAob25JbnB1dENoYW5nZSkge1xuICAgIHZhciBfbmV3VmFsdWUgPSBvbklucHV0Q2hhbmdlKGlucHV0VmFsdWUsIGFjdGlvbk1ldGEpO1xuICAgIGlmICh0eXBlb2YgX25ld1ZhbHVlID09PSAnc3RyaW5nJykgcmV0dXJuIF9uZXdWYWx1ZTtcbiAgfVxuICByZXR1cm4gaW5wdXRWYWx1ZTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTY3JvbGwgSGVscGVyc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGlzRG9jdW1lbnRFbGVtZW50KGVsKSB7XG4gIHJldHVybiBbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5LCB3aW5kb3ddLmluZGV4T2YoZWwpID4gLTE7XG59XG5cbi8vIE5vcm1hbGl6ZWQgU2Nyb2xsIFRvcFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZWRIZWlnaHQoZWwpIHtcbiAgaWYgKGlzRG9jdW1lbnRFbGVtZW50KGVsKSkge1xuICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH1cbiAgcmV0dXJuIGVsLmNsaWVudEhlaWdodDtcbn1cblxuLy8gTm9ybWFsaXplZCBzY3JvbGxUbyAmIHNjcm9sbFRvcFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGdldFNjcm9sbFRvcChlbCkge1xuICBpZiAoaXNEb2N1bWVudEVsZW1lbnQoZWwpKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgfVxuICByZXR1cm4gZWwuc2Nyb2xsVG9wO1xufVxuZnVuY3Rpb24gc2Nyb2xsVG8oZWwsIHRvcCkge1xuICAvLyB3aXRoIGEgc2Nyb2xsIGRpc3RhbmNlLCB3ZSBwZXJmb3JtIHNjcm9sbCBvbiB0aGUgZWxlbWVudFxuICBpZiAoaXNEb2N1bWVudEVsZW1lbnQoZWwpKSB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIHRvcCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsLnNjcm9sbFRvcCA9IHRvcDtcbn1cblxuLy8gR2V0IFNjcm9sbCBQYXJlbnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCkge1xuICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICB2YXIgZXhjbHVkZVN0YXRpY1BhcmVudCA9IHN0eWxlLnBvc2l0aW9uID09PSAnYWJzb2x1dGUnO1xuICB2YXIgb3ZlcmZsb3dSeCA9IC8oYXV0b3xzY3JvbGwpLztcbiAgaWYgKHN0eWxlLnBvc2l0aW9uID09PSAnZml4ZWQnKSByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBmb3IgKHZhciBwYXJlbnQgPSBlbGVtZW50OyBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDspIHtcbiAgICBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUocGFyZW50KTtcbiAgICBpZiAoZXhjbHVkZVN0YXRpY1BhcmVudCAmJiBzdHlsZS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAob3ZlcmZsb3dSeC50ZXN0KHN0eWxlLm92ZXJmbG93ICsgc3R5bGUub3ZlcmZsb3dZICsgc3R5bGUub3ZlcmZsb3dYKSkge1xuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbn1cblxuLy8gQW5pbWF0ZWQgU2Nyb2xsIFRvXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gIEBwYXJhbSB0OiB0aW1lIChlbGFwc2VkKVxuICBAcGFyYW0gYjogaW5pdGlhbCB2YWx1ZVxuICBAcGFyYW0gYzogYW1vdW50IG9mIGNoYW5nZVxuICBAcGFyYW0gZDogZHVyYXRpb25cbiovXG5mdW5jdGlvbiBlYXNlT3V0Q3ViaWModCwgYiwgYywgZCkge1xuICByZXR1cm4gYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogdCArIDEpICsgYjtcbn1cbmZ1bmN0aW9uIGFuaW1hdGVkU2Nyb2xsVG8oZWxlbWVudCwgdG8pIHtcbiAgdmFyIGR1cmF0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAyMDA7XG4gIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogbm9vcDtcbiAgdmFyIHN0YXJ0ID0gZ2V0U2Nyb2xsVG9wKGVsZW1lbnQpO1xuICB2YXIgY2hhbmdlID0gdG8gLSBzdGFydDtcbiAgdmFyIGluY3JlbWVudCA9IDEwO1xuICB2YXIgY3VycmVudFRpbWUgPSAwO1xuICBmdW5jdGlvbiBhbmltYXRlU2Nyb2xsKCkge1xuICAgIGN1cnJlbnRUaW1lICs9IGluY3JlbWVudDtcbiAgICB2YXIgdmFsID0gZWFzZU91dEN1YmljKGN1cnJlbnRUaW1lLCBzdGFydCwgY2hhbmdlLCBkdXJhdGlvbik7XG4gICAgc2Nyb2xsVG8oZWxlbWVudCwgdmFsKTtcbiAgICBpZiAoY3VycmVudFRpbWUgPCBkdXJhdGlvbikge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlU2Nyb2xsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2soZWxlbWVudCk7XG4gICAgfVxuICB9XG4gIGFuaW1hdGVTY3JvbGwoKTtcbn1cblxuLy8gU2Nyb2xsIEludG8gVmlld1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIHNjcm9sbEludG9WaWV3KG1lbnVFbCwgZm9jdXNlZEVsKSB7XG4gIHZhciBtZW51UmVjdCA9IG1lbnVFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIGZvY3VzZWRSZWN0ID0gZm9jdXNlZEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgb3ZlclNjcm9sbCA9IGZvY3VzZWRFbC5vZmZzZXRIZWlnaHQgLyAzO1xuICBpZiAoZm9jdXNlZFJlY3QuYm90dG9tICsgb3ZlclNjcm9sbCA+IG1lbnVSZWN0LmJvdHRvbSkge1xuICAgIHNjcm9sbFRvKG1lbnVFbCwgTWF0aC5taW4oZm9jdXNlZEVsLm9mZnNldFRvcCArIGZvY3VzZWRFbC5jbGllbnRIZWlnaHQgLSBtZW51RWwub2Zmc2V0SGVpZ2h0ICsgb3ZlclNjcm9sbCwgbWVudUVsLnNjcm9sbEhlaWdodCkpO1xuICB9IGVsc2UgaWYgKGZvY3VzZWRSZWN0LnRvcCAtIG92ZXJTY3JvbGwgPCBtZW51UmVjdC50b3ApIHtcbiAgICBzY3JvbGxUbyhtZW51RWwsIE1hdGgubWF4KGZvY3VzZWRFbC5vZmZzZXRUb3AgLSBvdmVyU2Nyb2xsLCAwKSk7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBHZXQgYm91bmRpbmcgY2xpZW50IG9iamVjdFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIGNhbm5vdCBnZXQga2V5cyB1c2luZyBhcnJheSBub3RhdGlvbiB3aXRoIERPTVJlY3RcbmZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50T2JqKGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4ge1xuICAgIGJvdHRvbTogcmVjdC5ib3R0b20sXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodCxcbiAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgcmlnaHQ6IHJlY3QucmlnaHQsXG4gICAgdG9wOiByZWN0LnRvcCxcbiAgICB3aWR0aDogcmVjdC53aWR0aFxuICB9O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFRvdWNoIENhcGFiaWxpdHkgRGV0ZWN0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBpc1RvdWNoQ2FwYWJsZSgpIHtcbiAgdHJ5IHtcbiAgICBkb2N1bWVudC5jcmVhdGVFdmVudCgnVG91Y2hFdmVudCcpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTW9iaWxlIERldmljZSBEZXRlY3RvclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGlzTW9iaWxlRGV2aWNlKCkge1xuICB0cnkge1xuICAgIHJldHVybiAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQYXNzaXZlIEV2ZW50IERldGVjdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3JhZmdyYXBoL2RldGVjdC1pdC9ibG9iL21haW4vc3JjL2luZGV4LnRzI0wxOS1MMzZcbnZhciBwYXNzaXZlT3B0aW9uQWNjZXNzZWQgPSBmYWxzZTtcbnZhciBvcHRpb25zID0ge1xuICBnZXQgcGFzc2l2ZSgpIHtcbiAgICByZXR1cm4gcGFzc2l2ZU9wdGlvbkFjY2Vzc2VkID0gdHJ1ZTtcbiAgfVxufTtcbi8vIGNoZWNrIGZvciBTU1JcbnZhciB3ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB7fTtcbmlmICh3LmFkZEV2ZW50TGlzdGVuZXIgJiYgdy5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gIHcuYWRkRXZlbnRMaXN0ZW5lcigncCcsIG5vb3AsIG9wdGlvbnMpO1xuICB3LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3AnLCBub29wLCBmYWxzZSk7XG59XG52YXIgc3VwcG9ydHNQYXNzaXZlRXZlbnRzID0gcGFzc2l2ZU9wdGlvbkFjY2Vzc2VkO1xuZnVuY3Rpb24gbm90TnVsbGlzaChpdGVtKSB7XG4gIHJldHVybiBpdGVtICE9IG51bGw7XG59XG5mdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcmcpO1xufVxuZnVuY3Rpb24gdmFsdWVUZXJuYXJ5KGlzTXVsdGksIG11bHRpVmFsdWUsIHNpbmdsZVZhbHVlKSB7XG4gIHJldHVybiBpc011bHRpID8gbXVsdGlWYWx1ZSA6IHNpbmdsZVZhbHVlO1xufVxuZnVuY3Rpb24gc2luZ2xlVmFsdWVBc1ZhbHVlKHNpbmdsZVZhbHVlKSB7XG4gIHJldHVybiBzaW5nbGVWYWx1ZTtcbn1cbmZ1bmN0aW9uIG11bHRpVmFsdWVBc1ZhbHVlKG11bHRpVmFsdWUpIHtcbiAgcmV0dXJuIG11bHRpVmFsdWU7XG59XG52YXIgcmVtb3ZlUHJvcHMgPSBmdW5jdGlvbiByZW1vdmVQcm9wcyhwcm9wc09iaikge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIHByb3BlcnRpZXMgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIHByb3BlcnRpZXNbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cbiAgdmFyIHByb3BzTWFwID0gT2JqZWN0LmVudHJpZXMocHJvcHNPYmopLmZpbHRlcihmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDEpLFxuICAgICAga2V5ID0gX3JlZjJbMF07XG4gICAgcmV0dXJuICFwcm9wZXJ0aWVzLmluY2x1ZGVzKGtleSk7XG4gIH0pO1xuICByZXR1cm4gcHJvcHNNYXAucmVkdWNlKGZ1bmN0aW9uIChuZXdQcm9wcywgX3JlZjMpIHtcbiAgICB2YXIgX3JlZjQgPSBfc2xpY2VkVG9BcnJheShfcmVmMywgMiksXG4gICAgICBrZXkgPSBfcmVmNFswXSxcbiAgICAgIHZhbCA9IF9yZWY0WzFdO1xuICAgIG5ld1Byb3BzW2tleV0gPSB2YWw7XG4gICAgcmV0dXJuIG5ld1Byb3BzO1xuICB9LCB7fSk7XG59O1xuXG52YXIgX2V4Y2x1ZGVkJDMgPSBbXCJjaGlsZHJlblwiLCBcImlubmVyUHJvcHNcIl0sXG4gIF9leGNsdWRlZDIkMSA9IFtcImNoaWxkcmVuXCIsIFwiaW5uZXJQcm9wc1wiXTtcbmZ1bmN0aW9uIGdldE1lbnVQbGFjZW1lbnQoX3JlZikge1xuICB2YXIgcHJlZmVycmVkTWF4SGVpZ2h0ID0gX3JlZi5tYXhIZWlnaHQsXG4gICAgbWVudUVsID0gX3JlZi5tZW51RWwsXG4gICAgbWluSGVpZ2h0ID0gX3JlZi5taW5IZWlnaHQsXG4gICAgcHJlZmVycmVkUGxhY2VtZW50ID0gX3JlZi5wbGFjZW1lbnQsXG4gICAgc2hvdWxkU2Nyb2xsID0gX3JlZi5zaG91bGRTY3JvbGwsXG4gICAgaXNGaXhlZFBvc2l0aW9uID0gX3JlZi5pc0ZpeGVkUG9zaXRpb24sXG4gICAgY29udHJvbEhlaWdodCA9IF9yZWYuY29udHJvbEhlaWdodDtcbiAgdmFyIHNjcm9sbFBhcmVudCA9IGdldFNjcm9sbFBhcmVudChtZW51RWwpO1xuICB2YXIgZGVmYXVsdFN0YXRlID0ge1xuICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgbWF4SGVpZ2h0OiBwcmVmZXJyZWRNYXhIZWlnaHRcbiAgfTtcblxuICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZywgcmV0dXJuIGRlZmF1bHQgc3RhdGVcbiAgaWYgKCFtZW51RWwgfHwgIW1lbnVFbC5vZmZzZXRQYXJlbnQpIHJldHVybiBkZWZhdWx0U3RhdGU7XG5cbiAgLy8gd2UgY2FuJ3QgdHJ1c3QgYHNjcm9sbFBhcmVudC5zY3JvbGxIZWlnaHRgIC0tPiBpdCBtYXkgaW5jcmVhc2Ugd2hlblxuICAvLyB0aGUgbWVudSBpcyByZW5kZXJlZFxuICB2YXIgX3Njcm9sbFBhcmVudCRnZXRCb3VuID0gc2Nyb2xsUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgIHNjcm9sbEhlaWdodCA9IF9zY3JvbGxQYXJlbnQkZ2V0Qm91bi5oZWlnaHQ7XG4gIHZhciBfbWVudUVsJGdldEJvdW5kaW5nQ2wgPSBtZW51RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgbWVudUJvdHRvbSA9IF9tZW51RWwkZ2V0Qm91bmRpbmdDbC5ib3R0b20sXG4gICAgbWVudUhlaWdodCA9IF9tZW51RWwkZ2V0Qm91bmRpbmdDbC5oZWlnaHQsXG4gICAgbWVudVRvcCA9IF9tZW51RWwkZ2V0Qm91bmRpbmdDbC50b3A7XG4gIHZhciBfbWVudUVsJG9mZnNldFBhcmVudCQgPSBtZW51RWwub2Zmc2V0UGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgIGNvbnRhaW5lclRvcCA9IF9tZW51RWwkb2Zmc2V0UGFyZW50JC50b3A7XG4gIHZhciB2aWV3SGVpZ2h0ID0gaXNGaXhlZFBvc2l0aW9uID8gd2luZG93LmlubmVySGVpZ2h0IDogbm9ybWFsaXplZEhlaWdodChzY3JvbGxQYXJlbnQpO1xuICB2YXIgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsVG9wKHNjcm9sbFBhcmVudCk7XG4gIHZhciBtYXJnaW5Cb3R0b20gPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKG1lbnVFbCkubWFyZ2luQm90dG9tLCAxMCk7XG4gIHZhciBtYXJnaW5Ub3AgPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKG1lbnVFbCkubWFyZ2luVG9wLCAxMCk7XG4gIHZhciB2aWV3U3BhY2VBYm92ZSA9IGNvbnRhaW5lclRvcCAtIG1hcmdpblRvcDtcbiAgdmFyIHZpZXdTcGFjZUJlbG93ID0gdmlld0hlaWdodCAtIG1lbnVUb3A7XG4gIHZhciBzY3JvbGxTcGFjZUFib3ZlID0gdmlld1NwYWNlQWJvdmUgKyBzY3JvbGxUb3A7XG4gIHZhciBzY3JvbGxTcGFjZUJlbG93ID0gc2Nyb2xsSGVpZ2h0IC0gc2Nyb2xsVG9wIC0gbWVudVRvcDtcbiAgdmFyIHNjcm9sbERvd24gPSBtZW51Qm90dG9tIC0gdmlld0hlaWdodCArIHNjcm9sbFRvcCArIG1hcmdpbkJvdHRvbTtcbiAgdmFyIHNjcm9sbFVwID0gc2Nyb2xsVG9wICsgbWVudVRvcCAtIG1hcmdpblRvcDtcbiAgdmFyIHNjcm9sbER1cmF0aW9uID0gMTYwO1xuICBzd2l0Y2ggKHByZWZlcnJlZFBsYWNlbWVudCkge1xuICAgIGNhc2UgJ2F1dG8nOlxuICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAvLyAxOiB0aGUgbWVudSB3aWxsIGZpdCwgZG8gbm90aGluZ1xuICAgICAgaWYgKHZpZXdTcGFjZUJlbG93ID49IG1lbnVIZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgICAgIG1heEhlaWdodDogcHJlZmVycmVkTWF4SGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIDI6IHRoZSBtZW51IHdpbGwgZml0LCBpZiBzY3JvbGxlZFxuICAgICAgaWYgKHNjcm9sbFNwYWNlQmVsb3cgPj0gbWVudUhlaWdodCAmJiAhaXNGaXhlZFBvc2l0aW9uKSB7XG4gICAgICAgIGlmIChzaG91bGRTY3JvbGwpIHtcbiAgICAgICAgICBhbmltYXRlZFNjcm9sbFRvKHNjcm9sbFBhcmVudCwgc2Nyb2xsRG93biwgc2Nyb2xsRHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IHByZWZlcnJlZE1heEhlaWdodFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvLyAzOiB0aGUgbWVudSB3aWxsIGZpdCwgaWYgY29uc3RyYWluZWRcbiAgICAgIGlmICghaXNGaXhlZFBvc2l0aW9uICYmIHNjcm9sbFNwYWNlQmVsb3cgPj0gbWluSGVpZ2h0IHx8IGlzRml4ZWRQb3NpdGlvbiAmJiB2aWV3U3BhY2VCZWxvdyA+PSBtaW5IZWlnaHQpIHtcbiAgICAgICAgaWYgKHNob3VsZFNjcm9sbCkge1xuICAgICAgICAgIGFuaW1hdGVkU2Nyb2xsVG8oc2Nyb2xsUGFyZW50LCBzY3JvbGxEb3duLCBzY3JvbGxEdXJhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB3ZSB3YW50IHRvIHByb3ZpZGUgYXMgbXVjaCBvZiB0aGUgbWVudSBhcyBwb3NzaWJsZSB0byB0aGUgdXNlcixcbiAgICAgICAgLy8gc28gZ2l2ZSB0aGVtIHdoYXRldmVyIGlzIGF2YWlsYWJsZSBiZWxvdyByYXRoZXIgdGhhbiB0aGUgbWluSGVpZ2h0LlxuICAgICAgICB2YXIgY29uc3RyYWluZWRIZWlnaHQgPSBpc0ZpeGVkUG9zaXRpb24gPyB2aWV3U3BhY2VCZWxvdyAtIG1hcmdpbkJvdHRvbSA6IHNjcm9sbFNwYWNlQmVsb3cgLSBtYXJnaW5Cb3R0b207XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IGNvbnN0cmFpbmVkSGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIDQuIEZvcmtlZCBiZXZpb3VyIHdoZW4gdGhlcmUgaXNuJ3QgZW5vdWdoIHNwYWNlIGJlbG93XG5cbiAgICAgIC8vIEFVVE86IGZsaXAgdGhlIG1lbnUsIHJlbmRlciBhYm92ZVxuICAgICAgaWYgKHByZWZlcnJlZFBsYWNlbWVudCA9PT0gJ2F1dG8nIHx8IGlzRml4ZWRQb3NpdGlvbikge1xuICAgICAgICAvLyBtYXkgbmVlZCB0byBiZSBjb25zdHJhaW5lZCBhZnRlciBmbGlwcGluZ1xuICAgICAgICB2YXIgX2NvbnN0cmFpbmVkSGVpZ2h0ID0gcHJlZmVycmVkTWF4SGVpZ2h0O1xuICAgICAgICB2YXIgc3BhY2VBYm92ZSA9IGlzRml4ZWRQb3NpdGlvbiA/IHZpZXdTcGFjZUFib3ZlIDogc2Nyb2xsU3BhY2VBYm92ZTtcbiAgICAgICAgaWYgKHNwYWNlQWJvdmUgPj0gbWluSGVpZ2h0KSB7XG4gICAgICAgICAgX2NvbnN0cmFpbmVkSGVpZ2h0ID0gTWF0aC5taW4oc3BhY2VBYm92ZSAtIG1hcmdpbkJvdHRvbSAtIGNvbnRyb2xIZWlnaHQsIHByZWZlcnJlZE1heEhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgICAgIG1heEhlaWdodDogX2NvbnN0cmFpbmVkSGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIEJPVFRPTTogYWxsb3cgYnJvd3NlciB0byBpbmNyZWFzZSBzY3JvbGxhYmxlIGFyZWEgYW5kIGltbWVkaWF0ZWx5IHNldCBzY3JvbGxcbiAgICAgIGlmIChwcmVmZXJyZWRQbGFjZW1lbnQgPT09ICdib3R0b20nKSB7XG4gICAgICAgIGlmIChzaG91bGRTY3JvbGwpIHtcbiAgICAgICAgICBzY3JvbGxUbyhzY3JvbGxQYXJlbnQsIHNjcm9sbERvd24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IHByZWZlcnJlZE1heEhlaWdodFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndG9wJzpcbiAgICAgIC8vIDE6IHRoZSBtZW51IHdpbGwgZml0LCBkbyBub3RoaW5nXG4gICAgICBpZiAodmlld1NwYWNlQWJvdmUgPj0gbWVudUhlaWdodCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBwcmVmZXJyZWRNYXhIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gMjogdGhlIG1lbnUgd2lsbCBmaXQsIGlmIHNjcm9sbGVkXG4gICAgICBpZiAoc2Nyb2xsU3BhY2VBYm92ZSA+PSBtZW51SGVpZ2h0ICYmICFpc0ZpeGVkUG9zaXRpb24pIHtcbiAgICAgICAgaWYgKHNob3VsZFNjcm9sbCkge1xuICAgICAgICAgIGFuaW1hdGVkU2Nyb2xsVG8oc2Nyb2xsUGFyZW50LCBzY3JvbGxVcCwgc2Nyb2xsRHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IHByZWZlcnJlZE1heEhlaWdodFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvLyAzOiB0aGUgbWVudSB3aWxsIGZpdCwgaWYgY29uc3RyYWluZWRcbiAgICAgIGlmICghaXNGaXhlZFBvc2l0aW9uICYmIHNjcm9sbFNwYWNlQWJvdmUgPj0gbWluSGVpZ2h0IHx8IGlzRml4ZWRQb3NpdGlvbiAmJiB2aWV3U3BhY2VBYm92ZSA+PSBtaW5IZWlnaHQpIHtcbiAgICAgICAgdmFyIF9jb25zdHJhaW5lZEhlaWdodDIgPSBwcmVmZXJyZWRNYXhIZWlnaHQ7XG5cbiAgICAgICAgLy8gd2Ugd2FudCB0byBwcm92aWRlIGFzIG11Y2ggb2YgdGhlIG1lbnUgYXMgcG9zc2libGUgdG8gdGhlIHVzZXIsXG4gICAgICAgIC8vIHNvIGdpdmUgdGhlbSB3aGF0ZXZlciBpcyBhdmFpbGFibGUgYmVsb3cgcmF0aGVyIHRoYW4gdGhlIG1pbkhlaWdodC5cbiAgICAgICAgaWYgKCFpc0ZpeGVkUG9zaXRpb24gJiYgc2Nyb2xsU3BhY2VBYm92ZSA+PSBtaW5IZWlnaHQgfHwgaXNGaXhlZFBvc2l0aW9uICYmIHZpZXdTcGFjZUFib3ZlID49IG1pbkhlaWdodCkge1xuICAgICAgICAgIF9jb25zdHJhaW5lZEhlaWdodDIgPSBpc0ZpeGVkUG9zaXRpb24gPyB2aWV3U3BhY2VBYm92ZSAtIG1hcmdpblRvcCA6IHNjcm9sbFNwYWNlQWJvdmUgLSBtYXJnaW5Ub3A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3VsZFNjcm9sbCkge1xuICAgICAgICAgIGFuaW1hdGVkU2Nyb2xsVG8oc2Nyb2xsUGFyZW50LCBzY3JvbGxVcCwgc2Nyb2xsRHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IF9jb25zdHJhaW5lZEhlaWdodDJcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gNC4gbm90IGVub3VnaCBzcGFjZSwgdGhlIGJyb3dzZXIgV0lMTCBOT1QgaW5jcmVhc2Ugc2Nyb2xsYWJsZSBhcmVhIHdoZW5cbiAgICAgIC8vIGFic29sdXRlbHkgcG9zaXRpb25lZCBlbGVtZW50IHJlbmRlcmVkIGFib3ZlIHRoZSB2aWV3cG9ydCAob25seSBiZWxvdykuXG4gICAgICAvLyBGbGlwIHRoZSBtZW51LCByZW5kZXIgYmVsb3dcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICAgIG1heEhlaWdodDogcHJlZmVycmVkTWF4SGVpZ2h0XG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBsYWNlbWVudCBwcm92aWRlZCBcXFwiXCIuY29uY2F0KHByZWZlcnJlZFBsYWNlbWVudCwgXCJcXFwiLlwiKSk7XG4gIH1cbiAgcmV0dXJuIGRlZmF1bHRTdGF0ZTtcbn1cblxuLy8gTWVudSBDb21wb25lbnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBhbGlnblRvQ29udHJvbChwbGFjZW1lbnQpIHtcbiAgdmFyIHBsYWNlbWVudFRvQ1NTUHJvcCA9IHtcbiAgICBib3R0b206ICd0b3AnLFxuICAgIHRvcDogJ2JvdHRvbSdcbiAgfTtcbiAgcmV0dXJuIHBsYWNlbWVudCA/IHBsYWNlbWVudFRvQ1NTUHJvcFtwbGFjZW1lbnRdIDogJ2JvdHRvbSc7XG59XG52YXIgY29lcmNlUGxhY2VtZW50ID0gZnVuY3Rpb24gY29lcmNlUGxhY2VtZW50KHApIHtcbiAgcmV0dXJuIHAgPT09ICdhdXRvJyA/ICdib3R0b20nIDogcDtcbn07XG52YXIgbWVudUNTUyA9IGZ1bmN0aW9uIG1lbnVDU1MoX3JlZjIsIHVuc3R5bGVkKSB7XG4gIHZhciBfb2JqZWN0U3ByZWFkMjtcbiAgdmFyIHBsYWNlbWVudCA9IF9yZWYyLnBsYWNlbWVudCxcbiAgICBfcmVmMiR0aGVtZSA9IF9yZWYyLnRoZW1lLFxuICAgIGJvcmRlclJhZGl1cyA9IF9yZWYyJHRoZW1lLmJvcmRlclJhZGl1cyxcbiAgICBzcGFjaW5nID0gX3JlZjIkdGhlbWUuc3BhY2luZyxcbiAgICBjb2xvcnMgPSBfcmVmMiR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKChfb2JqZWN0U3ByZWFkMiA9IHtcbiAgICBsYWJlbDogJ21lbnUnXG4gIH0sIF9kZWZpbmVQcm9wZXJ0eShfb2JqZWN0U3ByZWFkMiwgYWxpZ25Ub0NvbnRyb2wocGxhY2VtZW50KSwgJzEwMCUnKSwgX2RlZmluZVByb3BlcnR5KF9vYmplY3RTcHJlYWQyLCBcInBvc2l0aW9uXCIsICdhYnNvbHV0ZScpLCBfZGVmaW5lUHJvcGVydHkoX29iamVjdFNwcmVhZDIsIFwid2lkdGhcIiwgJzEwMCUnKSwgX2RlZmluZVByb3BlcnR5KF9vYmplY3RTcHJlYWQyLCBcInpJbmRleFwiLCAxKSwgX29iamVjdFNwcmVhZDIpLCB1bnN0eWxlZCA/IHt9IDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLm5ldXRyYWwwLFxuICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgIGJveFNoYWRvdzogJzAgMCAwIDFweCBoc2xhKDAsIDAlLCAwJSwgMC4xKSwgMCA0cHggMTFweCBoc2xhKDAsIDAlLCAwJSwgMC4xKScsXG4gICAgbWFyZ2luQm90dG9tOiBzcGFjaW5nLm1lbnVHdXR0ZXIsXG4gICAgbWFyZ2luVG9wOiBzcGFjaW5nLm1lbnVHdXR0ZXJcbiAgfSk7XG59O1xudmFyIFBvcnRhbFBsYWNlbWVudENvbnRleHQgPSAvKiNfX1BVUkVfXyovY3JlYXRlQ29udGV4dChudWxsKTtcblxuLy8gTk9URTogaW50ZXJuYWwgb25seVxudmFyIE1lbnVQbGFjZXIgPSBmdW5jdGlvbiBNZW51UGxhY2VyKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgIG1pbk1lbnVIZWlnaHQgPSBwcm9wcy5taW5NZW51SGVpZ2h0LFxuICAgIG1heE1lbnVIZWlnaHQgPSBwcm9wcy5tYXhNZW51SGVpZ2h0LFxuICAgIG1lbnVQbGFjZW1lbnQgPSBwcm9wcy5tZW51UGxhY2VtZW50LFxuICAgIG1lbnVQb3NpdGlvbiA9IHByb3BzLm1lbnVQb3NpdGlvbixcbiAgICBtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcgPSBwcm9wcy5tZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcsXG4gICAgdGhlbWUgPSBwcm9wcy50aGVtZTtcbiAgdmFyIF9yZWYzID0gdXNlQ29udGV4dChQb3J0YWxQbGFjZW1lbnRDb250ZXh0KSB8fCB7fSxcbiAgICBzZXRQb3J0YWxQbGFjZW1lbnQgPSBfcmVmMy5zZXRQb3J0YWxQbGFjZW1lbnQ7XG4gIHZhciByZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShtYXhNZW51SGVpZ2h0KSxcbiAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICBtYXhIZWlnaHQgPSBfdXNlU3RhdGUyWzBdLFxuICAgIHNldE1heEhlaWdodCA9IF91c2VTdGF0ZTJbMV07XG4gIHZhciBfdXNlU3RhdGUzID0gdXNlU3RhdGUobnVsbCksXG4gICAgX3VzZVN0YXRlNCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTMsIDIpLFxuICAgIHBsYWNlbWVudCA9IF91c2VTdGF0ZTRbMF0sXG4gICAgc2V0UGxhY2VtZW50ID0gX3VzZVN0YXRlNFsxXTtcbiAgdmFyIGNvbnRyb2xIZWlnaHQgPSB0aGVtZS5zcGFjaW5nLmNvbnRyb2xIZWlnaHQ7XG4gIHVzZUxheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1lbnVFbCA9IHJlZi5jdXJyZW50O1xuICAgIGlmICghbWVudUVsKSByZXR1cm47XG5cbiAgICAvLyBETyBOT1Qgc2Nyb2xsIGlmIHBvc2l0aW9uIGlzIGZpeGVkXG4gICAgdmFyIGlzRml4ZWRQb3NpdGlvbiA9IG1lbnVQb3NpdGlvbiA9PT0gJ2ZpeGVkJztcbiAgICB2YXIgc2hvdWxkU2Nyb2xsID0gbWVudVNob3VsZFNjcm9sbEludG9WaWV3ICYmICFpc0ZpeGVkUG9zaXRpb247XG4gICAgdmFyIHN0YXRlID0gZ2V0TWVudVBsYWNlbWVudCh7XG4gICAgICBtYXhIZWlnaHQ6IG1heE1lbnVIZWlnaHQsXG4gICAgICBtZW51RWw6IG1lbnVFbCxcbiAgICAgIG1pbkhlaWdodDogbWluTWVudUhlaWdodCxcbiAgICAgIHBsYWNlbWVudDogbWVudVBsYWNlbWVudCxcbiAgICAgIHNob3VsZFNjcm9sbDogc2hvdWxkU2Nyb2xsLFxuICAgICAgaXNGaXhlZFBvc2l0aW9uOiBpc0ZpeGVkUG9zaXRpb24sXG4gICAgICBjb250cm9sSGVpZ2h0OiBjb250cm9sSGVpZ2h0XG4gICAgfSk7XG4gICAgc2V0TWF4SGVpZ2h0KHN0YXRlLm1heEhlaWdodCk7XG4gICAgc2V0UGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gICAgc2V0UG9ydGFsUGxhY2VtZW50ID09PSBudWxsIHx8IHNldFBvcnRhbFBsYWNlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2V0UG9ydGFsUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gIH0sIFttYXhNZW51SGVpZ2h0LCBtZW51UGxhY2VtZW50LCBtZW51UG9zaXRpb24sIG1lbnVTaG91bGRTY3JvbGxJbnRvVmlldywgbWluTWVudUhlaWdodCwgc2V0UG9ydGFsUGxhY2VtZW50LCBjb250cm9sSGVpZ2h0XSk7XG4gIHJldHVybiBjaGlsZHJlbih7XG4gICAgcmVmOiByZWYsXG4gICAgcGxhY2VyUHJvcHM6IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcHJvcHMpLCB7fSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQgfHwgY29lcmNlUGxhY2VtZW50KG1lbnVQbGFjZW1lbnQpLFxuICAgICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHRcbiAgICB9KVxuICB9KTtcbn07XG52YXIgTWVudSA9IGZ1bmN0aW9uIE1lbnUocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ21lbnUnLCB7XG4gICAgbWVudTogdHJ1ZVxuICB9KSwge1xuICAgIHJlZjogaW5uZXJSZWZcbiAgfSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuKTtcbn07XG52YXIgTWVudSQxID0gTWVudTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNZW51IExpc3Rcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgbWVudUxpc3RDU1MgPSBmdW5jdGlvbiBtZW51TGlzdENTUyhfcmVmNCwgdW5zdHlsZWQpIHtcbiAgdmFyIG1heEhlaWdodCA9IF9yZWY0Lm1heEhlaWdodCxcbiAgICBiYXNlVW5pdCA9IF9yZWY0LnRoZW1lLnNwYWNpbmcuYmFzZVVuaXQ7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKHtcbiAgICBtYXhIZWlnaHQ6IG1heEhlaWdodCxcbiAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAvLyByZXF1aXJlZCBmb3Igb2Zmc2V0W0hlaWdodCwgVG9wXSA+IGtleWJvYXJkIHNjcm9sbFxuICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiAndG91Y2gnXG4gIH0sIHVuc3R5bGVkID8ge30gOiB7XG4gICAgcGFkZGluZ0JvdHRvbTogYmFzZVVuaXQsXG4gICAgcGFkZGluZ1RvcDogYmFzZVVuaXRcbiAgfSk7XG59O1xudmFyIE1lbnVMaXN0ID0gZnVuY3Rpb24gTWVudUxpc3QocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICBpc011bHRpID0gcHJvcHMuaXNNdWx0aTtcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ21lbnVMaXN0Jywge1xuICAgICdtZW51LWxpc3QnOiB0cnVlLFxuICAgICdtZW51LWxpc3QtLWlzLW11bHRpJzogaXNNdWx0aVxuICB9KSwge1xuICAgIHJlZjogaW5uZXJSZWZcbiAgfSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTWVudSBOb3RpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIG5vdGljZUNTUyA9IGZ1bmN0aW9uIG5vdGljZUNTUyhfcmVmNSwgdW5zdHlsZWQpIHtcbiAgdmFyIF9yZWY1JHRoZW1lID0gX3JlZjUudGhlbWUsXG4gICAgYmFzZVVuaXQgPSBfcmVmNSR0aGVtZS5zcGFjaW5nLmJhc2VVbml0LFxuICAgIGNvbG9ycyA9IF9yZWY1JHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe1xuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgfSwgdW5zdHlsZWQgPyB7fSA6IHtcbiAgICBjb2xvcjogY29sb3JzLm5ldXRyYWw0MCxcbiAgICBwYWRkaW5nOiBcIlwiLmNvbmNhdChiYXNlVW5pdCAqIDIsIFwicHggXCIpLmNvbmNhdChiYXNlVW5pdCAqIDMsIFwicHhcIilcbiAgfSk7XG59O1xudmFyIG5vT3B0aW9uc01lc3NhZ2VDU1MgPSBub3RpY2VDU1M7XG52YXIgbG9hZGluZ01lc3NhZ2VDU1MgPSBub3RpY2VDU1M7XG52YXIgTm9PcHRpb25zTWVzc2FnZSA9IGZ1bmN0aW9uIE5vT3B0aW9uc01lc3NhZ2UoX3JlZjYpIHtcbiAgdmFyIF9yZWY2JGNoaWxkcmVuID0gX3JlZjYuY2hpbGRyZW4sXG4gICAgY2hpbGRyZW4gPSBfcmVmNiRjaGlsZHJlbiA9PT0gdm9pZCAwID8gJ05vIG9wdGlvbnMnIDogX3JlZjYkY2hpbGRyZW4sXG4gICAgaW5uZXJQcm9wcyA9IF9yZWY2LmlubmVyUHJvcHMsXG4gICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWY2LCBfZXhjbHVkZWQkMyk7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe30sIGdldFN0eWxlUHJvcHMoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCByZXN0UHJvcHMpLCB7fSwge1xuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBpbm5lclByb3BzOiBpbm5lclByb3BzXG4gIH0pLCAnbm9PcHRpb25zTWVzc2FnZScsIHtcbiAgICAnbWVudS1ub3RpY2UnOiB0cnVlLFxuICAgICdtZW51LW5vdGljZS0tbm8tb3B0aW9ucyc6IHRydWVcbiAgfSksIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xudmFyIExvYWRpbmdNZXNzYWdlID0gZnVuY3Rpb24gTG9hZGluZ01lc3NhZ2UoX3JlZjcpIHtcbiAgdmFyIF9yZWY3JGNoaWxkcmVuID0gX3JlZjcuY2hpbGRyZW4sXG4gICAgY2hpbGRyZW4gPSBfcmVmNyRjaGlsZHJlbiA9PT0gdm9pZCAwID8gJ0xvYWRpbmcuLi4nIDogX3JlZjckY2hpbGRyZW4sXG4gICAgaW5uZXJQcm9wcyA9IF9yZWY3LmlubmVyUHJvcHMsXG4gICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWY3LCBfZXhjbHVkZWQyJDEpO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBnZXRTdHlsZVByb3BzKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcmVzdFByb3BzKSwge30sIHtcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgaW5uZXJQcm9wczogaW5uZXJQcm9wc1xuICB9KSwgJ2xvYWRpbmdNZXNzYWdlJywge1xuICAgICdtZW51LW5vdGljZSc6IHRydWUsXG4gICAgJ21lbnUtbm90aWNlLS1sb2FkaW5nJzogdHJ1ZVxuICB9KSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTWVudSBQb3J0YWxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgbWVudVBvcnRhbENTUyA9IGZ1bmN0aW9uIG1lbnVQb3J0YWxDU1MoX3JlZjgpIHtcbiAgdmFyIHJlY3QgPSBfcmVmOC5yZWN0LFxuICAgIG9mZnNldCA9IF9yZWY4Lm9mZnNldCxcbiAgICBwb3NpdGlvbiA9IF9yZWY4LnBvc2l0aW9uO1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgdG9wOiBvZmZzZXQsXG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgekluZGV4OiAxXG4gIH07XG59O1xudmFyIE1lbnVQb3J0YWwgPSBmdW5jdGlvbiBNZW51UG9ydGFsKHByb3BzKSB7XG4gIHZhciBhcHBlbmRUbyA9IHByb3BzLmFwcGVuZFRvLFxuICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgY29udHJvbEVsZW1lbnQgPSBwcm9wcy5jb250cm9sRWxlbWVudCxcbiAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcyxcbiAgICBtZW51UGxhY2VtZW50ID0gcHJvcHMubWVudVBsYWNlbWVudCxcbiAgICBtZW51UG9zaXRpb24gPSBwcm9wcy5tZW51UG9zaXRpb247XG4gIHZhciBtZW51UG9ydGFsUmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgY2xlYW51cFJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIF91c2VTdGF0ZTUgPSB1c2VTdGF0ZShjb2VyY2VQbGFjZW1lbnQobWVudVBsYWNlbWVudCkpLFxuICAgIF91c2VTdGF0ZTYgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGU1LCAyKSxcbiAgICBwbGFjZW1lbnQgPSBfdXNlU3RhdGU2WzBdLFxuICAgIHNldFBvcnRhbFBsYWNlbWVudCA9IF91c2VTdGF0ZTZbMV07XG4gIHZhciBwb3J0YWxQbGFjZW1lbnRDb250ZXh0ID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNldFBvcnRhbFBsYWNlbWVudDogc2V0UG9ydGFsUGxhY2VtZW50XG4gICAgfTtcbiAgfSwgW10pO1xuICB2YXIgX3VzZVN0YXRlNyA9IHVzZVN0YXRlKG51bGwpLFxuICAgIF91c2VTdGF0ZTggPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGU3LCAyKSxcbiAgICBjb21wdXRlZFBvc2l0aW9uID0gX3VzZVN0YXRlOFswXSxcbiAgICBzZXRDb21wdXRlZFBvc2l0aW9uID0gX3VzZVN0YXRlOFsxXTtcbiAgdmFyIHVwZGF0ZUNvbXB1dGVkUG9zaXRpb24gPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFjb250cm9sRWxlbWVudCkgcmV0dXJuO1xuICAgIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRPYmooY29udHJvbEVsZW1lbnQpO1xuICAgIHZhciBzY3JvbGxEaXN0YW5jZSA9IG1lbnVQb3NpdGlvbiA9PT0gJ2ZpeGVkJyA/IDAgOiB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgdmFyIG9mZnNldCA9IHJlY3RbcGxhY2VtZW50XSArIHNjcm9sbERpc3RhbmNlO1xuICAgIGlmIChvZmZzZXQgIT09IChjb21wdXRlZFBvc2l0aW9uID09PSBudWxsIHx8IGNvbXB1dGVkUG9zaXRpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbXB1dGVkUG9zaXRpb24ub2Zmc2V0KSB8fCByZWN0LmxlZnQgIT09IChjb21wdXRlZFBvc2l0aW9uID09PSBudWxsIHx8IGNvbXB1dGVkUG9zaXRpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbXB1dGVkUG9zaXRpb24ucmVjdC5sZWZ0KSB8fCByZWN0LndpZHRoICE9PSAoY29tcHV0ZWRQb3NpdGlvbiA9PT0gbnVsbCB8fCBjb21wdXRlZFBvc2l0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb21wdXRlZFBvc2l0aW9uLnJlY3Qud2lkdGgpKSB7XG4gICAgICBzZXRDb21wdXRlZFBvc2l0aW9uKHtcbiAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgIHJlY3Q6IHJlY3RcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2NvbnRyb2xFbGVtZW50LCBtZW51UG9zaXRpb24sIHBsYWNlbWVudCwgY29tcHV0ZWRQb3NpdGlvbiA9PT0gbnVsbCB8fCBjb21wdXRlZFBvc2l0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb21wdXRlZFBvc2l0aW9uLm9mZnNldCwgY29tcHV0ZWRQb3NpdGlvbiA9PT0gbnVsbCB8fCBjb21wdXRlZFBvc2l0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb21wdXRlZFBvc2l0aW9uLnJlY3QubGVmdCwgY29tcHV0ZWRQb3NpdGlvbiA9PT0gbnVsbCB8fCBjb21wdXRlZFBvc2l0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb21wdXRlZFBvc2l0aW9uLnJlY3Qud2lkdGhdKTtcbiAgdXNlTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB1cGRhdGVDb21wdXRlZFBvc2l0aW9uKCk7XG4gIH0sIFt1cGRhdGVDb21wdXRlZFBvc2l0aW9uXSk7XG4gIHZhciBydW5BdXRvVXBkYXRlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGlmICh0eXBlb2YgY2xlYW51cFJlZi5jdXJyZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjbGVhbnVwUmVmLmN1cnJlbnQoKTtcbiAgICAgIGNsZWFudXBSZWYuY3VycmVudCA9IG51bGw7XG4gICAgfVxuICAgIGlmIChjb250cm9sRWxlbWVudCAmJiBtZW51UG9ydGFsUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNsZWFudXBSZWYuY3VycmVudCA9IGF1dG9VcGRhdGUoY29udHJvbEVsZW1lbnQsIG1lbnVQb3J0YWxSZWYuY3VycmVudCwgdXBkYXRlQ29tcHV0ZWRQb3NpdGlvbiwge1xuICAgICAgICBlbGVtZW50UmVzaXplOiAnUmVzaXplT2JzZXJ2ZXInIGluIHdpbmRvd1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbY29udHJvbEVsZW1lbnQsIHVwZGF0ZUNvbXB1dGVkUG9zaXRpb25dKTtcbiAgdXNlTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBydW5BdXRvVXBkYXRlKCk7XG4gIH0sIFtydW5BdXRvVXBkYXRlXSk7XG4gIHZhciBzZXRNZW51UG9ydGFsRWxlbWVudCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChtZW51UG9ydGFsRWxlbWVudCkge1xuICAgIG1lbnVQb3J0YWxSZWYuY3VycmVudCA9IG1lbnVQb3J0YWxFbGVtZW50O1xuICAgIHJ1bkF1dG9VcGRhdGUoKTtcbiAgfSwgW3J1bkF1dG9VcGRhdGVdKTtcblxuICAvLyBiYWlsIGVhcmx5IGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZW4ndCBwcmVzZW50XG4gIGlmICghYXBwZW5kVG8gJiYgbWVudVBvc2l0aW9uICE9PSAnZml4ZWQnIHx8ICFjb21wdXRlZFBvc2l0aW9uKSByZXR1cm4gbnVsbDtcblxuICAvLyBzYW1lIHdyYXBwZXIgZWxlbWVudCB3aGV0aGVyIGZpeGVkIG9yIHBvcnRhbGxlZFxuICB2YXIgbWVudVdyYXBwZXIgPSBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIHJlZjogc2V0TWVudVBvcnRhbEVsZW1lbnRcbiAgfSwgZ2V0U3R5bGVQcm9wcyhfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHByb3BzKSwge30sIHtcbiAgICBvZmZzZXQ6IGNvbXB1dGVkUG9zaXRpb24ub2Zmc2V0LFxuICAgIHBvc2l0aW9uOiBtZW51UG9zaXRpb24sXG4gICAgcmVjdDogY29tcHV0ZWRQb3NpdGlvbi5yZWN0XG4gIH0pLCAnbWVudVBvcnRhbCcsIHtcbiAgICAnbWVudS1wb3J0YWwnOiB0cnVlXG4gIH0pLCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xuICByZXR1cm4ganN4KFBvcnRhbFBsYWNlbWVudENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogcG9ydGFsUGxhY2VtZW50Q29udGV4dFxuICB9LCBhcHBlbmRUbyA/IC8qI19fUFVSRV9fKi9jcmVhdGVQb3J0YWwobWVudVdyYXBwZXIsIGFwcGVuZFRvKSA6IG1lbnVXcmFwcGVyKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUm9vdCBDb250YWluZXJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgY29udGFpbmVyQ1NTID0gZnVuY3Rpb24gY29udGFpbmVyQ1NTKF9yZWYpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfcmVmLmlzRGlzYWJsZWQsXG4gICAgaXNSdGwgPSBfcmVmLmlzUnRsO1xuICByZXR1cm4ge1xuICAgIGxhYmVsOiAnY29udGFpbmVyJyxcbiAgICBkaXJlY3Rpb246IGlzUnRsID8gJ3J0bCcgOiB1bmRlZmluZWQsXG4gICAgcG9pbnRlckV2ZW50czogaXNEaXNhYmxlZCA/ICdub25lJyA6IHVuZGVmaW5lZCxcbiAgICAvLyBjYW5jZWwgbW91c2UgZXZlbnRzIHdoZW4gZGlzYWJsZWRcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9O1xufTtcbnZhciBTZWxlY3RDb250YWluZXIgPSBmdW5jdGlvbiBTZWxlY3RDb250YWluZXIocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgaXNEaXNhYmxlZCA9IHByb3BzLmlzRGlzYWJsZWQsXG4gICAgaXNSdGwgPSBwcm9wcy5pc1J0bDtcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2NvbnRhaW5lcicsIHtcbiAgICAnLS1pcy1kaXNhYmxlZCc6IGlzRGlzYWJsZWQsXG4gICAgJy0taXMtcnRsJzogaXNSdGxcbiAgfSksIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFZhbHVlIENvbnRhaW5lclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciB2YWx1ZUNvbnRhaW5lckNTUyA9IGZ1bmN0aW9uIHZhbHVlQ29udGFpbmVyQ1NTKF9yZWYyLCB1bnN0eWxlZCkge1xuICB2YXIgc3BhY2luZyA9IF9yZWYyLnRoZW1lLnNwYWNpbmcsXG4gICAgaXNNdWx0aSA9IF9yZWYyLmlzTXVsdGksXG4gICAgaGFzVmFsdWUgPSBfcmVmMi5oYXNWYWx1ZSxcbiAgICBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWUgPSBfcmVmMi5zZWxlY3RQcm9wcy5jb250cm9sU2hvdWxkUmVuZGVyVmFsdWU7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKHtcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBkaXNwbGF5OiBpc011bHRpICYmIGhhc1ZhbHVlICYmIGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZSA/ICdmbGV4JyA6ICdncmlkJyxcbiAgICBmbGV4OiAxLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6ICd0b3VjaCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gIH0sIHVuc3R5bGVkID8ge30gOiB7XG4gICAgcGFkZGluZzogXCJcIi5jb25jYXQoc3BhY2luZy5iYXNlVW5pdCAvIDIsIFwicHggXCIpLmNvbmNhdChzcGFjaW5nLmJhc2VVbml0ICogMiwgXCJweFwiKVxuICB9KTtcbn07XG52YXIgVmFsdWVDb250YWluZXIgPSBmdW5jdGlvbiBWYWx1ZUNvbnRhaW5lcihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcyxcbiAgICBpc011bHRpID0gcHJvcHMuaXNNdWx0aSxcbiAgICBoYXNWYWx1ZSA9IHByb3BzLmhhc1ZhbHVlO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBnZXRTdHlsZVByb3BzKHByb3BzLCAndmFsdWVDb250YWluZXInLCB7XG4gICAgJ3ZhbHVlLWNvbnRhaW5lcic6IHRydWUsXG4gICAgJ3ZhbHVlLWNvbnRhaW5lci0taXMtbXVsdGknOiBpc011bHRpLFxuICAgICd2YWx1ZS1jb250YWluZXItLWhhcy12YWx1ZSc6IGhhc1ZhbHVlXG4gIH0pLCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBJbmRpY2F0b3IgQ29udGFpbmVyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGluZGljYXRvcnNDb250YWluZXJDU1MgPSBmdW5jdGlvbiBpbmRpY2F0b3JzQ29udGFpbmVyQ1NTKCkge1xuICByZXR1cm4ge1xuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4U2hyaW5rOiAwXG4gIH07XG59O1xudmFyIEluZGljYXRvcnNDb250YWluZXIgPSBmdW5jdGlvbiBJbmRpY2F0b3JzQ29udGFpbmVyKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBnZXRTdHlsZVByb3BzKHByb3BzLCAnaW5kaWNhdG9yc0NvbnRhaW5lcicsIHtcbiAgICBpbmRpY2F0b3JzOiB0cnVlXG4gIH0pLCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcblxudmFyIF90ZW1wbGF0ZU9iamVjdDtcbnZhciBfZXhjbHVkZWQkMiA9IFtcInNpemVcIl0sXG4gIF9leGNsdWRlZDIgPSBbXCJpbm5lclByb3BzXCIsIFwiaXNSdGxcIiwgXCJzaXplXCJdO1xuZnVuY3Rpb24gX0VNT1RJT05fU1RSSU5HSUZJRURfQ1NTX0VSUk9SX18oKSB7IHJldHVybiBcIllvdSBoYXZlIHRyaWVkIHRvIHN0cmluZ2lmeSBvYmplY3QgcmV0dXJuZWQgZnJvbSBgY3NzYCBmdW5jdGlvbi4gSXQgaXNuJ3Qgc3VwcG9zZWQgdG8gYmUgdXNlZCBkaXJlY3RseSAoZS5nLiBhcyB2YWx1ZSBvZiB0aGUgYGNsYXNzTmFtZWAgcHJvcCksIGJ1dCByYXRoZXIgaGFuZGVkIHRvIGVtb3Rpb24gc28gaXQgY2FuIGhhbmRsZSBpdCAoZS5nLiBhcyB2YWx1ZSBvZiBgY3NzYCBwcm9wKS5cIjsgfVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxudmFyIF9yZWYyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8ge1xuICBuYW1lOiBcIjhtbWtjZ1wiLFxuICBzdHlsZXM6IFwiZGlzcGxheTppbmxpbmUtYmxvY2s7ZmlsbDpjdXJyZW50Q29sb3I7bGluZS1oZWlnaHQ6MTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDowXCJcbn0gOiB7XG4gIG5hbWU6IFwidGo1YmRlLVN2Z1wiLFxuICBzdHlsZXM6IFwiZGlzcGxheTppbmxpbmUtYmxvY2s7ZmlsbDpjdXJyZW50Q29sb3I7bGluZS1oZWlnaHQ6MTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDowO2xhYmVsOlN2ZztcIixcbiAgbWFwOiBcIi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltbHVaR2xqWVhSdmNuTXVkSE40SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVhsQ1NTSXNJbVpwYkdVaU9pSnBibVJwWTJGMGIzSnpMblJ6ZUNJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFLaUJBYW5ONElHcHplQ0FxTDF4dWFXMXdiM0owSUhzZ1VtVmhZM1JPYjJSbElIMGdabkp2YlNBbmNtVmhZM1FuTzF4dWFXMXdiM0owSUhzZ2FuTjRMQ0JyWlhsbWNtRnRaWE1nZlNCbWNtOXRJQ2RBWlcxdmRHbHZiaTl5WldGamRDYzdYRzVjYm1sdGNHOXlkQ0I3WEc0Z0lFTnZiVzF2YmxCeWIzQnpRVzVrUTJ4aGMzTk9ZVzFsTEZ4dUlDQkRVMU5QWW1wbFkzUlhhWFJvVEdGaVpXd3NYRzRnSUVkeWIzVndRbUZ6WlN4Y2JuMGdabkp2YlNBbkxpNHZkSGx3WlhNbk8xeHVhVzF3YjNKMElIc2daMlYwVTNSNWJHVlFjbTl3Y3lCOUlHWnliMjBnSnk0dUwzVjBhV3h6Snp0Y2JseHVMeThnUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhHNHZMeUJFY205d1pHOTNiaUFtSUVOc1pXRnlJRWxqYjI1elhHNHZMeUE5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2JseHVZMjl1YzNRZ1UzWm5JRDBnS0h0Y2JpQWdjMmw2WlN4Y2JpQWdMaTR1Y0hKdmNITmNibjA2SUVwVFdDNUpiblJ5YVc1emFXTkZiR1Z0Wlc1MGMxc25jM1puSjEwZ0ppQjdJSE5wZW1VNklHNTFiV0psY2lCOUtTQTlQaUFvWEc0Z0lEeHpkbWRjYmlBZ0lDQm9aV2xuYUhROWUzTnBlbVY5WEc0Z0lDQWdkMmxrZEdnOWUzTnBlbVY5WEc0Z0lDQWdkbWxsZDBKdmVEMWNJakFnTUNBeU1DQXlNRndpWEc0Z0lDQWdZWEpwWVMxb2FXUmtaVzQ5WENKMGNuVmxYQ0pjYmlBZ0lDQm1iMk4xYzJGaWJHVTlYQ0ptWVd4elpWd2lYRzRnSUNBZ1kzTnpQWHQ3WEc0Z0lDQWdJQ0JrYVhOd2JHRjVPaUFuYVc1c2FXNWxMV0pzYjJOckp5eGNiaUFnSUNBZ0lHWnBiR3c2SUNkamRYSnlaVzUwUTI5c2IzSW5MRnh1SUNBZ0lDQWdiR2x1WlVobGFXZG9kRG9nTVN4Y2JpQWdJQ0FnSUhOMGNtOXJaVG9nSjJOMWNuSmxiblJEYjJ4dmNpY3NYRzRnSUNBZ0lDQnpkSEp2YTJWWGFXUjBhRG9nTUN4Y2JpQWdJQ0I5ZlZ4dUlDQWdJSHN1TGk1d2NtOXdjMzFjYmlBZ0x6NWNiaWs3WEc1Y2JtVjRjRzl5ZENCMGVYQmxJRU55YjNOelNXTnZibEJ5YjNCeklEMGdTbE5ZTGtsdWRISnBibk5wWTBWc1pXMWxiblJ6V3lkemRtY25YU0FtSUhzZ2MybDZaVDg2SUc1MWJXSmxjaUI5TzF4dVpYaHdiM0owSUdOdmJuTjBJRU55YjNOelNXTnZiaUE5SUNod2NtOXdjem9nUTNKdmMzTkpZMjl1VUhKdmNITXBJRDArSUNoY2JpQWdQRk4yWnlCemFYcGxQWHN5TUgwZ2V5NHVMbkJ5YjNCemZUNWNiaUFnSUNBOGNHRjBhQ0JrUFZ3aVRURTBMak0wT0NBeE5DNDRORGxqTFRBdU5EWTVJREF1TkRZNUxURXVNakk1SURBdU5EWTVMVEV1TmprM0lEQnNMVEl1TmpVeExUTXVNRE13TFRJdU5qVXhJRE11TURJNVl5MHdMalEyT1NBd0xqUTJPUzB4TGpJeU9TQXdMalEyT1MweExqWTVOeUF3TFRBdU5EWTVMVEF1TkRZNUxUQXVORFk1TFRFdU1qSTVJREF0TVM0Mk9UZHNNaTQzTlRndE15NHhOUzB5TGpjMU9TMHpMakUxTW1NdE1DNDBOamt0TUM0ME5qa3RNQzQwTmprdE1TNHlNamdnTUMweExqWTVOM014TGpJeU9DMHdMalEyT1NBeExqWTVOeUF3YkRJdU5qVXlJRE11TURNeElESXVOalV4TFRNdU1ETXhZekF1TkRZNUxUQXVORFk1SURFdU1qSTRMVEF1TkRZNUlERXVOamszSURCek1DNDBOamtnTVM0eU1qa2dNQ0F4TGpZNU4yd3RNaTQzTlRnZ015NHhOVElnTWk0M05UZ2dNeTR4TldNd0xqUTJPU0F3TGpRMk9TQXdMalEyT1NBeExqSXlPU0F3SURFdU5qazRlbHdpSUM4K1hHNGdJRHd2VTNablBseHVLVHRjYm1WNGNHOXlkQ0IwZVhCbElFUnZkMjVEYUdWMmNtOXVVSEp2Y0hNZ1BTQktVMWd1U1c1MGNtbHVjMmxqUld4bGJXVnVkSE5iSjNOMlp5ZGRJQ1lnZXlCemFYcGxQem9nYm5WdFltVnlJSDA3WEc1bGVIQnZjblFnWTI5dWMzUWdSRzkzYmtOb1pYWnliMjRnUFNBb2NISnZjSE02SUVSdmQyNURhR1YyY205dVVISnZjSE1wSUQwK0lDaGNiaUFnUEZOMlp5QnphWHBsUFhzeU1IMGdleTR1TG5CeWIzQnpmVDVjYmlBZ0lDQThjR0YwYUNCa1BWd2lUVFF1TlRFMklEY3VOVFE0WXpBdU5ETTJMVEF1TkRRMklERXVNRFF6TFRBdU5EZ3hJREV1TlRjMklEQnNNeTQ1TURnZ015NDNORGNnTXk0NU1EZ3RNeTQzTkRkak1DNDFNek10TUM0ME9ERWdNUzR4TkRFdE1DNDBORFlnTVM0MU56UWdNQ0F3TGpRek5pQXdMalEwTlNBd0xqUXdPQ0F4TGpFNU55QXdJREV1TmpFMUxUQXVOREEySURBdU5ERTRMVFF1TmprMUlEUXVOVEF5TFRRdU5qazFJRFF1TlRBeUxUQXVNakUzSURBdU1qSXpMVEF1TlRBeUlEQXVNek0xTFRBdU56ZzNJREF1TXpNMWN5MHdMalUzTFRBdU1URXlMVEF1TnpnNUxUQXVNek0xWXpBZ01DMDBMakk0TnkwMExqQTROQzAwTGpZNU5TMDBMalV3TW5NdE1DNDBNell0TVM0eE55QXdMVEV1TmpFMWVsd2lJQzgrWEc0Z0lEd3ZVM1puUGx4dUtUdGNibHh1THk4Z1BUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYRzR2THlCRWNtOXdaRzkzYmlBbUlFTnNaV0Z5SUVKMWRIUnZibk5jYmk4dklEMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh1WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUVSeWIzQmtiM2R1U1c1a2FXTmhkRzl5VUhKdmNITThYRzRnSUU5d2RHbHZiaUE5SUhWdWEyNXZkMjRzWEc0Z0lFbHpUWFZzZEdrZ1pYaDBaVzVrY3lCaWIyOXNaV0Z1SUQwZ1ltOXZiR1ZoYml4Y2JpQWdSM0p2ZFhBZ1pYaDBaVzVrY3lCSGNtOTFjRUpoYzJVOFQzQjBhVzl1UGlBOUlFZHliM1Z3UW1GelpUeFBjSFJwYjI0K1hHNCtJR1Y0ZEdWdVpITWdRMjl0Ylc5dVVISnZjSE5CYm1SRGJHRnpjMDVoYldVOFQzQjBhVzl1TENCSmMwMTFiSFJwTENCSGNtOTFjRDRnZTF4dUlDQXZLaW9nVkdobElHTm9hV3hrY21WdUlIUnZJR0psSUhKbGJtUmxjbVZrSUdsdWMybGtaU0IwYUdVZ2FXNWthV05oZEc5eUxpQXFMMXh1SUNCamFHbHNaSEpsYmo4NklGSmxZV04wVG05a1pUdGNiaUFnTHlvcUlGQnliM0J6SUhSb1lYUWdkMmxzYkNCaVpTQndZWE56WldRZ2IyNGdkRzhnZEdobElHTm9hV3hrY21WdUxpQXFMMXh1SUNCcGJtNWxjbEJ5YjNCek9pQktVMWd1U1c1MGNtbHVjMmxqUld4bGJXVnVkSE5iSjJScGRpZGRPMXh1SUNBdktpb2dWR2hsSUdadlkzVnpaV1FnYzNSaGRHVWdiMllnZEdobElITmxiR1ZqZEM0Z0tpOWNiaUFnYVhOR2IyTjFjMlZrT2lCaWIyOXNaV0Z1TzF4dUlDQnBjMFJwYzJGaWJHVmtPaUJpYjI5c1pXRnVPMXh1ZlZ4dVhHNWpiMjV6ZENCaVlYTmxRMU5USUQwZ1BGeHVJQ0JQY0hScGIyNHNYRzRnSUVselRYVnNkR2tnWlhoMFpXNWtjeUJpYjI5c1pXRnVMRnh1SUNCSGNtOTFjQ0JsZUhSbGJtUnpJRWR5YjNWd1FtRnpaVHhQY0hScGIyNCtYRzQrS0Z4dUlDQjdYRzRnSUNBZ2FYTkdiMk4xYzJWa0xGeHVJQ0FnSUhSb1pXMWxPaUI3WEc0Z0lDQWdJQ0J6Y0dGamFXNW5PaUI3SUdKaGMyVlZibWwwSUgwc1hHNGdJQ0FnSUNCamIyeHZjbk1zWEc0Z0lDQWdmU3hjYmlBZ2ZUcGNiaUFnSUNCOElFUnliM0JrYjNkdVNXNWthV05oZEc5eVVISnZjSE04VDNCMGFXOXVMQ0JKYzAxMWJIUnBMQ0JIY205MWNENWNiaUFnSUNCOElFTnNaV0Z5U1c1a2FXTmhkRzl5VUhKdmNITThUM0IwYVc5dUxDQkpjMDExYkhScExDQkhjbTkxY0Q0c1hHNGdJSFZ1YzNSNWJHVmtPaUJpYjI5c1pXRnVYRzRwT2lCRFUxTlBZbXBsWTNSWGFYUm9UR0ZpWld3Z1BUNGdLSHRjYmlBZ2JHRmlaV3c2SUNkcGJtUnBZMkYwYjNKRGIyNTBZV2x1WlhJbkxGeHVJQ0JrYVhOd2JHRjVPaUFuWm14bGVDY3NYRzRnSUhSeVlXNXphWFJwYjI0NklDZGpiMnh2Y2lBeE5UQnRjeWNzWEc0Z0lDNHVMaWgxYm5OMGVXeGxaRnh1SUNBZ0lEOGdlMzFjYmlBZ0lDQTZJSHRjYmlBZ0lDQWdJQ0FnWTI5c2IzSTZJR2x6Um05amRYTmxaQ0EvSUdOdmJHOXljeTV1WlhWMGNtRnNOakFnT2lCamIyeHZjbk11Ym1WMWRISmhiREl3TEZ4dUlDQWdJQ0FnSUNCd1lXUmthVzVuT2lCaVlYTmxWVzVwZENBcUlESXNYRzRnSUNBZ0lDQWdJQ2M2YUc5MlpYSW5PaUI3WEc0Z0lDQWdJQ0FnSUNBZ1kyOXNiM0k2SUdselJtOWpkWE5sWkNBL0lHTnZiRzl5Y3k1dVpYVjBjbUZzT0RBZ09pQmpiMnh2Y25NdWJtVjFkSEpoYkRRd0xGeHVJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdmU2tzWEc1OUtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHUnliM0JrYjNkdVNXNWthV05oZEc5eVExTlRJRDBnWW1GelpVTlRVenRjYm1WNGNHOXlkQ0JqYjI1emRDQkVjbTl3Wkc5M2JrbHVaR2xqWVhSdmNpQTlJRHhjYmlBZ1QzQjBhVzl1TEZ4dUlDQkpjMDExYkhScElHVjRkR1Z1WkhNZ1ltOXZiR1ZoYml4Y2JpQWdSM0p2ZFhBZ1pYaDBaVzVrY3lCSGNtOTFjRUpoYzJVOFQzQjBhVzl1UGx4dVBpaGNiaUFnY0hKdmNITTZJRVJ5YjNCa2IzZHVTVzVrYVdOaGRHOXlVSEp2Y0hNOFQzQjBhVzl1TENCSmMwMTFiSFJwTENCSGNtOTFjRDVjYmlrZ1BUNGdlMXh1SUNCamIyNXpkQ0I3SUdOb2FXeGtjbVZ1TENCcGJtNWxjbEJ5YjNCeklIMGdQU0J3Y205d2N6dGNiaUFnY21WMGRYSnVJQ2hjYmlBZ0lDQThaR2wyWEc0Z0lDQWdJQ0I3TGk0dVoyVjBVM1I1YkdWUWNtOXdjeWh3Y205d2N5d2dKMlJ5YjNCa2IzZHVTVzVrYVdOaGRHOXlKeXdnZTF4dUlDQWdJQ0FnSUNCcGJtUnBZMkYwYjNJNklIUnlkV1VzWEc0Z0lDQWdJQ0FnSUNka2NtOXdaRzkzYmkxcGJtUnBZMkYwYjNJbk9pQjBjblZsTEZ4dUlDQWdJQ0FnZlNsOVhHNGdJQ0FnSUNCN0xpNHVhVzV1WlhKUWNtOXdjMzFjYmlBZ0lDQStYRzRnSUNBZ0lDQjdZMmhwYkdSeVpXNGdmSHdnUEVSdmQyNURhR1YyY205dUlDOCtmVnh1SUNBZ0lEd3ZaR2wyUGx4dUlDQXBPMXh1ZlR0Y2JseHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQkRiR1ZoY2tsdVpHbGpZWFJ2Y2xCeWIzQnpQRnh1SUNCUGNIUnBiMjRnUFNCMWJtdHViM2R1TEZ4dUlDQkpjMDExYkhScElHVjRkR1Z1WkhNZ1ltOXZiR1ZoYmlBOUlHSnZiMnhsWVc0c1hHNGdJRWR5YjNWd0lHVjRkR1Z1WkhNZ1IzSnZkWEJDWVhObFBFOXdkR2x2Ymo0Z1BTQkhjbTkxY0VKaGMyVThUM0IwYVc5dVBseHVQaUJsZUhSbGJtUnpJRU52YlcxdmJsQnliM0J6UVc1a1EyeGhjM05PWVcxbFBFOXdkR2x2Yml3Z1NYTk5kV3gwYVN3Z1IzSnZkWEErSUh0Y2JpQWdMeW9xSUZSb1pTQmphR2xzWkhKbGJpQjBieUJpWlNCeVpXNWtaWEpsWkNCcGJuTnBaR1VnZEdobElHbHVaR2xqWVhSdmNpNGdLaTljYmlBZ1kyaHBiR1J5Wlc0L09pQlNaV0ZqZEU1dlpHVTdYRzRnSUM4cUtpQlFjbTl3Y3lCMGFHRjBJSGRwYkd3Z1ltVWdjR0Z6YzJWa0lHOXVJSFJ2SUhSb1pTQmphR2xzWkhKbGJpNGdLaTljYmlBZ2FXNXVaWEpRY205d2N6b2dTbE5ZTGtsdWRISnBibk5wWTBWc1pXMWxiblJ6V3lka2FYWW5YVHRjYmlBZ0x5b3FJRlJvWlNCbWIyTjFjMlZrSUhOMFlYUmxJRzltSUhSb1pTQnpaV3hsWTNRdUlDb3ZYRzRnSUdselJtOWpkWE5sWkRvZ1ltOXZiR1ZoYmp0Y2JuMWNibHh1Wlhod2IzSjBJR052Ym5OMElHTnNaV0Z5U1c1a2FXTmhkRzl5UTFOVElEMGdZbUZ6WlVOVFV6dGNibVY0Y0c5eWRDQmpiMjV6ZENCRGJHVmhja2x1WkdsallYUnZjaUE5SUR4Y2JpQWdUM0IwYVc5dUxGeHVJQ0JKYzAxMWJIUnBJR1Y0ZEdWdVpITWdZbTl2YkdWaGJpeGNiaUFnUjNKdmRYQWdaWGgwWlc1a2N5QkhjbTkxY0VKaGMyVThUM0IwYVc5dVBseHVQaWhjYmlBZ2NISnZjSE02SUVOc1pXRnlTVzVrYVdOaGRHOXlVSEp2Y0hNOFQzQjBhVzl1TENCSmMwMTFiSFJwTENCSGNtOTFjRDVjYmlrZ1BUNGdlMXh1SUNCamIyNXpkQ0I3SUdOb2FXeGtjbVZ1TENCcGJtNWxjbEJ5YjNCeklIMGdQU0J3Y205d2N6dGNiaUFnY21WMGRYSnVJQ2hjYmlBZ0lDQThaR2wyWEc0Z0lDQWdJQ0I3TGk0dVoyVjBVM1I1YkdWUWNtOXdjeWh3Y205d2N5d2dKMk5zWldGeVNXNWthV05oZEc5eUp5d2dlMXh1SUNBZ0lDQWdJQ0JwYm1ScFkyRjBiM0k2SUhSeWRXVXNYRzRnSUNBZ0lDQWdJQ2RqYkdWaGNpMXBibVJwWTJGMGIzSW5PaUIwY25WbExGeHVJQ0FnSUNBZ2ZTbDlYRzRnSUNBZ0lDQjdMaTR1YVc1dVpYSlFjbTl3YzMxY2JpQWdJQ0ErWEc0Z0lDQWdJQ0I3WTJocGJHUnlaVzRnZkh3Z1BFTnliM056U1dOdmJpQXZQbjFjYmlBZ0lDQThMMlJwZGo1Y2JpQWdLVHRjYm4wN1hHNWNiaTh2SUQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHVMeThnVTJWd1lYSmhkRzl5WEc0dkx5QTlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjYmx4dVpYaHdiM0owSUdsdWRHVnlabUZqWlNCSmJtUnBZMkYwYjNKVFpYQmhjbUYwYjNKUWNtOXdjenhjYmlBZ1QzQjBhVzl1SUQwZ2RXNXJibTkzYml4Y2JpQWdTWE5OZFd4MGFTQmxlSFJsYm1SeklHSnZiMnhsWVc0Z1BTQmliMjlzWldGdUxGeHVJQ0JIY205MWNDQmxlSFJsYm1SeklFZHliM1Z3UW1GelpUeFBjSFJwYjI0K0lEMGdSM0p2ZFhCQ1lYTmxQRTl3ZEdsdmJqNWNiajRnWlhoMFpXNWtjeUJEYjIxdGIyNVFjbTl3YzBGdVpFTnNZWE56VG1GdFpUeFBjSFJwYjI0c0lFbHpUWFZzZEdrc0lFZHliM1Z3UGlCN1hHNGdJR2x6UkdsellXSnNaV1E2SUdKdmIyeGxZVzQ3WEc0Z0lHbHpSbTlqZFhObFpEb2dZbTl2YkdWaGJqdGNiaUFnYVc1dVpYSlFjbTl3Y3o4NklFcFRXQzVKYm5SeWFXNXphV05GYkdWdFpXNTBjMXNuYzNCaGJpZGRPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVc1a2FXTmhkRzl5VTJWd1lYSmhkRzl5UTFOVElEMGdQRnh1SUNCUGNIUnBiMjRzWEc0Z0lFbHpUWFZzZEdrZ1pYaDBaVzVrY3lCaWIyOXNaV0Z1TEZ4dUlDQkhjbTkxY0NCbGVIUmxibVJ6SUVkeWIzVndRbUZ6WlR4UGNIUnBiMjQrWEc0K0tGeHVJQ0I3WEc0Z0lDQWdhWE5FYVhOaFlteGxaQ3hjYmlBZ0lDQjBhR1Z0WlRvZ2UxeHVJQ0FnSUNBZ2MzQmhZMmx1WnpvZ2V5QmlZWE5sVlc1cGRDQjlMRnh1SUNBZ0lDQWdZMjlzYjNKekxGeHVJQ0FnSUgwc1hHNGdJSDA2SUVsdVpHbGpZWFJ2Y2xObGNHRnlZWFJ2Y2xCeWIzQnpQRTl3ZEdsdmJpd2dTWE5OZFd4MGFTd2dSM0p2ZFhBK0xGeHVJQ0IxYm5OMGVXeGxaRG9nWW05dmJHVmhibHh1S1RvZ1ExTlRUMkpxWldOMFYybDBhRXhoWW1Wc0lEMCtJQ2g3WEc0Z0lHeGhZbVZzT2lBbmFXNWthV05oZEc5eVUyVndZWEpoZEc5eUp5eGNiaUFnWVd4cFoyNVRaV3htT2lBbmMzUnlaWFJqYUNjc1hHNGdJSGRwWkhSb09pQXhMRnh1SUNBdUxpNG9kVzV6ZEhsc1pXUmNiaUFnSUNBL0lIdDlYRzRnSUNBZ09pQjdYRzRnSUNBZ0lDQWdJR0poWTJ0bmNtOTFibVJEYjJ4dmNqb2dhWE5FYVhOaFlteGxaQ0EvSUdOdmJHOXljeTV1WlhWMGNtRnNNVEFnT2lCamIyeHZjbk11Ym1WMWRISmhiREl3TEZ4dUlDQWdJQ0FnSUNCdFlYSm5hVzVDYjNSMGIyMDZJR0poYzJWVmJtbDBJQ29nTWl4Y2JpQWdJQ0FnSUNBZ2JXRnlaMmx1Vkc5d09pQmlZWE5sVlc1cGRDQXFJRElzWEc0Z0lDQWdJQ0I5S1N4Y2JuMHBPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdTVzVrYVdOaGRHOXlVMlZ3WVhKaGRHOXlJRDBnUEZ4dUlDQlBjSFJwYjI0c1hHNGdJRWx6VFhWc2RHa2daWGgwWlc1a2N5QmliMjlzWldGdUxGeHVJQ0JIY205MWNDQmxlSFJsYm1SeklFZHliM1Z3UW1GelpUeFBjSFJwYjI0K1hHNCtLRnh1SUNCd2NtOXdjem9nU1c1a2FXTmhkRzl5VTJWd1lYSmhkRzl5VUhKdmNITThUM0IwYVc5dUxDQkpjMDExYkhScExDQkhjbTkxY0Q1Y2Jpa2dQVDRnZTF4dUlDQmpiMjV6ZENCN0lHbHVibVZ5VUhKdmNITWdmU0E5SUhCeWIzQnpPMXh1SUNCeVpYUjFjbTRnS0Z4dUlDQWdJRHh6Y0dGdVhHNGdJQ0FnSUNCN0xpNHVhVzV1WlhKUWNtOXdjMzFjYmlBZ0lDQWdJSHN1TGk1blpYUlRkSGxzWlZCeWIzQnpLSEJ5YjNCekxDQW5hVzVrYVdOaGRHOXlVMlZ3WVhKaGRHOXlKeXdnZTF4dUlDQWdJQ0FnSUNBbmFXNWthV05oZEc5eUxYTmxjR0Z5WVhSdmNpYzZJSFJ5ZFdVc1hHNGdJQ0FnSUNCOUtYMWNiaUFnSUNBdlBseHVJQ0FwTzF4dWZUdGNibHh1THk4Z1BUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYRzR2THlCTWIyRmthVzVuWEc0dkx5QTlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjYmx4dVkyOXVjM1FnYkc5aFpHbHVaMFJ2ZEVGdWFXMWhkR2x2Ym5NZ1BTQnJaWGxtY21GdFpYTmdYRzRnSURBbExDQTRNQ1VzSURFd01DVWdleUJ2Y0dGamFYUjVPaUF3T3lCOVhHNGdJRFF3SlNCN0lHOXdZV05wZEhrNklERTdJSDFjYm1BN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCc2IyRmthVzVuU1c1a2FXTmhkRzl5UTFOVElEMGdQRnh1SUNCUGNIUnBiMjRzWEc0Z0lFbHpUWFZzZEdrZ1pYaDBaVzVrY3lCaWIyOXNaV0Z1TEZ4dUlDQkhjbTkxY0NCbGVIUmxibVJ6SUVkeWIzVndRbUZ6WlR4UGNIUnBiMjQrWEc0K0tGeHVJQ0I3WEc0Z0lDQWdhWE5HYjJOMWMyVmtMRnh1SUNBZ0lITnBlbVVzWEc0Z0lDQWdkR2hsYldVNklIdGNiaUFnSUNBZ0lHTnZiRzl5Y3l4Y2JpQWdJQ0FnSUhOd1lXTnBibWM2SUhzZ1ltRnpaVlZ1YVhRZ2ZTeGNiaUFnSUNCOUxGeHVJQ0I5T2lCTWIyRmthVzVuU1c1a2FXTmhkRzl5VUhKdmNITThUM0IwYVc5dUxDQkpjMDExYkhScExDQkhjbTkxY0Q0c1hHNGdJSFZ1YzNSNWJHVmtPaUJpYjI5c1pXRnVYRzRwT2lCRFUxTlBZbXBsWTNSWGFYUm9UR0ZpWld3Z1BUNGdLSHRjYmlBZ2JHRmlaV3c2SUNkc2IyRmthVzVuU1c1a2FXTmhkRzl5Snl4Y2JpQWdaR2x6Y0d4aGVUb2dKMlpzWlhnbkxGeHVJQ0IwY21GdWMybDBhVzl1T2lBblkyOXNiM0lnTVRVd2JYTW5MRnh1SUNCaGJHbG5ibE5sYkdZNklDZGpaVzUwWlhJbkxGeHVJQ0JtYjI1MFUybDZaVG9nYzJsNlpTeGNiaUFnYkdsdVpVaGxhV2RvZERvZ01TeGNiaUFnYldGeVoybHVVbWxuYUhRNklITnBlbVVzWEc0Z0lIUmxlSFJCYkdsbmJqb2dKMk5sYm5SbGNpY3NYRzRnSUhabGNuUnBZMkZzUVd4cFoyNDZJQ2R0YVdSa2JHVW5MRnh1SUNBdUxpNG9kVzV6ZEhsc1pXUmNiaUFnSUNBL0lIdDlYRzRnSUNBZ09pQjdYRzRnSUNBZ0lDQWdJR052Ykc5eU9pQnBjMFp2WTNWelpXUWdQeUJqYjJ4dmNuTXVibVYxZEhKaGJEWXdJRG9nWTI5c2IzSnpMbTVsZFhSeVlXd3lNQ3hjYmlBZ0lDQWdJQ0FnY0dGa1pHbHVaem9nWW1GelpWVnVhWFFnS2lBeUxGeHVJQ0FnSUNBZ2ZTa3NYRzU5S1R0Y2JseHVhVzUwWlhKbVlXTmxJRXh2WVdScGJtZEViM1JRY205d2N5QjdYRzRnSUdSbGJHRjVPaUJ1ZFcxaVpYSTdYRzRnSUc5bVpuTmxkRG9nWW05dmJHVmhianRjYm4xY2JtTnZibk4wSUV4dllXUnBibWRFYjNRZ1BTQW9leUJrWld4aGVTd2diMlptYzJWMElIMDZJRXh2WVdScGJtZEViM1JRY205d2N5a2dQVDRnS0Z4dUlDQThjM0JoYmx4dUlDQWdJR056Y3oxN2UxeHVJQ0FnSUNBZ1lXNXBiV0YwYVc5dU9pQmdKSHRzYjJGa2FXNW5SRzkwUVc1cGJXRjBhVzl1YzMwZ01YTWdaV0Z6WlMxcGJpMXZkWFFnSkh0a1pXeGhlWDF0Y3lCcGJtWnBibWwwWlR0Z0xGeHVJQ0FnSUNBZ1ltRmphMmR5YjNWdVpFTnZiRzl5T2lBblkzVnljbVZ1ZEVOdmJHOXlKeXhjYmlBZ0lDQWdJR0p2Y21SbGNsSmhaR2wxY3pvZ0p6RmxiU2NzWEc0Z0lDQWdJQ0JrYVhOd2JHRjVPaUFuYVc1c2FXNWxMV0pzYjJOckp5eGNiaUFnSUNBZ0lHMWhjbWRwYmt4bFpuUTZJRzltWm5ObGRDQS9JQ2N4WlcwbklEb2dkVzVrWldacGJtVmtMRnh1SUNBZ0lDQWdhR1ZwWjJoME9pQW5NV1Z0Snl4Y2JpQWdJQ0FnSUhabGNuUnBZMkZzUVd4cFoyNDZJQ2QwYjNBbkxGeHVJQ0FnSUNBZ2QybGtkR2c2SUNjeFpXMG5MRnh1SUNBZ0lIMTlYRzRnSUM4K1hHNHBPMXh1WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUV4dllXUnBibWRKYm1ScFkyRjBiM0pRY205d2N6eGNiaUFnVDNCMGFXOXVJRDBnZFc1cmJtOTNiaXhjYmlBZ1NYTk5kV3gwYVNCbGVIUmxibVJ6SUdKdmIyeGxZVzRnUFNCaWIyOXNaV0Z1TEZ4dUlDQkhjbTkxY0NCbGVIUmxibVJ6SUVkeWIzVndRbUZ6WlR4UGNIUnBiMjQrSUQwZ1IzSnZkWEJDWVhObFBFOXdkR2x2Ymo1Y2JqNGdaWGgwWlc1a2N5QkRiMjF0YjI1UWNtOXdjMEZ1WkVOc1lYTnpUbUZ0WlR4UGNIUnBiMjRzSUVselRYVnNkR2tzSUVkeWIzVndQaUI3WEc0Z0lDOHFLaUJRY205d2N5QjBhR0YwSUhkcGJHd2dZbVVnY0dGemMyVmtJRzl1SUhSdklIUm9aU0JqYUdsc1pISmxiaTRnS2k5Y2JpQWdhVzV1WlhKUWNtOXdjem9nU2xOWUxrbHVkSEpwYm5OcFkwVnNaVzFsYm5Seld5ZGthWFluWFR0Y2JpQWdMeW9xSUZSb1pTQm1iMk4xYzJWa0lITjBZWFJsSUc5bUlIUm9aU0J6Wld4bFkzUXVJQ292WEc0Z0lHbHpSbTlqZFhObFpEb2dZbTl2YkdWaGJqdGNiaUFnYVhORWFYTmhZbXhsWkRvZ1ltOXZiR1ZoYmp0Y2JpQWdMeW9xSUZObGRDQnphWHBsSUc5bUlIUm9aU0JqYjI1MFlXbHVaWEl1SUNvdlhHNGdJSE5wZW1VNklHNTFiV0psY2p0Y2JuMWNibVY0Y0c5eWRDQmpiMjV6ZENCTWIyRmthVzVuU1c1a2FXTmhkRzl5SUQwZ1BGeHVJQ0JQY0hScGIyNHNYRzRnSUVselRYVnNkR2tnWlhoMFpXNWtjeUJpYjI5c1pXRnVMRnh1SUNCSGNtOTFjQ0JsZUhSbGJtUnpJRWR5YjNWd1FtRnpaVHhQY0hScGIyNCtYRzQrS0h0Y2JpQWdhVzV1WlhKUWNtOXdjeXhjYmlBZ2FYTlNkR3dzWEc0Z0lITnBlbVVnUFNBMExGeHVJQ0F1TGk1eVpYTjBVSEp2Y0hOY2JuMDZJRXh2WVdScGJtZEpibVJwWTJGMGIzSlFjbTl3Y3p4UGNIUnBiMjRzSUVselRYVnNkR2tzSUVkeWIzVndQaWtnUFQ0Z2UxeHVJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lEeGthWFpjYmlBZ0lDQWdJSHN1TGk1blpYUlRkSGxzWlZCeWIzQnpLRnh1SUNBZ0lDQWdJQ0I3SUM0dUxuSmxjM1JRY205d2N5d2dhVzV1WlhKUWNtOXdjeXdnYVhOU2RHd3NJSE5wZW1VZ2ZTeGNiaUFnSUNBZ0lDQWdKMnh2WVdScGJtZEpibVJwWTJGMGIzSW5MRnh1SUNBZ0lDQWdJQ0I3WEc0Z0lDQWdJQ0FnSUNBZ2FXNWthV05oZEc5eU9pQjBjblZsTEZ4dUlDQWdJQ0FnSUNBZ0lDZHNiMkZrYVc1bkxXbHVaR2xqWVhSdmNpYzZJSFJ5ZFdVc1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDbDlYRzRnSUNBZ0lDQjdMaTR1YVc1dVpYSlFjbTl3YzMxY2JpQWdJQ0ErWEc0Z0lDQWdJQ0E4VEc5aFpHbHVaMFJ2ZENCa1pXeGhlVDE3TUgwZ2IyWm1jMlYwUFh0cGMxSjBiSDBnTHo1Y2JpQWdJQ0FnSUR4TWIyRmthVzVuUkc5MElHUmxiR0Y1UFhzeE5qQjlJRzltWm5ObGRDQXZQbHh1SUNBZ0lDQWdQRXh2WVdScGJtZEViM1FnWkdWc1lYazllek15TUgwZ2IyWm1jMlYwUFhzaGFYTlNkR3g5SUM4K1hHNGdJQ0FnUEM5a2FYWStYRzRnSUNrN1hHNTlPMXh1SWwxOSAqL1wiLFxuICB0b1N0cmluZzogX0VNT1RJT05fU1RSSU5HSUZJRURfQ1NTX0VSUk9SX19cbn07XG52YXIgU3ZnID0gZnVuY3Rpb24gU3ZnKF9yZWYpIHtcbiAgdmFyIHNpemUgPSBfcmVmLnNpemUsXG4gICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgX2V4Y2x1ZGVkJDIpO1xuICByZXR1cm4ganN4KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICBoZWlnaHQ6IHNpemUsXG4gICAgd2lkdGg6IHNpemUsXG4gICAgdmlld0JveDogXCIwIDAgMjAgMjBcIixcbiAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgIGZvY3VzYWJsZTogXCJmYWxzZVwiLFxuICAgIGNzczogX3JlZjJcbiAgfSwgcHJvcHMpKTtcbn07XG52YXIgQ3Jvc3NJY29uID0gZnVuY3Rpb24gQ3Jvc3NJY29uKHByb3BzKSB7XG4gIHJldHVybiBqc3goU3ZnLCBfZXh0ZW5kcyh7XG4gICAgc2l6ZTogMjBcbiAgfSwgcHJvcHMpLCBqc3goXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xNC4zNDggMTQuODQ5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwbC0yLjY1MS0zLjAzMC0yLjY1MSAzLjAyOWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMC0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOSAwLTEuNjk3bDIuNzU4LTMuMTUtMi43NTktMy4xNTJjLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI4IDAtMS42OTdzMS4yMjgtMC40NjkgMS42OTcgMGwyLjY1MiAzLjAzMSAyLjY1MS0zLjAzMWMwLjQ2OS0wLjQ2OSAxLjIyOC0wLjQ2OSAxLjY5NyAwczAuNDY5IDEuMjI5IDAgMS42OTdsLTIuNzU4IDMuMTUyIDIuNzU4IDMuMTVjMC40NjkgMC40NjkgMC40NjkgMS4yMjkgMCAxLjY5OHpcIlxuICB9KSk7XG59O1xudmFyIERvd25DaGV2cm9uID0gZnVuY3Rpb24gRG93bkNoZXZyb24ocHJvcHMpIHtcbiAgcmV0dXJuIGpzeChTdmcsIF9leHRlbmRzKHtcbiAgICBzaXplOiAyMFxuICB9LCBwcm9wcyksIGpzeChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTQuNTE2IDcuNTQ4YzAuNDM2LTAuNDQ2IDEuMDQzLTAuNDgxIDEuNTc2IDBsMy45MDggMy43NDcgMy45MDgtMy43NDdjMC41MzMtMC40ODEgMS4xNDEtMC40NDYgMS41NzQgMCAwLjQzNiAwLjQ0NSAwLjQwOCAxLjE5NyAwIDEuNjE1LTAuNDA2IDAuNDE4LTQuNjk1IDQuNTAyLTQuNjk1IDQuNTAyLTAuMjE3IDAuMjIzLTAuNTAyIDAuMzM1LTAuNzg3IDAuMzM1cy0wLjU3LTAuMTEyLTAuNzg5LTAuMzM1YzAgMC00LjI4Ny00LjA4NC00LjY5NS00LjUwMnMtMC40MzYtMS4xNyAwLTEuNjE1elwiXG4gIH0pKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBCdXR0b25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGJhc2VDU1MgPSBmdW5jdGlvbiBiYXNlQ1NTKF9yZWYzLCB1bnN0eWxlZCkge1xuICB2YXIgaXNGb2N1c2VkID0gX3JlZjMuaXNGb2N1c2VkLFxuICAgIF9yZWYzJHRoZW1lID0gX3JlZjMudGhlbWUsXG4gICAgYmFzZVVuaXQgPSBfcmVmMyR0aGVtZS5zcGFjaW5nLmJhc2VVbml0LFxuICAgIGNvbG9ycyA9IF9yZWYzJHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe1xuICAgIGxhYmVsOiAnaW5kaWNhdG9yQ29udGFpbmVyJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJ1xuICB9LCB1bnN0eWxlZCA/IHt9IDoge1xuICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDgwIDogY29sb3JzLm5ldXRyYWw0MFxuICAgIH1cbiAgfSk7XG59O1xudmFyIGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbnZhciBEcm9wZG93bkluZGljYXRvciA9IGZ1bmN0aW9uIERyb3Bkb3duSW5kaWNhdG9yKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBnZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlXG4gIH0pLCBpbm5lclByb3BzKSwgY2hpbGRyZW4gfHwganN4KERvd25DaGV2cm9uLCBudWxsKSk7XG59O1xudmFyIGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbnZhciBDbGVhckluZGljYXRvciA9IGZ1bmN0aW9uIENsZWFySW5kaWNhdG9yKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBnZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICdjbGVhci1pbmRpY2F0b3InOiB0cnVlXG4gIH0pLCBpbm5lclByb3BzKSwgY2hpbGRyZW4gfHwganN4KENyb3NzSWNvbiwgbnVsbCkpO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gZnVuY3Rpb24gaW5kaWNhdG9yU2VwYXJhdG9yQ1NTKF9yZWY0LCB1bnN0eWxlZCkge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9yZWY0LmlzRGlzYWJsZWQsXG4gICAgX3JlZjQkdGhlbWUgPSBfcmVmNC50aGVtZSxcbiAgICBiYXNlVW5pdCA9IF9yZWY0JHRoZW1lLnNwYWNpbmcuYmFzZVVuaXQsXG4gICAgY29sb3JzID0gX3JlZjQkdGhlbWUuY29sb3JzO1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICAgIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICAgIHdpZHRoOiAxXG4gIH0sIHVuc3R5bGVkID8ge30gOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgbWFyZ2luQm90dG9tOiBiYXNlVW5pdCAqIDIsXG4gICAgbWFyZ2luVG9wOiBiYXNlVW5pdCAqIDJcbiAgfSk7XG59O1xudmFyIEluZGljYXRvclNlcGFyYXRvciA9IGZ1bmN0aW9uIEluZGljYXRvclNlcGFyYXRvcihwcm9wcykge1xuICB2YXIgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJzcGFuXCIsIF9leHRlbmRzKHt9LCBpbm5lclByb3BzLCBnZXRTdHlsZVByb3BzKHByb3BzLCAnaW5kaWNhdG9yU2VwYXJhdG9yJywge1xuICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZVxuICB9KSkpO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGxvYWRpbmdEb3RBbmltYXRpb25zID0ga2V5ZnJhbWVzKF90ZW1wbGF0ZU9iamVjdCB8fCAoX3RlbXBsYXRlT2JqZWN0ID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChbXCJcXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XFxuICA0MCUgeyBvcGFjaXR5OiAxOyB9XFxuXCJdKSkpO1xudmFyIGxvYWRpbmdJbmRpY2F0b3JDU1MgPSBmdW5jdGlvbiBsb2FkaW5nSW5kaWNhdG9yQ1NTKF9yZWY1LCB1bnN0eWxlZCkge1xuICB2YXIgaXNGb2N1c2VkID0gX3JlZjUuaXNGb2N1c2VkLFxuICAgIHNpemUgPSBfcmVmNS5zaXplLFxuICAgIF9yZWY1JHRoZW1lID0gX3JlZjUudGhlbWUsXG4gICAgY29sb3JzID0gX3JlZjUkdGhlbWUuY29sb3JzLFxuICAgIGJhc2VVbml0ID0gX3JlZjUkdGhlbWUuc3BhY2luZy5iYXNlVW5pdDtcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe1xuICAgIGxhYmVsOiAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgICBmb250U2l6ZTogc2l6ZSxcbiAgICBsaW5lSGVpZ2h0OiAxLFxuICAgIG1hcmdpblJpZ2h0OiBzaXplLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgdmVydGljYWxBbGlnbjogJ21pZGRsZSdcbiAgfSwgdW5zdHlsZWQgPyB7fSA6IHtcbiAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgcGFkZGluZzogYmFzZVVuaXQgKiAyXG4gIH0pO1xufTtcbnZhciBMb2FkaW5nRG90ID0gZnVuY3Rpb24gTG9hZGluZ0RvdChfcmVmNikge1xuICB2YXIgZGVsYXkgPSBfcmVmNi5kZWxheSxcbiAgICBvZmZzZXQgPSBfcmVmNi5vZmZzZXQ7XG4gIHJldHVybiBqc3goXCJzcGFuXCIsIHtcbiAgICBjc3M6IC8qI19fUFVSRV9fKi9jc3MkMih7XG4gICAgICBhbmltYXRpb246IFwiXCIuY29uY2F0KGxvYWRpbmdEb3RBbmltYXRpb25zLCBcIiAxcyBlYXNlLWluLW91dCBcIikuY29uY2F0KGRlbGF5LCBcIm1zIGluZmluaXRlO1wiKSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxZW0nLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBtYXJnaW5MZWZ0OiBvZmZzZXQgPyAnMWVtJyA6IHVuZGVmaW5lZCxcbiAgICAgIGhlaWdodDogJzFlbScsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbiAgICAgIHdpZHRoOiAnMWVtJ1xuICAgIH0sIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IFwiXCIgOiBcIjtsYWJlbDpMb2FkaW5nRG90O1wiLCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBcIlwiIDogXCIvKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWx1WkdsallYUnZjbk11ZEhONElsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFXMVJTU0lzSW1acGJHVWlPaUpwYm1ScFkyRjBiM0p6TG5SemVDSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxS2lCQWFuTjRJR3B6ZUNBcUwxeHVhVzF3YjNKMElIc2dVbVZoWTNST2IyUmxJSDBnWm5KdmJTQW5jbVZoWTNRbk8xeHVhVzF3YjNKMElIc2dhbk40TENCclpYbG1jbUZ0WlhNZ2ZTQm1jbTl0SUNkQVpXMXZkR2x2Ymk5eVpXRmpkQ2M3WEc1Y2JtbHRjRzl5ZENCN1hHNGdJRU52YlcxdmJsQnliM0J6UVc1a1EyeGhjM05PWVcxbExGeHVJQ0JEVTFOUFltcGxZM1JYYVhSb1RHRmlaV3dzWEc0Z0lFZHliM1Z3UW1GelpTeGNibjBnWm5KdmJTQW5MaTR2ZEhsd1pYTW5PMXh1YVcxd2IzSjBJSHNnWjJWMFUzUjViR1ZRY205d2N5QjlJR1p5YjIwZ0p5NHVMM1YwYVd4ekp6dGNibHh1THk4Z1BUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYRzR2THlCRWNtOXdaRzkzYmlBbUlFTnNaV0Z5SUVsamIyNXpYRzR2THlBOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNibHh1WTI5dWMzUWdVM1puSUQwZ0tIdGNiaUFnYzJsNlpTeGNiaUFnTGk0dWNISnZjSE5jYm4wNklFcFRXQzVKYm5SeWFXNXphV05GYkdWdFpXNTBjMXNuYzNabkoxMGdKaUI3SUhOcGVtVTZJRzUxYldKbGNpQjlLU0E5UGlBb1hHNGdJRHh6ZG1kY2JpQWdJQ0JvWldsbmFIUTllM05wZW1WOVhHNGdJQ0FnZDJsa2RHZzllM05wZW1WOVhHNGdJQ0FnZG1sbGQwSnZlRDFjSWpBZ01DQXlNQ0F5TUZ3aVhHNGdJQ0FnWVhKcFlTMW9hV1JrWlc0OVhDSjBjblZsWENKY2JpQWdJQ0JtYjJOMWMyRmliR1U5WENKbVlXeHpaVndpWEc0Z0lDQWdZM056UFh0N1hHNGdJQ0FnSUNCa2FYTndiR0Y1T2lBbmFXNXNhVzVsTFdKc2IyTnJKeXhjYmlBZ0lDQWdJR1pwYkd3NklDZGpkWEp5Wlc1MFEyOXNiM0luTEZ4dUlDQWdJQ0FnYkdsdVpVaGxhV2RvZERvZ01TeGNiaUFnSUNBZ0lITjBjbTlyWlRvZ0oyTjFjbkpsYm5SRGIyeHZjaWNzWEc0Z0lDQWdJQ0J6ZEhKdmEyVlhhV1IwYURvZ01DeGNiaUFnSUNCOWZWeHVJQ0FnSUhzdUxpNXdjbTl3YzMxY2JpQWdMejVjYmlrN1hHNWNibVY0Y0c5eWRDQjBlWEJsSUVOeWIzTnpTV052YmxCeWIzQnpJRDBnU2xOWUxrbHVkSEpwYm5OcFkwVnNaVzFsYm5Seld5ZHpkbWNuWFNBbUlIc2djMmw2WlQ4NklHNTFiV0psY2lCOU8xeHVaWGh3YjNKMElHTnZibk4wSUVOeWIzTnpTV052YmlBOUlDaHdjbTl3Y3pvZ1EzSnZjM05KWTI5dVVISnZjSE1wSUQwK0lDaGNiaUFnUEZOMlp5QnphWHBsUFhzeU1IMGdleTR1TG5CeWIzQnpmVDVjYmlBZ0lDQThjR0YwYUNCa1BWd2lUVEUwTGpNME9DQXhOQzQ0TkRsakxUQXVORFk1SURBdU5EWTVMVEV1TWpJNUlEQXVORFk1TFRFdU5qazNJREJzTFRJdU5qVXhMVE11TURNd0xUSXVOalV4SURNdU1ESTVZeTB3TGpRMk9TQXdMalEyT1MweExqSXlPU0F3TGpRMk9TMHhMalk1TnlBd0xUQXVORFk1TFRBdU5EWTVMVEF1TkRZNUxURXVNakk1SURBdE1TNDJPVGRzTWk0M05UZ3RNeTR4TlMweUxqYzFPUzB6TGpFMU1tTXRNQzQwTmprdE1DNDBOamt0TUM0ME5qa3RNUzR5TWpnZ01DMHhMalk1TjNNeExqSXlPQzB3TGpRMk9TQXhMalk1TnlBd2JESXVOalV5SURNdU1ETXhJREl1TmpVeExUTXVNRE14WXpBdU5EWTVMVEF1TkRZNUlERXVNakk0TFRBdU5EWTVJREV1TmprM0lEQnpNQzQwTmprZ01TNHlNamtnTUNBeExqWTVOMnd0TWk0M05UZ2dNeTR4TlRJZ01pNDNOVGdnTXk0eE5XTXdMalEyT1NBd0xqUTJPU0F3TGpRMk9TQXhMakl5T1NBd0lERXVOams0ZWx3aUlDOCtYRzRnSUR3dlUzWm5QbHh1S1R0Y2JtVjRjRzl5ZENCMGVYQmxJRVJ2ZDI1RGFHVjJjbTl1VUhKdmNITWdQU0JLVTFndVNXNTBjbWx1YzJsalJXeGxiV1Z1ZEhOYkozTjJaeWRkSUNZZ2V5QnphWHBsUHpvZ2JuVnRZbVZ5SUgwN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnUkc5M2JrTm9aWFp5YjI0Z1BTQW9jSEp2Y0hNNklFUnZkMjVEYUdWMmNtOXVVSEp2Y0hNcElEMCtJQ2hjYmlBZ1BGTjJaeUJ6YVhwbFBYc3lNSDBnZXk0dUxuQnliM0J6ZlQ1Y2JpQWdJQ0E4Y0dGMGFDQmtQVndpVFRRdU5URTJJRGN1TlRRNFl6QXVORE0yTFRBdU5EUTJJREV1TURRekxUQXVORGd4SURFdU5UYzJJREJzTXk0NU1EZ2dNeTQzTkRjZ015NDVNRGd0TXk0M05EZGpNQzQxTXpNdE1DNDBPREVnTVM0eE5ERXRNQzQwTkRZZ01TNDFOelFnTUNBd0xqUXpOaUF3TGpRME5TQXdMalF3T0NBeExqRTVOeUF3SURFdU5qRTFMVEF1TkRBMklEQXVOREU0TFRRdU5qazFJRFF1TlRBeUxUUXVOamsxSURRdU5UQXlMVEF1TWpFM0lEQXVNakl6TFRBdU5UQXlJREF1TXpNMUxUQXVOemczSURBdU16TTFjeTB3TGpVM0xUQXVNVEV5TFRBdU56ZzVMVEF1TXpNMVl6QWdNQzAwTGpJNE55MDBMakE0TkMwMExqWTVOUzAwTGpVd01uTXRNQzQwTXpZdE1TNHhOeUF3TFRFdU5qRTFlbHdpSUM4K1hHNGdJRHd2VTNablBseHVLVHRjYmx4dUx5OGdQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5WEc0dkx5QkVjbTl3Wkc5M2JpQW1JRU5zWldGeUlFSjFkSFJ2Ym5OY2JpOHZJRDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFZ4dVhHNWxlSEJ2Y25RZ2FXNTBaWEptWVdObElFUnliM0JrYjNkdVNXNWthV05oZEc5eVVISnZjSE04WEc0Z0lFOXdkR2x2YmlBOUlIVnVhMjV2ZDI0c1hHNGdJRWx6VFhWc2RHa2daWGgwWlc1a2N5QmliMjlzWldGdUlEMGdZbTl2YkdWaGJpeGNiaUFnUjNKdmRYQWdaWGgwWlc1a2N5QkhjbTkxY0VKaGMyVThUM0IwYVc5dVBpQTlJRWR5YjNWd1FtRnpaVHhQY0hScGIyNCtYRzQrSUdWNGRHVnVaSE1nUTI5dGJXOXVVSEp2Y0hOQmJtUkRiR0Z6YzA1aGJXVThUM0IwYVc5dUxDQkpjMDExYkhScExDQkhjbTkxY0Q0Z2UxeHVJQ0F2S2lvZ1ZHaGxJR05vYVd4a2NtVnVJSFJ2SUdKbElISmxibVJsY21Wa0lHbHVjMmxrWlNCMGFHVWdhVzVrYVdOaGRHOXlMaUFxTDF4dUlDQmphR2xzWkhKbGJqODZJRkpsWVdOMFRtOWtaVHRjYmlBZ0x5b3FJRkJ5YjNCeklIUm9ZWFFnZDJsc2JDQmlaU0J3WVhOelpXUWdiMjRnZEc4Z2RHaGxJR05vYVd4a2NtVnVMaUFxTDF4dUlDQnBibTVsY2xCeWIzQnpPaUJLVTFndVNXNTBjbWx1YzJsalJXeGxiV1Z1ZEhOYkoyUnBkaWRkTzF4dUlDQXZLaW9nVkdobElHWnZZM1Z6WldRZ2MzUmhkR1VnYjJZZ2RHaGxJSE5sYkdWamRDNGdLaTljYmlBZ2FYTkdiMk4xYzJWa09pQmliMjlzWldGdU8xeHVJQ0JwYzBScGMyRmliR1ZrT2lCaWIyOXNaV0Z1TzF4dWZWeHVYRzVqYjI1emRDQmlZWE5sUTFOVElEMGdQRnh1SUNCUGNIUnBiMjRzWEc0Z0lFbHpUWFZzZEdrZ1pYaDBaVzVrY3lCaWIyOXNaV0Z1TEZ4dUlDQkhjbTkxY0NCbGVIUmxibVJ6SUVkeWIzVndRbUZ6WlR4UGNIUnBiMjQrWEc0K0tGeHVJQ0I3WEc0Z0lDQWdhWE5HYjJOMWMyVmtMRnh1SUNBZ0lIUm9aVzFsT2lCN1hHNGdJQ0FnSUNCemNHRmphVzVuT2lCN0lHSmhjMlZWYm1sMElIMHNYRzRnSUNBZ0lDQmpiMnh2Y25Nc1hHNGdJQ0FnZlN4Y2JpQWdmVHBjYmlBZ0lDQjhJRVJ5YjNCa2IzZHVTVzVrYVdOaGRHOXlVSEp2Y0hNOFQzQjBhVzl1TENCSmMwMTFiSFJwTENCSGNtOTFjRDVjYmlBZ0lDQjhJRU5zWldGeVNXNWthV05oZEc5eVVISnZjSE04VDNCMGFXOXVMQ0JKYzAxMWJIUnBMQ0JIY205MWNENHNYRzRnSUhWdWMzUjViR1ZrT2lCaWIyOXNaV0Z1WEc0cE9pQkRVMU5QWW1wbFkzUlhhWFJvVEdGaVpXd2dQVDRnS0h0Y2JpQWdiR0ZpWld3NklDZHBibVJwWTJGMGIzSkRiMjUwWVdsdVpYSW5MRnh1SUNCa2FYTndiR0Y1T2lBblpteGxlQ2NzWEc0Z0lIUnlZVzV6YVhScGIyNDZJQ2RqYjJ4dmNpQXhOVEJ0Y3ljc1hHNGdJQzR1TGloMWJuTjBlV3hsWkZ4dUlDQWdJRDhnZTMxY2JpQWdJQ0E2SUh0Y2JpQWdJQ0FnSUNBZ1kyOXNiM0k2SUdselJtOWpkWE5sWkNBL0lHTnZiRzl5Y3k1dVpYVjBjbUZzTmpBZ09pQmpiMnh2Y25NdWJtVjFkSEpoYkRJd0xGeHVJQ0FnSUNBZ0lDQndZV1JrYVc1bk9pQmlZWE5sVlc1cGRDQXFJRElzWEc0Z0lDQWdJQ0FnSUNjNmFHOTJaWEluT2lCN1hHNGdJQ0FnSUNBZ0lDQWdZMjlzYjNJNklHbHpSbTlqZFhObFpDQS9JR052Ykc5eWN5NXVaWFYwY21Gc09EQWdPaUJqYjJ4dmNuTXVibVYxZEhKaGJEUXdMRnh1SUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJQ0FnZlNrc1hHNTlLVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR1J5YjNCa2IzZHVTVzVrYVdOaGRHOXlRMU5USUQwZ1ltRnpaVU5UVXp0Y2JtVjRjRzl5ZENCamIyNXpkQ0JFY205d1pHOTNia2x1WkdsallYUnZjaUE5SUR4Y2JpQWdUM0IwYVc5dUxGeHVJQ0JKYzAxMWJIUnBJR1Y0ZEdWdVpITWdZbTl2YkdWaGJpeGNiaUFnUjNKdmRYQWdaWGgwWlc1a2N5QkhjbTkxY0VKaGMyVThUM0IwYVc5dVBseHVQaWhjYmlBZ2NISnZjSE02SUVSeWIzQmtiM2R1U1c1a2FXTmhkRzl5VUhKdmNITThUM0IwYVc5dUxDQkpjMDExYkhScExDQkhjbTkxY0Q1Y2Jpa2dQVDRnZTF4dUlDQmpiMjV6ZENCN0lHTm9hV3hrY21WdUxDQnBibTVsY2xCeWIzQnpJSDBnUFNCd2NtOXdjenRjYmlBZ2NtVjBkWEp1SUNoY2JpQWdJQ0E4WkdsMlhHNGdJQ0FnSUNCN0xpNHVaMlYwVTNSNWJHVlFjbTl3Y3lod2NtOXdjeXdnSjJSeWIzQmtiM2R1U1c1a2FXTmhkRzl5Snl3Z2UxeHVJQ0FnSUNBZ0lDQnBibVJwWTJGMGIzSTZJSFJ5ZFdVc1hHNGdJQ0FnSUNBZ0lDZGtjbTl3Wkc5M2JpMXBibVJwWTJGMGIzSW5PaUIwY25WbExGeHVJQ0FnSUNBZ2ZTbDlYRzRnSUNBZ0lDQjdMaTR1YVc1dVpYSlFjbTl3YzMxY2JpQWdJQ0ErWEc0Z0lDQWdJQ0I3WTJocGJHUnlaVzRnZkh3Z1BFUnZkMjVEYUdWMmNtOXVJQzgrZlZ4dUlDQWdJRHd2WkdsMlBseHVJQ0FwTzF4dWZUdGNibHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JEYkdWaGNrbHVaR2xqWVhSdmNsQnliM0J6UEZ4dUlDQlBjSFJwYjI0Z1BTQjFibXR1YjNkdUxGeHVJQ0JKYzAxMWJIUnBJR1Y0ZEdWdVpITWdZbTl2YkdWaGJpQTlJR0p2YjJ4bFlXNHNYRzRnSUVkeWIzVndJR1Y0ZEdWdVpITWdSM0p2ZFhCQ1lYTmxQRTl3ZEdsdmJqNGdQU0JIY205MWNFSmhjMlU4VDNCMGFXOXVQbHh1UGlCbGVIUmxibVJ6SUVOdmJXMXZibEJ5YjNCelFXNWtRMnhoYzNOT1lXMWxQRTl3ZEdsdmJpd2dTWE5OZFd4MGFTd2dSM0p2ZFhBK0lIdGNiaUFnTHlvcUlGUm9aU0JqYUdsc1pISmxiaUIwYnlCaVpTQnlaVzVrWlhKbFpDQnBibk5wWkdVZ2RHaGxJR2x1WkdsallYUnZjaTRnS2k5Y2JpQWdZMmhwYkdSeVpXNC9PaUJTWldGamRFNXZaR1U3WEc0Z0lDOHFLaUJRY205d2N5QjBhR0YwSUhkcGJHd2dZbVVnY0dGemMyVmtJRzl1SUhSdklIUm9aU0JqYUdsc1pISmxiaTRnS2k5Y2JpQWdhVzV1WlhKUWNtOXdjem9nU2xOWUxrbHVkSEpwYm5OcFkwVnNaVzFsYm5Seld5ZGthWFluWFR0Y2JpQWdMeW9xSUZSb1pTQm1iMk4xYzJWa0lITjBZWFJsSUc5bUlIUm9aU0J6Wld4bFkzUXVJQ292WEc0Z0lHbHpSbTlqZFhObFpEb2dZbTl2YkdWaGJqdGNibjFjYmx4dVpYaHdiM0owSUdOdmJuTjBJR05zWldGeVNXNWthV05oZEc5eVExTlRJRDBnWW1GelpVTlRVenRjYm1WNGNHOXlkQ0JqYjI1emRDQkRiR1ZoY2tsdVpHbGpZWFJ2Y2lBOUlEeGNiaUFnVDNCMGFXOXVMRnh1SUNCSmMwMTFiSFJwSUdWNGRHVnVaSE1nWW05dmJHVmhiaXhjYmlBZ1IzSnZkWEFnWlhoMFpXNWtjeUJIY205MWNFSmhjMlU4VDNCMGFXOXVQbHh1UGloY2JpQWdjSEp2Y0hNNklFTnNaV0Z5U1c1a2FXTmhkRzl5VUhKdmNITThUM0IwYVc5dUxDQkpjMDExYkhScExDQkhjbTkxY0Q1Y2Jpa2dQVDRnZTF4dUlDQmpiMjV6ZENCN0lHTm9hV3hrY21WdUxDQnBibTVsY2xCeWIzQnpJSDBnUFNCd2NtOXdjenRjYmlBZ2NtVjBkWEp1SUNoY2JpQWdJQ0E4WkdsMlhHNGdJQ0FnSUNCN0xpNHVaMlYwVTNSNWJHVlFjbTl3Y3lod2NtOXdjeXdnSjJOc1pXRnlTVzVrYVdOaGRHOXlKeXdnZTF4dUlDQWdJQ0FnSUNCcGJtUnBZMkYwYjNJNklIUnlkV1VzWEc0Z0lDQWdJQ0FnSUNkamJHVmhjaTFwYm1ScFkyRjBiM0luT2lCMGNuVmxMRnh1SUNBZ0lDQWdmU2w5WEc0Z0lDQWdJQ0I3TGk0dWFXNXVaWEpRY205d2MzMWNiaUFnSUNBK1hHNGdJQ0FnSUNCN1kyaHBiR1J5Wlc0Z2ZId2dQRU55YjNOelNXTnZiaUF2UG4xY2JpQWdJQ0E4TDJScGRqNWNiaUFnS1R0Y2JuMDdYRzVjYmk4dklEMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh1THk4Z1UyVndZWEpoZEc5eVhHNHZMeUE5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2JseHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQkpibVJwWTJGMGIzSlRaWEJoY21GMGIzSlFjbTl3Y3p4Y2JpQWdUM0IwYVc5dUlEMGdkVzVyYm05M2JpeGNiaUFnU1hOTmRXeDBhU0JsZUhSbGJtUnpJR0p2YjJ4bFlXNGdQU0JpYjI5c1pXRnVMRnh1SUNCSGNtOTFjQ0JsZUhSbGJtUnpJRWR5YjNWd1FtRnpaVHhQY0hScGIyNCtJRDBnUjNKdmRYQkNZWE5sUEU5d2RHbHZiajVjYmo0Z1pYaDBaVzVrY3lCRGIyMXRiMjVRY205d2MwRnVaRU5zWVhOelRtRnRaVHhQY0hScGIyNHNJRWx6VFhWc2RHa3NJRWR5YjNWd1BpQjdYRzRnSUdselJHbHpZV0pzWldRNklHSnZiMnhsWVc0N1hHNGdJR2x6Um05amRYTmxaRG9nWW05dmJHVmhianRjYmlBZ2FXNXVaWEpRY205d2N6ODZJRXBUV0M1SmJuUnlhVzV6YVdORmJHVnRaVzUwYzFzbmMzQmhiaWRkTzF4dWZWeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2FXNWthV05oZEc5eVUyVndZWEpoZEc5eVExTlRJRDBnUEZ4dUlDQlBjSFJwYjI0c1hHNGdJRWx6VFhWc2RHa2daWGgwWlc1a2N5QmliMjlzWldGdUxGeHVJQ0JIY205MWNDQmxlSFJsYm1SeklFZHliM1Z3UW1GelpUeFBjSFJwYjI0K1hHNCtLRnh1SUNCN1hHNGdJQ0FnYVhORWFYTmhZbXhsWkN4Y2JpQWdJQ0IwYUdWdFpUb2dlMXh1SUNBZ0lDQWdjM0JoWTJsdVp6b2dleUJpWVhObFZXNXBkQ0I5TEZ4dUlDQWdJQ0FnWTI5c2IzSnpMRnh1SUNBZ0lIMHNYRzRnSUgwNklFbHVaR2xqWVhSdmNsTmxjR0Z5WVhSdmNsQnliM0J6UEU5d2RHbHZiaXdnU1hOTmRXeDBhU3dnUjNKdmRYQStMRnh1SUNCMWJuTjBlV3hsWkRvZ1ltOXZiR1ZoYmx4dUtUb2dRMU5UVDJKcVpXTjBWMmwwYUV4aFltVnNJRDArSUNoN1hHNGdJR3hoWW1Wc09pQW5hVzVrYVdOaGRHOXlVMlZ3WVhKaGRHOXlKeXhjYmlBZ1lXeHBaMjVUWld4bU9pQW5jM1J5WlhSamFDY3NYRzRnSUhkcFpIUm9PaUF4TEZ4dUlDQXVMaTRvZFc1emRIbHNaV1JjYmlBZ0lDQS9JSHQ5WEc0Z0lDQWdPaUI3WEc0Z0lDQWdJQ0FnSUdKaFkydG5jbTkxYm1SRGIyeHZjam9nYVhORWFYTmhZbXhsWkNBL0lHTnZiRzl5Y3k1dVpYVjBjbUZzTVRBZ09pQmpiMnh2Y25NdWJtVjFkSEpoYkRJd0xGeHVJQ0FnSUNBZ0lDQnRZWEpuYVc1Q2IzUjBiMjA2SUdKaGMyVlZibWwwSUNvZ01peGNiaUFnSUNBZ0lDQWdiV0Z5WjJsdVZHOXdPaUJpWVhObFZXNXBkQ0FxSURJc1hHNGdJQ0FnSUNCOUtTeGNibjBwTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnU1c1a2FXTmhkRzl5VTJWd1lYSmhkRzl5SUQwZ1BGeHVJQ0JQY0hScGIyNHNYRzRnSUVselRYVnNkR2tnWlhoMFpXNWtjeUJpYjI5c1pXRnVMRnh1SUNCSGNtOTFjQ0JsZUhSbGJtUnpJRWR5YjNWd1FtRnpaVHhQY0hScGIyNCtYRzQrS0Z4dUlDQndjbTl3Y3pvZ1NXNWthV05oZEc5eVUyVndZWEpoZEc5eVVISnZjSE04VDNCMGFXOXVMQ0JKYzAxMWJIUnBMQ0JIY205MWNENWNiaWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQjdJR2x1Ym1WeVVISnZjSE1nZlNBOUlIQnliM0J6TzF4dUlDQnlaWFIxY200Z0tGeHVJQ0FnSUR4emNHRnVYRzRnSUNBZ0lDQjdMaTR1YVc1dVpYSlFjbTl3YzMxY2JpQWdJQ0FnSUhzdUxpNW5aWFJUZEhsc1pWQnliM0J6S0hCeWIzQnpMQ0FuYVc1a2FXTmhkRzl5VTJWd1lYSmhkRzl5Snl3Z2UxeHVJQ0FnSUNBZ0lDQW5hVzVrYVdOaGRHOXlMWE5sY0dGeVlYUnZjaWM2SUhSeWRXVXNYRzRnSUNBZ0lDQjlLWDFjYmlBZ0lDQXZQbHh1SUNBcE8xeHVmVHRjYmx4dUx5OGdQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5WEc0dkx5Qk1iMkZrYVc1blhHNHZMeUE5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2JseHVZMjl1YzNRZ2JHOWhaR2x1WjBSdmRFRnVhVzFoZEdsdmJuTWdQU0JyWlhsbWNtRnRaWE5nWEc0Z0lEQWxMQ0E0TUNVc0lERXdNQ1VnZXlCdmNHRmphWFI1T2lBd095QjlYRzRnSURRd0pTQjdJRzl3WVdOcGRIazZJREU3SUgxY2JtQTdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnNiMkZrYVc1blNXNWthV05oZEc5eVExTlRJRDBnUEZ4dUlDQlBjSFJwYjI0c1hHNGdJRWx6VFhWc2RHa2daWGgwWlc1a2N5QmliMjlzWldGdUxGeHVJQ0JIY205MWNDQmxlSFJsYm1SeklFZHliM1Z3UW1GelpUeFBjSFJwYjI0K1hHNCtLRnh1SUNCN1hHNGdJQ0FnYVhOR2IyTjFjMlZrTEZ4dUlDQWdJSE5wZW1Vc1hHNGdJQ0FnZEdobGJXVTZJSHRjYmlBZ0lDQWdJR052Ykc5eWN5eGNiaUFnSUNBZ0lITndZV05wYm1jNklIc2dZbUZ6WlZWdWFYUWdmU3hjYmlBZ0lDQjlMRnh1SUNCOU9pQk1iMkZrYVc1blNXNWthV05oZEc5eVVISnZjSE04VDNCMGFXOXVMQ0JKYzAxMWJIUnBMQ0JIY205MWNENHNYRzRnSUhWdWMzUjViR1ZrT2lCaWIyOXNaV0Z1WEc0cE9pQkRVMU5QWW1wbFkzUlhhWFJvVEdGaVpXd2dQVDRnS0h0Y2JpQWdiR0ZpWld3NklDZHNiMkZrYVc1blNXNWthV05oZEc5eUp5eGNiaUFnWkdsemNHeGhlVG9nSjJac1pYZ25MRnh1SUNCMGNtRnVjMmwwYVc5dU9pQW5ZMjlzYjNJZ01UVXdiWE1uTEZ4dUlDQmhiR2xuYmxObGJHWTZJQ2RqWlc1MFpYSW5MRnh1SUNCbWIyNTBVMmw2WlRvZ2MybDZaU3hjYmlBZ2JHbHVaVWhsYVdkb2REb2dNU3hjYmlBZ2JXRnlaMmx1VW1sbmFIUTZJSE5wZW1Vc1hHNGdJSFJsZUhSQmJHbG5iam9nSjJObGJuUmxjaWNzWEc0Z0lIWmxjblJwWTJGc1FXeHBaMjQ2SUNkdGFXUmtiR1VuTEZ4dUlDQXVMaTRvZFc1emRIbHNaV1JjYmlBZ0lDQS9JSHQ5WEc0Z0lDQWdPaUI3WEc0Z0lDQWdJQ0FnSUdOdmJHOXlPaUJwYzBadlkzVnpaV1FnUHlCamIyeHZjbk11Ym1WMWRISmhiRFl3SURvZ1kyOXNiM0p6TG01bGRYUnlZV3d5TUN4Y2JpQWdJQ0FnSUNBZ2NHRmtaR2x1WnpvZ1ltRnpaVlZ1YVhRZ0tpQXlMRnh1SUNBZ0lDQWdmU2tzWEc1OUtUdGNibHh1YVc1MFpYSm1ZV05sSUV4dllXUnBibWRFYjNSUWNtOXdjeUI3WEc0Z0lHUmxiR0Y1T2lCdWRXMWlaWEk3WEc0Z0lHOW1abk5sZERvZ1ltOXZiR1ZoYmp0Y2JuMWNibU52Ym5OMElFeHZZV1JwYm1kRWIzUWdQU0FvZXlCa1pXeGhlU3dnYjJabWMyVjBJSDA2SUV4dllXUnBibWRFYjNSUWNtOXdjeWtnUFQ0Z0tGeHVJQ0E4YzNCaGJseHVJQ0FnSUdOemN6MTdlMXh1SUNBZ0lDQWdZVzVwYldGMGFXOXVPaUJnSkh0c2IyRmthVzVuUkc5MFFXNXBiV0YwYVc5dWMzMGdNWE1nWldGelpTMXBiaTF2ZFhRZ0pIdGtaV3hoZVgxdGN5QnBibVpwYm1sMFpUdGdMRnh1SUNBZ0lDQWdZbUZqYTJkeWIzVnVaRU52Ykc5eU9pQW5ZM1Z5Y21WdWRFTnZiRzl5Snl4Y2JpQWdJQ0FnSUdKdmNtUmxjbEpoWkdsMWN6b2dKekZsYlNjc1hHNGdJQ0FnSUNCa2FYTndiR0Y1T2lBbmFXNXNhVzVsTFdKc2IyTnJKeXhjYmlBZ0lDQWdJRzFoY21kcGJreGxablE2SUc5bVpuTmxkQ0EvSUNjeFpXMG5JRG9nZFc1a1pXWnBibVZrTEZ4dUlDQWdJQ0FnYUdWcFoyaDBPaUFuTVdWdEp5eGNiaUFnSUNBZ0lIWmxjblJwWTJGc1FXeHBaMjQ2SUNkMGIzQW5MRnh1SUNBZ0lDQWdkMmxrZEdnNklDY3haVzBuTEZ4dUlDQWdJSDE5WEc0Z0lDOCtYRzRwTzF4dVhHNWxlSEJ2Y25RZ2FXNTBaWEptWVdObElFeHZZV1JwYm1kSmJtUnBZMkYwYjNKUWNtOXdjenhjYmlBZ1QzQjBhVzl1SUQwZ2RXNXJibTkzYml4Y2JpQWdTWE5OZFd4MGFTQmxlSFJsYm1SeklHSnZiMnhsWVc0Z1BTQmliMjlzWldGdUxGeHVJQ0JIY205MWNDQmxlSFJsYm1SeklFZHliM1Z3UW1GelpUeFBjSFJwYjI0K0lEMGdSM0p2ZFhCQ1lYTmxQRTl3ZEdsdmJqNWNiajRnWlhoMFpXNWtjeUJEYjIxdGIyNVFjbTl3YzBGdVpFTnNZWE56VG1GdFpUeFBjSFJwYjI0c0lFbHpUWFZzZEdrc0lFZHliM1Z3UGlCN1hHNGdJQzhxS2lCUWNtOXdjeUIwYUdGMElIZHBiR3dnWW1VZ2NHRnpjMlZrSUc5dUlIUnZJSFJvWlNCamFHbHNaSEpsYmk0Z0tpOWNiaUFnYVc1dVpYSlFjbTl3Y3pvZ1NsTllMa2x1ZEhKcGJuTnBZMFZzWlcxbGJuUnpXeWRrYVhZblhUdGNiaUFnTHlvcUlGUm9aU0JtYjJOMWMyVmtJSE4wWVhSbElHOW1JSFJvWlNCelpXeGxZM1F1SUNvdlhHNGdJR2x6Um05amRYTmxaRG9nWW05dmJHVmhianRjYmlBZ2FYTkVhWE5oWW14bFpEb2dZbTl2YkdWaGJqdGNiaUFnTHlvcUlGTmxkQ0J6YVhwbElHOW1JSFJvWlNCamIyNTBZV2x1WlhJdUlDb3ZYRzRnSUhOcGVtVTZJRzUxYldKbGNqdGNibjFjYm1WNGNHOXlkQ0JqYjI1emRDQk1iMkZrYVc1blNXNWthV05oZEc5eUlEMGdQRnh1SUNCUGNIUnBiMjRzWEc0Z0lFbHpUWFZzZEdrZ1pYaDBaVzVrY3lCaWIyOXNaV0Z1TEZ4dUlDQkhjbTkxY0NCbGVIUmxibVJ6SUVkeWIzVndRbUZ6WlR4UGNIUnBiMjQrWEc0K0tIdGNiaUFnYVc1dVpYSlFjbTl3Y3l4Y2JpQWdhWE5TZEd3c1hHNGdJSE5wZW1VZ1BTQTBMRnh1SUNBdUxpNXlaWE4wVUhKdmNITmNibjA2SUV4dllXUnBibWRKYm1ScFkyRjBiM0pRY205d2N6eFBjSFJwYjI0c0lFbHpUWFZzZEdrc0lFZHliM1Z3UGlrZ1BUNGdlMXh1SUNCeVpYUjFjbTRnS0Z4dUlDQWdJRHhrYVhaY2JpQWdJQ0FnSUhzdUxpNW5aWFJUZEhsc1pWQnliM0J6S0Z4dUlDQWdJQ0FnSUNCN0lDNHVMbkpsYzNSUWNtOXdjeXdnYVc1dVpYSlFjbTl3Y3l3Z2FYTlNkR3dzSUhOcGVtVWdmU3hjYmlBZ0lDQWdJQ0FnSjJ4dllXUnBibWRKYm1ScFkyRjBiM0luTEZ4dUlDQWdJQ0FnSUNCN1hHNGdJQ0FnSUNBZ0lDQWdhVzVrYVdOaGRHOXlPaUIwY25WbExGeHVJQ0FnSUNBZ0lDQWdJQ2RzYjJGa2FXNW5MV2x1WkdsallYUnZjaWM2SUhSeWRXVXNYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ2w5WEc0Z0lDQWdJQ0I3TGk0dWFXNXVaWEpRY205d2MzMWNiaUFnSUNBK1hHNGdJQ0FnSUNBOFRHOWhaR2x1WjBSdmRDQmtaV3hoZVQxN01IMGdiMlptYzJWMFBYdHBjMUowYkgwZ0x6NWNiaUFnSUNBZ0lEeE1iMkZrYVc1blJHOTBJR1JsYkdGNVBYc3hOakI5SUc5bVpuTmxkQ0F2UGx4dUlDQWdJQ0FnUEV4dllXUnBibWRFYjNRZ1pHVnNZWGs5ZXpNeU1IMGdiMlptYzJWMFBYc2hhWE5TZEd4OUlDOCtYRzRnSUNBZ1BDOWthWFkrWEc0Z0lDazdYRzU5TzF4dUlsMTkgKi9cIilcbiAgfSk7XG59O1xudmFyIExvYWRpbmdJbmRpY2F0b3IgPSBmdW5jdGlvbiBMb2FkaW5nSW5kaWNhdG9yKF9yZWY3KSB7XG4gIHZhciBpbm5lclByb3BzID0gX3JlZjcuaW5uZXJQcm9wcyxcbiAgICBpc1J0bCA9IF9yZWY3LmlzUnRsLFxuICAgIF9yZWY3JHNpemUgPSBfcmVmNy5zaXplLFxuICAgIHNpemUgPSBfcmVmNyRzaXplID09PSB2b2lkIDAgPyA0IDogX3JlZjckc2l6ZSxcbiAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZjcsIF9leGNsdWRlZDIpO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBnZXRTdHlsZVByb3BzKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcmVzdFByb3BzKSwge30sIHtcbiAgICBpbm5lclByb3BzOiBpbm5lclByb3BzLFxuICAgIGlzUnRsOiBpc1J0bCxcbiAgICBzaXplOiBzaXplXG4gIH0pLCAnbG9hZGluZ0luZGljYXRvcicsIHtcbiAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZVxuICB9KSwgaW5uZXJQcm9wcyksIGpzeChMb2FkaW5nRG90LCB7XG4gICAgZGVsYXk6IDAsXG4gICAgb2Zmc2V0OiBpc1J0bFxuICB9KSwganN4KExvYWRpbmdEb3QsIHtcbiAgICBkZWxheTogMTYwLFxuICAgIG9mZnNldDogdHJ1ZVxuICB9KSwganN4KExvYWRpbmdEb3QsIHtcbiAgICBkZWxheTogMzIwLFxuICAgIG9mZnNldDogIWlzUnRsXG4gIH0pKTtcbn07XG5cbnZhciBjc3MkMSA9IGZ1bmN0aW9uIGNzcyhfcmVmLCB1bnN0eWxlZCkge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9yZWYuaXNEaXNhYmxlZCxcbiAgICBpc0ZvY3VzZWQgPSBfcmVmLmlzRm9jdXNlZCxcbiAgICBfcmVmJHRoZW1lID0gX3JlZi50aGVtZSxcbiAgICBjb2xvcnMgPSBfcmVmJHRoZW1lLmNvbG9ycyxcbiAgICBib3JkZXJSYWRpdXMgPSBfcmVmJHRoZW1lLmJvcmRlclJhZGl1cyxcbiAgICBzcGFjaW5nID0gX3JlZiR0aGVtZS5zcGFjaW5nO1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgbGFiZWw6ICdjb250cm9sJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIG1pbkhlaWdodDogc3BhY2luZy5jb250cm9sSGVpZ2h0LFxuICAgIG91dGxpbmU6ICcwICFpbXBvcnRhbnQnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMTAwbXMnXG4gIH0sIHVuc3R5bGVkID8ge30gOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWw1IDogY29sb3JzLm5ldXRyYWwwLFxuICAgIGJvcmRlckNvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGlzRm9jdXNlZCA/IGNvbG9ycy5wcmltYXJ5IDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgICBib3JkZXJXaWR0aDogMSxcbiAgICBib3hTaGFkb3c6IGlzRm9jdXNlZCA/IFwiMCAwIDAgMXB4IFwiLmNvbmNhdChjb2xvcnMucHJpbWFyeSkgOiB1bmRlZmluZWQsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBib3JkZXJDb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLnByaW1hcnkgOiBjb2xvcnMubmV1dHJhbDMwXG4gICAgfVxuICB9KTtcbn07XG52YXIgQ29udHJvbCA9IGZ1bmN0aW9uIENvbnRyb2wocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgaXNEaXNhYmxlZCA9IHByb3BzLmlzRGlzYWJsZWQsXG4gICAgaXNGb2N1c2VkID0gcHJvcHMuaXNGb2N1c2VkLFxuICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgbWVudUlzT3BlbiA9IHByb3BzLm1lbnVJc09wZW47XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIHJlZjogaW5uZXJSZWZcbiAgfSwgZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2NvbnRyb2wnLCB7XG4gICAgY29udHJvbDogdHJ1ZSxcbiAgICAnY29udHJvbC0taXMtZGlzYWJsZWQnOiBpc0Rpc2FibGVkLFxuICAgICdjb250cm9sLS1pcy1mb2N1c2VkJzogaXNGb2N1c2VkLFxuICAgICdjb250cm9sLS1tZW51LWlzLW9wZW4nOiBtZW51SXNPcGVuXG4gIH0pLCBpbm5lclByb3BzLCB7XG4gICAgXCJhcmlhLWRpc2FibGVkXCI6IGlzRGlzYWJsZWQgfHwgdW5kZWZpbmVkXG4gIH0pLCBjaGlsZHJlbik7XG59O1xudmFyIENvbnRyb2wkMSA9IENvbnRyb2w7XG5cbnZhciBfZXhjbHVkZWQkMSA9IFtcImRhdGFcIl07XG52YXIgZ3JvdXBDU1MgPSBmdW5jdGlvbiBncm91cENTUyhfcmVmLCB1bnN0eWxlZCkge1xuICB2YXIgc3BhY2luZyA9IF9yZWYudGhlbWUuc3BhY2luZztcbiAgcmV0dXJuIHVuc3R5bGVkID8ge30gOiB7XG4gICAgcGFkZGluZ0JvdHRvbTogc3BhY2luZy5iYXNlVW5pdCAqIDIsXG4gICAgcGFkZGluZ1RvcDogc3BhY2luZy5iYXNlVW5pdCAqIDJcbiAgfTtcbn07XG52YXIgR3JvdXAgPSBmdW5jdGlvbiBHcm91cChwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICBjeCA9IHByb3BzLmN4LFxuICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICBnZXRDbGFzc05hbWVzID0gcHJvcHMuZ2V0Q2xhc3NOYW1lcyxcbiAgICBIZWFkaW5nID0gcHJvcHMuSGVhZGluZyxcbiAgICBoZWFkaW5nUHJvcHMgPSBwcm9wcy5oZWFkaW5nUHJvcHMsXG4gICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgbGFiZWwgPSBwcm9wcy5sYWJlbCxcbiAgICB0aGVtZSA9IHByb3BzLnRoZW1lLFxuICAgIHNlbGVjdFByb3BzID0gcHJvcHMuc2VsZWN0UHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe30sIGdldFN0eWxlUHJvcHMocHJvcHMsICdncm91cCcsIHtcbiAgICBncm91cDogdHJ1ZVxuICB9KSwgaW5uZXJQcm9wcyksIGpzeChIZWFkaW5nLCBfZXh0ZW5kcyh7fSwgaGVhZGluZ1Byb3BzLCB7XG4gICAgc2VsZWN0UHJvcHM6IHNlbGVjdFByb3BzLFxuICAgIHRoZW1lOiB0aGVtZSxcbiAgICBnZXRTdHlsZXM6IGdldFN0eWxlcyxcbiAgICBnZXRDbGFzc05hbWVzOiBnZXRDbGFzc05hbWVzLFxuICAgIGN4OiBjeFxuICB9KSwgbGFiZWwpLCBqc3goXCJkaXZcIiwgbnVsbCwgY2hpbGRyZW4pKTtcbn07XG52YXIgZ3JvdXBIZWFkaW5nQ1NTID0gZnVuY3Rpb24gZ3JvdXBIZWFkaW5nQ1NTKF9yZWYyLCB1bnN0eWxlZCkge1xuICB2YXIgX3JlZjIkdGhlbWUgPSBfcmVmMi50aGVtZSxcbiAgICBjb2xvcnMgPSBfcmVmMiR0aGVtZS5jb2xvcnMsXG4gICAgc3BhY2luZyA9IF9yZWYyJHRoZW1lLnNwYWNpbmc7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKHtcbiAgICBsYWJlbDogJ2dyb3VwJyxcbiAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICBkaXNwbGF5OiAnYmxvY2snXG4gIH0sIHVuc3R5bGVkID8ge30gOiB7XG4gICAgY29sb3I6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgZm9udFNpemU6ICc3NSUnLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBtYXJnaW5Cb3R0b206ICcwLjI1ZW0nLFxuICAgIHBhZGRpbmdMZWZ0OiBzcGFjaW5nLmJhc2VVbml0ICogMyxcbiAgICBwYWRkaW5nUmlnaHQ6IHNwYWNpbmcuYmFzZVVuaXQgKiAzLFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnXG4gIH0pO1xufTtcbnZhciBHcm91cEhlYWRpbmcgPSBmdW5jdGlvbiBHcm91cEhlYWRpbmcocHJvcHMpIHtcbiAgdmFyIF9jbGVhbkNvbW1vblByb3BzID0gY2xlYW5Db21tb25Qcm9wcyhwcm9wcyk7XG4gICAgX2NsZWFuQ29tbW9uUHJvcHMuZGF0YTtcbiAgICB2YXIgaW5uZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfY2xlYW5Db21tb25Qcm9wcywgX2V4Y2x1ZGVkJDEpO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBnZXRTdHlsZVByb3BzKHByb3BzLCAnZ3JvdXBIZWFkaW5nJywge1xuICAgICdncm91cC1oZWFkaW5nJzogdHJ1ZVxuICB9KSwgaW5uZXJQcm9wcykpO1xufTtcbnZhciBHcm91cCQxID0gR3JvdXA7XG5cbnZhciBfZXhjbHVkZWQgPSBbXCJpbm5lclJlZlwiLCBcImlzRGlzYWJsZWRcIiwgXCJpc0hpZGRlblwiLCBcImlucHV0Q2xhc3NOYW1lXCJdO1xudmFyIGlucHV0Q1NTID0gZnVuY3Rpb24gaW5wdXRDU1MoX3JlZiwgdW5zdHlsZWQpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfcmVmLmlzRGlzYWJsZWQsXG4gICAgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgIF9yZWYkdGhlbWUgPSBfcmVmLnRoZW1lLFxuICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmcsXG4gICAgY29sb3JzID0gX3JlZiR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe1xuICAgIHZpc2liaWxpdHk6IGlzRGlzYWJsZWQgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJyxcbiAgICAvLyBmb3JjZSBjc3MgdG8gcmVjb21wdXRlIHdoZW4gdmFsdWUgY2hhbmdlIGR1ZSB0byBAZW1vdGlvbiBidWcuXG4gICAgLy8gV2UgY2FuIHJlbW92ZSBpdCB3aGVuZXZlciB0aGUgYnVnIGlzIGZpeGVkLlxuICAgIHRyYW5zZm9ybTogdmFsdWUgPyAndHJhbnNsYXRlWigwKScgOiAnJ1xuICB9LCBjb250YWluZXJTdHlsZSksIHVuc3R5bGVkID8ge30gOiB7XG4gICAgbWFyZ2luOiBzcGFjaW5nLmJhc2VVbml0IC8gMixcbiAgICBwYWRkaW5nQm90dG9tOiBzcGFjaW5nLmJhc2VVbml0IC8gMixcbiAgICBwYWRkaW5nVG9wOiBzcGFjaW5nLmJhc2VVbml0IC8gMixcbiAgICBjb2xvcjogY29sb3JzLm5ldXRyYWw4MFxuICB9KTtcbn07XG52YXIgc3BhY2luZ1N0eWxlID0ge1xuICBncmlkQXJlYTogJzEgLyAyJyxcbiAgZm9udDogJ2luaGVyaXQnLFxuICBtaW5XaWR0aDogJzJweCcsXG4gIGJvcmRlcjogMCxcbiAgbWFyZ2luOiAwLFxuICBvdXRsaW5lOiAwLFxuICBwYWRkaW5nOiAwXG59O1xudmFyIGNvbnRhaW5lclN0eWxlID0ge1xuICBmbGV4OiAnMSAxIGF1dG8nLFxuICBkaXNwbGF5OiAnaW5saW5lLWdyaWQnLFxuICBncmlkQXJlYTogJzEgLyAxIC8gMiAvIDMnLFxuICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMCBtaW4tY29udGVudCcsXG4gICcmOmFmdGVyJzogX29iamVjdFNwcmVhZCh7XG4gICAgY29udGVudDogJ2F0dHIoZGF0YS12YWx1ZSkgXCIgXCInLFxuICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgIHdoaXRlU3BhY2U6ICdwcmUnXG4gIH0sIHNwYWNpbmdTdHlsZSlcbn07XG52YXIgaW5wdXRTdHlsZSA9IGZ1bmN0aW9uIGlucHV0U3R5bGUoaXNIaWRkZW4pIHtcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe1xuICAgIGxhYmVsOiAnaW5wdXQnLFxuICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgYmFja2dyb3VuZDogMCxcbiAgICBvcGFjaXR5OiBpc0hpZGRlbiA/IDAgOiAxLFxuICAgIHdpZHRoOiAnMTAwJSdcbiAgfSwgc3BhY2luZ1N0eWxlKTtcbn07XG52YXIgSW5wdXQgPSBmdW5jdGlvbiBJbnB1dChwcm9wcykge1xuICB2YXIgY3ggPSBwcm9wcy5jeCxcbiAgICB2YWx1ZSA9IHByb3BzLnZhbHVlO1xuICB2YXIgX2NsZWFuQ29tbW9uUHJvcHMgPSBjbGVhbkNvbW1vblByb3BzKHByb3BzKSxcbiAgICBpbm5lclJlZiA9IF9jbGVhbkNvbW1vblByb3BzLmlubmVyUmVmLFxuICAgIGlzRGlzYWJsZWQgPSBfY2xlYW5Db21tb25Qcm9wcy5pc0Rpc2FibGVkLFxuICAgIGlzSGlkZGVuID0gX2NsZWFuQ29tbW9uUHJvcHMuaXNIaWRkZW4sXG4gICAgaW5wdXRDbGFzc05hbWUgPSBfY2xlYW5Db21tb25Qcm9wcy5pbnB1dENsYXNzTmFtZSxcbiAgICBpbm5lclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9jbGVhbkNvbW1vblByb3BzLCBfZXhjbHVkZWQpO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBnZXRTdHlsZVByb3BzKHByb3BzLCAnaW5wdXQnLCB7XG4gICAgJ2lucHV0LWNvbnRhaW5lcic6IHRydWVcbiAgfSksIHtcbiAgICBcImRhdGEtdmFsdWVcIjogdmFsdWUgfHwgJydcbiAgfSksIGpzeChcImlucHV0XCIsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgIGlucHV0OiB0cnVlXG4gICAgfSwgaW5wdXRDbGFzc05hbWUpLFxuICAgIHJlZjogaW5uZXJSZWYsXG4gICAgc3R5bGU6IGlucHV0U3R5bGUoaXNIaWRkZW4pLFxuICAgIGRpc2FibGVkOiBpc0Rpc2FibGVkXG4gIH0sIGlubmVyUHJvcHMpKSk7XG59O1xudmFyIElucHV0JDEgPSBJbnB1dDtcblxudmFyIG11bHRpVmFsdWVDU1MgPSBmdW5jdGlvbiBtdWx0aVZhbHVlQ1NTKF9yZWYsIHVuc3R5bGVkKSB7XG4gIHZhciBfcmVmJHRoZW1lID0gX3JlZi50aGVtZSxcbiAgICBzcGFjaW5nID0gX3JlZiR0aGVtZS5zcGFjaW5nLFxuICAgIGJvcmRlclJhZGl1cyA9IF9yZWYkdGhlbWUuYm9yZGVyUmFkaXVzLFxuICAgIGNvbG9ycyA9IF9yZWYkdGhlbWUuY29sb3JzO1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgbGFiZWw6ICdtdWx0aVZhbHVlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgbWluV2lkdGg6IDBcbiAgfSwgdW5zdHlsZWQgPyB7fSA6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5uZXV0cmFsMTAsXG4gICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMgLyAyLFxuICAgIG1hcmdpbjogc3BhY2luZy5iYXNlVW5pdCAvIDJcbiAgfSk7XG59O1xudmFyIG11bHRpVmFsdWVMYWJlbENTUyA9IGZ1bmN0aW9uIG11bHRpVmFsdWVMYWJlbENTUyhfcmVmMiwgdW5zdHlsZWQpIHtcbiAgdmFyIF9yZWYyJHRoZW1lID0gX3JlZjIudGhlbWUsXG4gICAgYm9yZGVyUmFkaXVzID0gX3JlZjIkdGhlbWUuYm9yZGVyUmFkaXVzLFxuICAgIGNvbG9ycyA9IF9yZWYyJHRoZW1lLmNvbG9ycyxcbiAgICBjcm9wV2l0aEVsbGlwc2lzID0gX3JlZjIuY3JvcFdpdGhFbGxpcHNpcztcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe1xuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB0ZXh0T3ZlcmZsb3c6IGNyb3BXaXRoRWxsaXBzaXMgfHwgY3JvcFdpdGhFbGxpcHNpcyA9PT0gdW5kZWZpbmVkID8gJ2VsbGlwc2lzJyA6IHVuZGVmaW5lZCxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICB9LCB1bnN0eWxlZCA/IHt9IDoge1xuICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzIC8gMixcbiAgICBjb2xvcjogY29sb3JzLm5ldXRyYWw4MCxcbiAgICBmb250U2l6ZTogJzg1JScsXG4gICAgcGFkZGluZzogMyxcbiAgICBwYWRkaW5nTGVmdDogNlxuICB9KTtcbn07XG52YXIgbXVsdGlWYWx1ZVJlbW92ZUNTUyA9IGZ1bmN0aW9uIG11bHRpVmFsdWVSZW1vdmVDU1MoX3JlZjMsIHVuc3R5bGVkKSB7XG4gIHZhciBfcmVmMyR0aGVtZSA9IF9yZWYzLnRoZW1lLFxuICAgIHNwYWNpbmcgPSBfcmVmMyR0aGVtZS5zcGFjaW5nLFxuICAgIGJvcmRlclJhZGl1cyA9IF9yZWYzJHRoZW1lLmJvcmRlclJhZGl1cyxcbiAgICBjb2xvcnMgPSBfcmVmMyR0aGVtZS5jb2xvcnMsXG4gICAgaXNGb2N1c2VkID0gX3JlZjMuaXNGb2N1c2VkO1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgZGlzcGxheTogJ2ZsZXgnXG4gIH0sIHVuc3R5bGVkID8ge30gOiB7XG4gICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMgLyAyLFxuICAgIGJhY2tncm91bmRDb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLmRhbmdlckxpZ2h0IDogdW5kZWZpbmVkLFxuICAgIHBhZGRpbmdMZWZ0OiBzcGFjaW5nLmJhc2VVbml0LFxuICAgIHBhZGRpbmdSaWdodDogc3BhY2luZy5iYXNlVW5pdCxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZGFuZ2VyTGlnaHQsXG4gICAgICBjb2xvcjogY29sb3JzLmRhbmdlclxuICAgIH1cbiAgfSk7XG59O1xudmFyIE11bHRpVmFsdWVHZW5lcmljID0gZnVuY3Rpb24gTXVsdGlWYWx1ZUdlbmVyaWMoX3JlZjQpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZjQuY2hpbGRyZW4sXG4gICAgaW5uZXJQcm9wcyA9IF9yZWY0LmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgaW5uZXJQcm9wcywgY2hpbGRyZW4pO1xufTtcbnZhciBNdWx0aVZhbHVlQ29udGFpbmVyID0gTXVsdGlWYWx1ZUdlbmVyaWM7XG52YXIgTXVsdGlWYWx1ZUxhYmVsID0gTXVsdGlWYWx1ZUdlbmVyaWM7XG5mdW5jdGlvbiBNdWx0aVZhbHVlUmVtb3ZlKF9yZWY1KSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWY1LmNoaWxkcmVuLFxuICAgIGlubmVyUHJvcHMgPSBfcmVmNS5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICByb2xlOiBcImJ1dHRvblwiXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbiB8fCBqc3goQ3Jvc3NJY29uLCB7XG4gICAgc2l6ZTogMTRcbiAgfSkpO1xufVxudmFyIE11bHRpVmFsdWUgPSBmdW5jdGlvbiBNdWx0aVZhbHVlKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgIGNvbXBvbmVudHMgPSBwcm9wcy5jb21wb25lbnRzLFxuICAgIGRhdGEgPSBwcm9wcy5kYXRhLFxuICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzLFxuICAgIGlzRGlzYWJsZWQgPSBwcm9wcy5pc0Rpc2FibGVkLFxuICAgIHJlbW92ZVByb3BzID0gcHJvcHMucmVtb3ZlUHJvcHMsXG4gICAgc2VsZWN0UHJvcHMgPSBwcm9wcy5zZWxlY3RQcm9wcztcbiAgdmFyIENvbnRhaW5lciA9IGNvbXBvbmVudHMuQ29udGFpbmVyLFxuICAgIExhYmVsID0gY29tcG9uZW50cy5MYWJlbCxcbiAgICBSZW1vdmUgPSBjb21wb25lbnRzLlJlbW92ZTtcbiAgcmV0dXJuIGpzeChDb250YWluZXIsIHtcbiAgICBkYXRhOiBkYXRhLFxuICAgIGlubmVyUHJvcHM6IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ211bHRpVmFsdWUnLCB7XG4gICAgICAnbXVsdGktdmFsdWUnOiB0cnVlLFxuICAgICAgJ211bHRpLXZhbHVlLS1pcy1kaXNhYmxlZCc6IGlzRGlzYWJsZWRcbiAgICB9KSksIGlubmVyUHJvcHMpLFxuICAgIHNlbGVjdFByb3BzOiBzZWxlY3RQcm9wc1xuICB9LCBqc3goTGFiZWwsIHtcbiAgICBkYXRhOiBkYXRhLFxuICAgIGlubmVyUHJvcHM6IF9vYmplY3RTcHJlYWQoe30sIGdldFN0eWxlUHJvcHMocHJvcHMsICdtdWx0aVZhbHVlTGFiZWwnLCB7XG4gICAgICAnbXVsdGktdmFsdWVfX2xhYmVsJzogdHJ1ZVxuICAgIH0pKSxcbiAgICBzZWxlY3RQcm9wczogc2VsZWN0UHJvcHNcbiAgfSwgY2hpbGRyZW4pLCBqc3goUmVtb3ZlLCB7XG4gICAgZGF0YTogZGF0YSxcbiAgICBpbm5lclByb3BzOiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGdldFN0eWxlUHJvcHMocHJvcHMsICdtdWx0aVZhbHVlUmVtb3ZlJywge1xuICAgICAgJ211bHRpLXZhbHVlX19yZW1vdmUnOiB0cnVlXG4gICAgfSkpLCB7fSwge1xuICAgICAgJ2FyaWEtbGFiZWwnOiBcIlJlbW92ZSBcIi5jb25jYXQoY2hpbGRyZW4gfHwgJ29wdGlvbicpXG4gICAgfSwgcmVtb3ZlUHJvcHMpLFxuICAgIHNlbGVjdFByb3BzOiBzZWxlY3RQcm9wc1xuICB9KSk7XG59O1xudmFyIE11bHRpVmFsdWUkMSA9IE11bHRpVmFsdWU7XG5cbnZhciBvcHRpb25DU1MgPSBmdW5jdGlvbiBvcHRpb25DU1MoX3JlZiwgdW5zdHlsZWQpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfcmVmLmlzRGlzYWJsZWQsXG4gICAgaXNGb2N1c2VkID0gX3JlZi5pc0ZvY3VzZWQsXG4gICAgaXNTZWxlY3RlZCA9IF9yZWYuaXNTZWxlY3RlZCxcbiAgICBfcmVmJHRoZW1lID0gX3JlZi50aGVtZSxcbiAgICBzcGFjaW5nID0gX3JlZiR0aGVtZS5zcGFjaW5nLFxuICAgIGNvbG9ycyA9IF9yZWYkdGhlbWUuY29sb3JzO1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgbGFiZWw6ICdvcHRpb24nLFxuICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICBXZWJraXRUYXBIaWdobGlnaHRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknXG4gIH0sIHVuc3R5bGVkID8ge30gOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBpc1NlbGVjdGVkID8gY29sb3JzLnByaW1hcnkgOiBpc0ZvY3VzZWQgPyBjb2xvcnMucHJpbWFyeTI1IDogJ3RyYW5zcGFyZW50JyxcbiAgICBjb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsMjAgOiBpc1NlbGVjdGVkID8gY29sb3JzLm5ldXRyYWwwIDogJ2luaGVyaXQnLFxuICAgIHBhZGRpbmc6IFwiXCIuY29uY2F0KHNwYWNpbmcuYmFzZVVuaXQgKiAyLCBcInB4IFwiKS5jb25jYXQoc3BhY2luZy5iYXNlVW5pdCAqIDMsIFwicHhcIiksXG4gICAgLy8gcHJvdmlkZSBzb21lIGFmZm9yZGFuY2Ugb24gdG91Y2ggZGV2aWNlc1xuICAgICc6YWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAhaXNEaXNhYmxlZCA/IGlzU2VsZWN0ZWQgPyBjb2xvcnMucHJpbWFyeSA6IGNvbG9ycy5wcmltYXJ5NTAgOiB1bmRlZmluZWRcbiAgICB9XG4gIH0pO1xufTtcbnZhciBPcHRpb24gPSBmdW5jdGlvbiBPcHRpb24ocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgaXNEaXNhYmxlZCA9IHByb3BzLmlzRGlzYWJsZWQsXG4gICAgaXNGb2N1c2VkID0gcHJvcHMuaXNGb2N1c2VkLFxuICAgIGlzU2VsZWN0ZWQgPSBwcm9wcy5pc1NlbGVjdGVkLFxuICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe30sIGdldFN0eWxlUHJvcHMocHJvcHMsICdvcHRpb24nLCB7XG4gICAgb3B0aW9uOiB0cnVlLFxuICAgICdvcHRpb24tLWlzLWRpc2FibGVkJzogaXNEaXNhYmxlZCxcbiAgICAnb3B0aW9uLS1pcy1mb2N1c2VkJzogaXNGb2N1c2VkLFxuICAgICdvcHRpb24tLWlzLXNlbGVjdGVkJzogaXNTZWxlY3RlZFxuICB9KSwge1xuICAgIHJlZjogaW5uZXJSZWYsXG4gICAgXCJhcmlhLWRpc2FibGVkXCI6IGlzRGlzYWJsZWRcbiAgfSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuKTtcbn07XG52YXIgT3B0aW9uJDEgPSBPcHRpb247XG5cbnZhciBwbGFjZWhvbGRlckNTUyA9IGZ1bmN0aW9uIHBsYWNlaG9sZGVyQ1NTKF9yZWYsIHVuc3R5bGVkKSB7XG4gIHZhciBfcmVmJHRoZW1lID0gX3JlZi50aGVtZSxcbiAgICBzcGFjaW5nID0gX3JlZiR0aGVtZS5zcGFjaW5nLFxuICAgIGNvbG9ycyA9IF9yZWYkdGhlbWUuY29sb3JzO1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgbGFiZWw6ICdwbGFjZWhvbGRlcicsXG4gICAgZ3JpZEFyZWE6ICcxIC8gMSAvIDIgLyAzJ1xuICB9LCB1bnN0eWxlZCA/IHt9IDoge1xuICAgIGNvbG9yOiBjb2xvcnMubmV1dHJhbDUwLFxuICAgIG1hcmdpbkxlZnQ6IHNwYWNpbmcuYmFzZVVuaXQgLyAyLFxuICAgIG1hcmdpblJpZ2h0OiBzcGFjaW5nLmJhc2VVbml0IC8gMlxuICB9KTtcbn07XG52YXIgUGxhY2Vob2xkZXIgPSBmdW5jdGlvbiBQbGFjZWhvbGRlcihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ3BsYWNlaG9sZGVyJywge1xuICAgIHBsYWNlaG9sZGVyOiB0cnVlXG4gIH0pLCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcbnZhciBQbGFjZWhvbGRlciQxID0gUGxhY2Vob2xkZXI7XG5cbnZhciBjc3MgPSBmdW5jdGlvbiBjc3MoX3JlZiwgdW5zdHlsZWQpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfcmVmLmlzRGlzYWJsZWQsXG4gICAgX3JlZiR0aGVtZSA9IF9yZWYudGhlbWUsXG4gICAgc3BhY2luZyA9IF9yZWYkdGhlbWUuc3BhY2luZyxcbiAgICBjb2xvcnMgPSBfcmVmJHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe1xuICAgIGxhYmVsOiAnc2luZ2xlVmFsdWUnLFxuICAgIGdyaWRBcmVhOiAnMSAvIDEgLyAyIC8gMycsXG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gIH0sIHVuc3R5bGVkID8ge30gOiB7XG4gICAgY29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDQwIDogY29sb3JzLm5ldXRyYWw4MCxcbiAgICBtYXJnaW5MZWZ0OiBzcGFjaW5nLmJhc2VVbml0IC8gMixcbiAgICBtYXJnaW5SaWdodDogc3BhY2luZy5iYXNlVW5pdCAvIDJcbiAgfSk7XG59O1xudmFyIFNpbmdsZVZhbHVlID0gZnVuY3Rpb24gU2luZ2xlVmFsdWUocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgaXNEaXNhYmxlZCA9IHByb3BzLmlzRGlzYWJsZWQsXG4gICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe30sIGdldFN0eWxlUHJvcHMocHJvcHMsICdzaW5nbGVWYWx1ZScsIHtcbiAgICAnc2luZ2xlLXZhbHVlJzogdHJ1ZSxcbiAgICAnc2luZ2xlLXZhbHVlLS1pcy1kaXNhYmxlZCc6IGlzRGlzYWJsZWRcbiAgfSksIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xudmFyIFNpbmdsZVZhbHVlJDEgPSBTaW5nbGVWYWx1ZTtcblxudmFyIGNvbXBvbmVudHMgPSB7XG4gIENsZWFySW5kaWNhdG9yOiBDbGVhckluZGljYXRvcixcbiAgQ29udHJvbDogQ29udHJvbCQxLFxuICBEcm9wZG93bkluZGljYXRvcjogRHJvcGRvd25JbmRpY2F0b3IsXG4gIERvd25DaGV2cm9uOiBEb3duQ2hldnJvbixcbiAgQ3Jvc3NJY29uOiBDcm9zc0ljb24sXG4gIEdyb3VwOiBHcm91cCQxLFxuICBHcm91cEhlYWRpbmc6IEdyb3VwSGVhZGluZyxcbiAgSW5kaWNhdG9yc0NvbnRhaW5lcjogSW5kaWNhdG9yc0NvbnRhaW5lcixcbiAgSW5kaWNhdG9yU2VwYXJhdG9yOiBJbmRpY2F0b3JTZXBhcmF0b3IsXG4gIElucHV0OiBJbnB1dCQxLFxuICBMb2FkaW5nSW5kaWNhdG9yOiBMb2FkaW5nSW5kaWNhdG9yLFxuICBNZW51OiBNZW51JDEsXG4gIE1lbnVMaXN0OiBNZW51TGlzdCxcbiAgTWVudVBvcnRhbDogTWVudVBvcnRhbCxcbiAgTG9hZGluZ01lc3NhZ2U6IExvYWRpbmdNZXNzYWdlLFxuICBOb09wdGlvbnNNZXNzYWdlOiBOb09wdGlvbnNNZXNzYWdlLFxuICBNdWx0aVZhbHVlOiBNdWx0aVZhbHVlJDEsXG4gIE11bHRpVmFsdWVDb250YWluZXI6IE11bHRpVmFsdWVDb250YWluZXIsXG4gIE11bHRpVmFsdWVMYWJlbDogTXVsdGlWYWx1ZUxhYmVsLFxuICBNdWx0aVZhbHVlUmVtb3ZlOiBNdWx0aVZhbHVlUmVtb3ZlLFxuICBPcHRpb246IE9wdGlvbiQxLFxuICBQbGFjZWhvbGRlcjogUGxhY2Vob2xkZXIkMSxcbiAgU2VsZWN0Q29udGFpbmVyOiBTZWxlY3RDb250YWluZXIsXG4gIFNpbmdsZVZhbHVlOiBTaW5nbGVWYWx1ZSQxLFxuICBWYWx1ZUNvbnRhaW5lcjogVmFsdWVDb250YWluZXJcbn07XG52YXIgZGVmYXVsdENvbXBvbmVudHMgPSBmdW5jdGlvbiBkZWZhdWx0Q29tcG9uZW50cyhwcm9wcykge1xuICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBjb21wb25lbnRzKSwgcHJvcHMuY29tcG9uZW50cyk7XG59O1xuXG5leHBvcnQgeyBpc01vYmlsZURldmljZSBhcyBBLCBtdWx0aVZhbHVlQXNWYWx1ZSBhcyBCLCBzaW5nbGVWYWx1ZUFzVmFsdWUgYXMgQywgdmFsdWVUZXJuYXJ5IGFzIEQsIGNsYXNzTmFtZXMgYXMgRSwgZGVmYXVsdENvbXBvbmVudHMgYXMgRiwgaXNEb2N1bWVudEVsZW1lbnQgYXMgRywgY2xlYW5WYWx1ZSBhcyBILCBzY3JvbGxJbnRvVmlldyBhcyBJLCBub29wIGFzIEosIG5vdE51bGxpc2ggYXMgSywgaGFuZGxlSW5wdXRDaGFuZ2UgYXMgTCwgTWVudVBsYWNlciBhcyBNLCBjbGVhckluZGljYXRvckNTUyBhcyBhLCBjb250YWluZXJDU1MgYXMgYiwgY29tcG9uZW50cyBhcyBjLCBjc3MkMSBhcyBkLCBkcm9wZG93bkluZGljYXRvckNTUyBhcyBlLCBncm91cEhlYWRpbmdDU1MgYXMgZiwgZ3JvdXBDU1MgYXMgZywgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTIGFzIGgsIGluZGljYXRvcnNDb250YWluZXJDU1MgYXMgaSwgaW5wdXRDU1MgYXMgaiwgbG9hZGluZ01lc3NhZ2VDU1MgYXMgaywgbG9hZGluZ0luZGljYXRvckNTUyBhcyBsLCBtZW51Q1NTIGFzIG0sIG1lbnVMaXN0Q1NTIGFzIG4sIG1lbnVQb3J0YWxDU1MgYXMgbywgbXVsdGlWYWx1ZUNTUyBhcyBwLCBtdWx0aVZhbHVlTGFiZWxDU1MgYXMgcSwgcmVtb3ZlUHJvcHMgYXMgciwgc3VwcG9ydHNQYXNzaXZlRXZlbnRzIGFzIHMsIG11bHRpVmFsdWVSZW1vdmVDU1MgYXMgdCwgbm9PcHRpb25zTWVzc2FnZUNTUyBhcyB1LCBvcHRpb25DU1MgYXMgdiwgcGxhY2Vob2xkZXJDU1MgYXMgdywgY3NzIGFzIHgsIHZhbHVlQ29udGFpbmVyQ1NTIGFzIHksIGlzVG91Y2hDYXBhYmxlIGFzIHogfTtcbiIsImltcG9ydCB7IEJveCwgQnV0dG9uLCBIZWFkZXIsIElucHV0LCBTZWxlY3QsIFRleHQgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJ1xuaW1wb3J0IHsgdXNlUmVjb3JkcyB9IGZyb20gJ2FkbWluanMnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29tcG9uZW50cyB9IGZyb20gJ3JlYWN0LXNlbGVjdCdcblxuY29uc3QgVGVzdCA9ICgpID0+IHtcbiAgY29uc3QgaG9vayA9IHVzZVJlY29yZHMoJ2d1ZXN0cycpXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoW10pXG4gIGNvbnNvbGUubG9nKGhvb2spXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9tYWlsJywge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICByZWNpcGllbnRzOiBbJ2FudG9pbmUubWFkeUBnbWFpbC5jb20nLCAndGVzdEB0ZXN0LmNvbSddLFxuICAgICAgICBzdWJqZWN0OiAnQ2VjaSBlc3QgdW4gc3VqZXQgZGUgbWFpbCcsXG4gICAgICAgIG1lc3NhZ2U6ICdDZWNpIGVzdCBsZSBjb3JwcyBkdSBtZXNzYWdlJyxcbiAgICAgIH0pLFxuICAgIH0pXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gIH1cbiAgY29uc3QgY3JlYXRlR3JvdXAgPSAoZ3JvdXBOYW1lOiBzdHJpbmcsIG9wdGlvbnM6IGFueVtdLCBzZXRWYWw6IGFueSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBsYWJlbDogKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICB2YXJpYW50PVwid2hpdGVcIlxuICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIHBhZGRpbmc6ICcxcmVtJyB9fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgc2V0VmFsKCh2YWw6IHN0cmluZ1tdKSA9PlxuICAgICAgICAgICAgICAgIHZhbC5jb25jYXQob3B0aW9ucy5maWx0ZXIoKGdycE9wdDogc3RyaW5nKSA9PiAhdmFsLmluY2x1ZGVzKGdycE9wdCkpKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2dyb3VwTmFtZX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKVxuICAgICAgfSkoKSxcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IHZhcmlhbnQ9XCJncmV5XCIgaWQ9XCJzdG9yeW9va1wiIGRhdGEtY3NzPVwiZGVzaWduLXN5c3RlbS1leGFtcGxlc1wiPlxuICAgICAgPEhlYWRlcj5TdG9yeWJvb2s8L0hlYWRlcj5cbiAgICAgIDxCb3ggdmFyaWFudD1cImNvbnRhaW5lclwiPlxuICAgICAgICBDdXJyZW50VmFsdWU6IHtKU09OLnN0cmluZ2lmeSh2YWx1ZSl9XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBjb21wb25lbnRzPXt7XG4gICAgICAgICAgICBHcm91cDogKHByb3BzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgb25DbGljayA9ICgpID0+XG4gICAgICAgICAgICAgICAgcHJvcHMuc2VsZWN0UHJvcHMub25DaGFuZ2UocHJvcHMub3B0aW9ucy5tYXAoKG9wdGlvbjogYW55KSA9PiBvcHRpb24uZGF0YSkpXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGNvbXBvbmVudHMuR3JvdXBcbiAgICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19XG4gICAgICAgICAgICAgICAgICBoZWFkaW5nUHJvcHM9e3sgLi4ucHJvcHMuaGVhZGluZ1Byb3BzLCBvbkNsaWNrIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsb3NlTWVudU9uU2VsZWN0PXtmYWxzZX1cbiAgICAgICAgICBtZW51SXNPcGVuPXt0cnVlfVxuICAgICAgICAgIGlzTXVsdGlcbiAgICAgICAgICB2YXJpYW50PVwiZmlsdGVyXCJcbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhzZWxlY3RlZCkgPT4gc2V0VmFsdWUoc2VsZWN0ZWQpfVxuICAgICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6ICdHcm91cCAxJyxcbiAgICAgICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdHcm91cCAxLCBvcHRpb24gMScsIHZhbHVlOiAndmFsdWVfMScgfSxcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiAnR3JvdXAgMSwgb3B0aW9uIDInLCB2YWx1ZTogJ3ZhbHVlXzInIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBsYWJlbDogJ0Egcm9vdCBvcHRpb24nLCB2YWx1ZTogJ3ZhbHVlXzMnIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiAnQW5vdGhlciByb290IG9wdGlvbicsIHZhbHVlOiAndmFsdWVfNCcgfSxcbiAgICAgICAgICBdfVxuICAgICAgICAvPlxuICAgICAgICA8VGV4dD5Gb3IgbW9yZSBleGFtcGxlcyB2aXNpdCBvdXIgU3Rvcnlib29rPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdFxuIiwiaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIEZvcm1Hcm91cCxcbiAgSW5wdXQsXG4gIExhYmVsLFxuICBMaW5rLFxuICBSaWNoVGV4dEVkaXRvcixcbiAgVGV4dEFyZWEsXG59IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBtaW5NZXNzYWdlTGVuZ3RoID0gMjBcbmNvbnN0IFNlbmRFbWFpbEJ1dHRvbiA9IChwcm9wczogYW55KSA9PiB7XG4gIGNvbnN0IFtyZWNpcGllbnRzLCBzZXRSZWNpcGllbnRzXSA9IHVzZVN0YXRlKFxuICAgIHByb3BzPy5yZWNvcmRzLm1hcCgoeyBwYXJhbXMgfTogYW55KSA9PiBwYXJhbXM/LmVtYWlsKS5zb3J0KCkgfHwgW11cbiAgKVxuICBjb25zdCBbc3ViamVjdCwgc2V0U3ViamVjdF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKVxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKVxuXG4gIGNvbnN0IHNlbmQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2cocmVjaXBpZW50cylcbiAgICBhd2FpdCBmZXRjaCgnL21haWwnLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHJlY2lwaWVudHMsIHN1YmplY3QsIG1lc3NhZ2UgfSksXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IG1haWxUbyA9IGBtYWlsdG86JHtyZWNpcGllbnRzLmpvaW4oKX0/c3ViamVjdD0ke3N1YmplY3R9JmJvZHk9JHttZXNzYWdlfWBcbiAgY29uc3QgaXNWYWxpZCA9IHJlY2lwaWVudHMubGVuZ3RoID4gMCAmJiBzdWJqZWN0Lmxlbmd0aCA+IDAgJiYgbWVzc2FnZS5sZW5ndGggPiBtaW5NZXNzYWdlTGVuZ3RoXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveCB2YXJpYW50PVwiY2FyZFwiPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzJyZW0gMCcgfX0+XG4gICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJyZWNpcGllbnRzXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICBEZXN0aW5hdGFpcmVzIDpcbiAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgIDxUZXh0QXJlYVxuICAgICAgICAgICAgaWQ9XCJyZWNpcGllbnRzXCJcbiAgICAgICAgICAgIHZhbHVlPXtyZWNpcGllbnRzfVxuICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHJlc2l6ZTogJ25vbmUnIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnMnJlbSAwJyB9fT5cbiAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cInN1YmplY3RcIiByZXF1aXJlZD5cbiAgICAgICAgICAgIFN1amV0IDpcbiAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgaWQ9XCJzdWJqZWN0XCJcbiAgICAgICAgICAgIHZhbHVlPXtzdWJqZWN0fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBhbnkpID0+IHNldFN1YmplY3QoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAge3N1YmplY3QubGVuZ3RoID09PSAwICYmIChcbiAgICAgICAgICAgIDxMYWJlbCBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+TGUgc3VqZXQgbmUgcGV1dCBwYXMgw6p0cmUgdmlkZTwvTGFiZWw+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnMnJlbSAwJyB9fT5cbiAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIiByZXF1aXJlZD5cbiAgICAgICAgICAgIE1lc3NhZ2UgOlxuICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgPFJpY2hUZXh0RWRpdG9yIHZhbHVlPXttZXNzYWdlfSBvbkNoYW5nZT17c2V0TWVzc2FnZX0gLz5cbiAgICAgICAgICB7bWVzc2FnZS5sZW5ndGggPCBtaW5NZXNzYWdlTGVuZ3RoICYmIChcbiAgICAgICAgICAgIDxMYWJlbCBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+XG4gICAgICAgICAgICAgIEVuY29yZSB7bWluTWVzc2FnZUxlbmd0aCAtIG1lc3NhZ2UubGVuZ3RofSBjYXJhY3TDqHJlcyBwb3VyIHF1ZSBjZSBtZXNzYWdlIHNvaXQgdmFsaWRlLlxuICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2lzVmFsaWQgJiYgKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnMnJlbSAwJyB9fT5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtzZW5kfT5cbiAgICAgICAgICAgICAgRW52b3llclxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICAgIDxiciAvPlxuICAgICAgPExpbmsgaHJlZj17bWFpbFRvfSB2YXJpYW50PVwiaW5mb1wiPlxuICAgICAgICBVbiBwcm9ibMOobWUgPyBUdSBwZXV4IGVzc2F5ZXIgbGEgdmVyc2lvbiBjbGFzc2lxdWUg8J+YgFxuICAgICAgPC9MaW5rPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbmRFbWFpbEJ1dHRvblxuIiwiQWRtaW5KUy5Vc2VyQ29tcG9uZW50cyA9IHt9XG5pbXBvcnQgVGVzdCBmcm9tICcuLi9hcHAvYWRtaW4vY29tcG9uZW50cy9UZXN0J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5UZXN0ID0gVGVzdFxuaW1wb3J0IFNlbmRFbWFpbEJ1dHRvbiBmcm9tICcuLi9hcHAvYWRtaW4vY29tcG9uZW50cy9TZW5kRW1haWxCdXR0b24nXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlNlbmRFbWFpbEJ1dHRvbiA9IFNlbmRFbWFpbEJ1dHRvbiJdLCJuYW1lcyI6WyJkZWZpbmVQcm9wZXJ0eSIsImFycmF5TGlrZVRvQXJyYXkiLCJhcnJheVdpdGhIb2xlcyIsIml0ZXJhYmxlVG9BcnJheUxpbWl0IiwidW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJub25JdGVyYWJsZVJlc3QiLCJvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwicmVhY3RJc01vZHVsZSIsInJlcXVpcmUkJDAiLCJpc0Jyb3dzZXIiLCJ1bml0bGVzcyIsImhhc2hTdHJpbmciLCJSZWFjdCIsImZvcndhcmRSZWYiLCJ1c2VDb250ZXh0IiwiSW5zZXJ0aW9uIiwiRW1vdGlvbiIsIm1pbiIsIk1hdGgiLCJtYXgiLCJyb3VuZCIsImZsb29yIiwiY3JlYXRlQ29vcmRzIiwidiIsIngiLCJ5IiwicmVjdFRvQ2xpZW50UmVjdCIsInJlY3QiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJ3aWR0aCIsImJvdHRvbSIsImhlaWdodCIsImdldE5vZGVOYW1lIiwibm9kZSIsImlzTm9kZSIsIm5vZGVOYW1lIiwidG9Mb3dlckNhc2UiLCJnZXRXaW5kb3ciLCJfbm9kZSRvd25lckRvY3VtZW50Iiwib3duZXJEb2N1bWVudCIsImRlZmF1bHRWaWV3Iiwid2luZG93IiwiZ2V0RG9jdW1lbnRFbGVtZW50IiwiX3JlZiIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwidmFsdWUiLCJOb2RlIiwiaXNFbGVtZW50IiwiRWxlbWVudCIsImlzSFRNTEVsZW1lbnQiLCJIVE1MRWxlbWVudCIsImlzU2hhZG93Um9vdCIsIlNoYWRvd1Jvb3QiLCJpc092ZXJmbG93RWxlbWVudCIsImVsZW1lbnQiLCJvdmVyZmxvdyIsIm92ZXJmbG93WCIsIm92ZXJmbG93WSIsImRpc3BsYXkiLCJnZXRDb21wdXRlZFN0eWxlIiwidGVzdCIsImluY2x1ZGVzIiwiaXNXZWJLaXQiLCJDU1MiLCJzdXBwb3J0cyIsImlzTGFzdFRyYXZlcnNhYmxlTm9kZSIsImdldFBhcmVudE5vZGUiLCJyZXN1bHQiLCJhc3NpZ25lZFNsb3QiLCJwYXJlbnROb2RlIiwiaG9zdCIsImdldE5lYXJlc3RPdmVyZmxvd0FuY2VzdG9yIiwiYm9keSIsImdldE92ZXJmbG93QW5jZXN0b3JzIiwibGlzdCIsInRyYXZlcnNlSWZyYW1lcyIsIl9ub2RlJG93bmVyRG9jdW1lbnQyIiwic2Nyb2xsYWJsZUFuY2VzdG9yIiwiaXNCb2R5Iiwid2luIiwiY29uY2F0IiwidmlzdWFsVmlld3BvcnQiLCJmcmFtZUVsZW1lbnQiLCJnZXRDc3NEaW1lbnNpb25zIiwiY3NzIiwicGFyc2VGbG9hdCIsImhhc09mZnNldCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0Iiwic2hvdWxkRmFsbGJhY2siLCIkIiwidW53cmFwRWxlbWVudCIsImNvbnRleHRFbGVtZW50IiwiZ2V0U2NhbGUiLCJkb21FbGVtZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJub09mZnNldHMiLCJnZXRWaXN1YWxPZmZzZXRzIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsInNob3VsZEFkZFZpc3VhbE9mZnNldHMiLCJpc0ZpeGVkIiwiZmxvYXRpbmdPZmZzZXRQYXJlbnQiLCJpbmNsdWRlU2NhbGUiLCJpc0ZpeGVkU3RyYXRlZ3kiLCJvZmZzZXRQYXJlbnQiLCJjbGllbnRSZWN0Iiwic2NhbGUiLCJ2aXN1YWxPZmZzZXRzIiwib2Zmc2V0V2luIiwiY3VycmVudFdpbiIsImN1cnJlbnRJRnJhbWUiLCJpZnJhbWVTY2FsZSIsImlmcmFtZVJlY3QiLCJjbGllbnRMZWZ0IiwicGFkZGluZ0xlZnQiLCJjbGllbnRUb3AiLCJwYWRkaW5nVG9wIiwib2JzZXJ2ZU1vdmUiLCJvbk1vdmUiLCJpbyIsInRpbWVvdXRJZCIsInJvb3QiLCJjbGVhbnVwIiwiX2lvIiwiY2xlYXJUaW1lb3V0IiwiZGlzY29ubmVjdCIsInJlZnJlc2giLCJza2lwIiwidGhyZXNob2xkIiwiaW5zZXRUb3AiLCJpbnNldFJpZ2h0IiwiY2xpZW50V2lkdGgiLCJpbnNldEJvdHRvbSIsImNsaWVudEhlaWdodCIsImluc2V0TGVmdCIsInJvb3RNYXJnaW4iLCJvcHRpb25zIiwiaXNGaXJzdFVwZGF0ZSIsImhhbmRsZU9ic2VydmUiLCJlbnRyaWVzIiwicmF0aW8iLCJpbnRlcnNlY3Rpb25SYXRpbyIsInNldFRpbWVvdXQiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImUiLCJvYnNlcnZlIiwiYXV0b1VwZGF0ZSIsInJlZmVyZW5jZSIsImZsb2F0aW5nIiwidXBkYXRlIiwiYW5jZXN0b3JTY3JvbGwiLCJhbmNlc3RvclJlc2l6ZSIsImVsZW1lbnRSZXNpemUiLCJSZXNpemVPYnNlcnZlciIsImxheW91dFNoaWZ0IiwiYW5pbWF0aW9uRnJhbWUiLCJyZWZlcmVuY2VFbCIsImFuY2VzdG9ycyIsImZvckVhY2giLCJhbmNlc3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwiY2xlYW51cElvIiwicmVvYnNlcnZlRnJhbWUiLCJyZXNpemVPYnNlcnZlciIsImZpcnN0RW50cnkiLCJ0YXJnZXQiLCJ1bm9ic2VydmUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl9yZXNpemVPYnNlcnZlciIsImZyYW1lSWQiLCJwcmV2UmVmUmVjdCIsImZyYW1lTG9vcCIsIm5leHRSZWZSZWN0IiwiX3Jlc2l6ZU9ic2VydmVyMiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfb2JqZWN0U3ByZWFkIiwiY3JlYXRlQ29udGV4dCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlTWVtbyIsInVzZUNhbGxiYWNrIiwidXNlTGF5b3V0RWZmZWN0IiwiY3JlYXRlUG9ydGFsIiwiY3NzJDIiLCJUZXN0IiwiaG9vayIsInVzZVJlY29yZHMiLCJzZXRWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50IiwiQm94IiwidmFyaWFudCIsImlkIiwiSGVhZGVyIiwiSlNPTiIsInN0cmluZ2lmeSIsIlNlbGVjdCIsImNvbXBvbmVudHMiLCJHcm91cCIsInByb3BzIiwib25DbGljayIsInNlbGVjdFByb3BzIiwib25DaGFuZ2UiLCJtYXAiLCJvcHRpb24iLCJkYXRhIiwiX2V4dGVuZHMiLCJzdHlsZSIsImN1cnNvciIsImhlYWRpbmdQcm9wcyIsImNsb3NlTWVudU9uU2VsZWN0IiwibWVudUlzT3BlbiIsImlzTXVsdGkiLCJzZWxlY3RlZCIsImxhYmVsIiwiVGV4dCIsIm1pbk1lc3NhZ2VMZW5ndGgiLCJTZW5kRW1haWxCdXR0b24iLCJyZWNpcGllbnRzIiwic2V0UmVjaXBpZW50cyIsInJlY29yZHMiLCJwYXJhbXMiLCJlbWFpbCIsInNvcnQiLCJzdWJqZWN0Iiwic2V0U3ViamVjdCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic2VuZCIsImZldGNoIiwiaGVhZGVycyIsIm1ldGhvZCIsIm1haWxUbyIsImpvaW4iLCJpc1ZhbGlkIiwibGVuZ3RoIiwiRnJhZ21lbnQiLCJtYXJnaW4iLCJMYWJlbCIsImh0bWxGb3IiLCJyZXF1aXJlZCIsIlRleHRBcmVhIiwiZGlzYWJsZWQiLCJyZXNpemUiLCJJbnB1dCIsImNvbG9yIiwiUmljaFRleHRFZGl0b3IiLCJCdXR0b24iLCJ0eXBlIiwiTGluayIsImhyZWYiLCJBZG1pbkpTIiwiVXNlckNvbXBvbmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQWUsU0FBUyxPQUFPLENBQUMsQ0FBQyxFQUFFO0VBQ25DLEVBQUUseUJBQXlCLENBQUM7QUFDNUI7RUFDQSxFQUFFLE9BQU8sT0FBTyxHQUFHLFVBQVUsSUFBSSxPQUFPLE1BQU0sSUFBSSxRQUFRLElBQUksT0FB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QUFHLE9BQU8sQ0FBQztFQUNYO0VBQ0EsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtFQUNsQixHQUFHLE9BQU8sQ0FBQztFQUNYLEVBQUU7QUFDRjtFQUNBLENBQUMsT0FBTyxDQUFDO0VBQ1QsQ0FBQztBQUNEO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDTyxTQUFTLEtBQUssRUFBRSxLQUFLLEVBQUU7RUFDOUIsQ0FBQyxPQUFPLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxFQUFFLFFBQVEsR0FBRyxDQUFDLEVBQUUsRUFBRTtFQUNoRixDQUFDO0FBQ0Q7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNPLFNBQVMsT0FBTyxFQUFFLEtBQUssRUFBRTtFQUNoQyxDQUFDLE9BQU8sVUFBVSxHQUFHLEVBQUUsRUFBRSxLQUFLO0VBQzlCLENBQUM7QUFDRDtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ08sU0FBUyxPQUFPLEVBQUUsSUFBSSxFQUFFO0VBQy9CLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUUsU0FBUyxDQUFDLElBQUksS0FBSyxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEtBQUssRUFBRSxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztFQUNwRyxDQUFDO0FBU0Q7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNPLFNBQVMsVUFBVSxFQUFFLElBQUksRUFBRTtFQUNsQyxDQUFDLE9BQU8sU0FBUyxHQUFHLElBQUksRUFBRTtFQUMxQixFQUFFLElBQUksU0FBUyxHQUFHLEVBQUU7RUFDcEIsR0FBRyxJQUFJLEdBQUU7RUFDVDtFQUNBLEdBQUcsS0FBSztBQUNSO0VBQ0EsQ0FBQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxF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S0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ3BGLE1BQU0sU0FBUyxHQUFHLENBQUMsRUFBQztFQUNwQixLQUFLLEtBQUs7RUFDVixLQUFLO0VBQ0w7RUFDQSxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7RUFDNUIsSUFBSSxVQUFVLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBQztFQUNwQyxJQUFJLEtBQUs7RUFDVDtFQUNBLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO0VBQ3BDLElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxRQUFRLEVBQUM7RUFDdEMsSUFBSSxLQUFLO0VBQ1Q7RUFDQSxHQUFHLEtBQUssRUFBRTtFQUNWLElBQUksVUFBVSxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFDO0VBQzFDLElBQUksUUFBUTtFQUNaO0VBQ0EsR0FBRyxLQUFLLEVBQUU7RUFDVixJQUFJLFFBQVEsSUFBSSxFQUFFO0VBQ2xCLEtBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7RUFDckIsTUFBTSxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsRUFBRSxZQUFZLEVBQUM7RUFDN0UsTUFBTSxLQUFLO0VBQ1gsS0FBSztFQUNMLE1BQU0sVUFBVSxJQUFJLElBQUc7RUFDdkIsS0FBSztFQUNMLElBQUksS0FBSztFQUNUO0VBQ0EsR0FBRyxLQUFLLEdBQUcsR0FBRyxRQUFRO0VBQ3RCLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLFVBQVM7RUFDcEQ7RUFDQSxHQUFHLEtBQUssR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDO0VBQ3ZDLElBQUksUUFBUSxTQUFTO0VBQ3JCO0VBQ0EsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLFFBQVEsR0FBRyxFQUFDO0VBQ25DO0VBQ0EsS0FBSyxLQUFLLEVBQUUsR0FBRyxNQUFNLEVBQUUsSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBQztFQUN2RixNQUFNLElBQUksUUFBUSxHQUFHLENBQUMsS0FBSyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsTUFBTSxDQUFDO0VBQ3ZELE9BQU8sTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLEdBQUcsV0FBVyxDQUFDLFVBQVUsR0FBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxZQUFZLEVBQUM7RUFDaEwsTUFBTSxLQUFLO0VBQ1g7RUFDQSxLQUFLLEtBQUssRUFBRSxFQUFFLFVBQVUsSUFBSSxJQUFHO0VBQy9CO0VBQ0EsS0FBSztFQUNMLE1BQU0sTUFBTSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEdBQUcsRUFBRSxFQUFFLFFBQVEsR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFDO0FBQzVJO0VBQ0EsTUFBTSxJQUFJLFNBQVMsS0FBSyxHQUFHO0VBQzNCLE9BQU8sSUFBSSxNQUFNLEtBQUssQ0FBQztFQUN2QixRQUFRLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBQztFQUNoRztFQUNBLFFBQVEsUUFBUSxNQUFNLEtBQUssRUFBRSxJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxNQUFNO0VBQzdFO0VBQ0EsU0FBUyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUc7RUFDL0MsVUFBVSxLQUFLLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsSUFBSSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxHQUFHLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxHQUFHLEtBQUssR0FBRyxRQUFRLEVBQUM7RUFDNU4sVUFBVSxLQUFLO0VBQ2YsU0FBUztFQUNULFVBQVUsS0FBSyxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBQztFQUNqRyxTQUFTO0VBQ1QsS0FBSztBQUNMO0VBQ0EsSUFBSSxLQUFLLEdBQUcsTUFBTSxHQUFHLFFBQVEsR0FBRyxDQUFDLEVBQUUsUUFBUSxHQUFHLFNBQVMsR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLFVBQVUsR0FBRyxFQUFFLEVBQUUsTUFBTSxHQUFHLE9BQU07RUFDcEcsSUFBSSxLQUFLO0VBQ1Q7RUFDQSxHQUFHLEtBQUssRUFBRTtFQUNWLElBQUksTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxHQUFHLFNBQVE7RUFDeEQsR0FBRztFQUNILElBQUksSUFBSSxRQUFRLEdBQUcsQ0FBQztFQUNwQixLQUFLLElBQUksU0FBUyxJQUFJLEdBQUc7RUFDekIsTUFBTSxFQUFFLFNBQVE7RUFDaEIsVUFBVSxJQUFJLFNBQVMsSUFBSSxHQUFHLElBQUksUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLEdBQUc7RUFDbEUsTUFBTSxRQUFRO0FBQ2Q7RUFDQSxJQUFJLFFBQVEsVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxTQUFTLEdBQUcsUUFBUTtFQUMvRDtFQUNBLEtBQUssS0FBSyxFQUFFO0VBQ1osTUFBTSxTQUFTLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksVUFBVSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsRUFBQztFQUMzRCxNQUFNLEtBQUs7RUFDWDtFQUNBLEtBQUssS0FBSyxFQUFFO0VBQ1osTUFBTSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksU0FBUyxFQUFFLFNBQVMsR0FBRyxFQUFDO0VBQzNFLE1BQU0sS0FBSztFQUNYO0VBQ0EsS0FBSyxLQUFLLEVBQUU7RUFDWjtFQUNBLE1BQU0sSUFBSSxJQUFJLEVBQUUsS0FBSyxFQUFFO0VBQ3ZCLE9BQU8sVUFBVSxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBQztBQUNwQztFQUNBLE1BQU0sTUFBTSxHQUFHLElBQUksRUFBRSxFQUFFLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLElBQUksVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxTQUFTLEdBQUU7RUFDdEcsTUFBTSxLQUFLO0VBQ1g7RUFDQSxLQUFLLEtBQUssRUFBRTtFQUNaLE1BQU0sSUFBSSxRQUFRLEtBQUssRUFBRSxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO0VBQ3BELE9BQU8sUUFBUSxHQUFHLEVBQUM7RUFDbkIsS0FBSztFQUNMLEdBQUc7QUFDSDtFQUNBLENBQUMsT0FBTyxRQUFRO0VBQ2hCLENBQUM7QUFDRDtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDTyxTQUFTLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO0VBQzNHLENBQUMsSUFBSSxJQUFJLEdBQUcsTUFBTSxHQUFHLEVBQUM7RUFDdEIsQ0FBQyxJQUFJLElBQUksR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLEVBQUUsRUFBQztFQUN2QyxDQUFDLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUM7QUFDeEI7RUFDQSxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLEVBQUUsQ0FBQztFQUM3QyxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDO0VBQ2xHLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDeEUsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFDO0FBQ2xCO0VBQ0EsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEtBQUssQ0FBQyxHQUFHLE9BQU8sR0FBRyxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUM7RUFDekYsQ0FBQztBQUNEO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ08sU0FBUyxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7RUFDOUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDakYsQ0FBQztBQUNEO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDTyxTQUFTLFdBQVcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7RUFDMUQsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDO0VBQy9HOztFQzNMQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ08sU0FBUyxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTtFQUMvQyxDQUFDLElBQUksTUFBTSxHQUFHLEdBQUU7RUFDaEIs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S0FBSyxDQUFDO0VBQy9DO0FBQ0E7RUFDQSxJQUFJLEtBQUssSUFBSSxDQUFDO0VBQ2QsSUFBSSxLQUFLLElBQUksQ0FBQztFQUNkLElBQUksS0FBSyxJQUFJLENBQUM7RUFDZCxJQUFJLEtBQUssSUFBSSxDQUFDO0VBQ2QsSUFBSSxLQUFLLElBQUksQ0FBQztFQUNkLElBQUksS0FBSyxJQUFJLENBQUM7RUFDZCxJQUFJLEtBQUssSUFBSSxDQUFDO0FBQ2Q7RUFDQSxJQUFJLEtBQUssSUFBSSxDQUFDO0VBQ2QsSUFBSSxLQUFLLElBQUksQ0FBQztFQUNkLElBQUksS0FBSyxJQUFJLENBQUM7RUFDZCxJQUFJLEtBQUssSUFBSSxDQUFDO0VBQ2QsSUFBSSxLQUFLLElBQUksQ0FBQztFQUNkLElBQUksS0FBSyxJQUFJLENBQUM7QUFDZDtFQUNBLElBQUksS0FBSyxJQUFJLENBQUM7RUFDZCxJQUFJLEtBQUssSUFBSSxDQUFDO0VBQ2QsSUFBSSxLQUFLLElBQUksQ0FBQztFQUNkLElBQUksS0FBSyxJQUFJLENBQUM7RUFDZCxJQUFJLEtBQUssSUFBSSxDQUFDO0VBQ2QsSUFBSSxLQUFLLElBQUksQ0FBQztBQUNkO0VBQ0EsSUFBSSxLQUFLLElBQUksQ0FBQztFQUNkLElBQUksS0FBSyxJQUFJLENBQUM7RUFDZCxJQUFJLEtBQUssSUFBSSxDQUFDO0VBQ2QsSUFBSSxLQUFLLElBQUksQ0FBQztFQUNkLElBQUksS0FBSyxJQUFJLENBQUM7RUFDZCxJQUFJLEtBQUssSUFBSTtFQUNiLE1BQU0sT0FBTyxNQUFNLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQztFQUNwQztBQUNBO0VBQ0EsSUFBSSxLQUFLLElBQUksQ0FBQztFQUNkLElBQUksS0FBSyxJQUFJLENBQUM7RUFDZCxJQUFJLEtBQUssSUFBSSxDQUFDO0VBQ2QsSUFBSSxLQUFLLElBQUksQ0FBQztFQUNkLElBQUksS0FBSyxJQUFJO0VBQ2IsTUFBTSxPQUFPLE1BQU0sR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxFQUFFLEdBQUcsS0FB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QUksVUFBVSxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxNQUFNLElBQUksRUFBRSxDQUFDLENBQUM7RUFDNUQsSUFBSSxDQUFDO0VBQ0w7RUFDQSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7RUFDYixJQUFJLENBQUM7RUFDTDtFQUNBLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxJQUFJLFVBQVUsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksTUFBTSxJQUFJLEVBQUUsQ0FBQztFQUMzRDtFQUNBLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxJQUFJLFVBQVUsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0VBQzVELEdBQUc7QUFDSDtBQUNBO0VBQ0EsRUFBRSxRQUFRLEdBQUc7RUFDYixJQUFJLEtBQUssQ0FBQztFQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUNoRDtFQUNBLElBQUksS0FBSyxDQUFDO0VBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDO0FBQy9DO0VBQ0EsSUFBSSxLQUFLLENBQUM7RUFDVixNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztFQUNwQyxNQUFNLENBQUM7RUFDUDtFQUNBLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxJQUFJLFVBQVUsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0VBQzlELEdBQUc7RUFDSDtBQUNBO0FBQ0E7RUFDQSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0VBQ2hCLEVBQUUsQ0FBQztFQUNIO0VBQ0EsRUFBRSxDQUFD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LENBQUMwRCxtQkFBTSxFQUFBO0VBQUNDLElBQUFBLElBQUksRUFBQyxRQUFRO0VBQUN6RCxJQUFBQSxPQUFPLEVBQUMsV0FBVztFQUFDUyxJQUFBQSxPQUFPLEVBQUU0QixJQUFBQTtFQUFLLEdBQUEsRUFBQyxTQUVqRCxDQUNMLENBRUosQ0FBQyxlQUNOak8sS0FBQSxDQUFBMEwsYUFBQSxDQUFBLElBQUEsRUFBQSxJQUFLLENBQUMsZUFDTjFMLEtBQUEsQ0FBQTBMLGFBQUEsQ0FBQzRELGlCQUFJLEVBQUE7RUFBQ0MsSUFBQUEsSUFBSSxFQUFFbEIsTUFBTztFQUFDekMsSUFBQUEsT0FBTyxFQUFDLE1BQUE7S0FBTyxFQUFBLG9FQUU3QixDQUNOLENBQUMsQ0FBQTtFQUVQLENBQUM7O0VDdkZENEQsT0FBTyxDQUFDQyxjQUFjLEdBQUcsRUFBRSxDQUFBO0VBRTNCRCxPQUFPLENBQUNDLGNBQWMsQ0FBQ3JFLElBQUksR0FBR0EsSUFBSSxDQUFBO0VBRWxDb0UsT0FBTyxDQUFDQyxjQUFjLENBQUNuQyxlQUFlLEdBQUdBLGVBQWU7Ozs7OzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMCwxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwxOSwyMCwyMSwyMiwyMywyNCwyNSwyNiwyNywyOCwyOSwzMCwzMSwzMiwzMywzNCwzNSwzNiwzNywzOF19
