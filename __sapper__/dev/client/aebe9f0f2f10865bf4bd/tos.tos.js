(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tos"],{

/***/ "./src/components/MarkDownPage.svelte":
/*!********************************************!*\
  !*** ./src/components/MarkDownPage.svelte ***!
  \********************************************/
/*! exports provided: default, getMarkDownData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkDownData", function() { return getMarkDownData; });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavBar */ "./src/components/NavBar.svelte");
/* src/components/MarkDownPage.svelte generated by Svelte v3.25.0 */



const file = "src/components/MarkDownPage.svelte";

function create_fragment(ctx) {
	let title_value;
	let t0;
	let navbar;
	let t1;
	let section;
	let div2;
	let div1;
	let h1;
	let t2;
	let t3;
	let div0;
	let current;
	document.title = title_value = /*title*/ ctx[1];
	navbar = new _components_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"]({ props: { dark: true }, $$inline: true });

	const block = {
		c: function create() {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(navbar.$$.fragment);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			section = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("section");
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(/*title*/ ctx[1]);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["query_selector_all"])("[data-svelte=\"svelte-1258swp\"]", document.head);
			head_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(navbar.$$.fragment, nodes);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			section = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "SECTION", { class: true });
			var section_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(section);
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(section_nodes, "DIV", { class: true });
			var div2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div2);
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div2_nodes, "DIV", { class: true });
			var div1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div1);
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div1_nodes, "H1", { class: true });
			var h1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h1_nodes, /*title*/ ctx[1]);
			h1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div1_nodes);
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div1_nodes, "DIV", { class: true });
			var div0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div0);
			div0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			section_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h1, "class", "title");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 33, 6, 835);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div0, "class", "section content box");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div0, file, 34, 6, 872);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div1, "class", "container");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div1, file, 32, 4, 805);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div2, "class", "hero-body");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div2, file, 31, 2, 777);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(section, "class", "hero is-primary");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(section, file, 30, 0, 741);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(navbar, target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, section, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section, div2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, h1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h1, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, div0);
			div0.innerHTML = /*readmeHTML*/ ctx[0];
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if ((!current || dirty & /*title*/ 2) && title_value !== (title_value = /*title*/ ctx[1])) {
				document.title = title_value;
			}

			if (!current || dirty & /*title*/ 2) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t2, /*title*/ ctx[1]);
			if (!current || dirty & /*readmeHTML*/ 1) div0.innerHTML = /*readmeHTML*/ ctx[0];;
		},
		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(navbar.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(navbar.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(navbar, detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t1);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(section);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

async function getMarkDownData(markdownModule) {
	const remark = await __webpack_require__(/*! remark */ "../../node_modules/remark/index.js");
	const markdown = await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! remark-parse */ "../../node_modules/remark-parse/index.js", 7));
	const html = await __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! rehype-stringify */ "../../node_modules/rehype-stringify/index.js", 7));
	const remark2rehype = await __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.t.bind(null, /*! remark-rehype */ "../../node_modules/remark-rehype/index.js", 7));
	const format = await __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.t.bind(null, /*! rehype-format */ "../../node_modules/rehype-format/index.js", 7));
	return await remark().use(markdown.default, { gfm: true, commonmark: true }).use(remark2rehype.default).use(format.default).use(html.default).process(markdownModule.default);
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("MarkDownPage", slots, []);
	let { readmeHTML } = $$props;
	let { title } = $$props;
	const writable_props = ["readmeHTML", "title"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<MarkDownPage> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("readmeHTML" in $$props) $$invalidate(0, readmeHTML = $$props.readmeHTML);
		if ("title" in $$props) $$invalidate(1, title = $$props.title);
	};

	$$self.$capture_state = () => ({
		getMarkDownData,
		NavBar: _components_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"],
		readmeHTML,
		title
	});

	$$self.$inject_state = $$props => {
		if ("readmeHTML" in $$props) $$invalidate(0, readmeHTML = $$props.readmeHTML);
		if ("title" in $$props) $$invalidate(1, title = $$props.title);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [readmeHTML, title];
}

