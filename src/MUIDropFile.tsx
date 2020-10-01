import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box/Box';
import clsx from 'clsx';
import { FormikValues } from 'formik';
import _ from 'lodash';
import React from 'react';
import { useDropzone } from 'react-dropzone'
import { attachField, IFieldProps } from 'react-forms'
import { MUIFileInput } from './MUIFileInput'
import { IMUIFileInputProps } from 'react-forms/dist/lib/ml-form-builder/lib/MUIFileInput';

export interface IMUIDropFileProps {
	onDropFile: (files: any) => void
	readAs?: keyof Pick<FileReader, 'readAsBinaryString' | 'readAsDataURL'>
	multiple?: boolean
	activeClass?: string
	label?: string | JSX.Element
	accept?: string
	/* 
	Active class contain rules that will take effect on dragging a file over the area.Eg.: backgroundColor, textColor, etc.,
	defaultClass is for class with rules that will not be affected by dragging a file over the area. Eg.: height, width, border, borderRadius, etc.
	 */
	defaultClass?: string
}
export interface IProps extends IFieldProps {
	fieldProps: IMUIDropFileProps
}

export const MUIDropFile: React.FC<IProps> = (props: IProps) => {
	const classes = useStyles()
	const { fieldProps, formikProps = {} as FormikValues } = props
	const {
		accept,
		onDropFile,
		multiple = true,
		defaultClass = classes.defaultClass,
		activeClass = classes.activeClass,
		label = "Drag and drop a file/files here",
		readAs
	} = fieldProps
	const WrapWith = (input: JSX.Element) => (
		<Box {...getRootProps()} className={clsx(defaultClass, isDragActive ?activeClass: "")}
			display="flex" alignItems="center" justifyContent="center" >
			<Typography>{label}</Typography>
			{input}
		</Box>
	)

	const onDrop = React.useCallback(onDropFile, [])
	const { isDragActive, getRootProps } = useDropzone({ onDrop })
	return (
		// @ts-ignore
		<MUIFileInput fieldProps={{ ...fieldProps, multiple, WrapWith, accept, readAs } as IMUIFileInputProps} formikProps={formikProps} />
	)
}

const useStyles = makeStyles<Theme>(() => createStyles({
	defaultClass: { border: '1px dashed grey', borderRadius: 8, width: 900, height: 300, background: 'lightgrey' },
	activeClass: { backgroundColor: 'transparent' }
}))
//@ts-ignore
attachField('dropFile', <MUIDropFile />)
