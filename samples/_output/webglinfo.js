// Generated by Haxe 3.4.2
(function () { "use strict";
var Reflect = function() { };
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
var webglinfo_Main = function() {
	this.contextName = "";
	var checkSupport = this.detectWebGL({ stencil : true});
	this.log("WebGL Support",(checkSupport == null ? "null" : "" + checkSupport) + " " + this.contextName);
	if(checkSupport) {
		this.displayWebGLProperties();
	}
	this.log("---------------------------------------------------");
	checkSupport = this.detectWebGL({ stencil : true, failIfMajorPerformanceCaveat : true});
	this.log("WebGL Support (performance caveat set to true)",(checkSupport == null ? "null" : "" + checkSupport) + " " + this.contextName);
};
webglinfo_Main.main = function() {
	new webglinfo_Main();
};
webglinfo_Main.prototype = {
	detectWebGL: function(props) {
		var ctx = Reflect.field(window,"WebGLRenderingContext");
		if(ctx != null) {
			var canvas = window.document.createElement("canvas");
			var supportedContextNames = ["webgl","experimental-webgl"];
			var gl;
			var _g = 0;
			while(_g < supportedContextNames.length) {
				var context = supportedContextNames[_g];
				++_g;
				try {
					if(props != null) {
						gl = canvas.getContext(context,props);
					} else {
						gl = canvas.getContext(context);
					}
					if(gl != null && gl.getParameter != null) {
						this.contextName = context;
						return gl.getContextAttributes().stencil;
					}
				} catch( e ) {
				}
			}
			return false;
		}
		return false;
	}
	,displayWebGLProperties: function() {
		if(this.contextName != "") {
			var gl = window.document.createElement("canvas").getContext(this.contextName);
			this.log("WebGL Version",gl.getParameter(gl.VERSION));
			this.log("Shading Language Version",gl.getParameter(gl.SHADING_LANGUAGE_VERSION));
			this.log("WebGL Vendor",gl.getParameter(gl.VENDOR));
			this.log("WebGL Renderer",gl.getParameter(gl.RENDERER));
			var dbgRenderInfo = gl.getExtension("WEBGL_debug_renderer_info");
			if(dbgRenderInfo != null) {
				this.log("Renderer",gl.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL));
				this.log("Vendor",gl.getParameter(dbgRenderInfo.UNMASKED_VENDOR_WEBGL));
			}
			this.log("Antialias Support",gl.getContextAttributes().antialias);
			this.log("Drawing Buffer",gl.drawingBufferWidth + "x" + gl.drawingBufferHeight);
			this.log("Max Render Buffer Size",gl.getParameter(gl.MAX_RENDERBUFFER_SIZE));
			this.log("Max Texture Size (recommended 2048)",gl.getParameter(gl.MAX_TEXTURE_SIZE));
			this.log("Max Texture Image Units",gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS));
			this.log("Max Vertex Texture Image Units (recommended 4)",gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS));
			this.log("Max Combined Texture Image Units",gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
			this.log("Max Fragmented Uniform Vectors",gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS));
			this.log("Max Vertex Attributes (recommended 16)",gl.getParameter(gl.MAX_VERTEX_ATTRIBS));
			this.log("Max Varying Vectors (recommended 8)",gl.getParameter(gl.MAX_VARYING_VECTORS));
			this.log("RGBA Bits","[" + gl.getParameter(gl.RED_BITS) + ", " + gl.getParameter(gl.GREEN_BITS) + ", " + gl.getParameter(gl.BLUE_BITS) + ", " + gl.getParameter(gl.ALPHA_BITS) + "]");
			this.log("Depth & Stencil Bits","[" + gl.getParameter(gl.DEPTH_BITS) + ", " + gl.getParameter(gl.STENCIL_BITS) + "]");
			if(gl.getExtension("WEBGL_draw_buffers") != null) {
				this.log("Max Color Buffers",gl.getParameter(gl.getExtension("WEBGL_draw_buffers").MAX_DRAW_BUFFERS_WEBGL));
			}
			if(gl.getExtension("EXT_texture_filter_anisotropic") != null) {
				this.log("Max Anisotropy",gl.getParameter(gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT));
			} else if(gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") != null) {
				this.log("Max Anisotropy",gl.getParameter(gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT));
			} else if(gl.getExtension("MOZ_EXT_texture_filter_anisotropic") != null) {
				this.log("Max Anisotropy",gl.getParameter(gl.getExtension("MOZ_EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT));
			}
			this.log("---------------------------------------------------");
			this.log("Supported Extensions","<br />" + gl.getSupportedExtensions().join("<br />"));
		}
	}
	,log: function(msg,val) {
		if(val == null) {
			val = "";
		}
		window.document.writeln(msg + ": <b>" + val + "</b><br/>");
	}
};
webglinfo_Main.main();
})();

//# sourceMappingURL=webglinfo.js.map