class MarkDownPage extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { readmeHTML: 0, title: 1 });

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "MarkDownPage",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*readmeHTML*/ ctx[0] === undefined && !("readmeHTML" in props)) {
			console.warn("<MarkDownPage> was created without expected prop 'readmeHTML'");
		}

		if (/*title*/ ctx[1] === undefined && !("title" in props)) {
			console.warn("<MarkDownPage> was created without expected prop 'title'");
		}
	}

	get readmeHTML() {
		throw new Error("<MarkDownPage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set readmeHTML(value) {
		throw new Error("<MarkDownPage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get title() {
		throw new Error("<MarkDownPage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set title(value) {
		throw new Error("<MarkDownPage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (MarkDownPage);


/***/ }),

/***/ "./src/routes/tos.svelte":
/*!*******************************!*\
  !*** ./src/routes/tos.svelte ***!
  \*******************************/
/*! exports provided: default, preload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preload", function() { return preload; });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _components_MarkDownPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MarkDownPage */ "./src/components/MarkDownPage.svelte");
/* src/routes/tos.svelte generated by Svelte v3.25.0 */



const file = "src/routes/tos.svelte";

function create_fragment(ctx) {
	let markdownpage;
	let current;

	markdownpage = new _components_MarkDownPage__WEBPACK_IMPORTED_MODULE_1__["default"]({
			props: {
				readmeHTML: /*readmeHTML*/ ctx[0],
				title: "Terms of Service"
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(markdownpage.$$.fragment);
		},
		l: function claim(nodes) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(markdownpage.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(markdownpage, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const markdownpage_changes = {};
			if (dirty & /*readmeHTML*/ 1) markdownpage_changes.readmeHTML = /*readmeHTML*/ ctx[0];
			markdownpage.$set(markdownpage_changes);
		},
		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(markdownpage.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(markdownpage.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(markdownpage, detaching);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

async function preload(page, session) {
	return {
		readmeHTML: await Object(_components_MarkDownPage__WEBPACK_IMPORTED_MODULE_1__["getMarkDownData"])(await __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ../../../../docs/website_tos.md */ "../../docs/website_tos.md")))
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("Tos", slots, []);
	let { readmeHTML } = $$props;
	const writable_props = ["readmeHTML"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Tos> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("readmeHTML" in $$props) $$invalidate(0, readmeHTML = $$props.readmeHTML);
	};

	$$self.$capture_state = () => ({
		MarkDownPage: _components_MarkDownPage__WEBPACK_IMPORTED_MODULE_1__["default"],
		getMarkDownData: _components_MarkDownPage__WEBPACK_IMPORTED_MODULE_1__["getMarkDownData"],
		preload,
		readmeHTML
	});

	$$self.$inject_state = $$props => {
		if ("readmeHTML" in $$props) $$invalidate(0, readmeHTML = $$props.readmeHTML);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [readmeHTML];
}

class Tos extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { readmeHTML: 0 });

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "Tos",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*readmeHTML*/ ctx[0] === undefined && !("readmeHTML" in props)) {
			console.warn("<Tos> was created without expected prop 'readmeHTML'");
		}
	}

	get readmeHTML() {
		throw new Error("<Tos>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set readmeHTML(value) {
		throw new Error("<Tos>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Tos);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXJrRG93blBhZ2Uuc3ZlbHRlIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvdG9zLnN2ZWx0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQWtCMkM7Ozs7Ozs7Ozs7Ozs7Ozs7MENBT2pDLEdBQUs7Ozs7Ozs7Ozs7OzsrRUFRVSxHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OytGQUFMLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBRWYsR0FBVTs7OztxRkFWZixHQUFLOzs7OzJIQVFVLEdBQUs7NkVBRWYsR0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBbENELGVBQWUsQ0FBQyxjQUFjO09BQzVDLE1BQU0sU0FBUyxtQkFBTyxDQUFDLGtEQUFRO09BQy9CLFFBQVEsU0FBUyxrSkFBc0I7T0FDdkMsSUFBSSxTQUFTLDBKQUEwQjtPQUN2QyxhQUFhLFNBQVMsb0pBQXVCO09BQzdDLE1BQU0sU0FBUyxvSkFBdUI7Y0FFL0IsTUFBTSxHQUNoQixHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLElBQ25ELEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUN6QixHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFDbEIsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQ2hCLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTzs7Ozs7O09BT3hCLFVBQVU7T0FDVixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCMEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBRXBELE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTzs7RUFFdkMsVUFBVSxRQUFRLGdGQUFlLHdKQUNnQjs7Ozs7OztPQU8xQyxVQUFVIiwiZmlsZSI6ImFlYmU5ZjBmMmYxMDg2NWJmNGJkL3Rvcy50b3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1hcmtEb3duRGF0YShtYXJrZG93bk1vZHVsZSkge1xuICAgIGNvbnN0IHJlbWFyayA9IGF3YWl0IHJlcXVpcmUoXCJyZW1hcmtcIilcbiAgICBjb25zdCBtYXJrZG93biA9IGF3YWl0IGltcG9ydChcInJlbWFyay1wYXJzZVwiKVxuICAgIGNvbnN0IGh0bWwgPSBhd2FpdCBpbXBvcnQoXCJyZWh5cGUtc3RyaW5naWZ5XCIpXG4gICAgY29uc3QgcmVtYXJrMnJlaHlwZSA9IGF3YWl0IGltcG9ydChcInJlbWFyay1yZWh5cGVcIilcbiAgICBjb25zdCBmb3JtYXQgPSBhd2FpdCBpbXBvcnQoXCJyZWh5cGUtZm9ybWF0XCIpXG5cbiAgICByZXR1cm4gYXdhaXQgcmVtYXJrKClcbiAgICAgIC51c2UobWFya2Rvd24uZGVmYXVsdCwgeyBnZm06IHRydWUsIGNvbW1vbm1hcms6IHRydWUgfSlcbiAgICAgIC51c2UocmVtYXJrMnJlaHlwZS5kZWZhdWx0KVxuICAgICAgLnVzZShmb3JtYXQuZGVmYXVsdClcbiAgICAgIC51c2UoaHRtbC5kZWZhdWx0KVxuICAgICAgLnByb2Nlc3MobWFya2Rvd25Nb2R1bGUuZGVmYXVsdClcbiAgfVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBOYXZCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyXCJcblxuICBleHBvcnQgbGV0IHJlYWRtZUhUTUxcbiAgZXhwb3J0IGxldCB0aXRsZVxuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPE5hdkJhciBkYXJrIC8+XG5cbjxzZWN0aW9uIGNsYXNzPVwiaGVybyBpcy1wcmltYXJ5XCI+XG4gIDxkaXYgY2xhc3M9XCJoZXJvLWJvZHlcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPnt0aXRsZX08L2gxPlxuICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24gY29udGVudCBib3hcIj5cbiAgICAgICAge0BodG1sIHJlYWRtZUhUTUx9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG4iLCI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgaW1wb3J0IE1hcmtEb3duUGFnZSwgeyBnZXRNYXJrRG93bkRhdGEgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9NYXJrRG93blBhZ2VcIlxuXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHBhZ2UsIHNlc3Npb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVhZG1lSFRNTDogYXdhaXQgZ2V0TWFya0Rvd25EYXRhKFxuICAgICAgICBhd2FpdCBpbXBvcnQoXCIuLi8uLi8uLi8uLi9kb2NzL3dlYnNpdGVfdG9zLm1kXCIpXG4gICAgICApLFxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBsZXQgcmVhZG1lSFRNTFxuPC9zY3JpcHQ+XG5cbjxNYXJrRG93blBhZ2Uge3JlYWRtZUhUTUx9IHRpdGxlPVwiVGVybXMgb2YgU2VydmljZVwiIC8+XG4iXSwic291cmNlUm9vdCI6IiJ9