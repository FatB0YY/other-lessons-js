'use strict'
class GridView {
    /**
     * properties:
     *  @param [array] _tableClass - css классы оформления
     *  @param [array] data - входные данные
     *  @param [array] _attribute - управляем что выводим
     * и как из входных данных data
     *  @param [array] _element - куда выводить таблтицу
     *  @param [array] _header - заголовок таблицы
     *  @param [array] _headerClass - css классыы заголовка
     */

    constructor() {
        this._header = ''
        this._headerClass = []
        this._tableClass = []
        this._element = 'body'
        this._attribute = []
    }

    /**
     *  set header
     */
    set header(header) {
        if (typeof header === 'string' && header.trim() != '') {
            this._header = header.trim()
            return true
        }
        return false
    }

    /**
     *  set headerClass
     */
    set headerClass(headerClass) {
        if (typeof headerClass === 'object') {
            this._headerClass = headerClass
            return true
        }
        return false
    }

    /**
     *  set selement
     */
    set element(element) {
        const el = document.querySelector(element)
        if (el) {
            this._element = el
            return true
        }
        return false
    }

    /**
     *  Method for show GridViewTable
     */
    render() {}
}