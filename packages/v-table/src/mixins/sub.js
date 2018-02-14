import ColumnsMixin from './column';

export default {
  inject: ['rootVM'],
  mixins: [ColumnsMixin],
  props: {
    fixed: String,
  },
  computed: {
    rootScopedSlots() {
      return this.rootVM.$scopedSlots;
    },
    rowKey() {
      return this.rootVM.rowKey;
    },
    scrollBarW() {
      return this.rootVM.scrollBarW;
    },
    prefixCls() {
      return this.rootVM.prefixCls;
    },
    useFixedHeader() {
      return this.rootVM.useFixedHeader;
    },
    records() {
      return this.rootVM.value;
    },
    scroll() {
      return this.rootVM.scroll;
    },
    hideHeader() {
      return this.rootVM.hideHeader;
    },
    onHeaderRow() {
      return this.rootVM.onHeaderRow;
    },
    onRow() {
      return this.rootVM.onRow;
    },
    isFixedHeader() {
      const { scroll, useFixedHeader } = this;
      return useFixedHeader || scroll.y;
    },
    bodyStyle() {
      return this.rootVM.bodyStyle;
    },
    elementRefs() {
      return this.rootVM.elementRefs;
    },
    fixedTableHeight() {
      return this.rootVM.fixedTableHeight;
    },
    currentHoverRow() {
      return this.rootVM.currentHoverRow;
    },
    prevScrollLeft() {
      return this.rootVM.prevScrollLeft;
    },
    prevScrollTop() {
      return this.rootVM.prevScrollTop;
    },
    childColName() {
      return this.rootVM.childColName;
    },
    indentSize() {
      return this.rootVM.indentSize;
    },
    expandIconAsCell() {
      return this.rootVM.expandIconAsCell;
    },
    expandRowByClick() {
      return this.rootVM.expandRowByClick;
    },
    expandIconColIndex() {
      return this.rootVM.expandIconColIndex;
    },
    expandedRowRender() {
      return this.rootVM.expandedRowRender;
    },
    expanderRowKeys() {
      return this.rootVM.innerExpanderRowKeys;
    },
    expandedRowClassName() {
      return this.rootVM.expandedRowClassName;
    },
  },
  methods: {
    saveRef(refName, refElement) {
      this.rootVM.saveRef(refName, refElement);
    },
  },
};
