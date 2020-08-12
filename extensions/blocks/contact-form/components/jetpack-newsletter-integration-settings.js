/**
 * External dependencies
 */
import { BaseControl, Button, ExternalLink, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useCallback, useMemo } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';

const useInsertConsentBlock = () => {
	const selectedBlock = useSelect( select => select( 'core/block-editor' ).getSelectedBlock(), [] );
	const { insertBlock } = useDispatch( 'core/block-editor' );

	const insertConsentBlock = useCallback( async () => {
		const buttonBlockIndex = ( selectedBlock.innerBlocks ?? [] ).findIndex(
			( { name } ) => name === 'jetpack/button'
		);
		if ( buttonBlockIndex === -1 ) {
			return;
		}

		const newConsentBlock = await createBlock( 'jetpack/field-consent' );
		await insertBlock( newConsentBlock, buttonBlockIndex, selectedBlock.clientId, false );
	}, [ insertBlock, selectedBlock.clientId, selectedBlock.innerBlocks ] );

	return { insertConsentBlock };
};

const NoConsentBlockSettings = () => {
	const { insertConsentBlock } = useInsertConsentBlock();

	return (
		<>
			<p>
				{ __(
					'You’re already collecting email contacts. Why not make sure you have permission to email them too?',
					'jetpack'
				) }
			</p>
			<Button isSecondary onClick={ insertConsentBlock } style={ { marginBottom: '1em' } }>
				{ __( 'Add email permission request', 'jetpack' ) }
			</Button>
		</>
	);
};

const NewsletterIntegrationSettings = () => {
	const selectedBlock = useSelect( select => select( 'core/block-editor' ).getSelectedBlock(), [] );

	const shouldHaveConsentBlock = useMemo( () => {
		const hasEmailBlock = selectedBlock.innerBlocks.some(
			( { name } ) => name === 'jetpack/field-email'
		);
		const hasConsentBlock = selectedBlock.innerBlocks.some(
			( { name } ) => name === 'jetpack/field-consent'
		);
		if ( hasEmailBlock ) {
			return ! hasConsentBlock;
		}
		return false;
	}, [ selectedBlock.innerBlocks ] );

	return (
		<PanelBody title={ __( 'Newsletter Integration', 'jetpack' ) } initialOpen={ false }>
			<BaseControl>
				{ shouldHaveConsentBlock && <NoConsentBlockSettings /> }
				<p>
					<em>
						{ __(
							'To start sending email campaigns, install the Creative Mail plugin for WordPress. ',
							'jetpack'
						) }
						<ExternalLink href="https://wordpress.org/plugins/creative-mail-by-constant-contact/">
							{ __( 'Get the plugin now', 'jetpack' ) }
						</ExternalLink>
					</em>
				</p>
			</BaseControl>
		</PanelBody>
	);
};

export default NewsletterIntegrationSettings;
