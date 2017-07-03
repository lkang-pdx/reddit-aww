"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array");
var http = require("http");
var ViewModel = (function (_super) {
    __extends(ViewModel, _super);
    function ViewModel() {
        var _this = _super.call(this) || this;
        _this.posts = new observable_array_1.ObservableArray([]);
        _this.getPosts();
        return _this;
    }
    ViewModel.prototype.getPosts = function () {
        var _this = this;
        http.getJSON("https://www.reddit.com/r/aww.json")
            .then(function (response) {
            var children = response.data.children;
            children.forEach(function (item) {
                _this.posts.push({
                    title: item.data.title,
                    thumbnail: item.data.thumbnail,
                    user: item.data.author,
                    votes: item.data.ups,
                    url: item.data.url
                });
            });
        });
    };
    return ViewModel;
}(observable_1.Observable));
exports.ViewModel = ViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBQzNDLDBEQUFzRDtBQUN0RCwyQkFBNkI7QUFFN0I7SUFBK0IsNkJBQVU7SUFFdkM7UUFBQSxZQUNFLGlCQUFPLFNBS1I7UUFIQyxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksa0NBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVyQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7O0lBQ2xCLENBQUM7SUFFTyw0QkFBUSxHQUFoQjtRQUFBLGlCQWVDO1FBZEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQzthQUM1QyxJQUFJLENBQUMsVUFBQyxRQUFhO1lBQ2hCLElBQUksUUFBUSxHQUFlLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBRWxELFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO2dCQUNqQixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFDWixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO29CQUN0QixTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO29CQUM5QixJQUFJLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO29CQUNyQixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO29CQUNwQixHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO2lCQUNyQixDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFBO0lBQ1IsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQTFCRCxDQUErQix1QkFBVSxHQTBCeEM7QUExQlksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQge09ic2VydmFibGVBcnJheX0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcbmltcG9ydCAqIGFzIGh0dHAgZnJvbSBcImh0dHBcIjtcblxuZXhwb3J0IGNsYXNzIFZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICBwb3N0czogT2JzZXJ2YWJsZUFycmF5PGFueT5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucG9zdHMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KFtdKTtcbiAgICBcbiAgICB0aGlzLmdldFBvc3RzKCk7XG4gIH1cblxuICBwcml2YXRlIGdldFBvc3RzKCkge1xuICAgIGh0dHAuZ2V0SlNPTihcImh0dHBzOi8vd3d3LnJlZGRpdC5jb20vci9hd3cuanNvblwiKVxuICAgICAgICAudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gPEFycmF5PGFueT4+cmVzcG9uc2UuZGF0YS5jaGlsZHJlbjtcblxuICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5kYXRhLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWw6IGl0ZW0uZGF0YS50aHVtYm5haWwsXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6aXRlbS5kYXRhLmF1dGhvcixcbiAgICAgICAgICAgICAgICAgICAgdm90ZXM6IGl0ZW0uZGF0YS51cHMsXG4gICAgICAgICAgICAgICAgICAgIHVybDogaXRlbS5kYXRhLnVybFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gIH1cbn1cbiJdfQ==