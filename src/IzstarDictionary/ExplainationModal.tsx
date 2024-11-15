import React from "react";
import { DictionaryItem } from "./index";

interface Props {
	item?: DictionaryItem;
	onClose: () => void;
}

export const ExplanationModal: React.FC<Props> = ({ item, onClose }) => {
	if (!item) return null;

	return (
		<div className="iztro-modal-overlay">
			<div className="iztro-modal">
				<div className="iztro-modal-header">
					<h3>{item.keyword}</h3>
					<span className="iztro-modal-close" onClick={onClose}>
						×
					</span>
				</div>
				<div className="iztro-modal-content">
					<div className="iztro-modal-category">{item.category}</div>
					<div className="iztro-modal-explanation">
						{item.explanation}
					</div>
					{item.reference && (
						<div className="iztro-modal-reference">
							参考：{item.reference}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
