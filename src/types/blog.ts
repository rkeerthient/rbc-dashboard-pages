export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
}

export default interface Ce_blog {
	landingPageUrl: string,
	description?: string,
	name: string,
	c_blogShortDescription?: string,
	c_body?: any,
	c_category: string,
	c_datePublished: string,
	photoGallery: ComplexImage[],
	id: string,
}
