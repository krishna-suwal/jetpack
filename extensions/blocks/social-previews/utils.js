/**
 * External dependencies
 */
import { applyFilters } from '@wordpress/hooks';
import { has } from 'lodash';

/**
 * Gets the URL of the media. Tries loading a smaller size available to be used as a thumbnail and falls back to the full size.
 *
 * Source: https://github.com/WordPress/gutenberg/blob/HEAD/packages/editor/src/components/post-featured-image/index.js
 *
 * @param {object} media
 * @param {number} currentPostId
 * @returns {?string} URL address
 */
export function getMediaSourceUrl( media, currentPostId ) {
	if ( ! media ) {
		return null;
	}

	const mediaSize = applyFilters(
		'editor.PostFeaturedImage.imageSize',
		'post-thumbnail',
		media.id,
		currentPostId
	);
	if ( has( media, [ 'media_details', 'sizes', mediaSize ] ) ) {
		// use mediaSize when available
		return media.media_details.sizes[ mediaSize ].source_url;
	}

	// get fallbackMediaSize if mediaSize is not available
	const fallbackMediaSize = applyFilters(
		'editor.PostFeaturedImage.imageSize',
		'thumbnail',
		media.id,
		currentPostId
	);
	if ( has( media, [ 'media_details', 'sizes', fallbackMediaSize ] ) ) {
		// use fallbackMediaSize when mediaSize is not available
		return media.media_details.sizes[ fallbackMediaSize ].source_url;
	}

	// use full image size when mediaFallbackSize and mediaSize are not available
	return media.source_url;
}
