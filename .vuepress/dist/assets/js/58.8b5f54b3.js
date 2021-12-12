(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{444:function(t,a,s){"use strict";s.r(a);var n=s(45),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"ipaddr-js-an-ipv6-and-ipv4-address-manipulation-library"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ipaddr-js-an-ipv6-and-ipv4-address-manipulation-library"}},[t._v("#")]),t._v(" ipaddr.js — an IPv6 and IPv4 address manipulation library "),s("a",{attrs:{href:"https://travis-ci.org/whitequark/ipaddr.js",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://travis-ci.org/whitequark/ipaddr.js.svg",alt:"Build Status"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("ipaddr.js is a small (1.9K minified and gzipped) library for manipulating\nIP addresses in JavaScript environments. It runs on both CommonJS runtimes\n(e.g. "),s("a",{attrs:{href:"http://nodejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("nodejs"),s("OutboundLink")],1),t._v(") and in a web browser.")]),t._v(" "),s("p",[t._v("ipaddr.js allows you to verify and parse string representation of an IP\naddress, match it against a CIDR range or range list, determine if it falls\ninto some reserved ranges (examples include loopback and private ranges),\nand convert between IPv4 and IPv4-mapped IPv6 addresses.")]),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("p",[s("code",[t._v("npm install ipaddr.js")])]),t._v(" "),s("p",[t._v("or")]),t._v(" "),s("p",[s("code",[t._v("bower install ipaddr.js")])]),t._v(" "),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("p",[t._v("ipaddr.js defines one object in the global scope: "),s("code",[t._v("ipaddr")]),t._v(". In CommonJS,\nit is exported from the module:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ipaddr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ipaddr.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("The API consists of several global methods and two classes: ipaddr.IPv6 and ipaddr.IPv4.")]),t._v(" "),s("h3",{attrs:{id:"global-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#global-methods"}},[t._v("#")]),t._v(" Global methods")]),t._v(" "),s("p",[t._v("There are three global methods defined: "),s("code",[t._v("ipaddr.isValid")]),t._v(", "),s("code",[t._v("ipaddr.parse")]),t._v(" and\n"),s("code",[t._v("ipaddr.process")]),t._v(". All of them receive a string as a single parameter.")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("ipaddr.isValid")]),t._v(" method returns "),s("code",[t._v("true")]),t._v(" if the address is a valid IPv4 or\nIPv6 address, and "),s("code",[t._v("false")]),t._v(" otherwise. It does not throw any exceptions.")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("ipaddr.parse")]),t._v(" method returns an object representing the IP address,\nor throws an "),s("code",[t._v("Error")]),t._v(" if the passed string is not a valid representation of an\nIP address.")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("ipaddr.process")]),t._v(" method works just like the "),s("code",[t._v("ipaddr.parse")]),t._v(" one, but it\nautomatically converts IPv4-mapped IPv6 addresses to their IPv4 counterparts\nbefore returning. It is useful when you have a Node.js instance listening\non an IPv6 socket, and the "),s("code",[t._v("net.ivp6.bindv6only")]),t._v(" sysctl parameter (or its\nequivalent on non-Linux OS) is set to 0. In this case, you can accept IPv4\nconnections on your IPv6-only socket, but the remote address will be mangled.\nUse "),s("code",[t._v("ipaddr.process")]),t._v(" method to automatically demangle it.")]),t._v(" "),s("h3",{attrs:{id:"object-representation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-representation"}},[t._v("#")]),t._v(" Object representation")]),t._v(" "),s("p",[t._v("Parsing methods return an object which descends from "),s("code",[t._v("ipaddr.IPv6")]),t._v(" or\n"),s("code",[t._v("ipaddr.IPv4")]),t._v(". These objects share some properties, but most of them differ.")]),t._v(" "),s("h4",{attrs:{id:"shared-properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shared-properties"}},[t._v("#")]),t._v(" Shared properties")]),t._v(" "),s("p",[t._v("One can determine the type of address by calling "),s("code",[t._v("addr.kind()")]),t._v(". It will return\neither "),s("code",[t._v('"ipv6"')]),t._v(" or "),s("code",[t._v('"ipv4"')]),t._v(".")]),t._v(" "),s("p",[t._v("An address can be converted back to its string representation with "),s("code",[t._v("addr.toString()")]),t._v(".\nNote that this method:")]),t._v(" "),s("ul",[s("li",[t._v("does not return the original string used to create the object (in fact, there is\nno way of getting that string)")]),t._v(" "),s("li",[t._v("returns a compact representation (when it is applicable)")])]),t._v(" "),s("p",[t._v("A "),s("code",[t._v("match(range, bits)")]),t._v(" method can be used to check if the address falls into a\ncertain CIDR range.\nNote that an address can be (obviously) matched only against an address of the same type.")]),t._v(" "),s("p",[t._v("For example:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" addr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ipaddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2001:db8:1234::1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" range "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ipaddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2001:db8::"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\naddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("range"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => true")]),t._v("\n")])])]),s("p",[t._v("Alternatively, "),s("code",[t._v("match")]),t._v(" can also be called as "),s("code",[t._v("match([range, bits])")]),t._v(". In this way,\nit can be used together with the "),s("code",[t._v("parseCIDR(string)")]),t._v(" method, which parses an IP\naddress together with a CIDR range.")]),t._v(" "),s("p",[t._v("For example:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" addr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ipaddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2001:db8:1234::1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\naddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ipaddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseCIDR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2001:db8::/32"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => true")]),t._v("\n")])])]),s("p",[t._v("A "),s("code",[t._v("range()")]),t._v(" method returns one of predefined names for several special ranges defined\nby IP protocols. The exact names (and their respective CIDR ranges) can be looked up\nin the source: "),s("a",{attrs:{href:"https://github.com/whitequark/ipaddr.js/blob/master/src/ipaddr.coffee#L186",target:"_blank",rel:"noopener noreferrer"}},[t._v("IPv6 ranges"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://github.com/whitequark/ipaddr.js/blob/master/src/ipaddr.coffee#L71",target:"_blank",rel:"noopener noreferrer"}},[t._v("IPv4 ranges"),s("OutboundLink")],1),t._v(". Some common ones include "),s("code",[t._v('"unicast"')]),t._v("\n(the default one) and "),s("code",[t._v('"reserved"')]),t._v(".")]),t._v(" "),s("p",[t._v("You can match against your own range list by using\n"),s("code",[t._v("ipaddr.subnetMatch(address, rangeList, defaultName)")]),t._v(" method. It can work with a mix of IPv6 or IPv4 addresses, and accepts a name-to-subnet map as the range list. For example:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" rangeList "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  documentationOnly"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" ipaddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2001:db8::'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  tunnelProviders"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" ipaddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2001:470::'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// he.net")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" ipaddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2001:5c0::'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// freenet6")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nipaddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subnetMatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ipaddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2001:470:8:66::1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rangeList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'unknown'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "tunnelProviders"')]),t._v("\n")])])]),s("p",[t._v("The addresses can be converted to their byte representation with "),s("code",[t._v("toByteArray()")]),t._v(".\n(Actually, JavaScript mostly does not know about byte buffers. They are emulated with\narrays of numbers, each in range of 0..255.)")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bytes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ipaddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2a00:1450:8007::68'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toByteArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ipv6.google.com")]),t._v("\nbytes "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => [42, 0x00, 0x14, 0x50, 0x80, 0x07, 0x00, <zeroes...>, 0x00, 0x68 ]")]),t._v("\n")])])]),s("p",[t._v("The "),s("code",[t._v("ipaddr.IPv4")]),t._v(" and "),s("code",[t._v("ipaddr.IPv6")]),t._v(" objects have some methods defined, too. All of them\nhave the same interface for both protocols, and are similar to global methods.")]),t._v(" "),s("p",[s("code",[t._v("ipaddr.IPvX.isValid(string)")]),t._v(" can be used to check if the string is a valid address\nfor particular protocol, and "),s("code",[t._v("ipaddr.IPvX.parse(string)")]),t._v(" is the error-throwing parser.")]),t._v(" "),s("p",[s("code",[t._v("ipaddr.IPvX.isValid(string)")]),t._v(" uses the same format for parsing as the POSIX "),s("code",[t._v("inet_ntoa")]),t._v(" function, which accepts unusual formats like "),s("code",[t._v("0xc0.168.1.1")]),t._v(" or "),s("code",[t._v("0x10000000")]),t._v(". The function "),s("code",[t._v("ipaddr.IPv4.isValidFourPartDecimal(string)")]),t._v(" validates the IPv4 address and also ensures that it is written in four-part decimal format.")]),t._v(" "),s("h4",{attrs:{id:"ipv6-properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ipv6-properties"}},[t._v("#")]),t._v(" IPv6 properties")]),t._v(" "),s("p",[t._v("Sometimes you will want to convert IPv6 not to a compact string representation (with\nthe "),s("code",[t._v("::")]),t._v(" substitution); the "),s("code",[t._v("toNormalizedString()")]),t._v(" method will return an address where\nall zeroes are explicit.")]),t._v(" "),s("p",[t._v("For example:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" addr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ipaddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2001:0db8::0001"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\naddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "2001:db8::1"')]),t._v("\naddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toNormalizedString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "2001:db8:0:0:0:0:0:1"')]),t._v("\n")])])]),s("p",[t._v("The "),s("code",[t._v("isIPv4MappedAddress()")]),t._v(" method will return "),s("code",[t._v("true")]),t._v(" if this address is an IPv4-mapped\none, and "),s("code",[t._v("toIPv4Address()")]),t._v(" will return an IPv4 object address.")]),t._v(" "),s("p",[t._v("To access the underlying binary representation of the address, use "),s("code",[t._v("addr.parts")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" addr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ipaddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2001:db8:10::1234:DEAD"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\naddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parts "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => [0x2001, 0xdb8, 0x10, 0, 0, 0, 0x1234, 0xdead]")]),t._v("\n")])])]),s("p",[t._v("A IPv6 zone index can be accessed via "),s("code",[t._v("addr.zoneId")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" addr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ipaddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2001:db8::%eth0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\naddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zoneId "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 'eth0'")]),t._v("\n")])])]),s("h4",{attrs:{id:"ipv4-properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ipv4-properties"}},[t._v("#")]),t._v(" IPv4 properties")]),t._v(" "),s("p",[s("code",[t._v("toIPv4MappedAddress()")]),t._v(" will return a corresponding IPv4-mapped IPv6 address.")]),t._v(" "),s("p",[t._v("To access the underlying representation of the address, use "),s("code",[t._v("addr.octets")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" addr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ipaddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.1.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\naddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("octets "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => [192, 168, 1, 1]")]),t._v("\n")])])]),s("p",[s("code",[t._v("prefixLengthFromSubnetMask()")]),t._v(" will return a CIDR prefix length for a valid IPv4 netmask or\nnull if the netmask is not valid.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("ipaddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IPv4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'255.255.255.240'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("prefixLengthFromSubnetMask")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),t._v("\nipaddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IPv4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'255.192.164.0'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("prefixLengthFromSubnetMask")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n")])])]),s("p",[s("code",[t._v("subnetMaskFromPrefixLength()")]),t._v(" will return an IPv4 netmask for a valid CIDR prefix length.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("ipaddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IPv4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subnetMaskFromPrefixLength")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"255.255.255.0"')]),t._v("\nipaddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IPv4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subnetMaskFromPrefixLength")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"255.255.255.248"')]),t._v("\n")])])]),s("p",[s("code",[t._v("broadcastAddressFromCIDR()")]),t._v(" will return the broadcast address for a given IPv4 interface and netmask in CIDR notation.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("ipaddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IPv4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("broadcastAddressFromCIDR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"172.0.0.1/24"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"172.0.0.255"')]),t._v("\n")])])]),s("p",[s("code",[t._v("networkAddressFromCIDR()")]),t._v(" will return the network address for a given IPv4 interface and netmask in CIDR notation.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("ipaddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IPv4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("networkAddressFromCIDR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"172.0.0.1/24"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"172.0.0.0"')]),t._v("\n")])])]),s("h4",{attrs:{id:"conversion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conversion"}},[t._v("#")]),t._v(" Conversion")]),t._v(" "),s("p",[t._v("IPv4 and IPv6 can be converted bidirectionally to and from network byte order (MSB) byte arrays.")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("fromByteArray()")]),t._v(" method will take an array and create an appropriate IPv4 or IPv6 object\nif the input satisfies the requirements. For IPv4 it has to be an array of four 8-bit values,\nwhile for IPv6 it has to be an array of sixteen 8-bit values.")]),t._v(" "),s("p",[t._v("For example:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" addr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ipaddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromByteArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x7f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\naddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "127.0.0.1"')]),t._v("\n")])])]),s("p",[t._v("or")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" addr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ipaddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromByteArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xb8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\naddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "2001:db8::1"')]),t._v("\n")])])]),s("p",[t._v("Both objects also offer a "),s("code",[t._v("toByteArray()")]),t._v(" method, which returns an array in network byte order (MSB).")]),t._v(" "),s("p",[t._v("For example:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" addr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ipaddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\naddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toByteArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => [0x7f, 0, 0, 1]")]),t._v("\n")])])]),s("p",[t._v("or")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" addr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ipaddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2001:db8::1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\naddr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toByteArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => [0x20, 1, 0xd, 0xb8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);