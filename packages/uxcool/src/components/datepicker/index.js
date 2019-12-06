import DatePicker from './datepicker.vue';
import Range from './rangeDatePicker.vue';
import Month from './monthPicker';
import Slider from './sliderDatePicker';
import Year from './yearPicker';
import RangeMonth from './rangeMonthPicker';
import Week from './weekPicker';
import Multi from './multiDatePicker';

DatePicker.Range = Range;
DatePicker.Slider = Slider;
DatePicker.Month = Month;
DatePicker.Year = Year;
DatePicker.RangeMonth = RangeMonth;
DatePicker.Week = Week;
DatePicker.Multi = Multi;

export {
  DatePicker as UxDatePicker,
  Month as UxMonthPicker,
  Year as UxYearPicker,
  Slider as UxSliderDatePicker,
  Range as UxRangeDatePicker,
  RangeMonth as UxRangeMonthPicker,
  Week as UxWeekPicker,
  Multi as UxMutliDatePicker,
};
export default DatePicker;
