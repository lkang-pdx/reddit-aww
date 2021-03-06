import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { ViewModel } from './main-view-model';

var vm = new ViewModel();

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
    page.bindingContext = vm;
}

export function showDetails(args) {
    var selectedItem = vm.posts.getItem(args.index);
}
