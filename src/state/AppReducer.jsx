/**setting up the price-items reducer */

export const DAILY_CHART = "DAILY_CHART";
export const WEEKLY_CHART = "WEEKLY_CHART";
export const MONTHLY_CHART = "MONTHLY_CHART";
export const YEARLY_CHART = "YEARLY_CHART";
export const ALL_CHART = "ALL_CHART";

export const AppReducer = (state, action) => {
	switch (action.type) {
		case DAILY_CHART:
			//eslint-disable-next-line no-eval
			return [
				{ onDaily: true },
				{ onWeekly: false },
				{ onMonthly: false },
				{ onYearly: false },
				{ onAll: false },
			];
		case WEEKLY_CHART:
			return [
				{ onDaily: false },
				{ onWeekly: true },
				{ onMonthly: false },
				{ onYearly: false },
				{ onAll: false },
			];
		case MONTHLY_CHART:
			return [
				{ onDaily: false },
				{ onWeekly: false },
				{ onMonthly: true },
				{ onYearly: false },
				{ onAll: false },
			];
		case YEARLY_CHART:
			return [
				{ onDaily: false },
				{ onWeekly: false },
				{ onMonthly: false },
				{ onYearly: true },
				{ onAll: false },
			];
		case ALL_CHART:
			return [
				{ onDaily: false },
				{ onWeekly: false },
				{ onMonthly: false },
				{ onYearly: false },
				{ onAll: true },
			];
		default:
			return state;
	}
};
