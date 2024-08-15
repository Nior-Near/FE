function buildFormData(formData: FormData, data: any, parentKey: any) {
  if (
    data &&
    typeof data === "object" &&
    !(data instanceof Date) &&
    !(data instanceof File) &&
    !(data instanceof Blob)
  ) {
    Object.keys(data).forEach((key) => {
      buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
    });
  } else {
    const value = data == null ? "" : data;

    formData.append(parentKey, value);
  }
}

export function jsonToFormData(data: any) {
  const formData = new FormData();

  buildFormData(formData, data, undefined);

  return formData;
}
