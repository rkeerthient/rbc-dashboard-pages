export enum C_hasAboutAdvisorShortDescription {
	Y = "Y",
	N = "N",
}

export interface Tasks {
	name?: string,
	description?: string,
	field?: string,
	question?: string,
	newSectionHeading?: string,
	slider?: boolean,
	sliderLowText?: string,
	sliderHighText?: string,
	readonly?: boolean,
}

export interface C_taskGroups {
	name?: string,
	description?: string,
	tasks?: Tasks[],
	shouldScore?: boolean,
}

export default interface Ce_dashboardEntity {
	richTextDescriptionV2?: any,
	slug?: string,
	name: string,
	c_alternateDashboardHeroDescription?: any,
	c_currentBRStaging?: string,
	c_dashboardAlertBanner?: string,
	c_dashboardAlertBannerNoProducerID?: string,
	c_dashboardCompletionDescription?: string,
	c_dashboardCompletionETLErrorThreshold?: string,
	c_dashboardCompletionETLLastRuntime?: string,
	c_dashboardCompletionLabel?: string,
	c_dashboardHeroDescription?: string,
	c_dashboardMatchingSection1Description?: string,
	c_dashboardPagesURLText?: string,
	c_fieldsExemptFromAnnualReview?: string[],
	c_fieldsThatScore?: string[],
	c_hasAboutAdvisorShortDescription?: C_hasAboutAdvisorShortDescription,
	c_progressBarDescription?: string,
	c_taskGroups?: C_taskGroups[],
	id: string,
}
