var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 *
 */
var GridItem = (function (_super) {
    __extends(GridItem, _super);
    function GridItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "GameGridItem";
        _this.touchEnabled = false; //不能点击
        _this.anchorOffsetX = _this.width >> 1;
        _this.anchorOffsetY = _this.height >> 1;
        return _this;
    }
    GridItem.prototype.setData = function (data) {
        this.data = data;
        this.grid.fillColor = data.bg;
        if (data.num > 0) {
            this.numTxt.visible = true;
            this.numTxt.text = data.num + "";
            this.numTxt.size = data.size;
            this.numTxt.textColor = data.color;
        }
        else {
            this.numTxt.visible = false;
        }
    };
    Object.defineProperty(GridItem.prototype, "num", {
        get: function () {
            return this.data.num;
        },
        enumerable: true,
        configurable: true
    });
    return GridItem;
}(eui.Component));
__reflect(GridItem.prototype, "GridItem");
//# sourceMappingURL=GridItem.js.map