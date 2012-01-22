steal('funcunit/qunit','./super',function(){

module("can/construct/super");

test("prototype super", function(){
	var A = Can.Construct({
		init : function(arg){
			this.arg = arg+ 1;
		},
		add : function(num){
			return this.arg + num
		}
	})
	
	var B = A({
		init : function(arg){
			this._super(arg +2)
		},
		add : function(arg){
			return this._super(arg+1)
		}
	})
	
	var b = new B(1);
	equal(b.arg, 4)
	equal(b.add(2), 7)
});

test("static super", function(){
	var First = Can.Construct({
		raise: function(num){
			return num;
		}
	},{});
	
	var Second = First({
		raise: function(num){
			return this._super(num)*num;
		}
	},{});
	
	equal(Second.raise(2), 4)
	
})

/* Not sure I want to fix this yet.
test("Super in derived when parent doesn't have init", function(){
	Can.Construct("Parent",{
	});
	
	Parent("Derived",{
		init : function(){
			this._super();
		}
	});

	try {
		new Derived();
		ok(true, "Can call super in init safely")
	} catch (e) {
		ok(false, "Failed to call super in init with error: " + e)
	}
})*/

});