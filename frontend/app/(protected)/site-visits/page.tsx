"use client";

import { useState, useEffect } from "react";
import { api } from "@/lib/api";

interface Customer {
    id: number;
    name: string;
}

interface Inquiry {
    id: number;
    requirement: string | null;
    customer: Customer;
}

interface SiteVisit {
    id: number;
    visitDate: string;
    areaSize: string | null;
    indoorOutdoor: string | null;
    waterSource: string | null;
    electricalRequirement: string | null;
    numberOfNozzles: number | null;
    notes: string | null;
    inquiry: Inquiry;
}

export default function SiteVisitsPage() {
    const [siteVisits, setSiteVisits] = useState<SiteVisit[]>([]);
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [inquiryId, setInquiryId] = useState("");
    const [visitDate, setVisitDate] = useState("");
    const [areaSize, setAreaSize] = useState("");
    const [indoorOutdoor, setIndoorOutdoor] = useState("");
    const [waterSource, setWaterSource] = useState("");
    const [electricalRequirement, setElectricalRequirement] = useState("");
    const [numberOfNozzles, setNumberOfNozzles] = useState("");
    const [notes, setNotes] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [siteVisitsData, inquiriesData] = await Promise.all([
                    api.get("/sitevisits"),
                    api.get("/inquiries"),
                ]);
                setSiteVisits(siteVisitsData);
                setInquiries(inquiriesData);
            } catch (error) {
                alert((error as Error).message);
            }
        };

        fetchData();
    }, []);


    const handleSubmit = async () => {
        try {
            await api.post("/sitevisits", {
                inquiryId,
                visitDate,
                areaSize,
                indoorOutdoor,
                waterSource,
                electricalRequirement,
                numberOfNozzles: numberOfNozzles ? Number(numberOfNozzles) : null,
                notes,
            });

            const data = await api.get("/sitevisits");
            setSiteVisits(data);

            setShowForm(false);
            setInquiryId("");
            setVisitDate("");
            setAreaSize("");
            setIndoorOutdoor("");
            setWaterSource("");
            setElectricalRequirement("");
            setNumberOfNozzles("");
            setNotes("");
        } catch (error) {
            alert((error as Error).message);
        }
    };


    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Site Visits</h1>
                <button
                    onClick={() => {
                        setShowForm(!showForm);
                        setInquiryId("");
                        setVisitDate("");
                        setAreaSize("");
                        setIndoorOutdoor("");
                        setWaterSource("");
                        setElectricalRequirement("");
                        setNumberOfNozzles("");
                        setNotes("");
                    }}
                    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold hover:bg-blue-500"
                >
                    {showForm ? "Cancel" : "Add Site Visit"}
                </button>
            </div>

            {showForm && (
                <div className="mt-6 grid grid-cols-1 gap-3 rounded-lg border border-slate-700 p-4 sm:grid-cols-2">
                    <select
                        value={inquiryId}
                        onChange={(e) => setInquiryId(e.target.value)}
                        className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                    >
                        <option value="">Select Inquiry</option>
                        {inquiries.map((inquiry) => (
                            <option key={inquiry.id} value={inquiry.id}>
                                {inquiry.customer.name} — {inquiry.requirement}
                            </option>
                        ))}
                    </select>

                    <input
                        type="date"
                        value={visitDate}
                        onChange={(e) => setVisitDate(e.target.value)}
                        className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                    />
                    <input
                        placeholder="Area Size"
                        value={areaSize}
                        onChange={(e) => setAreaSize(e.target.value)}
                        className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                    />
                    <input
                        placeholder="Indoor / Outdoor"
                        value={indoorOutdoor}
                        onChange={(e) => setIndoorOutdoor(e.target.value)}
                        className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                    />
                    <input
                        placeholder="Water Source"
                        value={waterSource}
                        onChange={(e) => setWaterSource(e.target.value)}
                        className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                    />
                    <input
                        placeholder="Electrical Requirement"
                        value={electricalRequirement}
                        onChange={(e) => setElectricalRequirement(e.target.value)}
                        className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                    />
                    <input
                        type="number"
                        placeholder="Number of Nozzles"
                        value={numberOfNozzles}
                        onChange={(e) => setNumberOfNozzles(e.target.value)}
                        className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                    />
                    <input
                        placeholder="Notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                    />

                    <button
                        onClick={handleSubmit}
                        className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold hover:bg-green-500 sm:col-span-2"
                    >
                        Save
                    </button>
                </div>
            )}

            <div className="mt-6 rounded-lg border border-slate-700 p-4">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="border-b border-slate-700 text-slate-400">
                            <th className="px-3 py-2">Customer</th>
                            <th className="px-3 py-2">Visit Date</th>
                            <th className="px-3 py-2">Area Size</th>
                            <th className="px-3 py-2">Nozzles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {siteVisits.map((visit) => (
                            <tr key={visit.id} className="border-b border-slate-800">
                                <td className="px-3 py-2">{visit.inquiry.customer.name}</td>
                                <td className="px-3 py-2">
                                    {new Date(visit.visitDate).toLocaleDateString()}
                                </td>
                                <td className="px-3 py-2">{visit.areaSize}</td>
                                <td className="px-3 py-2">{visit.numberOfNozzles}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}