

// interface Props extends IProduct {
// 	setProductInfo: React.Dispatch<React.SetStateAction<ICreateProduct>>;
// }

// export function ProductDescriptionForm({ description, setProductInfo }: Props) {
// 	return (
// 		<section>
// 			<TextArea
// 				id='description'
// 				name='description'
// 				label='DESCRIPTION'
// 				placeholder='Enter description'
// 				value={description}
// 				rows={10}
// 				onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
// 					setProductInfo((val) => {
// 						return {
// 							...val,
// 							description: e.target.value,
// 						};
// 					});
// 				}}
// 			/>
// 		</section>
// 	);
// }
