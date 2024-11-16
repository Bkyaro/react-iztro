import React, { useEffect, useState } from "react";
import { DictionaryItem } from "./index";
import classNames from "classnames";
import "./ExplainationModal.css";

interface Props {
	item?: DictionaryItem;
	onClose: () => void;
}

export const ExplanationModal: React.FC<Props> = ({ item, onClose }) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (item) {
			setShow(true);
		} else {
			setShow(false);
		}
	}, [item]);

	if (!item) return null;

	return (
		<div
			className={classNames("iztro-modal-overlay", { show })}
			onClick={onClose}
		>
			<div
				className={classNames("iztro-modal", { show })}
				onClick={(e) => e.stopPropagation()}
			>
				<div className={classNames("iztro-modal-header")}>
					<div>{item.keyword}</div>
					<span
						className={classNames("iztro-modal-close")}
						onClick={onClose}
					>
						×
					</span>
				</div>
				<div className={classNames("iztro-modal-content")}>
					<div className={classNames("iztro-modal-category")}>
						{item.category}
					</div>
					<div className={classNames("iztro-modal-explanation")}>
						{item.explanation}
					</div>
					{item.reference && (
						<div className={classNames("iztro-modal-reference")}>
							参考：{item.reference}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
