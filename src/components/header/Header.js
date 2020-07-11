import {ExcelComponent} from "../../core/ExcelComponent";

export class Header extends ExcelComponent {
    static className = 'excel__header'

    toHtml() {
        return '<h1>Header</h1>'
    }
}