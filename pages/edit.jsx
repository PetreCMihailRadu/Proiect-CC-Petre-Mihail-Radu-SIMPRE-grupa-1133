import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { defaultRecordValues } from "@/utils/constants";
import { getRecord, updateRecord } from "@/utils/recordsFunctions";
import Spinner from "@/components/Spinner";
import RecordForm from "@/components/RecordForm";

const Edit = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [entry, setEntry] = useState(defaultRecordValues);

    const handleGetRecord = async (id) => {
        try {
            const response = await getRecord(id);

            if (response) {
                setEntry(response);
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    const onSubmit = async (data) => {
        try {
            const response = await updateRecord(data);

            if (response) {
                router.push("/");
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
        const id = searchParams.get("id");

        if (!id) {
            router.push("/");
        }

        handleGetRecord(id);
    }, []);

    if (isLoading) return <Spinner />;

    return <RecordForm entry={entry} onSubmit={onSubmit} />;
};

export default Edit;