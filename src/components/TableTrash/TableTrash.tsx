import React, { useEffect, useState } from "react"
import TableItem from "../TableItem/TableItem"
import { IYandexDiskFile } from "../../types/Files"
import { paginate } from "../../helper/filterItems"
import { observer } from "mobx-react-lite"
import { appStore } from "../../store/store"

const TableTrash = ({ arrayItems }: any) => {
    useEffect(() => {
        const handleResize = () => {
            appStore.setLimitItems(
                Math.floor((window.innerHeight - 320) / (window.innerWidth < 620 ? 70 : 65)),
            )
        }
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <>
            <section className="table-wrapper">
                {appStore.arrayItems.length === 0 ? (
                    <div>
                        <h1 className="table-no-items">В корзине нету файлов</h1>
                    </div>
                ) : (
                    <table className="documents-list-wrapper rosatom-fontFamily-regular">
                        <thead>
                        <tr>
                            <th className="ht-2">Название</th>
                            <th className="th-3">Категория</th>
                            <th className="th-4">Дата удаления</th>
                            <th className="th-5">Дата создания</th>
                            <th className="th-6"></th>
                            <th className="th-7"></th>
                        </tr>
                        </thead>
                        <tbody>
                        {paginate(arrayItems, appStore.currentPage, appStore.limitItems).map(
                            (file: IYandexDiskFile, index: number) => (
                                <TableItem
                                    key={index}
                                    name={file.name}
                                    path={file.path}
                                    modified={file.modified}
                                    deleted={file.deleted}
                                    created={file.created}
                                />
                            ),
                        )}
                        </tbody>
                    </table>
                )}
            </section>
        </>
    )
}

export default observer(TableTrash)