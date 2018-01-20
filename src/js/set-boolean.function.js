export default function setBoolean(value) {
    if (!value) {
        return false;
    }

    if (typeof value === 'string') {
        value = value.trim();

        if (!isNaN(value)) {
            return Boolean(parseFloat(value));
        }

        switch (value) {
        case 'true':
        case 'yes':
            value = true;
            break;
        case 'false':
        case 'no':
            value = false;
            break;
        }
    }

    return Boolean(value);
}