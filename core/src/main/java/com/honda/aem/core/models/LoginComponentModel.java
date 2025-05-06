package com.honda.aem.core.models;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
    adaptables = Resource.class,
    adapters = {LoginComponentModel.class, ComponentExporter.class},
    resourceType = LoginComponentModel.RESOURCE_TYPE,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(
    name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
    extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class LoginComponentModel implements ComponentExporter {

    protected static final String RESOURCE_TYPE = "honda/components/login";

    @ValueMapValue
    private String headingText;

    @ValueMapValue
    private String sideImage;

    public String getHeadingText() {
        return headingText;
    }

    public String getSideImage() {
        return sideImage;
    }

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}
